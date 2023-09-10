import { GqlExecutionContext } from '@nestjs/graphql';
import { ExecutionContext, createParamDecorator } from '@nestjs/common';

import { JwtPayload } from '../types';
import ErrorService from 'src/service/error.service';
import { codeErrors } from 'src/enum/code-errors.enum';

const { ACCESS_DENIED } = codeErrors;

export const Admin = createParamDecorator(
  (_: undefined, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;
    const user = req.user as JwtPayload;
    if (user.role === 'SIMPLE_USER') {
      throw new ErrorService(ACCESS_DENIED);
    }
    return user;
  },
);
