import { NextPage } from "next";
import { withLayout } from "../layouts/AppLayout/AppLayout";

const Search: NextPage = () => {
  return <h1>Search Page</h1>;
};

export default withLayout(Search);
