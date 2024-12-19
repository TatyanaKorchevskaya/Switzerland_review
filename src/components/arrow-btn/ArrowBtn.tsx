import * as styles from "./ArrowBtn.module.scss";

import { Button } from "../button";
import { Image } from "./../image/Image";

import arrowImg from "./../../img/arrow.svg";
import clsx from "clsx";

import React, { forwardRef } from "react";
import { ButtonProps } from "../../stories/Button";

export type ArrowButtonProps = {
  isActive: boolean;
  onClick: () => void;
  refElement: React.LegacyRef<HTMLButtonElement>;
};

export const ArrowBtn = (props: ArrowButtonProps) => {
  const { onClick, isActive, refElement } = props;
  const className = clsx(
    styles.btn,
    isActive&&styles.open
    );

  return (
    <Button elementClasses={className} onClick={onClick} elementRef={refElement}>
      <Image
        src={arrowImg}
        alt="иконка стрелочки"
        elementClasses={styles.img}
      />
    </Button>
  );
};
