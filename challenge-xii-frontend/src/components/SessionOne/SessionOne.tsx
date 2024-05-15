import Image from 'next/image';
import style from "./SessionOne.module.css";
import img from "../../../public/Image.png"
import ButtonSubmit from '../_ui/ButtonSubmit/ButtonSubmit';
import InputForm from '../_ui/InputForm/InputForm';

export default function SessionOne() {
  return (
    <div className={style.sessionOne}>
      <div className={style.SessionContainer}>
        <div className={style.imageContainer}>
            <Image className={style.image} src={img} alt="img"/>
        </div>
        <div className={style.formContainer}>
          <div className={style.formHeader}>
            <p>NEED A RIDE?</p>
            <p className={style.textHeader}>Book with <span className={style.spanMyHeader}>my</span><span className={style.spanRideHeader}>RIDE</span> now!</p>
          </div>
          <form className={style.sessionForm}>
            <h1>Find a ride now</h1>
            <InputForm text='Your Pickup' typeInput='text' placeholder='Current Location'/>
            <InputForm text='Your Destination' typeInput='text'/>
            <ButtonSubmit text='find a driver'/>
          </form>
        </div>
      </div>
    </div>
  );
}
