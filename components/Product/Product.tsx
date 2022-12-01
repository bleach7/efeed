import { FC } from "react";
import { ProductProps } from "./Product.props";
import styles from "./Product.module.css";
import { Badge, Button, Card, Divider, Heading, Rating, Text } from "../UI";
import { priceRu } from "../../helpers/priceRu";
import { declOfNum } from "../../helpers/declOfNum";
import Image from "next/image";
import classNames from "classnames";

export const Product: FC<ProductProps> = ({ product, className }) => {
  return (
    <Card className={styles.product}>
      <div className={styles.logo}>
        <Image
          src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
          alt={product.title}
          width={70}
          height={70}
          layout="intrinsic"
        />
      </div>
      <div className={styles.title}>
        <Heading as="h3">{product.title}</Heading>
      </div>
      <div className={styles.price}>
        <span className="pb-[2px]">{priceRu(product.price)}</span>
        {product.oldPrice && (
          <Badge size="sm" appearance="green" className="ml-[5px]">
            {priceRu(product.price - product.oldPrice)}
          </Badge>
        )}
      </div>
      <div className={styles.credit}>
        {priceRu(product.credit)}
        <span className="text-[14px] leading-[19px]">/мес</span>
      </div>
      <div className={styles.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating} />
      </div>
      <div className={styles.tags}>
        {product.categories.map((category) => (
          <Badge
            size="sm"
            key={category}
            appearance="ghost"
            className={styles.tag}
          >
            {category}
          </Badge>
        ))}
      </div>
      <div className={styles.priceTitle}>цена</div>
      <div className={styles.creditTitle}>кредит</div>
      <div className={styles.rateTitle}>
        {product.reviewCount}
        {declOfNum(product.reviewCount, ["отзыв", "отзыва", "отзывов"])}
      </div>
      <Divider className={styles.hr} />
      <div className={styles.description}>
        <Text size="md">{product.description}</Text>
      </div>
      <div className={styles.feature}>
        {product.characteristics.length > 0 &&
          product.characteristics.map((c) => (
            <div
              key={c.name}
              className="mb-[11px] grid grid-cols-[auto_1fr_auto] items-baseline gap-x-[10px] last:mb-0"
            >
              <span className="text-[16px] font-bold leading-[21px]">
                {c.name}
              </span>
              <span className="border-b-[1px] border-dashed border-b-[#C4C4C4]"></span>
              <span className="text-[16px] font-medium">{c.value}</span>
            </div>
          ))}
      </div>
      <div className={styles.advBlock}>
        {product.advantages && (
          <div className="border-l-[3px] border-[#1DC37E] pl-[13px]">
            <p className="mb-[5px] text-[16px] font-bold leading-[21px]">
              Преимущества
            </p>
            <p>{product.advantages}</p>
          </div>
        )}
        {product.disadvantages && (
          <div className="border-l-[3px] border-[#FC836D] pl-[13px]">
            <p className="mb-[5px] text-[16px] font-bold leading-[21px]">
              Недостатки
            </p>
            <p>{product.disadvantages}</p>
          </div>
        )}
      </div>
      <Divider className={classNames(styles.hr, styles.h2)} />
      <div className={styles.actions}>
        <Button appearance="primary">Узнать подробнее</Button>
        <Button appearance="secondary" arrow="right">
          Читать отзывы
        </Button>
      </div>
    </Card>
  );
};
