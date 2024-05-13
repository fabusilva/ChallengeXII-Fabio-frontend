import Image from 'next/image';
import style from './Navbar.module.css';
import logo from '../../../public/Logo.png';
import sino from '../../../public/bell-icon.png';
import avatar from '../../../public/user-avatar.png';
import separato from '../../../public/seperator.png';
export default function Navbar() {
    return (
        <div className={style.navbar}>
            <nav className={style.navbarContainer}>
                <Image className={style.navbarLogo} src={logo} alt="img" width={100} height={100} />
                
                <ul className={style.navbarItems}>
                    <li className={style.navbarText}>Home</li>
                    <li className={style.navbarText}>Getting a Taxi</li>
                    <li className={style.navbarText}>Mobile App</li>
                    <li className={style.navbarText}>Contact Us</li>
                </ul>

                <div className={style.navbarUser}>
                    <Image className ={style.navbarUserIcon} src={sino} alt="img" width={100} />
                    <Image src={separato} alt="img" />
                    <Image className ={style.navbarUserAvatar} src={avatar} alt="img" />
                </div>
                
            </nav>
        </div>
    );
}
