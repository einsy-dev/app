import Link from "next/link";
import styles from "./Nav.button.module.css";
interface ButtonProps {
  title: string;
  className?: string;
}
export default function NavButton({ title, className, ...props }: ButtonProps) {
  return (
    <div className={`${styles.button} ${className}`} {...props}>
      <span>{title}</span>
    </div>
  );
}
