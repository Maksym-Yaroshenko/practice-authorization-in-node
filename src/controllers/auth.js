import { ONE_DAY } from '../constants/index.js';
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshUserToken,
} from '../service/auth.js';

const setupSession = (res, token) => {
  res.cookie('refreshToken', token.refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
  });
  res.cookie('tokenId', token._id, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
  });
};

export const registerUserController = async (req, res, next) => {
  const user = await registerUser(req.body);
  console.log(user);

  return res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: user,
  });
};

export const loginUserController = async (req, res, next) => {
  const token = await loginUser(req.body);

  setupSession(res, token);

  return res.status(200).json({
    status: 200,
    message: 'Successfully logged in an user!',
    data: {
      accessToken: token.accessToken,
    },
  });
};

export const logoutUserController = async (req, res, next) => {
  if (req.cookies.tokenId) {
    await logoutUser(req.cookies.tokenId);
  }

  res.clearCookie('tokenId');
  res.clearCookie('refreshToken');

  return res.status(204).send();
};

export const refreshUserTokenController = async (req, res, next) => {
  const token = await refreshUserToken({
    tokenId: req.cookies.tokenId,
    refreshToken: req.cookies.refreshToken,
  });

  setupSession(res, token);

  res.status(200).json({
    status: 200,
    message: 'Successfully refreshed a session!',
    data: { accessToken: token.accessToken },
  });
};
