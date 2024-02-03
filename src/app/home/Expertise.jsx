import exp from './Expertise.module.css';
import { expDes, expLogos, expTitle } from '../data/data';
import Image from 'next/image';
const Expertise = () => {
    return (
        <div className={exp.main}>
            <div className={exp.container}>
                <div className={exp.titleBackground}>
                    {
                        expTitle.map(data => {
                            return (
                                <div key={data.key} className={exp.titleBackgroundContainer}>
                                    <Image style={{width:data.style.width, height: data.style.height,marginTop: data.style.marginTop}}  src={data.elm} alt="" />
                                    <p style={{fontSize:data.style.fontSize, color:data.style.color, fontWeight:data.style.fontWeight}}>{data.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={exp.desPart}>
                    {
                        expDes.map(data => {
                            return (
                                <div key={data.id} className={exp.desContainer}>
                                    <div style={{width:data.style?.width}} className={exp.expDesLogo}>
                                        <Image src={data.logo} alt="" />
                                    </div>
                                    <div className={exp.expDesDetail}>
                                        <p className={exp.expDesDetailP}>{data.title}</p>
                                        <p style={{fontSize:'12px'}}>{data.des}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={exp.ourClients}>
                    <p style={{marginBottom:'0',marginTop:'10px', padding:'0'}} className={exp.ourClientsP}>Our Clients</p>
                    <div className={exp.bottomLine}>
                        <div className={exp.lines}></div>
                        <div className={exp.lines}></div>
                        <div className={`${exp.lines} ${exp.lineSpecial}`}></div>
                        <div className={exp.lines}></div>
                        <div className={exp.lines}></div>
                    </div>
                </div>
                <div className={exp.expClientLogos}>
                        {
                            expLogos.slice(0,4).map(data => {
                                return (
                                    <div key={data.id} className={exp.expClientLogosContainer}>
                                    <Image  width={100} height={100} style={{width:`${data.style.width}px`, height:`${data.style.height}px`}} src={data.logo} alt="" />
                                    </div>
                                )
                            })
                        }
                </div>
                <div className={exp.expClientLogos}>
                {
                            expLogos.slice(4,7).map(data => {
                                return (
                                    <div key={data.id} className={exp.expClientLogosContainer}>
                                    <Image width={100} height={60} style={{width:`${data.style.width}px`, height:`${data.style.height}px`}} src={data.logo} alt="" />
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        </div>
    );
};

export default Expertise;