import { FC } from "react";
import { InputProps } from "./Input.props";
import styles from "./Input.module.css";
import classNames from "classnames";

export const Input: FC<InputProps> = ({ className, ...props }) => {
  return <input className={classNames(styles.input, className)} {...props} />;
};
