import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import cn from "classnames";
import { Menu } from "../Menu/Menu";
import { LogoIcon } from "../../../assets/imgs/icons/jsx";
import Link from "next/link";
import { Search } from "../Search/Search";

export const Sidebar = ({ className, ...props }: SidebarProps) => {
  return (
    <aside className={cn(styles.sidebar, className)} {...props}>
      <Link href="/">
        <a>
          <LogoIcon className="mb-[19px]" />
        </a>
      </Link>
      <Search />
      <Menu />
    </aside>
  );
};
