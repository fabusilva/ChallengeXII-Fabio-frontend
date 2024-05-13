import { useState } from 'react';
import Image from 'next/image';
import style from './Navbar.module.css';

export default function Navbar() {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    return (
        <nav className={style.navbarContainer}>
            <Image className={style.navbarLogo} src="https://fakeimg.pl/100x100?text=logo" alt="img" width={100} height={100} />
            
            <ul className={`${style.navbarItems} ${isPopupVisible ? style.show : ''}`}>
                <li className={style.navbarText}>Home</li>
                <li className={style.navbarText}>Getting a Taxi</li>
                <li className={style.navbarText}>Mobile App</li>
                <li className={style.navbarText}>Contact Us</li>
            </ul>

            <div className={style.navbarUser}>
                <Image className ={style.navbarUserIcon} src="https://fakeimg.pl/100x100?text=sininho" alt="img" width={100} height={100} />
                <p>|</p>
                <Image className ={style.navbarUserAvatar} src="https://fakeimg.pl/100x100?text=avatar" alt="img" width={100} height={100} />
            </div>
            
            <div className={style.navbarBtResponsivo} onClick={togglePopup}>
                <Image className ={style.navbarButtonImg} src="https://cdn-icons-png.flaticon.com/128/6063/6063509.png" alt="img" width={100} height={100} />
            </div>

            {isPopupVisible && (
                <div className={style.popup}>
                    <button className={style.closeButton} onClick={closePopup}>
                        X
                    </button>
                    <ul className={style.popupItems}>
                        <li className={style.popupText}>Home</li>
                        <li className={style.popupText}>Getting a Taxi</li>
                        <li className={style.popupText}>Mobile App</li>
                        <li className={style.popupText}>Contact Us</li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
