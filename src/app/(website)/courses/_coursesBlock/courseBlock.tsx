"use client";
import { ICourse } from "@/models/Course";
import cl from "./courseBlock.module.scss";
import { getCoursesByType} from "@/helpers";
import {
  CourseCardMini,
  Typography,
  Carousel,
  CarouselItem,
} from "@/components";
import { useWindowSize } from "@uidotdev/usehooks";
interface Props {
  courses: ICourse[];
  courseType: "teacher" | "video" | "book" | "audio";
}

export const CourseBlock: React.FC<Props> = ({ courses, courseType }) => {
  const coursesByType = getCoursesByType(courseType, courses);

  const { width } = useWindowSize();
  const isMobile = Boolean(width && width < 678);

  return (

      <section className={cl.courses} style={{ maxWidth: "1100px" }}>
        {isMobile && coursesByType.length > 1 ? (
          <Carousel
            initialSlide={0}
            slideAmount={Math.ceil(coursesByType.length)}
            useNumbers
            dots={false}
            slidesToShow={1}
            infinite={false}
            className={cl.carousel}
          >
            {coursesByType.map((course) => (
              <CarouselItem key={course._id}>
                <CourseCardMini course={course} />
              </CarouselItem>
            ))}
          </Carousel>
        ) : (
          coursesByType.map((course) => (
            <CourseCardMini course={course} key={course._id} />
          ))
        )}
        {coursesByType.length === 0 && (
          <Typography variant="h4">В розробці</Typography>
        )}
      </section>

  );
};
