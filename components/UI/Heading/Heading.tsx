import { createElement } from "react";
import { HeadingProps } from "./Heading.props";
import styles from "./Heading.module.css";
import cn from "classnames";

export const Heading = ({ children, as, className }: HeadingProps) => {
  return createElement(
    as,
    {
      className: cn(
        {
          [styles.h1]: as == "h1",
          [styles.h2]: as == "h2",
          [styles.h3]: as == "h3",
        },
        className
      ),
    },
    children
  );
};
