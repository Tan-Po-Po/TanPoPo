import { ICourse } from "@/models/Course";
import cl from "./courseList.module.scss";
import { getCoursesByType } from "@/helpers";
import { CourseCardMini, Divider, Typography } from "..";

interface Props {
  courses: ICourse[];
}

export const CourseList: React.FC<Props> = ({ courses }) => {
  const teacherCourses = getCoursesByType("teacher", courses);
  const videoCourses = getCoursesByType("video", courses);
  const bookCourses = getCoursesByType("book", courses);
  const audioCourses = getCoursesByType("audio", courses);

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
        {teacherCourses.map((course) => (
          <CourseCardMini course={course} key={course._id} />
        ))}
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
        {videoCourses.map((course) => (
          <CourseCardMini course={course} key={course._id} />
        ))}
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
        {audioCourses.map((course) => (
          <CourseCardMini course={course} key={course._id} />
        ))}
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
      <section className={cl.courses}>
        {bookCourses.map((course) => (
          <CourseCardMini course={course} key={course._id} />
        ))}
        {bookCourses.length === 0 && (
          <Typography variant="h4">В розробці</Typography>
        )}
      </section>
    </main>
  );
};

export default CourseList;
