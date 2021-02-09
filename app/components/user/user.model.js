import mongoose from 'mongoose';
import { UserSchema } from './user.schema.js'

export const User = mongoose.model('User', UserSchema);
