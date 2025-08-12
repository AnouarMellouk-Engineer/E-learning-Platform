import FeatureCard from "./FeatureCard";
import newWayImage from "../../assets/images/new-way-of-learning.webp";
import techImage from "../../assets/images/tech-stacks.webp";
import image3 from "../../assets/images/10782951_19199360.jpg";
import image4 from "../../assets/images/15694063_5653047.jpg";
import image5 from "../../assets/images/badges.webp";

import "./Feature.css";

const Feature = (prop) => {
  const first = [
    {
      id: 1,
      img: newWayImage,
      title: "New Way of Learning",
      desc: "Learn concepts, take quizzes, and practice with exercises and builds.",
    },
    {
      id: 2,
      img: techImage,
      title: "Master In-Demand Tech Stacks",
      desc: "Learn concepts, take quizzes, and practice with exercises and builds.",
    },
  ];
  const second = [
    {
      id: 3,
      img: image3,
      title: "Analytics",
      desc: "View detailed analytics to measure and optimize your learning journey.",
    },
    {
      id: 4,
      img: image4,
      title: "Roadmaps",
      desc: "Follow clear roadmaps to master skills step-by-step and stay on track.",
    },
    {
      id: 5,
      img: image5,
      title: "Level Up as You Learn",
      desc: "Gain points, unlock badges, and compete on leaderboards as you learn",
    },
  ];

  return (
    <div className="features" ref={prop.reff}>
      <p className="feature-logo">Features</p>
      <h2>
        The One-Stop Platform for <span> Developers</span>
      </h2>
      <p className="features-about">
        Get unlimited access to coding <b>courses</b> , <b>Quizzes</b>,{" "}
        <b>Builds</b> and <b>Tools</b>. Start your journey or level up your
        career with Amigoscode today!
      </p>
      <div className="featuress">
        <div className="feature-image">
          {first.map((feature) => {
            return (
              <FeatureCard
                img={feature.img}
                title={feature.title}
                desc={feature.desc}
                key={feature.id + 20}
              />
            );
          })}
        </div>

        <div className="feature-image2">
          {second.map((feature) => {
            return (
              <FeatureCard
                img={feature.img}
                title={feature.title}
                desc={feature.desc}
                key={feature.id + 20}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feature;
