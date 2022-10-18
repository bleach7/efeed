import { useMemo } from "react";
import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";

export const Footer = ({ className, ...props }: FooterProps) => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer {...props} className={cn(styles.footer, className)}>
      <p className={styles.copyright}>
        OWLtop &copy;&nbsp;2020&nbsp;&mdash; {currentYear} Все права защищены
      </p>
      <div className="flex flex-col sm:flex-row md:items-center">
        <p className="mb-[20px] sm:mb-0 sm:mr-[15px] lg:mr-[40px]">
          Пользовательское соглашение
        </p>
        <p>Политика конфиденциальности</p>
      </div>
    </footer>
  );
};
