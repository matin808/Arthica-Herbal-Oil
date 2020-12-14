import React from 'react';
import Image1 from '../images/herbal1.jpeg';
import Image2 from '../images/herbal2.jpeg';
import Image3 from '../images/herbal3.jpeg';
import Image4 from '../images/herbal4.jpeg';
import Image5 from '../images/herbal6.jpeg';
import '../styles/Info.css'

function Info() {
    return (
        <div className = "info">
             <img className = "info__image img-fluid img3" src = {Image3} alt = "" />
            <img className = "info__image img-fluid img1" src = {Image1} alt = "" />
            <img className = "info__image img-fluid img2" src = {Image2} alt = "" />
             <img className = "info__image img-fluid img4" src = {Image4} alt = "" />
            <img className = "info__image img-fluid img5" src = {Image5} alt = "" />
        </div>
    )
}

export default Info;
