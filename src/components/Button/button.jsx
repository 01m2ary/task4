import "./Button.css";

const Button = ({ size = "md", children, onPress = () => {} }) => {
  return (
    <button onClick={() => onPress("Hi")} className={`button ${size}`}>
      {children}
    </button>
  );
};

export default Button;
