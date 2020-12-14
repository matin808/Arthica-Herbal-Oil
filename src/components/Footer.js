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
            Take small amount of Arthica herbal massage oil apply on your spot of pain/wound and rub slowly slowly then apply Crepe bandage for 2-3 hours, then wash it with warm water.
            You will get desired result after 2 use.
            </h4>
            </div>
        
            <div className = "footer__right">
            <h2 className = "footer__heading">Contact Details</h2>
            <CallIcon />+919820597783<br />
            <CallIcon />+919272007860<br />
            <EmailIcon /> <a href="mailto:arthicaherbalmassageoil@gmail.com">
            ArthicaHerbalOil.net</a>
            </div>
        </div>
    )
}

export default Footer;
