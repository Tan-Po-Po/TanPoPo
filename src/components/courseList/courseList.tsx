"use client";
import { ICourse } from "@/models/Course";
import cl from "./courseList.module.scss";
import { getCoursesByType, getValidClassNames } from "@/helpers";
import {
  CourseCardMini,
  Divider,
  Typography,
  Carousel,
  CarouselItem,
} from "@/components";
import { useAppSelector } from "@/redux/hooks";
import { selectWindowMatchMedia } from "@/redux/slices/windowMatchMedia/windowMatchMedia";
interface Props {
  courses: ICourse[];
}

export const CourseList: React.FC<Props> = ({ courses }) => {
  const teacherCourses = getCoursesByType("teacher", courses);
  const videoCourses = [
    ...getCoursesByType("video", courses),
    ...getCoursesByType("video", courses),
  ];
  const bookCourses = [
    ...getCoursesByType("book", courses),
    ...getCoursesByType("book", courses),
  ];
  const audioCourses = [
    ...getCoursesByType("audio", courses),
    ...getCoursesByType("audio", courses),
  ];

  const windowMatchMedia = useAppSelector(selectWindowMatchMedia);
  const { isMobile } = windowMatchMedia;

  return (
    <main className={cl.courseListMain}>
      <Divider
        style={{ scrollMarginTop: "100px" }}
        id="teacher"
        firstRow="онлайн-курси"
        secondRow="з сенсеєм"
        bgColor="linear-gradient(rgba(166, 196, 255, 1), rgba(232, 166, 255, 1))"
      />
      <section className={cl.courses}>
        {isMobile && teacherCourses.length > 1 ? (
          <Carousel
            initialSlide={0}
            slideAmount={Math.ceil(teacherCourses.length)}
            useNumbers
            dots={false}
            slidesToShow={1}
            infinite={false}
            className={cl.carousel}
          >
            {teacherCourses.map((course) => (
              <CarouselItem key={course._id}>
                <CourseCardMini course={course} />
              </CarouselItem>
            ))}
          </Carousel>
        ) : (
          teacherCourses.map((course) => (
            <CourseCardMini course={course} key={course._id} />
          ))
        )}
        {teacherCourses.length === 0 && (
          <Typography variant="h4">В розробці</Typography>
        )}
      </section>

      <Divider
        style={{ scrollMarginTop: "100px" }}
        id="video"
        firstRow="Відеокурси"
        secondRow="для самостійного вивчення"
        bgColor="linear-gradient(rgba(255, 250, 139, 1), rgba(255, 111, 111, 1))"
      />
      <section className={cl.courses}>
        {isMobile && videoCourses.length > 1 ? (
          <Carousel
            initialSlide={0}
            slideAmount={Math.ceil(videoCourses.length)}
            useNumbers
            dots={false}
            slidesToShow={1}
            infinite={false}
            className={cl.carousel}
          >
            {videoCourses.map((course) => (
              <CarouselItem key={course._id}>
                <CourseCardMini course={course} />
              </CarouselItem>
            ))}
          </Carousel>
        ) : (
          videoCourses.map((course) => (
            <CourseCardMini course={course} key={course._id} />
          ))
        )}
        {videoCourses.length === 0 && (
          <Typography variant="h4">В розробці</Typography>
        )}
      </section>

      <Divider
        style={{ scrollMarginTop: "100px" }}
        id="audio"
        firstRow="Аудіокурси"
        secondRow="для самостійного вивчення"
        bgColor="linear-gradient(rgba(253, 255, 135, 1), rgba(108, 250, 165, 1))"
      />
      <section className={cl.courses}>
        {isMobile && audioCourses.length > 1 ? (
          <Carousel
            initialSlide={0}
            slideAmount={Math.ceil(audioCourses.length)}
            useNumbers
            dots={false}
            slidesToShow={1}
            infinite={false}
            className={cl.carousel}
          >
            {audioCourses.map((course) => (
              <CarouselItem key={course._id}>
                <CourseCardMini course={course} />
              </CarouselItem>
            ))}
          </Carousel>
        ) : (
          audioCourses.map((course) => (
            <CourseCardMini course={course} key={course._id} />
          ))
        )}
        {audioCourses.length === 0 && (
          <Typography variant="h4">В розробці</Typography>
        )}
      </section>

      <Divider
        style={{ scrollMarginTop: "100px" }}
        id="book"
        firstRow="Книжкові мінікурси"
        secondRow="для самостійного вивчення"
        bgColor="linear-gradient(rgba(255, 221, 169, 1), rgba(232, 184, 255, 1))"
      />
      <section className={getValidClassNames(cl.courses, cl.bookCourses)}>
        {isMobile && bookCourses.length > 1 ? (
          <Carousel
            initialSlide={0}
            slideAmount={Math.ceil(bookCourses.length)}
            useNumbers
            dots={false}
            slidesToShow={1}
            infinite={false}
            className={cl.carousel}
          >
            {bookCourses.map((course) => (
              <CarouselItem key={course._id}>
                <CourseCardMini course={course} />
              </CarouselItem>
            ))}
          </Carousel>
        ) : (
          bookCourses.map((course) => (
            <CourseCardMini course={course} key={course._id} />
          ))
        )}
        {bookCourses.length === 0 && (
          <Typography variant="h4">В розробці</Typography>
        )}
      </section>
    </main>
  );
};
