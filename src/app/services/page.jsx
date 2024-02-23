import React from 'react';
import servicePage from './SevicePage.module.css'
import { serviceTitle } from '../data/data';
import Image from 'next/image';
const Sevices = () => {
    return (
        <div className={servicePage.main}>
           <div className={servicePage.title}>
                {
                    serviceTitle.map(data => {
                        return (
                            <div key={data} className={servicePage.titleBar}>
                                <div className={servicePage.titleLogo}>
                                    <Image width={30} src={data.logo} alt=''/>
                                </div>
                                <div className={servicePage.titlesTtile}>
                                    <p>{data.title}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div> 
            <div className={servicePage.des}>
                <div className={servicePage.container}>

                </div>
            </div>
        </div>
    );
};

export default Sevices;