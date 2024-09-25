import dbConnect from "@/config/dbConnect";
import Course, { ICourse } from "@/models/Course";
import { CourseState } from "@/redux/slices/course/courseSlice";

export const checkCoursePrice = async (courseData: CourseState) => {
  try {
    await dbConnect();
    const courseDB = await Course.findById(courseData.id).select("prices");

    if (!courseDB) {
      return {
        success: false,
        message:
          "Список курсів оновився!\nБудь ласка, оберіть бажаний курс ще раз",
      };
    }
    const course: Partial<ICourse> = JSON.parse(JSON.stringify(courseDB));

    let lessonsPrice = 0;
    if (courseData.format === "Індивідуально") {
      const coursePrices = course.prices?.individual.find(
        (variant) => variant.lessons === courseData.lessons
      );
      lessonsPrice = coursePrices?.discountPrice || coursePrices?.price || 0;
    } else {
      lessonsPrice =
        course.prices?.group.find(
          (variant) => variant.lessons === courseData.lessons
        )?.price || 0;
    }

    // If isGift and printed certificate
    if (
      courseData.isGift &&
      courseData.certificateType === "Друкований сертифікат"
    ) {
      lessonsPrice += 200;
    }

    const coursePriceFromClient = Number(courseData.price?.split(" ")[0]);
    const isPriceEqual = lessonsPrice === coursePriceFromClient;

    if (!isPriceEqual) {
      return {
        success: false,
        message:
          "Ціна на обраний курс змінилась.\nБудь ласка, оберіть бажаний курс ще раз",
      };
    }

    return {
      success: true,
      price: lessonsPrice,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: "Сталася помилка.\nБудь ласка, оберіть бажаний курс ще раз",
    };
  }
};
