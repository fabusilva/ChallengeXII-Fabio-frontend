import Image from 'next/image';
import style from './ButtonSubmit.module.css';

interface ButtonProps {
    text: string;
    url?: string;
}

export default function ButtonSubmit({ text, url }: ButtonProps) {
    if (url) {
        return (
            <button className={style.button}>
                <Image src={url} alt="img" />
                {text}
            </button>
        );
    } else {
        return (
            <button className={style.button}>{text}</button>
        );
    }
}
