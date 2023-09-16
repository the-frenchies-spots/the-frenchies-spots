import { JwtPayload, JwtPayloadWithRefreshToken } from '../types';
import { Request } from 'express';

export const validateToken = async (
  req: Request,
  payload: JwtPayload,
): Promise<JwtPayloadWithRefreshToken> => {
  const refreshToken = req?.get('authorization')?.replace('Bearer ', '').trim();
  return { ...payload, refreshToken: refreshToken || null };
};
