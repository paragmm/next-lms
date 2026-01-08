
import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    role: { type: String, required: true, enum: ['Student', 'Teacher', 'admin'], default: 'student' }, 
    bio: { type: String, required: false },
    socialMedia: {
        required: false,
        type: Object
    },
    profilePicture: { type: String, required: false },
    designation: { type: String, required: false }
   
});
export const User = mongoose.models.User || mongoose.model("User", userSchema);