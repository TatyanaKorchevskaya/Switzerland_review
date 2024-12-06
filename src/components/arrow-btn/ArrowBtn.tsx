import * as styles from "./ArrowBtn.module.scss";

import { Button } from "../button";
import { Image } from "./../image/Image";

import arrowImg from "./../../img/arrow.svg";
import clsx from "clsx";

export type ArrowButtonProps = {
  isActive: boolean;
  onClick: () => void;
};

export const ArrowBtn = (props: ArrowButtonProps) => {
  const { onClick, isActive } = props;
  const className = clsx(
    styles.btn,
    isActive&&styles.open
    );

  return (
    <Button elementClasses={className} onClick={onClick}>
      <Image
        src={arrowImg}
        alt="иконка стрелочки"
        elementClasses={styles.img}
      />
    </Button>
  );
};
