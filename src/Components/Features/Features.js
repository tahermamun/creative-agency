import React from 'react';
import FeaturesImage from '../../Images/featureImage.jpg'

const Features = () => {
    return (
        <div>
            <div className='container mx-auto grid md:grid-cols-2 justify-center'>
                <div className='text-center  justify-self-center'>
                    <img className=' h-80 rounded-md' src={FeaturesImage} alt="" />
                </div>
                <div className=' justify-self-center mt-5'>

                    <h1 className=' text-4xl md:text-left text-center font-black'><span style={{ color: '#7AB259' }}>Discover </span> <br /> Developer & Designer</h1>
                    <p class="p-4 mt-5 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa quo explicabo dolores quas illum libero, accusamus animi minima consequuntur dignissimos dolor facilis porro nulla aspernatur ut quibusdam. Possimus, explicabo est!
                    orem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa quo explicabo dolores quas illum libero, accusamus animi minima consequuntur dignissimos dolor facilis porro nulla aspernatur ut quibusdam. Possimus, explicabo est!
                        
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Features;