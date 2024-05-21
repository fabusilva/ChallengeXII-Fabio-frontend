import CardSessionTwo from '../CardSessionTwo/CardSessionTwo';
import style from './SessionTwo.module.css'

export default function SessionTwo(){
    const imgBasic:string= process.env.NEXT_PUBLIC_SESSION_TWO_BASIC;
    const imgComfort:string= process.env.NEXT_PUBLIC_SESSION_TWO_CONFORT;
    const imgBusiness:string= process.env.NEXT_PUBLIC_SESSION_TWO_BUSINESS;
    const imgDeluxe:string= process.env.NEXT_PUBLIC_SESSION_TWO_DELUXE;
    const textBasic:string= 'The best balance of price and comfort. You will not go wrong with our basic rides.'
    const textComfort:string= 'If comfort is your priority, this is the ride for you. It\`s spacious and packed with features.'
    const textBusiness:string= 'Do you want to travel around the city in style? Make sure to select or business class rides.'
    const textDeluxe:string= 'The best ride for luxury and comfort. No compromises here. You\`ll surely get what you pay for.'
    return(
        <div className={style.sessionTwoContainer}>
            <div className={style.sessionTwoHeader}>
                <p className={style.txt}>Why should you ride with us?</p>
                <h1 className={style.title}>Best in class rides</h1>
            </div>
            <div className={style.sessionTwoCards}>
                <CardSessionTwo title='Basic' text={textBasic} url={imgBasic}/>
                <CardSessionTwo title='Comfort' text={textComfort} url={imgComfort}/>
                <CardSessionTwo title='Business' text={textBusiness} url={imgBusiness}/>
                <CardSessionTwo title='Deluxe' text={textDeluxe} url={imgDeluxe}/>
            </div>
        </div>
    )
}