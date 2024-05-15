import Image from "next/image";
import style from "./SessionOne.module.css";
import ButtonSubmit from "../_ui/ButtonSubmit/ButtonSubmit";
import InputForm from "../_ui/InputForm/InputForm";

export default function SessionOne() {
  const img: string =
    "https://challengexiifabio.s3.amazonaws.com/Imagens/Sess%C3%A3o+1/Image.png";
  const icon:string = 'https://challengexiifabio.s3.amazonaws.com/Imagens/Sess%C3%A3o+1/%E2%86%B3Color.png';
  return (
    <div className={style.sessionOne}>
      <div className={style.SessionContainer}>
        <div className={style.imageContainer}>
          <Image
            className={style.image}
            src={img}
            alt="img"
            width={610}
            height={593.73}
          />
        </div>
        <div className={style.formContainer}>
          <div className={style.formHeader}>
            <p>NEED A RIDE?</p>
            <p className={style.textHeader}>
              Book with <span className={style.spanMyHeader}>my</span>
              <span className={style.spanRideHeader}>RIDE</span> now!
            </p>
          </div>
          <form className={style.sessionForm}>
            <h1>Find a ride now</h1>
            <InputForm
              text="Your Pickup"
              typeInput="text"
              name="ipLocation"
              placeholder="Current Location"
            />
            <InputForm
              text="Your Destination"
              name="destination"
              typeInput="text"
            />
            <ButtonSubmit text="find a driver" url={icon}/>
          </form>
        </div>
      </div>
    </div>
  );
}
