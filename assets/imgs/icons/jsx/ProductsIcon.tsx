import { memo } from "react";
import { IconProps } from "./Icon.props";

const ProductsIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="23"
      viewBox="0 0 24 23"
      className={className}
    >
      <path d="M15.09 4.168l-8.168 3.92-3.247-1.497 8.024-3.714a.697.697 0 01.585 0l2.806 1.291zM20.316 6.59l-8.311 3.86-3.113-1.437-.45-.214 8.177-3.92.45.214 3.247 1.498zM11.338 11.563l-.008 8.123-7.961-3.895A.648.648 0 013 15.218V7.703l3.373 1.558v2.74c0 .35.306.641.675.641.37 0 .675-.29.675-.642V9.895l.45.205 3.165 1.463zM20.991 7.712l-8.303 3.843-.008 8.122L21 15.604l-.009-7.892z"></path>
    </svg>
  );
};

export default memo(ProductsIcon);
