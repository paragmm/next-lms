import Text from "@/components/Text";
import { getCourses } from "@/queries/courses";

export default async function Home() {
  const courses = await getCourses();
  console.log("Courses:", courses);
  console.log(courses[0] ? courses[0].instructor.socialMedia   : "No instructor data");
  return (
    
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Text />
    </div>
  );
}
