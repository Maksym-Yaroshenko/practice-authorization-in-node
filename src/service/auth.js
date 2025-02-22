// src/service/auth.js

import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';

import { THIRTY_MINUTES, ONE_DAY } from '../constants/index.js';
import { UserCollection } from '../models/user-model.js';
import { TokenCollection } from '../models/token-model.js';

export const registerUser = async (payload) => {
  const user = await UserCollection.findOne({ email: payload.email });
  if (user) throw createHttpError(409, 'Email in use');

  const encryptedPassword = await bcrypt.hash(payload.password, 10);

  return await UserCollection.create({
    ...payload,
    password: encryptedPassword,
  });
};

const createToken = () => {
  const accessToken = randomBytes(30).toString('base64');
  const refreshToken = randomBytes(30).toString('base64');

  return {
    accessToken,
    refreshToken,
    accessTokenValidUntil: new Date(Date.now() + THIRTY_MINUTES),
    refreshTokenValidUntil: new Date(Date.now() + ONE_DAY),
  };
};

export const loginUser = async (payload) => {
  const user = await UserCollection.findOne({ email: payload.email });
  if (!user) throw createHttpError(404, 'User not found');

  const isEqual = bcrypt.compare(payload.password, user.password);
  if (!isEqual) throw createHttpError(401, 'Unauthorized');

  await TokenCollection.deleteOne({ userId: user._id });

  const accessToken = randomBytes(30).toString('base64');
  const refreshToken = randomBytes(30).toString('base64');

  return await TokenCollection.create({
    userId: user._id,
    accessToken,
    refreshToken,
    accessTokenValidUntil: new Date(Date.now() + THIRTY_MINUTES),
    refreshTokenValidUntil: new Date(Date.now() + ONE_DAY),
  });
};

export const logoutUser = async (tokenId) => {
  await TokenCollection.deleteOne({ _id: tokenId });
};

export const refreshUserToken = async ({ tokenId, refreshToken }) => {
  const token = await TokenCollection.findOne({
    _id: tokenId,
    refreshToken,
  });

  if (!token) throw createHttpError(401, 'Token not found');

  const isRefreshTokenExpired = new Date() > token.refreshTokenValidUntil;

  if (isRefreshTokenExpired)
    throw createHttpError(401, 'Refresh token expired');

  const newToken = createToken();

  await TokenCollection.deleteOne({ _id: tokenId, refreshToken });

  return TokenCollection.create({
    userId: token.userId,
    ...newToken,
  });
};
