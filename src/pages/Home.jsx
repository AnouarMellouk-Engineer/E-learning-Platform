import Nav from "../components/nav/Nav";
import LandingPage from "../components/landingPage/LandingPage";
import Courses from "../components/courses/Courses";
import Feature from "../components/Features/Feature";
import Pricing from "../components/Pricing/Pricing";

const Home = () => {
  return (
    <div>
      <Nav />
      <LandingPage />
      <Courses />
      <Feature />
      <Pricing />
    </div>
  );
};

export default Home;
