import { FC } from "react";
import { HhStarIcon } from "../../assets/imgs/icons/jsx";
import { Card } from "../UI/Card/Card";
import styles from "./HhData.module.css";
import { HhDataProps } from "./HhData.props";
import cn from "classnames";
import { priceRu } from "../../utilities";

export const HhData: FC<HhDataProps> = ({
  count,
  middleSalary,
  juniorSalary,
  seniorSalary,
}) => {
  return (
    <div className={styles.hh}>
      <Card className={cn(styles.card, styles.card_count)}>
        <div className={cn(styles.title, styles.title_count)}>
          Всего вакансий
        </div>
        <div className="text-center text-[36px] font-bold leading-none text-[#7653FC]">
          {count}
        </div>
      </Card>
      <div className={styles.salary}>
        <Card className={styles.card}>
          <div className={styles.title}>Начальный</div>
          <div className="text-[26px] font-bold leading-none text-[#3B434E]">
            {priceRu(juniorSalary)}
          </div>
          <div className={styles.stars}>
            <HhStarIcon className={styles.filled} />
            <HhStarIcon />
            <HhStarIcon />
          </div>
        </Card>
        <Card className={styles.card}>
          <div className={styles.title}>Средний</div>
          <div className="text-[26px] font-bold leading-none text-[#3B434E]">
            {priceRu(middleSalary)}
          </div>
          <div className={styles.stars}>
            <HhStarIcon className={styles.filled} />
            <HhStarIcon className={styles.filled} />
            <HhStarIcon />
          </div>
        </Card>
        <Card className={styles.card}>
          <div className={styles.title}>Профессионал</div>
          <div className="text-[26px] font-bold leading-none text-[#3B434E]">
            {priceRu(seniorSalary)}
          </div>
          <div className={styles.stars}>
            <HhStarIcon className={styles.filled} />
            <HhStarIcon className={styles.filled} />
            <HhStarIcon className={styles.filled} />
          </div>
        </Card>
      </div>
    </div>
  );
};
