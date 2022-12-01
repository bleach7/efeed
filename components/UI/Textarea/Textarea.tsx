import { FC } from "react";
import styles from "./Textarea.module.css";
import { TextareaProps } from "./Textarea.props";
import classNames from "classnames";

export const Textarea: FC<TextareaProps> = ({ className, ...props }) => {
  return (
    <textarea className={classNames(styles.textarea, className)} {...props} />
  );
};
