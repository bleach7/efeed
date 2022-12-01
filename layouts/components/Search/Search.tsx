import { FC, KeyboardEvent, useState } from "react";
import { SearchProps } from "./Search.props";
import styles from "./Search.module.css";
import classNames from "classnames";
import { Input } from "../../../components/UI";
import { SearchIcon } from "../../../assets/imgs/icons/jsx";
import { useRouter } from "next/router";

export const Search: FC<SearchProps> = ({ className, ...props }) => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const goToSearch = (): void => {
    router.push({
      pathname: "/search",
      query: {
        q: search,
      },
    });
  };

  const handleKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      goToSearch();
    }
  };

  return (
    <div className={classNames(styles.search, className)} {...props}>
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Поиск..."
        className={styles.input}
        style={{ paddingRight: "40px" }}
        onKeyDown={handleKeydown}
      />
      <button
        type="button"
        className={classNames(styles.btn)}
        onClick={goToSearch}
      >
        <SearchIcon />
      </button>
    </div>
  );
};
