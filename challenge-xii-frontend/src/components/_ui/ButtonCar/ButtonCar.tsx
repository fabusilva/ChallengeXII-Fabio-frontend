import Image from 'next/image';
import style from './ButtonCar.module.css';
interface ButtonCarPros{
    text:string;
    url:string;
}
export default function ButtonCar({url,text}:ButtonCarPros){
    return(
        <div className={style.buttonCarContainer}>
            <button className={style.buttonStyle}>
                <Image src={url} width={34.38} height={16.39} alt={''}/>
                <span className={style.textButtonCar}>{text}</span>
                </button>
        </div>
    )
}