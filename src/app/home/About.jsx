import Image from 'next/image';
import { aboutCart } from '../data/data';
import about from './About.module.css';
import aboutFont from './AboutFont.module.css';
const About = () => {
    return (
        <div className={about.main}>
            <div className={about.aboutContainer}>
               <div className={about.titleContainer}>
                    <p style={{marginBottom:'10px', marginTop:'10px'}} className={about.title}>We’ll help you get <br /> <span className={about.specialTitle}>started</span></p>
               </div>
                <div className={about.aboutCarts}>
                        {
                            aboutCart.map(data => {
                                return (
                                    <div
                                     key={data.id} 
                                     className={about.cartContainer}
                                     style={{alignItems:data.style.alignItem}}
                                     >
                                        <div className={`${about.aboutCart} ${aboutFont.atlasi_font}` }>
                                            <div className={about.cartImg}>
                                                <Image width={120} height={120} src={data.img} alt="" />
                                            </div>
                                            <p  style={{textAlign:'center',color:data.style.color, marginTop:'5px', marginBottom:'5px', padding:'0'}}>
                                                {data.name}
                                            </p>
                                            <p style={{textAlign:'center', color:'white',marginTop:'0', marginBottom:'5px', padding:'0'}}>
                                                {data.designation}
                                            </p>
                                            <p style={{textAlign:'justify', color:'white', fontSize:'11px'}}>
                                                {data.des}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        </div>
    );
};

export default About;