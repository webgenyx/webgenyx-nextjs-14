import temp from './Templates.module.css';
import { boxData } from '../data/data';
import Image from 'next/image';
const Templates = () => {
    return (
        <div className={temp.main}>
            <div className={temp.mainTitle}>
                <p>
                Creative power that goes <br /> beyond <span className={temp.tempString}>templates</span>
                </p>
            </div>
            <div className={temp.sub_title}>
                <p className={temp.font_atlasi}>
                You design, we generate the code — for everything from fully custom <br /> layouts to complex animations.
                </p>
            </div>
            <div className={temp.box}>
                    {
                        boxData?.map(data => {
                            return (
                                <div style={{backgroundImage:`${data.shadow}`}} key={data.id} className={`${temp.boxContainer}`}>
                                   <div className={temp.boxLogo}>
                                        <Image height={100} width={100} src={data.logo} alt="" />
                                   </div>
                                   <div className={temp.boxDetail}>
                                        <p style={{color:'#3CA4FF'}}>{data.title}</p>
                                        <p style={{color:'white', fontSize:'13px'}}>{data.des}</p>
                                   </div>
                                  

                                </div>
                            )
                        })
                    }
            </div>
        </div>
    );
};

export default Templates;