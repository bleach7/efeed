import { FC, useContext, useState } from "react";
import { AppContext } from "../../../context/app.context";
import {
  IFirstLevelMenuItem,
  PageItem,
} from "../../../interfaces/menu.interface";
import styles from "./Menu.module.css";
import {
  CoursesIcon,
  BooksIcon,
  ProductsIcon,
  ServicesIcon,
} from "../../../assets/imgs/icons/jsx";
import { TopLevelCategory } from "../../../interfaces/page.interface";
import cn from "classnames";

const firstLevelMenu: IFirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Товары",
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
];

export const Menu: FC = () => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const BuildFisrtLevel = () => {
    return (
      <>
        {firstLevelMenu.map((menu) => (
          <li key={menu.route} className={styles.item}>
            <a
              href={`/${menu.route}`}
              className={cn(styles.firstLevel, {
                [styles.firstLevel_active]: menu.id === firstCategory,
              })}
            >
              {menu.icon}
              <span>{menu.name}</span>
            </a>
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
        {menu.map((menuItem) => (
          <li
            key={menuItem._id.secondCategory}
            className="mb-[10px] text-[14px] font-medium leading-[19px] text-[#787D85]"
          >
            <button type="button">{menuItem._id.secondCategory}</button>
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
        ))}
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
            <a
              href={`/${route}/${pageItem.alias}`}
              className={cn(styles.thirdLevel, {
                [styles.thirdLevel_active]: true,
              })}
            >
              {pageItem.category}
            </a>
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
