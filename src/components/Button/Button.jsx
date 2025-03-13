import "./Button.css";

const Button = (prop) => {
  return (
    <button className={prop.color} onClick={prop.Click}>
      {prop.content}
    </button>
  );
};

export default Button;
