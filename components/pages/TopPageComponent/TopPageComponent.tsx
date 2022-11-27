import { FC, useReducer } from "react";
import { TopLevelCategory } from "../../../interfaces/page.interface";
import { Advantages } from "../../Advantages/Advantages";
import { Badge, Heading } from "../../UI";
import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from "./TopPageComponent.module.css";
import { HhData } from "../../HhData/HhData";
import { Sorting } from "../../Sorting/Sorting";
import { SortEnum } from "../../Sorting/Sorting.props";
import { sortReducer } from "./sort.reducer";

export const TopPageComponent: FC<TopPageComponentProps> = ({
  firstCategory,
  page,
  products,
}) => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
    sortReducer,
    {
      products,
      sort: SortEnum.Rating,
    }
  );

  const setSort = (sort: SortEnum): void => {
    dispatchSort({ type: sort });
  };

  return (
    <section className="pt-[35px]">
      <div className="mb-[20px] grid grid-cols-[auto_1fr_auto] items-center justify-items-start gap-[20px]">
        <Heading as="h1">{page.title}</Heading>
        {Boolean(products) && (
          <Badge appearance="gray" size="md">
            {products.length}
          </Badge>
        )}
        <Sorting sort={sort} setSort={setSort} />
      </div>
      <div>
        {Boolean(sortedProducts) &&
          sortedProducts.map((product) => (
            <article key={product._id}>{product.title}</article>
          ))}
      </div>
      <div className="mb-[25px] mt-[51px] grid grid-cols-[auto_1fr] items-center justify-items-start gap-[20px]">
        <Heading as="h2">Вакансии - {page.category}</Heading>
        <Badge appearance="red" size="md">
          hh.ru
        </Badge>
      </div>
      {firstCategory === TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh} />
      )}
      {page.advantages && page.advantages.length > 0 && (
        <>
          <Heading as="h2" className="mt-[47px] mb-[27px]">
            Преимущества
          </Heading>
          <ul className="mb-[30px]">
            <Advantages advantages={page.advantages} />
          </ul>
        </>
      )}
      {page.seoText && (
        <div
          className={styles.seo}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        ></div>
      )}
      <Heading as="h2" className="mt-[30px] mb-[20px]">
        Получаемые навыки
      </Heading>
      <div className="flex items-center">
        {page.tags.map((tag) => (
          <Badge size="sm" appearance="primary" key={tag}>
            {tag}
          </Badge>
        ))}
      </div>
    </section>
  );
};
