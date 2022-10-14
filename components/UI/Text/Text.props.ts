import { ReactNode } from "react";

export interface TextProps {
  children: ReactNode;
  size: "sm" | "md" | "lg";
  className?: string;
}
