import React, {Component} from 'react'
import './footer.css'
import 'font-awesome/css/font-awesome.min.css';



function Footer() {
    return (
        <nav className="footerNav">
            <div className="creditInfo">
                <p>Music title data, credits, and images provided by GOOGLE | Movie title data, credits, and poster art provided by GOOGLE | Video and Images provided by GOOGLE</p>
                <p>WE ARE CODENATION</p>
            </div>
            <div className="variousPlatforms">
                <p>PS4 - XBOXONE - SWITCH - PC - WIIU - 3DS - PS VITA - IOS</p>
            </div>
            <div className="socialLinks">
                <i className="fa fa-twitter"></i>
                &nbsp; &nbsp;
                <i className="fa fa-facebook-f"></i>
                &nbsp; &nbsp;
                <i className="fa fa-instagram"></i>
                {/* <i className="fa fa-shopping-cart"></i> */}
            </div>
            <div className="footerLinks">
                <p>Careers &nbsp;|&nbsp; FAQ &nbsp;|&nbsp; About InGame &nbsp;|&nbsp; Help & Support &nbsp;|&nbsp; Contact &nbsp;|&nbsp; Privacy Policy &nbsp;|&nbsp; Cookie Settings &nbsp;|&nbsp; Terms of Use</p>
            </div>
            <div className="copyright">
                <p><i className="fa fa-copyright"></i>2021 INGAME, A CODENATION COMPANY. ALL RIGHTS RESERVED</p>
            </div>
        </nav>
    )
}
export default Footer;