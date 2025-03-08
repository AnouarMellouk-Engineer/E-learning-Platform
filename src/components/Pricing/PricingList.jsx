import Button from "../Button/Button";
import { FaCheckCircle } from "react-icons/fa";
const PricingList = (props) => {
  return (
    <div className={`Offer ${props.price > 0 ? "proo" : "freee"}`}>
      <div className={`offer-card ${props.price > 0 ? "proo2" : "freee2"}`}>
        <div className="header-offer">
          <div className="tittle">
            <div className="children">{props.children}</div>
            <p>{props.title}</p>
          </div>
          {props.price > 0 && <p className="popular">most popular</p>}
        </div>
        <div className="offer-info">
          <p className="about">{props.about}</p>
          {props.price > 0 && (
            <>
              <p className="price">
                ${props.duration === "Monthly" ? props.price : 399.99}{" "}
              </p>
              <span>{props.duration}</span>
            </>
          )}
        </div>
        <div className="buttonn">
          <Button
            content={
              props.price == 0 ? "start Learning for free" : "Unlock Full Acces"
            }
            color={props.price == 0 ? "blue" : "none"}
          />
        </div>
        <div className="offer-details">
          {props.points.map((point, ind) => {
            return (
              <div className="point" key={ind + 23}>
                <div className="check ">
                  <FaCheckCircle className={props.price == 0 && "free"} />
                </div>
                <p>{point}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingList;
