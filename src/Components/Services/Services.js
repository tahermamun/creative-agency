import React from 'react';
import serviceLogo1 from '../../Images/icons/service1.png'
import serviceLogo2 from '../../Images/icons/service2.png'
import serviceLogo3 from '../../Images/icons/service3.png'

const serviceData = [
    {
        image: serviceLogo1,
        title: 'Web & Mobile Design',
    },
    {
        image: serviceLogo2,
        title: 'Graphic Design',
    },
    {
        image: serviceLogo3,
        title: 'Web Development',
    },
]



const Services = () => {
    return (
        <div className='md:container md:m-auto pb-24  pt-16'>
            <div className="text-center text-2xl md:text-4xl font-black">
                <h1>Provide Awesome <span style={{ color: '#7AB259' }}>Services </span></h1>
            </div>
            <div className='grid md:grid-cols-3  mt-16' >
                {
                    serviceData.map(data =>
                        <div className="bg-white max-w-sm rounded-sm overflow-hidden shadow-lg justify-self-center mb-8">
                            <img style={{width:'30%'}} className="m-auto pt-4" src={data.image} alt="" />
                            <div className="mx-6 my-4 border-b border-gray-light text-center">
                                <div className="font-medium text-base text-gray-darker mb-4 text-xl">{data.title}</div>
                                <p className="font-normal text-gray-dark text-sm mb-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos exercitationem repellat, quos nisi totam pariatur in aut eligendi et modi.</p>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Services;