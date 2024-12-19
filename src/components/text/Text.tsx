import { clsx } from "clsx";
import { ElementType, ReactNode } from "react";

import * as styles from "./Text.module.scss";
import { FontFamiliesClasses } from "../../constants/acrticleVar";

type TextProps = {
  /** Сам текст для вывода */
  children: ReactNode;
  as?: ElementType;
  elementClasses?: string;
  /** Булевая пропса, должен ли текст меняться в зависимости от конфига */
  dynamic?: boolean;
  /** Размер шрифта */
  size?: 12 | 18 | 22 | 25 | 31 | 45;
  /** Вес шрифта */
  weight?: 400 | 800;
  /** Стиль шрифта */
  fontStyle?: "italic" | "normal";
  /** Булевая пропса, отвечающая должен ли текст быть в верхнем регистре */
  uppercase?: boolean;
  /** Выравнивание текста */
  align?: "center" | "left";
  family?: FontFamiliesClasses;

  /** Булевая пропса, делает динамическим только семью шрифтов и цвет */
  dynamicLite?: boolean;
};

export const Text = ({
  children,
  as: Tag = "div",
  elementClasses = "",
  size = 18,
  dynamic = false,
  weight = 400,
  fontStyle = "normal",
  uppercase = false,
  align = "left",
  family = 'open-sans',
  dynamicLite = false,

}: TextProps) => {
  const className = clsx(
    styles.text,
    styles[`size${size}`],
    { [styles.dynamic]: dynamic },
    styles[`weight${weight}`],
    styles[`${fontStyle}`],
    { [styles.uppercase]: uppercase },
    styles[`${align}`],
    styles[`${family}`],
    { [styles.dynamicLite]: dynamicLite },
    elementClasses
  );

  return <Tag className={className}>{children}</Tag>;
};
