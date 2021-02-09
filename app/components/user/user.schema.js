import { Schema } from 'mongoose';
import { Roles } from './user.enum.js'

export const UserSchema = new Schema({
    name: String,
    phone: {
        type: String,
        unique: true
    },
    roles: [{
        type: String,
        enum: [...Object.values(Roles)],
    }]
});
