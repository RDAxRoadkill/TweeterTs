import { Document, Schema, Model, model } from "mongoose";

export var UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

export const User = model("User", UserSchema);
export default User