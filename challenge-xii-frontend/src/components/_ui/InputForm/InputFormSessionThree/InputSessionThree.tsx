import Image from 'next/image';
import style from './InputSessionThree.module.css';
import { useState } from 'react';
interface InputProsp {
    typeInput: string;
    text?: string;
    url?: string;
    name?: string;
    validation?: string;
    value?: string;
    handleOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

export default function InputSessionThree({ typeInput, text, name, value, placeholder, validation, handleOnChange }: InputProsp) {
    const icon = process.env.NEXT_PUBLIC_SESSION_ONE_X;
    const iconFoco = process.env.NEXT_PUBLIC_SESSION_ONE_X_FOCUS;

    const [selectIcon, setSelectIcon] = useState(icon);
    const handleFocus = () => {
        setSelectIcon(iconFoco);
    }

    const handleBlur = () => {
        setSelectIcon(icon); 
    }
    const limparInput = () => { }

    return (
        <div className={style.inputSessionThreeContainer}>
            <div className={style.formatInput}>

                <input
                    className={style.inputSessionThreeStyle}
                    type={typeInput}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={handleOnChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    />
                <div className={style.imgSessionThreeContainer}>
                    <Image onClick={limparInput} className={style.imgInput} src={selectIcon} width={20} height={20} alt='' />
                </div>
            </div>
        </div>
    );
}
