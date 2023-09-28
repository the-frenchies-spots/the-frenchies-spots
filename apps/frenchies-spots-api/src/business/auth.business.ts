import { hash, compare } from 'bcryptjs';
import { Injectable } from '@nestjs/common';

import { SignUpInput } from '../dto/signup-input';
import { SignInInput } from '../dto/signin-input';
import { UserEntity } from '../entity/user.entity';
import { SignResponse } from '../dto/sign-response';
import ErrorService from '../service/error.service';
import { codeErrors } from '../enum/code-errors.enum';
import { LogoutResponse } from '../dto/logout-response';
import { TokenService } from '../service/token.service';
import { AuthRepository } from '../repository/auth.repository';

const { USER_ALREADY_EXISTS, ACCESS_DENIED, AUTHENTICATION_DENIED } =
  codeErrors;

@Injectable()
export class AuthBusiness {
  constructor(
    private authRepository: AuthRepository,
    private tokenService: TokenService,
  ) {}

  async getById(userId: string): Promise<UserEntity> {
    return this.authRepository.getOneById(userId);
  }

  async signup(signUpInput: SignUpInput): Promise<SignResponse> {
    const { pseudo, password, email, photoUrl, avatarUrl, isLocated, slogan } =
      signUpInput;
    const hashedPassword = await hash(password, 10);

    const userAlreadyExist = await this.authRepository.getOneByEmail(email);
    if (userAlreadyExist) {
      throw new ErrorService(USER_ALREADY_EXISTS);
    }

    const user = await this.authRepository.create(
      pseudo,
      hashedPassword,
      email,
      photoUrl,
      avatarUrl,
      isLocated,
      slogan,
    );

    return this.refreshAuthAccess(user);
  }

  async signin(signInInput: SignInInput): Promise<SignResponse> {
    const { email, password } = signInInput;
    const user = await this.authRepository.getOneByEmail(email);

    if (!user) {
      throw new ErrorService(AUTHENTICATION_DENIED);
    }

    const doPasswordsMatch = await compare(password, user.hashedPassword);

    if (!doPasswordsMatch) {
      throw new ErrorService(AUTHENTICATION_DENIED);
    }

    return this.refreshAuthAccess(user);
  }

  async getNewTokens(userId: string, rt: string): Promise<SignResponse> {
    const user = await this.authRepository.getOneById(userId);
    if (!user) {
      throw new ErrorService(ACCESS_DENIED);
    }
    const doRefreshTokensMatch = await compare(rt, user.hashedRefreshToken);

    if (!doRefreshTokensMatch) {
      throw new ErrorService(ACCESS_DENIED);
    }

    return this.refreshAuthAccess(user);
  }

  async refreshAuthAccess(user: UserEntity): Promise<SignResponse> {
    const { accessToken, refreshToken } = await this.tokenService.create(
      user.id,
      user.email,
      user.profile.id,
      user.role,
    );

    const hashedRefreshToken = await hash(refreshToken, 10);
    await this.authRepository.updateRefreshToken(user.id, hashedRefreshToken);

    return { accessToken, refreshToken, user };
  }

  async logout(userId: string): Promise<LogoutResponse> {
    const loggedOut = await this.authRepository.disconnect(userId);
    return { loggedOut };
  }

  async delete(userId: string): Promise<boolean> {
    const res = await this.authRepository.delete(userId);
    return res;
  }
}
