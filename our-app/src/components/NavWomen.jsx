import React from 'react'
import Footer from './Footer';
import WomenMainCarousel from "./WomenSection_MainCarousel.jsx";
import Makeup from "./WomenSection_MakeUp";
import Bridal from "./WomenSection_Bride"
import Essential from "./WomenSection_Essentials"
import Navbar from './Navbar.jsx'

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