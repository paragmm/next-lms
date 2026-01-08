
import mongoose, {Schema} from "mongoose";

const testimonialSchema = new Schema({
    Testimonial: { type: String, required: true },
    rating: { type: Number, required: true },
    courseId: {
        required: true,
        type: Schema.ObjectId,
        ref: "Course"
    },
    user: {
        required: true,
        type: Schema.ObjectId,
        ref: "User"
    },
   
});
export const Testimonial = mongoose.models.Testimonial || mongoose.model("Testimonial", testimonialSchema);