import React from 'react';
import Image1 from '../images/mortar.png';
import '../styles/Home.css';
import {motion} from 'framer-motion';

function Home() {

  const fadeRight = {
    hidden : { opacity: 0, x: 100},
    visible : {opacity : 1, x : 0}
};

    return (
    <div className = "home">
     <div class="container home__first">
     <div class="row">
       <div class="col-md-6">

        <div className = "main__left">
        <motion.h3 
            initial = {{ opacity : 0}}
            animate=  {{ opacity : 1 }}
            transition= {{ duration : 0.8 }}
            className = "main__quote">
         Natural and non-toxic, with a specially formulated blend of pure essential oil

         </motion.h3>  
        </div>
        </div>

        <div class="col-md-6">
          <div className = "main__right">
    
          <motion.img
         variants = {fadeRight}
         initial = 'hidden'
         animate = 'visible'
         transition = {{ duration : 1 }} 
         className = "main__image" src = {Image1} alt = "" />
            </div>
          </div>
        </div>
        </div>

                  
        </div>

    )
}

export default Home;


