import Image from 'next/image';
import style from './InputForm.module.css';
import { useState } from 'react';

interface InputProsp {
    typeInput: string;
    text?: string;
    url?: string;
    name?: string;
    placeholder?: string;
    value: string;
    handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    limparInput: () => void;
}

export default function InputForm({ typeInput, text, name, value, placeholder, handleOnChange,limparInput }: InputProsp) {
    const icon = process.env.NEXT_PUBLIC_SESSION_ONE_X;
    const iconFoco = process.env.NEXT_PUBLIC_SESSION_ONE_X_FOCUS;

    const [selectIcon, setSelectIcon] = useState(icon);
    const handleFocus = () => {
        setSelectIcon(iconFoco);
    }

    const handleBlur = () => {
        setSelectIcon(icon); 
    }

    return (
        <div className={style.inputContainer}>
            <div className={style.formatInput}>
                <input
                    className={style.inputStyle}
                    type={typeInput}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={handleOnChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
                <label className={style.labelForm}>{text}</label>
                <div className={style.imgContainer}>
                    <Image onClick={limparInput} className={style.imgInput} src={selectIcon} width={20} height={20} alt='' />
                </div>
            </div>
        </div>
    );
}
