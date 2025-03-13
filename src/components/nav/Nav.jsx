import { useState } from "react";
import "./nav.css";
import Details from "./Details";
import Button from "../Button/Button";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Nav = (prop) => {
  const navigate = useNavigate();
  const [showres, setshowres] = useState(false);
  const [showProd, setshowProd] = useState(false);
  const [diplayMenu, setDisplayMenu] = useState(false);
  const products = [
    { title: "Courses", description: "Comprehensive coding sourse" },
    {
      title: "Readmaps",
      description:
        "a comprehensive guide and instractions manual for all courses",
    },
  ];

  const resaurses = [
    {
      title: "Team",
      description: "meet our team members",
    },
    {
      title: "Merch",
      description: "E-learnin merche and exssoire are comming",
    },
    {
      title: "Help and support",
      description: "learn, fix the problem and get answers to your quastions",
    },
  ];
  return (
    <nav>
      <div className="logo">E-learning</div>
      <ul className={`${!diplayMenu && "hidden"}`}>
        <li>
          <Details
            title="Products"
            menu={products}
            showMenu={showProd}
            setShowMenu={(ee) => {
              setshowProd(ee);
            }}
            closeres={() => {
              setshowres(false);
            }}
          />
        </li>

        <li>
          <Details
            title="Resaurses"
            menu={resaurses}
            showMenu={showres}
            setShowMenu={(ee) => {
              setshowres(ee);
            }}
            closeres={() => {
              setshowProd(false);
            }}
          />
        </li>
        <li
          className="pointer"
          onClick={() => {
            prop.movee(prop.ref3);
          }}
        >
          Pricing
        </li>

        <li
          className="pointer"
          onClick={() => {
            prop.movee(prop.ref1);
          }}
        >
          Courses
        </li>
        <li
          className="pointer"
          onClick={() => {
            prop.movee(prop.ref2);
          }}
        >
          About us
        </li>
      </ul>
      <div className="buttons">
        <Button
          content="Sign in"
          color="black"
          Click={() => {
            navigate("/Signin");
          }}
        />
        <Button content="Sign up" color="blue" />
        <RxHamburgerMenu
          className="menu"
          onClick={() => {
            setDisplayMenu(!diplayMenu);
          }}
        />
      </div>
    </nav>
  );
};

export default Nav;
