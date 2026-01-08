// import { de } from "date-fns/locale";
import mongoose, {Schema} from "mongoose";
// import { required } from "zod/v4/core/util.cjs";
const categorySchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
    thumbnail: { type: String, required: true },
   
});
export const Category = mongoose.models.Category || mongoose.model("Category", categorySchema);