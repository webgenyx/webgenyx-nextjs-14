import footer from './Footer.module.css';
import humanTable from '../exports/8831.png';
import logo from '../exports/logo(1).png';
import { footerIcons } from '../data/data';
import Image from 'next/image';


const Footer = () => {
    return (
        <div className={footer.main}>
            <div className={footer.partOne}>
                <div className={footer.oneLeft}>
                    <p  className={footer.inter_font}>
                    Interested in having our team <br />work on your next project?<br />Come work with us.
                    </p>
                </div>
                <div className={footer.oneRight}>
                <Image width={440} src={humanTable} alt="" />
                </div>
            </div>
            <div className={footer.partTwo}>
                <div className={footer.twoLeft}>
                    <div className={footer.twoLeftContainer}>
                        <Image width={127} style={{ marginBottom:'5px', margin:'auto', display:'block'}} src={logo} alt="" />
                        <p className={footer.twoLeftContainerP} style={{marginTop:'0px',marginBottom:'0px', padding:'0', textAlign:'center', color:'#004E92',fontSize:'22px'}}>WEBGENIX</p>
                        <p className={footer.inter_font} style={{marginTop:'0px',marginBottom:'0px', padding:'0', textAlign:'center', color:'black', fontSize:'10px', fontWeight:'bold'}}> Your One-stop Web Solution</p>
                        <div style={{width:'80%', margin:'auto'}}>
                            {
                                footerIcons.map(data => {
                                    return (
                                        <p  className={footer.inter_font} style={{display:'flex', alignItems:'center'}} key={data.id}>
                                            <span><Image style={{ marginRight:'5px'}} src={data.icon} alt="" /></span>
                                            <span style={{fontSize:'10px', fontWeight:'bold'}}>{data.tag}</span>
                                        </p>
                                    )
                                })
                            }
                           
                        </div>
                    </div>
                </div>
                <div className={`${footer.twoRight} ${footer.inter_font}`}>
                    <div className={footer.twoRightContainer}>
                            <div className={footer.twoRightTitle}>
                            Enriching Your Digital Experience with Tailored Web Solutions
                            </div>
                            <div className={footer.twoRightDes}>
                                <div className={footer.twoRightDesOne1}>
                                    <p>Home</p> 
                                    <p>About Us</p> 
                                    <p>Projects</p> 
                                    <p> Web Development</p> 
                                    <p>Website Design</p> 
                                    <p>Web Maintenance</p>  
                                    <p>Service</p>  
                                    <p>Contact</p> 
                                </div>
                                <div className={footer.twoRightDesOne2}>
                                   <p>Sign  In</p>  
                                   <p>Forgotten Password</p>   
                                   <p>Support</p>  
                                   <p>Knowledgebase</p> 
                                </div>
                                <div className={footer.twoRightDesOne3}>
                                    <p>Terms Of Service</p>  
                                    <p>Terms & Conditions</p>  
                                    <p>Privacy  & Cookie Policy</p> 
                                    <p>Accessibility Statement </p> 
                                    <p>Acceptable Use Policy</p>  
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;