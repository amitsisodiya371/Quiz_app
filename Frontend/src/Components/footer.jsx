import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./footer.css";
// import { FaTwitter } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";

 const Footer = () => {
    return (
        <>
            <div id="footer-parent">
                <div id="footer">
                <div style={{display:"inline"}} ><h1 style={{color:"white"}}>Made By  Amit Sisodiya</h1></div>
                <span style={{color:"red" ,fontSize:"35px"}}><AiFillHeart/> </span>
                <br />
                    <div id="icons">
                        <a href="https://github.com/amitsisodiya371" id="ref"><FaGithub className="footer-icons" /></a>
                        <a href="https://linkedin.com/in/amit-sisodiya-a9b488205" id="ref"><FaLinkedinIn className="footer-icons" /> </a>
                        {/* <a href="https://twitter.com/amitSis99328470" id="ref"><FaTwitter className="footer-icons" /></a> */}
                        <a href="https://wa.me/919368155634"  id="ref"><FaWhatsapp className="footer-icons" /></a>
                    </div>
                    <br />
                    

                </div>
            </div>
        </>
    )
}
export default Footer;