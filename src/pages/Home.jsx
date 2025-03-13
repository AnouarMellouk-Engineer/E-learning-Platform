import Nav from "../components/nav/Nav";
import LandingPage from "../components/landingPage/LandingPage";
import Courses from "../components/courses/Courses";
import Feature from "../components/Features/Feature";
import Pricing from "../components/Pricing/Pricing";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="container">
        <Nav />
        <LandingPage />
        <Courses />
        <Feature />
        <Pricing />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
