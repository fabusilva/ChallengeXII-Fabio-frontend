import style from './InputForm.module.css'

interface InputProsp{
    typeInput: string;
    text: string;
    url?:string;
    name?: string;
    validation?: string;
    value?: string;
    handleOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

export default function InputForm({ typeInput, text,name,value, placeholder,validation, handleOnChange }: InputProsp) {
    return (
        <div className={style.inputContainer}>
            <label className={style.labelForm}>{text}</label>
            <input
                className={style.inputStyle}
                type={typeInput}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={handleOnChange}
            />
        </div>
    );
}
