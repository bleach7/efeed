import { memo } from "react";
import { IconProps } from "./Icon.props";

const ServicesIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="13"
      fill="none"
      viewBox="0 0 19 13"
      className={className}
    >
      <path
        fill="#787D85"
        d="M16.654 5.762a4.78 4.78 0 00.082-.887C16.736 2.187 14.49 0 11.726 0 9.964 0 8.33.914 7.432 2.367c-1.213-.383-2.456-.219-3.481.468S2.314 4.61 2.264 5.798C.917 6.42 0 7.746 0 9.208c0 .254.063.502.112.742C.472 11.718 2.08 13 3.934 13h11.132C17.215 13 19 11.299 19 9.208c0-1.478-.93-2.809-2.346-3.446z"
      ></path>
    </svg>
  );
};

export default memo(ServicesIcon);
