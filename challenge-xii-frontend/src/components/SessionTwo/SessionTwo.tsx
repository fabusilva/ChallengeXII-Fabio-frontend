import CardSessionTwo from '../CardSessionTwo/CardSessionTwo';
import style from './SessionTwo.module.css'

export default function SessionTwo(){
    const imgBasic:string= 'https://challengexiifabio.s3.amazonaws.com/Imagens/Sess%C3%A3o+2/card+image.png';
    const textBasic:string= 'The best balance of price and comfort. You will not go wrong with our basic rides.'
    return(
        <div className={style.sessionTwoContainer}>
            <div className={style.sessionTwoHeader}>
                <p className={style.txt}>Why should you ride with us?</p>
                <h1 className={style.title}>Best in class rides</h1>
            </div>
            <div className={style.sessionTwoCards}>
                <CardSessionTwo title='Basic' text={textBasic} url={imgBasic}/>
                <CardSessionTwo title='Comfort' text={textBasic} url={imgBasic}/>
                <CardSessionTwo title='Business' text={textBasic} url={imgBasic}/>
                <CardSessionTwo title='Deluxe' text={textBasic} url={imgBasic}/>
            </div>
        </div>
    )
}