import Nav from "../components/nav/Nav";
import LandingPage from "../components/landingPage/LandingPage";
import Courses from "../components/courses/Courses";
import Feature from "../components/Features/Feature";
import Pricing from "../components/Pricing/Pricing";
import Footer from "../components/Footer/Footer";
import { useRef } from "react";

const Home = () => {
  const CoursesRef = useRef("null");
  const FeaturesRef = useRef("null");
  const PricingRef = useRef("null");
  const move = (element) => {
    element.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <div className="container">
        <Nav
          movee={move}
          ref1={CoursesRef}
          ref2={FeaturesRef}
          ref3={PricingRef}
        />
        <LandingPage />
        <Courses reff={CoursesRef} />
        <Feature reff={FeaturesRef} />
        <Pricing reff={PricingRef} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
