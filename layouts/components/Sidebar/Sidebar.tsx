import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import cn from "classnames";

export const Sidebar = ({ className, ...props }: SidebarProps) => {
  return (
    <aside {...props} className={cn(styles.sidebar, className)}>
      Sidebar
    </aside>
  );
};
