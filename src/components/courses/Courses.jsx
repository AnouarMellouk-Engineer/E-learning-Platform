import { useState } from "react";
import Button from "../Button/Button";
import { techCourses } from "../../assets/CoursesList";
import { courses } from "../../assets/BuildsList";
import CourseCard from "./CourseCard";
import "./Courses.css";
const Courses = () => {
  const [content, setConetent] = useState("Courses");
  const techList = techCourses.map((course) => {
    if (course.id < 7) {
      return (
        <CourseCard
          key={course.id}
          image={course.image}
          title={course.title}
          price={course.price}
          description={course.description}
        />
      );
    }
  });

  const CourseList = courses.map((course) => {
    if (course.id < 16) {
      return (
        <CourseCard
          key={course.id}
          image={course.image}
          title={course.title}
          price={course.price}
          description={course.description}
        />
      );
    }
  });
  return (
    <div className="courses">
      <div className="courses-header">
        <div className="switsher">
          <p
            onClick={() => content == "Builds" && setConetent("Courses")}
            className={content == "Courses" ? "Courses" : "none"}
          >
            Courses
          </p>
          <p
            onClick={() => content == "Courses" && setConetent("Builds")}
            className={content == "Builds" ? "Builds" : "none"}
          >
            Builds
          </p>
        </div>
        <h2>
          Discover Our Latest <span> Premium Courses!</span>
        </h2>
        <p>
          Get unlimited access to coding courses, Quizzes, Builds and Tools.
          Start your journey or level up your career with Amigoscode today!
        </p>
        <div className="bows">
          <Button color="black" content={`browser all ${content}`} />
        </div>
      </div>
      <div className="courses-list">
        {content === "Courses" ? techList : CourseList}
      </div>
    </div>
  );
};

export default Courses;
