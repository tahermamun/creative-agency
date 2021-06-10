import React from 'react';

const Form = () => {
    return (
        <div style={{ background: '#fbd062' }}>
            <div className='grid md:grid-cols-2 pt-16'>
                <div className='justify-self-center  items-center w-3/5'>
                    <h1 style={{ color: '#000' }} className=' text-4xl font-black'>Let's us handle your Project, Professionally</h1>
                    <p className='mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora sit mollitia consequuntur impedit iure tenetur voluptatibus neque laudantium odit error qui dolore vel repellat, </p>
                </div>
                <div class=" justify-self-center w-full">
                    <form class="w-full px-8 pt-6 pb-8 mb-4">
                        <input class="shadow appearance-none border rounded md:w-4/5 w-full py-2 mb-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Enter email address" />
                        <input class="shadow appearance-none border rounded md:w-4/5 w-full py-2 mb-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Your name / company's name" />
                        <textarea rows='6' class="shadow appearance-none border rounded md:w-4/5 w-full py-2 mb-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Your message" />
                        <div class="flex items-center justify-between">
                            <button class="bg-black hover:bg-white-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Send</button>
                        </div>
                    </form>
                </div>
            </div>

            
            <p class="text-center text-dark-500 text-xs pb-2">
                &copy;2021 Taher Mamun. All rights reserved.
        </p>
        </div>
    );
};

export default Form;