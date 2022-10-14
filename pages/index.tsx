import type { NextPage } from "next";
import { Badge, Heading, Text } from "../components/UI";

const Home: NextPage = () => {
  return (
    <>
      <div className="container">
        <div className="mb-[20px]">
          <Heading as="h1">Lorem ipsum dolor sit amet.</Heading>
          <Heading as="h2">Lorem ipsum dolor sit amet.</Heading>
          <Heading as="h3">Lorem ipsum dolor sit amet.</Heading>
        </div>
        <div className="mb-[20px]">
          <Text size="lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In rem
            necessitatibus vitae ipsum voluptate ad ex! Dolorum, nisi. Illo
            accusamus voluptatem, hic voluptatibus eligendi ex. Eum quod
            cupiditate temporibus molestiae.
          </Text>
          <Text size="md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In rem
            necessitatibus vitae ipsum voluptate ad ex! Dolorum, nisi. Illo
            accusamus voluptatem, hic voluptatibus eligendi ex. Eum quod
            cupiditate temporibus molestiae.
          </Text>
          <Text size="sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In rem
            necessitatibus vitae ipsum voluptate ad ex! Dolorum, nisi. Illo
            accusamus voluptatem, hic voluptatibus eligendi ex. Eum quod
            cupiditate temporibus molestiae.
          </Text>
        </div>
        <div className="mb-[20px] flex items-center">
          <Badge size="sm" appearance="ghost">
            Lorem, ipsum dolor.
          </Badge>
          <Badge size="sm" appearance="gray">
            Lorem, ipsum dolor.
          </Badge>
          <Badge size="sm" appearance="primary">
            Lorem, ipsum dolor.
          </Badge>
          <Badge size="sm" appearance="red">
            Lorem, ipsum dolor.
          </Badge>
          <Badge size="sm" appearance="green">
            Lorem, ipsum dolor.
          </Badge>
        </div>
        <div className="nb-[20px]">
          <Badge size="md" appearance="ghost">
            Lorem, ipsum dolor.
          </Badge>
          <Badge size="md" appearance="gray">
            Lorem, ipsum dolor.
          </Badge>
          <Badge size="md" appearance="primary">
            Lorem, ipsum dolor.
          </Badge>
          <Badge size="md" appearance="red">
            Lorem, ipsum dolor.
          </Badge>
          <Badge size="md" appearance="green">
            Lorem, ipsum dolor.
          </Badge>
        </div>
      </div>
    </>
  );
};

export default Home;
