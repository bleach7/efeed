import { FC } from "react";
import { HhAdvatagesProps } from "./Advantages.props";
import styles from "./Advantages.module.css";
import { AdvantagesIcon } from "../../assets/imgs/icons/jsx";
import { Text } from "../UI";

export const Advantages: FC<HhAdvatagesProps> = ({ advantages }) => {
  return (
    <>
      {advantages.map((advantage) => (
        <li key={advantage._id} className={styles.item}>
          <AdvantagesIcon />
          <p className={styles.title}>{advantage.title}</p>
          <div className={styles.line}></div>
          <Text size="lg">{advantage.description}</Text>
        </li>
      ))}
    </>
  );
};
