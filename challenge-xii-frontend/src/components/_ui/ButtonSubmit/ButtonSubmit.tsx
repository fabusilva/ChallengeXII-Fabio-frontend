import Image from 'next/image';
import style from './ButtonSubmit.module.css';

interface ButtonProps {
    text: string;
    url?: string;
    onclickProps?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function ButtonSubmit({ text, url, onclickProps }: ButtonProps) {
    if (url) {
        return (
            <button onClick={onclickProps} className={style.button}>
                <Image className={style.imageButton} src={url} alt="img" width={17.49} height={17.49}/>
                {text}
            </button>
        );
    } else {
        return (
            <button className={style.button}>{text}</button>
        );
    }
}
