import Image from "next/image";
import style from "./CardSessionTwo.module.css";
interface CardSessionTwoProps{
    title: string
    text: string
    url: string

}
export default function CardSessionTwo({title,text,url}:CardSessionTwoProps){
    return(
        <div className={style.cardContainer}>
            <Image src={url} width={307} height={214} alt="img"/>
            <h1 className={style.cardTitle}>{title}</h1>
            <p className={style.cardText}>{text}</p>
        </div>
    )
}