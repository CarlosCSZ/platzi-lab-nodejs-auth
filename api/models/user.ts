import {Schema, Types, model, Model} from 'mongoose';
import { User } from '../interfaces/user';

export const UserSchema = new Schema<User>(
  {
    username: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export const userModel = model('users', UserSchema);
