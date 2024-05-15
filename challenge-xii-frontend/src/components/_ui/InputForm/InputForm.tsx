import style from './InputForm.module.css'

interface InputProsp{
    typeInput: string;
    text: string;
    placeholder?:string;
    arrayOpcoes?:[string];
}
export default function InputForm({typeInput, text,placeholder,arrayOpcoes}:InputProsp){
    return(
        <div className={style.inputContainer}>
            <label className={style.labelForm}>{text}</label>
            <input className={style.inputStyle} type={typeInput} placeholder={placeholder}/>
        </div>
    )
}