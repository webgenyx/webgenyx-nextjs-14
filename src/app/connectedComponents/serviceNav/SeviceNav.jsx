"use client"
import Image from "next/image";
import servicePage from './ServiceNav.module.css';
import { serviceTitle } from "@/app/data/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
const SeviceNav = () => {
    const pathname = usePathname();
    return (
        <div className={servicePage.main}>
            <div className={servicePage.title}>
                {
                    serviceTitle.map(data => {
                        return (
                            <Link style={{textDecoration:'none', color:'black'}} key={data.id} href={data.url}>
                                <div  
                                className={servicePage.titleBar}
                                style={{backgroundColor: `${pathname === data.url ? 'rgba(60, 164, 255, 1)' : 'white'}`}}
                                >
                                    <div className={servicePage.titleLogo}>
                                        <Image width={30} src={pathname === data.url ? data.logoLight : data.logo} alt=''/>
                                    </div>
                                    <div className={servicePage.titlesTtile}>
                                        <p style={{color: `${pathname === data.url ? 'white' : 'black'}`}}>
                                        {data.title}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div> 
        </div>
    );
};

export default SeviceNav;