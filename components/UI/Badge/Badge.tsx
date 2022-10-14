import styles from "./Badge.module.css";
import { BadgeProps } from "./Badge.props";
import cn from "classnames";

export const Badge = ({
  children,
  appearance,
  className,
  size,
}: BadgeProps) => {
  return (
    <span
      className={cn(
        styles.badge,
        {
          [styles.ghost]: appearance == "ghost",
          [styles.red]: appearance == "red",
          [styles.green]: appearance == "green",
          [styles.gray]: appearance == "gray",
          [styles.primary]: appearance == "primary",
          [styles.sm]: size == "sm",
          [styles.md]: size == "md",
        },
        className
      )}
    >
      {children}
    </span>
  );
};
