// src/models/token-model.js

import { Schema, model } from 'mongoose';

const TokenSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    accessToken: { type: String, required: true },
    refreshToken: { type: String, required: true },
    accessTokenValidUntil: { type: Date, required: true },
    refreshTokenValidUntil: { type: Date, required: true },
  },
  { versionKey: false, timestamps: true },
);

export const TokenCollection = model('tokens', TokenSchema);
