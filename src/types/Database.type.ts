import mongoose from 'mongoose';

export type DatabaseIndex = string;

export type MongoConnectionInfo = {
    uri:string,
    options?:mongoose.ConnectOptions
}

export type DatabaseCollection = 'User' | 'Component';