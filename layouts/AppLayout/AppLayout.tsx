import { FC } from "react";
import styles from "./AppLayout.module.css";
import { AppLayoutProps } from "./AppLayout.props";
import { Footer, Header, Sidebar } from "../components";

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <main className={styles.main}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FC<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppLayout>
        <Component {...props} />
      </AppLayout>
    );
  };
};
