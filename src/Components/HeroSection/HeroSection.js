import React from 'react';
import heroImage from '../../Images/logos/Frame.png'

const HeroSection = () => {
    return (
      <div style={{  background: '#fbd062' }}>
            <div  className='md:container md:m-auto h-screen' >
                <div class=" md:flex pt-12">
                    <div class="m-auto p-12">
                        <h1 style={{color: '#000' }} className='text-4xl md:text-5xl font-black'>Let's Grow Your Brand To The Next Level</h1>
                        <p className='mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora sit mollitia consequuntur impedit iure tenetur voluptatibus neque laudantium odit error qui dolore vel repellat, </p>
                        <button style={{ background: '#000', color: '#fff' }} className='mt-4 text-s py-2 px-4 rounded-md'>Get The App</button>
                    </div >
                    <img class="m-auto text-center md:w-3/5 md:h-4/5"  src={heroImage} alt="" />
                </div>
        </div>
      </div>
    );
};

export default HeroSection;