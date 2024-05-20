import Image from "next/image";
import style from "./SessionOne.module.css";
import ButtonSubmit from "../_ui/ButtonSubmit/ButtonSubmit";
import InputForm from "../_ui/InputForm/InputForm";
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import axios from "axios";

export default function SessionOne() {
  const img = process.env.NEXT_PUBLIC_SESSION_ONE_BANNER;
  const icon = process.env.NEXT_PUBLIC_SESSION_ONE_SEARCH;

  const [ipLocation, setIpLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [error, setError] = useState("");

  const clearIpLocation = () => setIpLocation("");
  const clearDestination = () => setDestination("");

  const router = useRouter();

  const redirectionPage = (event:any) => {
    event.preventDefault();
    if (!ipLocation && !destination) {
      setError("Os campos do formulário estão vazios");
    } else if (!ipLocation) {
      setError("O campo Your Pickup está vazio");
    } else if (!destination) {
      setError("O campo Your Destination está vazio");
    } else {
      setError("");
      router.push("./NotFound");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "ipLocation") {
      setIpLocation(value);
    } else if (name === "destination") {
      setDestination(value);
    }
  };

  const fetchIP = async () => {
    try {
      const response = await fetch("/api/getIp");
      const data = await response.json();
      setIpLocation(data.city);
    } catch (error) {
      console.log("Erro ao buscar IP: " + error);
    }
  };

  useEffect(() => {
    fetchIP();
  }, []);

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
          <form className={style.sessionForm} onSubmit={redirectionPage}>
            <h1>Find a ride now</h1>
            <InputForm
              text="Your Pickup"
              value={ipLocation}
              typeInput="text"
              name="ipLocation"
              placeholder="Current Location"
              handleOnChange={handleChange}
              limparInput={clearIpLocation}
            />
            <InputForm
              text="Your Destination"
              value={destination}
              name="destination"
              typeInput="text"
              handleOnChange={handleChange}
              limparInput={clearDestination}
            />
            {error && <p className={style.error}>{error}</p>}
            <ButtonSubmit text="find a driver" onclickProps={redirectionPage} url={icon} />
          </form>
        </div>
      </div>
    </div>
  );
}
