import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import cn from "classnames";
import { Menu } from "../Menu/Menu";

export const Sidebar = ({ className, ...props }: SidebarProps) => {
  return (
    <aside {...props} className={cn(styles.sidebar, className)}>
      <Menu />
    </aside>
  );
};
