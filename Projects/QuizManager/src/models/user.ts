import mongoose from 'mongoose';
const { Schema, model } = mongoose;

export interface IUser {
    name: String,
    email: String,
    password: String,
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});


export const User = model<IUser>('User', userSchema);