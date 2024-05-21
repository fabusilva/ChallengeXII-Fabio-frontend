import style from "./SelectForm.module.css";

interface SelectProps {
  name: string;
  text?: string;
  placeholder: string;
  value: string;
  options?: string[];
  disable?: boolean;
  handleOnChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectForm({
  name,
  text,
  value,
  placeholder,
  options,
  disable,
  handleOnChange,
}: SelectProps) {
  return (
    <div className={style.selectContainer}>
      <div className={style.formatSelect}>
          <select
            className={style.selectStyle}
            name={name}
            id={name}
            value={value}
            disabled={disable}
            onChange={handleOnChange}
          >
            <option className={style.selectOption} value="">{placeholder}</option>
            {options?.map((option, index) => (
              <option className={style.selectOption} key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <label className={style.labelSelect} htmlFor={name}>{text}</label>
      </div>
    </div>
  );
}
