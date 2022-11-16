import { FC, useContext } from "react";
import { AppContext } from "../../../context/app.context";
import {
  IFirstLevelMenuItem,
  PageItem,
} from "../../../interfaces/menu.interface";
import styles from "./Menu.module.css";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "../../../helpers/helpers";

export const Menu: FC = () => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const router = useRouter();

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory == secondCategory) {
            m.isOpened = !m.isOpened;
          }
          return m;
        })
      );
  };

  const BuildFisrtLevel = () => {
    return (
      <>
        {firstLevelMenu.map((menu) => (
          <li key={menu.route} className={styles.item}>
            <Link href={`/${menu.route}`}>
              <a
                className={cn(styles.firstLevel, {
                  [styles.firstLevel_active]: menu.id === firstCategory,
                })}
              >
                {menu.icon}
                <span>{menu.name}</span>
              </a>
            </Link>
            {menu.id === firstCategory && (
              <BuildSecondLevel menuFromFirstLevel={menu} />
            )}
          </li>
        ))}
      </>
    );
  };

  interface BuildSecondLevelProps {
    menuFromFirstLevel: IFirstLevelMenuItem;
  }

  const BuildSecondLevel: FC<BuildSecondLevelProps> = ({
    menuFromFirstLevel,
  }) => {
    return (
      <ul className="ml-[13px] border-l border-l-[#DFDFDF] pl-[32px]">
        {menu.map((menuItem) => {
          if (
            menuItem.pages
              .map((p) => p.alias)
              .includes(router.asPath.split("/")[2])
          ) {
            menuItem.isOpened = true;
          }

          return (
            <li
              key={menuItem._id.secondCategory}
              className="mb-[10px] text-[14px] font-medium leading-[19px] text-[#787D85]"
            >
              <button
                type="button"
                onClick={() => openSecondLevel(menuItem._id.secondCategory)}
              >
                {menuItem._id.secondCategory}
              </button>
              <ul
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: menuItem.isOpened,
                })}
              >
                <BuildThirdLevel
                  pages={menuItem.pages}
                  route={menuFromFirstLevel.route}
                />
              </ul>
            </li>
          );
        })}
      </ul>
    );
  };

  interface BuildThirdLevelProps {
    pages: PageItem[];
    route: string;
  }

  const BuildThirdLevel: FC<BuildThirdLevelProps> = ({ pages, route }) => {
    return (
      <>
        {pages.map((pageItem) => (
          <li key={pageItem._id}>
            <Link href={`/${route}/${pageItem.alias}`}>
              <a
                className={cn(styles.thirdLevel, {
                  [styles.thirdLevel_active]:
                    `/${route}/${pageItem.alias}` === router.asPath,
                })}
              >
                {pageItem.category}
              </a>
            </Link>
          </li>
        ))}
      </>
    );
  };

  return (
    <nav className="mt-[29px]">
      <ul>
        <BuildFisrtLevel />
      </ul>
    </nav>
  );
};
