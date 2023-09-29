import mongoose from 'mongoose';
const { Schema, model } = mongoose;

// interface for user Schema 
export interface IUser {
    name: String,
    email: String,
    password: String,
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    
}, { timestamps: true });


export const User = model<IUser>('User', userSchema);