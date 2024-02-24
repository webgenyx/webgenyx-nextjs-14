
import servicePage from '../SevicePage.module.css'
import Slider from '@/app/connectedComponents/Slider';
const WebDesign = () => {
    return (
        <div className={servicePage.main}>
    
        <div className={servicePage.des}>
            <Slider/>
            <div className={servicePage.footer}>
                <div className={servicePage.button}>
                    Design with us
                </div>
            </div>
        </div>
        <br /><br /><br />
    </div>
    );
};

export default WebDesign;