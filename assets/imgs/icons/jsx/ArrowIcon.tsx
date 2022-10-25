import { memo } from "react";
import { IconProps } from "./Icon.props";

const ArrowIcon = ({ className, ...props }: IconProps) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="10"
      viewBox="0 0 6 10"
      className={className}
    >
      <path d="M5.715 4.61L1.265.16A.543.543 0 00.878 0a.543.543 0 00-.386.16L.164.487a.548.548 0 000 .774L3.9 4.998.16 8.739a.543.543 0 00-.16.387c0 .146.057.284.16.387l.327.327c.103.103.24.16.387.16a.543.543 0 00.387-.16l4.454-4.454a.544.544 0 00.16-.388.544.544 0 00-.16-.388z"></path>
    </svg>
  );
};

export default memo(ArrowIcon);
