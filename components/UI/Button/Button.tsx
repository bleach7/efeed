import styles from "./Button.module.css";
import cn from "classnames";
import { ButtonProps } from "./Button.props";
import { ArrowIcon } from "./ArrowIcon";

export const Button = ({
  children,
  className,
  appearance,
  arrow = "none",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        styles.btn,
        {
          [styles.primary]: appearance == "primary",
          [styles.secondary]: appearance == "secondary",
        },
        className
      )}
    >
      <span>{children}</span>
      {arrow !== "none" && (
        <ArrowIcon
          className={cn(styles.arrow, {
            [styles.right]: arrow == "right",
            [styles.down]: arrow == "down",
          })}
        />
      )}
    </button>
  );
};
