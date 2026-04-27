import "./Button.css";

interface IButton {
  variant?: "secondary" | "gradient";
  icon?: any;
  text?: string;
  onClick?: () => void;
}

export default function Button({ variant, icon, text, onClick }: IButton) {
  return (
    <button id={variant} onClick={onClick}>
      {icon}
      {text}
    </button>
  );
}
