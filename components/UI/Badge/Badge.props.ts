import { ReactNode } from "react";

export interface BadgeProps {
  children: ReactNode;
  appearance: "ghost" | "green" | "red" | "primary" | "gray";
  size: "sm" | "md";
  className?: string;
}
