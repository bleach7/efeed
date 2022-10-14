import { ReactNode } from "react";

export interface HeadingProps {
  children: ReactNode;
  as: "h1" | "h2" | "h3";
  className?: string;
}
