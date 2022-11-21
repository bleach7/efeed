import { FC } from "react";
import styles from "./Card.module.css";
import { CardProps } from "./Card.props";
import cn from "classnames";

export const Card: FC<CardProps> = ({
  color = "white",
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        styles.card,
        {
          [styles.blue]: color === "blue",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
