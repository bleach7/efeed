import type { GetStaticProps, NextPage } from "next";
import { useState } from "react";
import {
  Badge,
  Button,
  Divider,
  Heading,
  Input,
  Rating,
  Text,
  Textarea,
} from "../components/UI";
import { withLayout } from "../layouts/AppLayout/AppLayout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";
import { Search } from "../layouts/components/Search/Search";

const Home: NextPage<HomeProps> = ({ menu }) => {
  const [rating, setRating] = useState<number>(5);

  return (
    <>
      <div className="mb-[25px]">
        <Heading as="h1">Lorem ipsum dolor sit amet.</Heading>
        <Heading as="h2">Lorem ipsum dolor sit amet.</Heading>
        <Heading as="h3">Lorem ipsum dolor sit amet.</Heading>
      </div>
      <div className="mb-[25px]">
        <Text size="lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, nihil
          vel aut sed quis quas alias, obcaecati vero harum fugiat nisi. Aliquid
          commodi cupiditate dolorum. Aperiam ut possimus tenetur consequatur.
        </Text>
      </div>
      <div className="mb-[25px]">
        <Text size="md">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, nihil
          vel aut sed quis quas alias, obcaecati vero harum fugiat nisi. Aliquid
          commodi cupiditate dolorum. Aperiam ut possimus tenetur consequatur.
        </Text>
      </div>
      <div className="mb-[25px]">
        <Text size="sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, nihil
          vel aut sed quis quas alias, obcaecati vero harum fugiat nisi. Aliquid
          commodi cupiditate dolorum. Aperiam ut possimus tenetur consequatur.
        </Text>
      </div>
      <div className="mb-[25px]">
        <Badge appearance="ghost" size="sm">
          Lorem, ipsum dolor.
        </Badge>
        <Badge appearance="gray" size="sm">
          Lorem, ipsum dolor.
        </Badge>
        <Badge appearance="primary" size="sm">
          Lorem, ipsum dolor.
        </Badge>
        <Badge appearance="green" size="sm">
          Lorem, ipsum dolor.
        </Badge>
        <Badge appearance="red" size="sm">
          Lorem, ipsum dolor.
        </Badge>
      </div>
      <div className="mb-[25px] flex items-center rounded bg-white px-[20px] py-[15px]">
        <Button appearance="primary" className="mr-[10px]">
          Click Me!
        </Button>
        <Button appearance="secondary" className="mr-[10px]">
          Click Me!
        </Button>
        <Button appearance="primary" arrow="right" className="mr-[10px]">
          Click Me!
        </Button>
        <Button appearance="secondary" arrow="down">
          Click Me!
        </Button>
      </div>
      <div className="mb-[25px]">
        <Rating rating={rating} setRating={setRating} isEditable />
      </div>
      <div className="mb-[25px]">
        <Input placeholder="Name" />
      </div>
      <div className="mb-[25px]">
        <Textarea placeholder="Description" />
      </div>
      <div className="mb-[25px]">
        <Divider />
      </div>
    </>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;

  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
