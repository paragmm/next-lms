// import { de } from "date-fns/locale";
import mongoose, {Schema} from "mongoose";
// import { required } from "zod/v4/core/util.cjs";
const courseSchema = new Schema({
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    description: { type: String, required: true },
    thumbnail: { type: String, required: true },
    modules: {
        required: true,
        type: [Schema.ObjectId],
    },
    price: { type: Number, required: true },
    active: { type: Boolean, default: true },
    category: {
        type: Schema.ObjectId,
        ref: "Category"
    },
    instructor: {
        required: true,
        type: Schema.ObjectId,
        ref: "User"
    },
    testimonials: [{
        required: false,
        type: Schema.ObjectId,
        ref: "Testimonial"
    }],
    quizSet: {
        required: false,
        type: Schema.ObjectId,
    },
    createdOn: {
        required: false,
        type: Date,
        default: Date.now
    },
    modifiedOn: {
        required: false,
        type: Date
    },
});
export const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);