import { FC, memo } from "react";
import { IconProps } from "./Icon.props";

const RatingIcon: FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="13"
      fill="none"
      viewBox="0 0 20 13"
      className={className}
    >
      <rect width="20" height="3" fill="#7653FC" rx="1.5"></rect>
      <rect width="14" height="3" y="5" fill="#7653FC" rx="1.5"></rect>
      <rect width="8" height="3" y="10" fill="#7653FC" rx="1.5"></rect>
    </svg>
  );
};

export default memo(RatingIcon);
