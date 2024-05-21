import Image from 'next/image';
import style from './SessionThree.module.css';
import ButtonSubmit from '../_ui/ButtonSubmit/ButtonSubmit';
import SelectForm from '../_ui/InputForm/InputFormSessionThree/SelectForm';
import ButtonCar from '../_ui/ButtonCar/ButtonCar';
import InputSessionThree from '../_ui/InputForm/InputFormSessionThree/InputSessionThree';
import { useEffect, useState } from 'react';

export default function SessionThree() {
    const bannerSessionthree = process.env.NEXT_PUBLIC_SESSION_THREE_BANNER;
    const carSedan = process.env.NEXT_PUBLIC_SESSION_THREE_SEDAN;
    const carSuv = process.env.NEXT_PUBLIC_SESSION_THREE_SUV;
    const carSemiLuxury = process.env.NEXT_PUBLIC_SESSION_THREE_SEMI_LUXURY;
    const carLuxury = process.env.NEXT_PUBLIC_SESSION_THREE_LUXURY;
    const errInput = process.env.NEXT_PUBLIC_SESSION_THREE_ERROR;
    const successImg = process.env.NEXT_PUBLIC_SESSION_THREE_CHECK;

    const [fistName, setFistName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [referralCode, setReferralCode] = useState("");
    const [typeCar, setTypeCar] = useState("");

    const [countryOptions, setCountryOptions] = useState([]);
    const [cityOptions, setCityOptions] = useState([]);
    const [disable, setDisable] = useState(true);
    const [isCheck, setIsCheck] = useState(false);

    const [fistNameError, setFistNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [countryError, setCountryError] = useState("");
    const [cityError, setCityError] = useState("");
    const [codeError, setCodeError] = useState("");
    const [carError, setCarError] = useState("");

    const [showSuccess, setShowSuccess] = useState(false);
    const [showForm, setShowForm] = useState(true);

    const [isLoadingCities, setIsLoadingCities] = useState(false);

    const validationForm = () => {
        let isvalidation = true;
        if (!fistName) {
            setFistNameError("Invalid name");
            isvalidation = false;
        }
        if (!lastName) {
            setLastNameError("Invalid last name");
            isvalidation = false;
        }
        if (!email) {
            setEmailError("Invalid email");
            isvalidation = false;
        }
        if (!country) {
            setCountryError("Invalid country");
            isvalidation = false;
        }
        if (!city) {
            setCityError("Invalid city");
            isvalidation = false;
        }
        if (!referralCode) {
            setCodeError("Invalid code");
            isvalidation = false;
        }
        if (!typeCar) {
            setCarError("Select a vehicle type");
            isvalidation = false;
        }
        return isvalidation;
    };

    const handleCheck = () => {
        setIsCheck(!isCheck);
        console.log(isCheck);
    };

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        if (name == "fistName") {
            setFistName(value);
        } else if (name == "lastName") {
            setLastName(value);
        } else if (name == "email") {
            setEmail(value);
        } else if (name == "code") {
            setReferralCode(value);
        }
    };

    const handleSelectChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        if (name === 'country') {
            setCountry(value);
        } else if (name === 'city') {
            setCity(value);
        }
    };

    const saveUser = async () => {
        console.log(fistName, lastName, email, country, city, referralCode, typeCar);
        try {
            const response = await fetch('/api/postUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fistName, lastName, email, country, city, referralCode, typeCar }),
            });
            const data = await response.json();
            console.log(response);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (validationForm()) {
            saveUser();
            setShowSuccess(true);
            setShowForm(false);
        }
    };

    const handleCar = (e: { preventDefault: () => void; currentTarget: { innerText: string; }; }) => {
        e.preventDefault();
        const selectedCar = e.currentTarget.innerText;
        setTypeCar(selectedCar);
    };

    const handleCountryOptions = async () => {
        try {
            const response = await fetch('/api/getCountry');
            const data = await response.json();
            setCountryOptions(data.countries);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleCountryOptions();
    }, []);

    useEffect(() => {
        const handleCityOptions = async () => {
            setIsLoadingCities(true); 
            try {
                const response = await fetch('/api/getCity', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ country }),
                });
                const data = await response.json();
                console.log(data.cities);
                setCityOptions(data.cities);
                setIsLoadingCities(false);
            } catch (error) {
                console.log(error);
                setIsLoadingCities(false);
            }
        };

        if (country) {
            setDisable(false);
            handleCityOptions();
        } else {
            setDisable(true);
        }
    }, [country]);

    return (
        <div className={style.sessionThree}>
            {showForm && (
                <div className={style.sessionThreeContainer}>
                    <div className={style.sessionThreeHeader}>
                        <Image className={style.sessionThreeBanner} src={bannerSessionthree} alt='img' height={132.55} width={193.13} />

                        <div className={style.textContainer}>
                            <h1 className={style.headerTitle}>Drive with MyRide</h1>
                            <p className={style.headerText}>Register as a driver using the form below. Our team will assess and get back to you within 48 hours.</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className={style.sessionThreeForm}>
                        <div className={style.inputNameContainer}>
                            <div className={style.fistNameContainer}>
                                <InputSessionThree typeInput='text' name='fistName' value={fistName} placeholder='Fist Name' handleOnChange={handleChange} />
                                {fistNameError &&
                                    <div className={style.errorForm}>
                                        <Image src={errInput} alt='' height={16} width={16} />
                                        <p className={style.textErr}>{fistNameError}</p>
                                    </div>}
                            </div>

                            <div className={style.lastNameContainer}>
                                <InputSessionThree typeInput='text' name='lastName' value={lastName} placeholder='Last Name' handleOnChange={handleChange} />
                                {lastNameError &&
                                    <div className={style.errorForm}>
                                        <Image src={errInput} alt='' height={16} width={16} />
                                        <p className={style.textErr}>{lastNameError}</p>
                                    </div>}
                            </div>
                        </div>
                        <div className={style.inputContainer}>
                            <InputSessionThree typeInput='email' name='email' value={email} placeholder='Email Address' handleOnChange={handleChange} />
                            {emailError &&
                                <div className={style.errorForm}>
                                    <Image src={errInput} alt='' height={16} width={16} />
                                    <p className={style.textErr}>{emailError}</p>
                                </div>}
                        </div>

                        <div className={style.inputContainer}>
                            <SelectForm name='country' value={country} placeholder="Country" options={countryOptions} text='Country' handleOnChange={handleSelectChange} />
                            {countryError &&
                                <div className={style.errorForm}>
                                    <Image src={errInput} alt='' height={16} width={16} />
                                    <p className={style.textErr}>{countryError}</p>
                                </div>}
                        </div>

                        <div className={style.inputContainer}>
                            {isLoadingCities && (
                                <div className={style.loadingContainer}>
                                    <p className={style.loading}>Loading cities.</p>
                                    <div className={style.loader}></div>
                                </div>
                            )}
                            <SelectForm name='city' value={city} placeholder='City' options={cityOptions} disable={disable} handleOnChange={handleSelectChange} />
                            {cityError &&
                                <div className={style.errorForm}>
                                    <Image src={errInput} alt='' height={16} width={16} />
                                    <p className={style.textErr}>{cityError}</p>
                                </div>}
                        </div>

                        <div className={style.inputContainer}>
                            <InputSessionThree typeInput='text' name='code' value={referralCode} placeholder='Referral Code' handleOnChange={handleChange} />
                            {codeError &&
                                <div className={style.errorForm}>
                                    <Image src={errInput} alt='' height={16} width={16} />
                                    <p className={style.textErr}>{codeError}</p>
                                </div>}
                        </div>

                        <div className={style.formSwitchContainer}>
                            <p className={style.textSwitch}>I drive my own car</p>
                            <label className={style.switchLabel}>
                                <input className={style.inputSwitch} onClick={handleCheck} type="checkbox" />
                                <span className={style.spanSwitch} />
                            </label>
                        </div>

                        <div className={style.inputContainer}>
                            <h3 className={style.buttonCarTitle}>Select your car type</h3>
                            <div className={style.formButtonCar}>
                                <ButtonCar handleOnclick={handleCar} url={carSedan} text='Sedan' />
                                <ButtonCar handleOnclick={handleCar} url={carSuv} text='SUV/VAN' />
                                <ButtonCar handleOnclick={handleCar} url={carSemiLuxury} text='Semi Luxury' />
                                <ButtonCar handleOnclick={handleCar} url={carLuxury} text='Luxury' />
                            </div>
                            {carError &&
                                <div className={style.errorForm}>
                                    <Image src={errInput} alt='' height={16} width={16} />
                                    <p className={style.textErr}>{carError}</p>
                                </div>}
                        </div>
                        <ButtonSubmit text='Submit' />
                    </form>
                </div>
            )}
            {showSuccess && (
                <div className={style.successContainer}>
                    <Image className={style.imageSuccess} src={successImg} alt='' width={175} height={175} />
                    <p className={style.successMessage}>Welcome, Driver!</p>
                </div>
            )}
        </div>
    );
}
