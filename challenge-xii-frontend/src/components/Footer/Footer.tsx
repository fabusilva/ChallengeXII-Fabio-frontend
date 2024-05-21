import Image from 'next/image';
import style from './Footer.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Footer(){
    const logoFooter:string = process.env.NEXT_PUBLIC_FOOTER_LOGO;
    const faceFooter:string = process.env.NEXT_PUBLIC_FOOTER_FECEBOOK;
    const instaFooter:string = process.env.NEXT_PUBLIC_FOOTER_INSTAGRAM;
    const twitterFooter:string = process.env.NEXT_PUBLIC_FOOTER_TWITTER;
    const router = useRouter();
    const redirectionPage = () =>{
        router.push("./NotFound")
    }
    return(
        <footer className={style.footerContainer}>
            <div className={style.homeFooter}>
                <Image src={logoFooter} height={56.3} width={125.63} alt=''/>
                <p>MyRide Inc., 2nd Floor, New York, NY 10016</p>
                <div className={style.socialFooter}>
                    <Link href='https://www.facebook.com/compass.uol/?locale=pt_BR' target='_blank'><Image src={faceFooter} height={35.11} width={35.11} alt=''/></Link>
                    <Link href='https://www.instagram.com/compass.uol/' target='_blank'><Image src={instaFooter} height={35.11} width={35.11} alt=''/></Link>
                    <Link href='https://x.com/compassuol' target='_blank'><Image src={twitterFooter} height={35.11} width={35.11} alt=''/></Link>
                </div>
            </div>

            <div className={style.companyFooter}>
                <h1 onClick={redirectionPage} className={style.titleFooter}>Company</h1>
                <p onClick={redirectionPage} className={style.textFooter}>About Us</p>
                <p onClick={redirectionPage} className={style.textFooter}>News</p>
                <p onClick={redirectionPage} className={style.textFooter}>Careers</p>
                <p onClick={redirectionPage} className={style.textFooter}>How we work</p>
            </div>

            <div className={style.suporteFooter}>
                <h1 onClick={redirectionPage} className={style.titleFooter}>Support</h1>
                <p onClick={redirectionPage} className={style.textFooter}>FAQ</p>
                <p onClick={redirectionPage} className={style.textFooter}>US Office</p>
                <p onClick={redirectionPage} className={style.textFooter}>Asia Office</p>
                <p onClick={redirectionPage} className={style.textFooter}>Help Center</p>
            </div>
            <div className={style.moreFooter}>
                <h1 onClick={redirectionPage} className={style.titleFooter}>More</h1>
                <p onClick={redirectionPage} className={style.textFooter}>Become a partner</p>
                <p onClick={redirectionPage} className={style.textFooter}>Partner Support</p>
                <p onClick={redirectionPage} className={style.textFooter}>Mobile app links</p>
            </div>
        </footer>
    )
}