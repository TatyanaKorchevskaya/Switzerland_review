import * as styles from "./Radio.module.scss";
import { OptionType } from "./../../constants/acrticleVar";

import { Text } from "./../text/index";
import { useRef } from "react";
import { useEnterSubmit } from "./hooks/useEnterSubmit";

type OptionProps = {
  value: string;
  title: string;
  selected: OptionType;
  option: OptionType;
  onChange?: (option: OptionType) => void;
  groupName: string;
};

export const Option = (props: OptionProps) => {
  const { value, title, selected, option, onChange, groupName } = props;
  const optionRef = useRef<HTMLDivElement>(null);
  const handleChange = () => onChange?.(option);

  const inputId = `${groupName}_radio_item_with_value__${value}`;
  const isChecked = value === selected.title;

  useEnterSubmit({ onChange, option });

  return (
    <div className={styles.item} key={value} tabIndex={0} ref={optionRef} data-checked={isChecked} data-testid={inputId}>
      <input
				className={styles.input}
				type='radio'
				name={groupName}
				id={inputId}
				value={value}
				onChange={handleChange}
				tabIndex={-1}
			/>
      <label className={styles.label} htmlFor={inputId}>
        <Text size={18} uppercase>
          {title}
        </Text>
      </label>
    </div>
  );
};
