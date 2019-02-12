import { Document, Schema, Model, model} from "mongoose";

export var MessageSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    message: {
        type: String
    }
});

export const Message = model("Message", MessageSchema);
export default Message