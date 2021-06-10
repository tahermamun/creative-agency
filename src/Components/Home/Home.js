import React from 'react';
import CompaniesLogo from '../CompaniesLogo/CompaniesLogo';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import HeroSection from '../HeroSection/HeroSection';
import Navbar from '../Navbar/Navbar';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div style={{ background: '#eeeff1' }}>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <CompaniesLogo></CompaniesLogo>
            <Services></Services>
            <Features></Features>
            <Reviews></Reviews>
            <Footer></Footer>


        </div>
    );
};

export default Home;