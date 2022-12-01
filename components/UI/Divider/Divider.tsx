import { FC } from "react";
import { DividerProps } from "./Divider.props";
import classNames from "classnames";
import styles from "./Divider.module.css";

export const Divider: FC<DividerProps> = ({ className, ...props }) => {
  return <hr className={classNames(className, styles.divider)} {...props} />;
};
