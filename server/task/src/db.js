import mongoose, { Mongoose } from "mongoose";

export function connectDB ({uri}) {
    mongoose.coonedt(uri)
    .then(() => console.log('Connect')
    .catch(err => {
        console.error(err);
        process.exit(1);
    }))
}