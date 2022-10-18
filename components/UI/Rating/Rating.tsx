import { useState, Fragment, useEffect } from "react";
import styles from "./Rating.module.css";
import { RatingProps } from "./Rating.props";
import { StarIcon } from "../../../assets/imgs/icons/jsx";
import cn from "classnames";

export const Rating = ({
  isEditable,
  setRating,
  rating,
  ...props
}: RatingProps) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const changeDisplay = (i: number): void | undefined => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const handleClick = (i: number): void | undefined => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  const handleSpace = (i: number, e: any): void | undefined => {
    if (e.code !== "Space" || !setRating) {
      return;
    }
    setRating(i);
  };

  const constructRating = (currentRating: number): void => {
    const updatedArray = ratingArray.map(
      (ratingItem: JSX.Element, i: number) => {
        return (
          <button
            key={i}
            type="button"
            className={styles.starBtn}
            onMouseEnter={() => changeDisplay(i + 1)}
            onMouseLeave={() => changeDisplay(rating)}
            onClick={() => handleClick(i + 1)}
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e) => isEditable && handleSpace(i + 1, e)}
          >
            <StarIcon
              className={cn(styles.starIcon, {
                [styles.filled]: i < currentRating,
              })}
            />
          </button>
        );
      }
    );
    setRatingArray(updatedArray);
  };

  return (
    <div {...props} className="flex items-center">
      {ratingArray.map((ratingItem: JSX.Element, i: number) => {
        return <Fragment key={i}>{ratingItem}</Fragment>;
      })}
    </div>
  );
};
