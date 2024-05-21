import Image from "next/image";
import style from "./CardSessionTwo.module.css";
import { useRouter } from "next/router";
interface CardSessionTwoProps{
    title: string
    text: string
    url: string

}
export default function CardSessionTwo({title,text,url}:CardSessionTwoProps){
    const router = useRouter();
    const redirectionPage = () =>{
        router.push("./NotFound")
    }
    return(
        <div className={style.cardContainer}>
            <Image src={url} width={307} height={214} alt="img"/>
            <h1 className={style.cardTitle}>{title}</h1>
            <p className={style.cardText}>{text}</p>
            <div className={style.buttonContainer}>
                <button onClick={redirectionPage} className={style.cardButton}>LEARN MORE</button>
            </div>
        </div>
    )
}