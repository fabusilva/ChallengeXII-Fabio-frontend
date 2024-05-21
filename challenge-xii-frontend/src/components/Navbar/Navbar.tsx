import Image from 'next/image';
import { useRouter } from 'next/router';
import style from './Navbar.module.css';
export default function Navbar() {
    const logo:string = process.env.NEXT_PUBLIC_NAVBAR_LOGO;
    const sino:string = process.env.NEXT_PUBLIC_NAVBAR_BELL;
    const avatar: string = process.env.NEXT_PUBLIC_NAVBAR_USER;
    const separato: string = process.env.NEXT_PUBLIC_NAVBAR_SEPARATOR;
    const router = useRouter();
    const redirectionPage = () =>{
        router.push("./NotFound")
    }
    return (
        <div className={style.navbar}>
            <nav className={style.navbarContainer}>
                <Image className={style.navbarLogo} src={logo} alt="img" width={100} height={100}/>
                
                <ul className={style.navbarItems}>
                    <li className={style.navbarText} onClick={redirectionPage}>Home</li>
                    <li className={style.navbarText} onClick={redirectionPage}>Getting a Taxi</li>
                    <li className={style.navbarText} onClick={redirectionPage}>Mobile App</li>
                    <li className={style.navbarText} onClick={redirectionPage}>Contact Us</li>
                </ul>

                <div className={style.navbarUser}>
                    <Image className ={style.navbarUserIcon} src={sino} alt="img" width={100} height={100}/>
                    <Image src={separato} alt="img" width={0.7} height={29.71}/>
                    <Image className ={style.navbarUserAvatar} src={avatar} alt="img" width={100} height={100}/>
                </div>
                
            </nav>
        </div>
    );
}
