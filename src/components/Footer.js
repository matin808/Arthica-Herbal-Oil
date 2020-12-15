import React from 'react';
import '../styles/Footer.css';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';

function Footer() {
    return (
        <div className = "footer">
            <div className = "footer__left">
            <h2 className = "footer__heading">How To Apply</h2>
            <h4 className = "footer__para">
            Take a small amount of Arthica Herbal Massage Oil . Apply and gently massage on the affected area slowly slowly then cover it with a cloth for 2 - 3 hours , then wash it with warm water after 7 - 8 hours , you will get the desired result after regular use .
            </h4>
            </div>
        
            <div className = "footer__right">
            <h2 className = "footer__heading">Contact Details</h2>
            <CallIcon /><b className = "footer__right__no">+919820597783</b><br />
            <CallIcon /><b className = "footer__right__no">+919272007860</b><br />
            <EmailIcon /> <a href="mailto:arthicaherbalmassageoil@gmail.com">
            ArthicaHerbalOil.net</a>
            </div>
        </div>
    )
}

export default Footer;
