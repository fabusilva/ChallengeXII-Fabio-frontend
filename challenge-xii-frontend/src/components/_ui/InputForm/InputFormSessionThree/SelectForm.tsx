import style from "./SelectForm.module.css";

interface SelectPros {
  name?: string;
  text?: string;
  value?: string;
  options?: string[];
  handleOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function SelectForm({
  name,
  text,
  value,
  options,
  handleOnChange,
}: SelectPros) {
  return (
    <div className={style.selectContainer}>
      <label className={style.labelSelect}>{text}</label>
      <select className={style.selectStyle} name={name} id={name}>
        <option value="" key="">{text}</option>
      </select>
    </div>
  );
}
