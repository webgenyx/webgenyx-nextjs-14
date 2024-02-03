"use client"
import Lottie from "react-lottie";
import  data from '../animation/animation.json'

const LottieAnim = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: data,
        rendererSettings: {
          preserveAspectRatio:'xMidYMid slice'
        }
      };
    return (
         <div style={{height:'320px'}}>
            <Lottie options={defaultOptions} height={350} width={350}/>
        </div>

    );
};

export default LottieAnim;