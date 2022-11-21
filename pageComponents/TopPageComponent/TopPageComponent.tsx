import { FC } from "react";
import { Badge, Card, Heading, HhData } from "../../components/UI";
import { TopPageComponentProps } from "./TopPageComponent.props";

export const TopPageComponent: FC<TopPageComponentProps> = ({
  firstCategory,
  page,
  products,
}) => {
  return (
    <section className="pt-[35px]">
      <div className="grid grid-cols-[auto_1fr_auto] items-center justify-items-start gap-[20px]">
        <Heading as="h1">{page.title}</Heading>
        {Boolean(products) && (
          <Badge appearance="gray" size="md">
            {products.length}
          </Badge>
        )}
        <span>Сортировка</span>
      </div>
      <div>
        {Boolean(products) &&
          products.map((product) => (
            <article key={product._id}>{product.title}</article>
          ))}
      </div>
      <div className="grid grid-cols-[auto_1fr] items-center justify-items-start gap-[20px]">
        <Heading as="h2">Вакансии - {page.category}</Heading>
        <Badge appearance="red" size="md">
          hh.ru
        </Badge>
      </div>
      <HhData {...page.hh} />
    </section>
  );
};
