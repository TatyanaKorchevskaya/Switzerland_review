import { OptionType } from "./../../constants/acrticleVar";

import { Text } from "./../text/index";
import { Option } from "./Option";

import * as styles from "./Radio.module.scss";

type RadioProps = {
  title: string;
  options: OptionType[];
  onChange?: Function;
  selected: OptionType;
  name: string;
};

export const Radio = (props: RadioProps) => {
  const { title, options, onChange, selected, name } = props;
  const handleChange = (option: OptionType) => onChange?.(option);

  return (
    <div className={styles.container}>
      {title && (
        <>
          <Text size={12} weight={800} uppercase>
            {title}
          </Text>
        </>
      )}
      <div className={styles.options_class}>
        {options.map((option) => (
          <Option
            key={option.value}
            groupName={name}
            value={option.value}
            title={option.title}
            selected={selected}
            onChange={() => handleChange(option)}
            option={option}
          />
        ))}
      </div>
    </div>
  );
};
