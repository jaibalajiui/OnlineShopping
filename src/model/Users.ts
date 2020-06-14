import mongoose, {Schema} from 'mongoose';

const UserSchema : Schema = new Schema({
        firstName : { type: String, required: true, unique: true },
        lastName : { type: String, required: true },
        email: {type: String, required: true}
    });
export default mongoose.model('USER',UserSchema);