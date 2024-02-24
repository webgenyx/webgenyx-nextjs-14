"use client"
import nav from './Navbar.module.css';
import logo from '../exports/W.svg';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
// import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
    const pathname = usePathname();
    console.log(pathname)
    return (
        <div className={nav.nav}>
            <div className={nav.main}>
                <div className={nav.container}>
                    <div className={`${nav.item} ${nav.one}`}>
                        <div className={nav.logo_continer}>
                            <div className={nav.imgContainer}>
                            <Image className={nav.logo} width={60} height={60} src={logo} alt=''/>
                            </div>

                                <div>
                                <span className={nav.logoTitle}>WEBGENYX</span>
                                <br />
                                    <span className={nav.sub_title}>Your One-stop Web Solution</span>
                                </div>
                        </div>
                    </div>
                    <div className={`${nav.item} ${nav.two}`}>
                        <div className={nav.optionContaier}>
                            <ul>
                                <li id='home'>
                                    <Link style={{color:'white', textDecoration:'none'}} href='/'>Home</Link>
                                </li>
                                <li id='#works'>
                                    Works
                                </li>
                                <li>
                                <Link style={{
                                    color:'white', 
                                    textDecoration:'none',
                                    borderBottom: `${(pathname === '/services/webDesign' || pathname === '/services/webDev' || pathname === '/services/mobileApp' || pathname === '/services/seoService') ? '3px solid white' : 'none'}`
                                    }} href='/services/webDesign'>Services</Link>
                                </li>
                                <li>
                                    Projects
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            <div className={nav.line}></div>
        </div>
        </div>
    );
};

export default Navbar;
//  <IoIosMenu />