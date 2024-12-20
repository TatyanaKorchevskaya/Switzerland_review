import * as styles from "./ArticleParamsForm.module.scss";
import { Text } from "./../text/Text";
import { Select } from "../select/Select";
import {
  ArticleStateType,
  OptionType,
  backgroundColors,
  contentWidthArr,
  defaultArticleState,
  fontColors,
  fontFamilyOptions,
  fontSizeOptions,
} from "./../../constants/acrticleVar";
import { useState, FormEvent, useRef } from "react";
import { Radio } from "../radio/Radio";
import { Splitter } from "../splitter/Splitter";
import { Button } from "../button/Button";
import { IAllOptions } from "../../App";
import clsx from "clsx";
import { ArrowBtn } from "../arrow-btn/ArrowBtn";
import { useOutsideClickClose } from "./hooks/useOutsideClickClose";

interface PropsArticleParamsForm {
  setPageState: React.Dispatch<React.SetStateAction<IAllOptions>>;
}

export const ArticleParamsForm = ({
  setPageState,
}: PropsArticleParamsForm) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  function toggleOpen() {
    setIsMenuOpen((oldVal) => !oldVal);
  }
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const [formState, setFormState] =
    useState<ArticleStateType>(defaultArticleState);

  const rootRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  useOutsideClickClose({
    isMenuOpen,
    rootRef,
    btnRef,    
    onClose: toggleOpen,
    onChange: setIsMenuOpen,
  });

  const handleChange = (fieldName: string) => {
    return (value: OptionType) => {
      setFormState((currentFormState) => ({
        ...currentFormState,
        [fieldName]: value,
      }));
    };
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPageState(formState);
  };

  const handleReset = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState(defaultArticleState);
    setPageState(defaultArticleState);
  };
  return (
    <>
      <ArrowBtn isActive={isMenuOpen} onClick={toggleOpen} refElement={btnRef} />
      <aside
        ref={rootRef}
        className={clsx({
          [styles.container]: true,
          [styles.container_open]: isMenuOpen,
        })}
      >
        <form
          className={styles.form}
          onSubmit={handleSubmit}
          onReset={handleReset}
        >
          <Text as="h2" size={31} weight={800}>
            Задайте параметры
          </Text>
          <div className={styles.fields}>
            <Select
              title="Шрифт"
              selected={formState.fontFamilyOption}
              options={fontFamilyOptions}
              onChange={handleChange("fontFamilyOption")}
              parent="ArticleParamsForm"

            />
            <Radio
              title="Размер шрифта"
              options={fontSizeOptions}
              onChange={handleChange("fontSizeOption")}
              name="fontSizeOption"
              selected={formState.fontSizeOption}
            />
            <Select
              title="Цвет шрифта"
              selected={formState.fontColor}
              options={fontColors}
              onChange={handleChange("fontColor")}
              parent="ArticleParamsForm"
            />
            <Splitter />
            <Select
              title="Цвет фона"
              selected={formState.backgroundColor}
              options={backgroundColors}
              onChange={handleChange("backgroundColor")}
              parent="ArticleParamsForm"
            />
            <Select
              title="Ширина контента"
              selected={formState.contentWidth}
              options={contentWidthArr}
              onChange={handleChange("contentWidth")}
              parent="ArticleParamsForm"
            />
          </div>

          <div className={styles.btnswrap}>
            <Button elementClasses={styles.btnreset} type="reset">
              Сбросить
            </Button>
            <Button elementClasses={styles.btnsubmit} type="submit">
              Применить
            </Button>
          </div>
        </form>
      </aside>
    </>
  );
};
