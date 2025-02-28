import "./Button.css";

const Button = (prop) => {
  return <button className={prop.color}>{prop.content}</button>;
};

export default Button;
