import SigninBody from "../../components/SigninBody/SigninBody";
import SigninNav from "../../components/SinginNav.jsx/SigninNav";
import "./Singnin.css";
const Signin = () => {
  return (
    <div className="signin-page">
      <div className="form">
        <SigninNav />
        <SigninBody />
      </div>
      <div className="signin-image">
        <img src="./src/assets/images/Screenshot 2025-03-13 092217.png" />
      </div>
    </div>
  );
};

export default Signin;
