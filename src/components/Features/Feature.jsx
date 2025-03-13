import FeatureCard from "./FeatureCard";

import "./Feature.css";

const Feature = (prop) => {
  const first = [
    {
      id: 1,
      img: "./src/assets/images/new-way-of-learning.webp",
      title: "New Way of Learning",
      desc: "Learn concepts, take quizzes, and practice with exercises and builds.",
    },
    {
      id: 2,
      img: "./src/assets/images/tech-stacks.webp",
      title: "Master In-Demand Tech Stacks",
      desc: "Learn concepts, take quizzes, and practice with exercises and builds.",
    },
  ];
  const second = [
    {
      id: 3,
      img: "./src/assets/images/10782951_19199360.jpg",
      title: "Analytics",
      desc: "View detailed analytics to measure and optimize your learning journey.",
    },
    {
      id: 4,
      img: "./src/assets/images/15694063_5653047.jpg",
      title: "Roadmaps",
      desc: "Follow clear roadmaps to master skills step-by-step and stay on track.",
    },
    {
      id: 5,
      img: "./src/assets/images/badges.webp",
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
