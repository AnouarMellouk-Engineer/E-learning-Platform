import "./SigninNav.css";
import { useNavigate } from "react-router-dom";

const SigninNav = () => {
  const navigate = useNavigate();
  return (
    <div className="signin-header">
      <h1
        onClick={() => {
          navigate("/");
        }}
      >
        E learning
      </h1>
      <p>Need Help ?</p>
    </div>
  );
};

export default SigninNav;
