import React from 'react';
import Image1 from '../images/mortar.png';
import '../styles/Home.css';


function Home() {
    return (
    <div className = "home">
     <div class="container home__first">
     <div class="row">
       <div class="col-md-6">

        <div className = "main__left">
         <h3 className = "main__quote">
         Natural and non-toxic, with a specially formulated blend of pure essential oil

         </h3>  
        </div>
        </div>

        <div class="col-md-6">
          <div className = "main__right">
    
         <img className = "main__image" src = {Image1} alt = "" />
            </div>
          </div>
        </div>
        </div>

                  
        </div>

    )
}

export default Home;


