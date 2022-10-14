import { TextProps } from "./Text.props";
import styles from "./Text.module.css";
import cn from "classnames";

export const Text = ({ children, size, className }: TextProps) => {
  return (
    <p
      className={cn(
        { [styles.sm]: size == "sm" },
        { [styles.md]: size == "md" },
        { [styles.lg]: size == "lg" },
        className
      )}
    >
      {children}
    </p>
  );
};
