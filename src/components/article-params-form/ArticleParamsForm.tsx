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
import { useState, FormEvent } from "react";
import { Radio } from "../radio/Radio";
import { Splitter } from "../splitter/Splitter";
import { Button } from "../button/Button";
import { IAllOptions } from "../../App";
import clsx from "clsx";
import { ArrowBtn } from "../arrow-btn/ArrowBtn";

interface PropsArticleParamsForm {
  toggleOpenFn: () => void;
  openState: boolean;
  setPageState: React.Dispatch<React.SetStateAction<IAllOptions>>;
}

export const ArticleParamsForm = ({
  toggleOpenFn,
  openState,
  setPageState,
}: PropsArticleParamsForm) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const [formState, setFormState] =
    useState<ArticleStateType>(defaultArticleState);

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
      <ArrowBtn isActive={openState} onClick={toggleOpenFn} />
      <aside
        className={clsx({
          [styles.container]: true,
          [styles.container_open]: openState,
        })}
      >
        <form className={styles.form} onSubmit={handleSubmit} onReset={handleReset}>
          <Text as="h2" size={31} weight={800}>
            Задайте параметры
          </Text>
          <div className={styles.fields}>
            <Select
              title="Шрифт"
              selected={formState.fontFamilyOption}
              options={fontFamilyOptions}
              onChange={handleChange("fontFamilyOption")}
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
            />
            <Splitter />
            <Select
              title="Цвет фона"
              selected={formState.backgroundColor}
              options={backgroundColors}
              onChange={handleChange("backgroundColor")}
            />
            <Select
              title="Ширина контента"
              selected={formState.contentWidth}
              options={contentWidthArr}
              onChange={handleChange("contentWidth")}
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
