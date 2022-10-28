import { memo } from "react";
import { IconProps } from "./Icon.props";
import cn from "classnames";

const CoursesIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="22"
      viewBox="0 0 24 22"
      className={cn("translate-y-[2px]", className)}
    >
      <path d="M12 11.892L5.672 9.351v1.836c0 2.004 2.72 3.515 6.328 3.515s6.328-1.51 6.328-3.515V9.35L12 11.892z"></path>
      <path d="M24 15.405c0-.915-.59-1.688-1.406-1.98V6.143L24 5.562 12 .747 0 5.562l12 4.815 9.188-3.67v6.719a2.106 2.106 0 00-1.407 1.98c0 .838.495 1.557 1.205 1.897l-1.168 3.505 1.333.445.74-2.218.74 2.218 1.333-.445-1.169-3.505A2.106 2.106 0 0024 15.405z"></path>
    </svg>
  );
};

export default memo(CoursesIcon);
