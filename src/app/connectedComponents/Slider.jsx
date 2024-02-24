"use client"
import Image from "next/image";
import servicePage from './Slider.module.css';
import leftAng from '../exports/leftAngular.png'
import rightAng from '../exports/rightAngular.png'
import { useEffect, useState } from "react";
import { sliderData } from "../data/data";

const Slider = () => {
    const data = sliderData
    const [copiedData, setCopiedData] = useState([]);
    const [count, setCount] = useState(0);
    const [pause, setPause] = useState(false);

   

    const findImageIdMapped = data?.map(m => {
        return m.id
    })

    const findImageId = findImageIdMapped?.slice(0, 1)

    const findFirstImage = data?.find(f => {
        return f.id === findImageId[0]
    })

    useEffect(() => {
        const handleTransition = () => {
            if (pause) {
                const increase = count + 0;
                setCount(increase)
            } else {
                const increase = count + 1;
                setCount(increase)
            }

            if ((data?.length) <= (count)) {
                setCount(0)
            }
            if (copiedData) {
                setCopiedData([...data, findFirstImage])
            }
        };
        const interval = setInterval(handleTransition, 3000)
        return () => {
            clearInterval(interval);
        };
    }, [count, data, copiedData, findFirstImage, pause]);
    return (
        <div className={servicePage.container}>
        <Image onClick={() => setCount(count === 1 ? () => setCount(data?.result?.length) : count - 1)} style={{backgroundColor:'rgba(255, 255, 255, 1)', padding:'3px', borderRadius:'3px', cursor:'pointer'}} src={leftAng} alt=''/>
        <div className={servicePage.imgBox}>
        {
                    copiedData?.map(d =>
                        <div key={d.id}
                            style={{
                                transition: `transform ${count > 0 ? 1 : 0}s`,
                                transform: `translateX(${count * -100}%)`,
                            }}

                        >
                            <div
                                style={{ width: '100vw', animationDuration: '16s', }}
                                onMouseEnter={() => setPause(true)}
                                onMouseLeave={() => setPause(false)}
                            >
                                
                                <div  style={{ width: '950px' }} >
                                <Image style={{display:'block', margin:'auto'}} src={d?.bannerImg} alt="" />
                                </div>
                            </div>
                        </div>
                    )
                }
        </div>
      
        <Image onClick={() => setCount(count === data?.result?.length ? () => setCount(0) : count + 1)} style={{backgroundColor:'rgba(255, 255, 255, 1)', padding:'3px', borderRadius:'3px', cursor:'pointer'}} src={rightAng} alt=''/>
    </div>
    );
};

export default Slider;