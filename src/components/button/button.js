import "./button.scss";
const Button = (props) => {
  return (
    <button style={props.style} className={props.cN}>
      {props.label}
    </button>
  );
};

export default Button;
