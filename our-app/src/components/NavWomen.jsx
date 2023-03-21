import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import WomenMainCarousel from "./WomenSection_MainCarousel.jsx";
import Makeup from "./WomenSection_MakeUp";
import Bridal from "./WomenSection_Bride"
import Essential from "./WomenSection_Essentials"

function Women(){
    return(
        <div className='paddingDueToNavbar'>
            <Navbar />
            <WomenMainCarousel />
            <Makeup/>
            <Bridal />
            <Essential />
            <Footer color="black"/>
        </div>
    )
}

export default Women;