import { FC, useContext } from "react";
import { AppContext } from "../../../context/app.context";
import styles from "./Menu.module.css";

export const Menu: FC = () => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  return (
    <ul>
      {menu.map((m) => {
        return <li key={m._id.secondCategory}>{m._id.secondCategory}</li>;
      })}
    </ul>
  );
};
