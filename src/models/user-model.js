// src/models/user-model.js

import { Schema, model } from 'mongoose';

const UserSchema = new Schema(
  {
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    isActiveted: { type: Boolean, default: false },
    activationLink: { type: String, default: null },
  },
  { versionKey: false, timestamps: true },
);

export const UserCollection = model('users', UserSchema);
