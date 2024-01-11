"use client";
import { CourseCard } from "@/components/courseCard/courseCard";
import { ICourse } from "@/models/Course";
import { Carousel, CarouselItem } from "@/components";
import { useWindowSize } from "@uidotdev/usehooks";
import cl from "./courseBlock.module.scss";

type Properties = {
  courses: ICourse[];
};

const CoursesBlock: React.FC<Properties> = ({ courses }) => {
  const { width } = useWindowSize();

  return width! < 890 && courses.length > 1 ? (
    <Carousel
      initialSlide={0}
      slideAmount={courses.length}
      useNumbers
      dots={false}
      slidesToShow={1}
      className={cl.carousel}
      infinite={false}
      centerMode
    >
      {courses.map((course) => (
        <CourseCard course={course} key={course._id} />
      ))}
    </Carousel>
  ) : (
    <div className={cl.courses}>
      {courses.map((course) => (
        <CourseCard course={course} key={course._id} />
      ))}
    </div>
  );
};

export { CoursesBlock };