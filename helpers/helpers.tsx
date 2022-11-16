import {
  CoursesIcon,
  BooksIcon,
  ProductsIcon,
  ServicesIcon,
} from "../assets/imgs/icons/jsx";
import { IFirstLevelMenuItem } from "../interfaces/menu.interface";
import { TopLevelCategory } from "../interfaces/page.interface";

export const firstLevelMenu: IFirstLevelMenuItem[] = [
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
