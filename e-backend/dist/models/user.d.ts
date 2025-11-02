import { Model, Document } from 'mongoose';

interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    image: string;
    userclass: string;
    status?: string;
    provider?: string;
}
declare const User: Model<IUser>;

export { type IUser, User as default };
