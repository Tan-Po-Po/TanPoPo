"use client";
import { ICourse } from "@/models/Course";
import cl from "./courseList.module.scss";
import { getCoursesByType, getValidClassNames } from "@/helpers";
import {
  CourseCardMini,
  Typography,
  Carousel,
  CarouselItem,
} from "@/components";
interface Props {
  courses: ICourse[];
  type: "teacher" | "video" | "book" | "audio";
  coursesClassName?: string;
}

export const CourseList: React.FC<Props> = ({
  courses,
  type,
  coursesClassName,
}) => {
  const coursesArray = getCoursesByType(type, courses);
  return (
    <section
      className={getValidClassNames(
        cl.courses,
        type === "book" && cl.bookCourses,
        type === "video" && cl.video,
        coursesClassName,
      )}
      // style={{ maxWidth: "1350px" }}
    >
      {coursesArray.length > 1 ? (
        <Carousel
          initialSlide={0}
          slideAmount={Math.ceil(coursesArray.length)}
          useNumbers
          dots={false}
          slidesToShow={1}
          infinite={false}
          className={cl.carousel}
        >
          {coursesArray.map((course) => (
            <CarouselItem key={course._id}>
              <CourseCardMini course={course} />
            </CarouselItem>
          ))}
        </Carousel>
      ) : (
        coursesArray.map((course) => {
          return <CourseCardMini course={course} key={course._id} />;
        })
      )}

      <div
        className={getValidClassNames(
          cl.courses,
          coursesClassName,
          type === "book" && cl.bookCourses,
          type === "video" && cl.video,
          cl.courseListWrapper,
          coursesArray.length <= 1 && cl.displayNone
        )}
      >
        {coursesArray.length > 1 &&
          coursesArray.map((course) => (
            <CourseCardMini course={course} key={course._id} />
          ))}
      </div>

      {coursesArray.length === 0 && (
        <Typography variant="h4">В розробці</Typography>
      )}
    </section>
  );
};
