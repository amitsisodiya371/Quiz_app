import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./footer.css";
// import { FaTwitter } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import {Heading} from "@chakra-ui/react"
 const Footer = () => {
    return (
        <>
            <div id="footer-parent">
                <div id="footer">
                <div><Heading style={{color:"hotpink", width:"100%"}}>Made By <br /> Amit Sisodiya</Heading></div>
                {/* <span style={{color:"red" ,fontSize:"35px", marginLeft:"400px",textAlign:"center"}}><AiFillHeart/> </span> */}
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