import "./Pricing.css";
import { offers } from "../../assets/pricingData";
import PricingList from "./PricingList";
import { IoRocketOutline } from "react-icons/io5";
import { PiShootingStarBold } from "react-icons/pi";
import { useState } from "react";

const Pricing = (prop) => {
  const [duration, setDuration] = useState("Monthly");
  return (
    <div className="pricing-setion" ref={prop.reff}>
      <p className="feature-logo">Pricing</p>
      <h2>
        Unlimited Learning with <span> One Subscription</span>
      </h2>
      <p className="features-about">
        Choose the plan that fits your learning journey and goals.
      </p>
      <div className="duration">
        <p>Montly</p>
        <div
          className="change"
          onClick={() => {
            duration === "Monthly"
              ? setDuration("Yearly")
              : setDuration("Monthly");
          }}
        >
          <div className={duration}></div>
        </div>
        <p>Yearly</p>
      </div>
      <div className="offers">
        {offers.map((offer, indd) => {
          return (
            <PricingList
              title={offer.title}
              about={offer.about}
              price={offer.price}
              points={offer.points}
              duration={duration}
              key={indd + 77}
            >
              {offer.price == 0 ? <PiShootingStarBold /> : <IoRocketOutline />}
            </PricingList>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
