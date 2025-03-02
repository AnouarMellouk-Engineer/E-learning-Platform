import Button from "../Button/Button";
import "./LandingPage.css";
import { comp } from "../../assets/comp";

const LandingPage = () => {
  return (
    <div>
      <div className="landing-header">
        <h1>
          Discover, Learn, and Master <span> New Skills</span>
        </h1>
        <p>
          Enhance your skills and gain new knowledge with expert-led courses.
          Enjoy an interactive learning experience designed to help you succeed
          in your career and personal growth. Start your journey today!
        </p>
        <Button content="start here" color="blue" />
      </div>
      <div className="top-comp">
        <p>OUR STUDENTS WORK IN TOP COMPANIES</p>
        <div className="wrapper">
          {comp.map((com) => (
            <div
              className="comp"
              key={com.id}
              style={{
                animationDelay: `${(55 / 9) * (9 - com.id) * -1}s`,
              }}
            >
              {com.image}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
