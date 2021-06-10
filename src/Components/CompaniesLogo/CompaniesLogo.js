import React from 'react';
import CompaniesLogo1 from '../../Images/logos/slack.png'
import CompaniesLogo2 from '../../Images/logos/google.png'
import CompaniesLogo3 from '../../Images/logos/uber.png'
import CompaniesLogo4 from '../../Images/logos/netflix.png'
import CompaniesLogo5 from '../../Images/logos/airbnb.png'

const CompaniesLogo = () => {
    return (
        <div className='md:container md:m-auto pb-4 pt-12'>
            <div class="grid  md:grid-cols-5 pt-24 md:pl-40 md:pr-40">
                <img className='justify-self-center' style={{width:'150px', height:'50px'}} src={CompaniesLogo1} alt="" />
                <img className='justify-self-center' style={{width:'150px', height:'50px'}} src={CompaniesLogo2} alt="" />
                <img className='justify-self-center' style={{width:'150px', height:'50px'}} src={CompaniesLogo3} alt="" />
                <img className='justify-self-center' style={{width:'150px', height:'50px'}} src={CompaniesLogo4} alt="" />
                <img className='justify-self-center' style={{width:'150px', height:'50px'}} src={CompaniesLogo5} alt="" />
            </div>
        </div>
    ); 
};

export default CompaniesLogo;