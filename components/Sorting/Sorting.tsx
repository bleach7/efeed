import { FC } from "react";
import styles from "./Sorting.module.css";
import { SortEnum, SortingProps } from "./Sorting.props";
import classNames from "classnames";
import { RatingIcon } from "../../assets/imgs/icons/jsx";

export const Sorting: FC<SortingProps> = ({
  sort,
  setSort,
  className,
  ...props
}) => {
  return (
    <div className={classNames(styles.sorting, className)} {...props}>
      <button
        type="button"
        className={classNames(styles.btn, {
          [styles.active]: sort === SortEnum.Rating,
        })}
        onClick={() => setSort(SortEnum.Rating)}
      >
        <RatingIcon />
        <span>По рейтингу</span>
      </button>
      <button
        type="button"
        className={classNames(styles.btn, {
          [styles.active]: sort === SortEnum.Price,
        })}
        onClick={() => setSort(SortEnum.Price)}
      >
        <RatingIcon />
        <span>По цене</span>
      </button>
    </div>
  );
};
