import './css/Footer.css';
import { FaInstagram , FaFacebook, FaLinkedin } from "react-icons/fa";
const Footer = ()=>{
    return(
        <div className="footer">
            <div className="footer-container">
                    <ul>
                        <li><a href="https://in.linkedin.com/company/purplle-com"><FaLinkedin  size={50}></FaLinkedin></a></li>
                        <li><a href="https://www.facebook.com/letspurplle/"><FaFacebook  size={50}></FaFacebook></a></li>
                        <li><a href="https://www.instagram.com/letspurplle/?hl=en"><FaInstagram  size={50}></FaInstagram></a></li>
                    </ul>
            </div>
        </div>
    )
}

export default Footer;