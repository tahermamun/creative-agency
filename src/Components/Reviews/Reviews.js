import React from 'react';
import reviewImage1 from '../../Images/customer-1.png'
import reviewImage2 from '../../Images/customer-2.png'
import reviewImage3 from '../../Images/customer-3.png'

const ReviewData = [
    {
        image: reviewImage1,
        name: 'Nash Patrik',
        profession:'CEO, Manpol'
    },
    {
        image: reviewImage2,
        name: 'Miriam Barron',
        profession:'CEO, Manpol'

    },
    {
        image: reviewImage3,
        name: 'Bria Malone',
        profession:'CEO, Manpol'

    },
]

const Reviews = () => {
    return (
        <div className='md:container md:m-auto pb-24 pt-24'>
            <div className="text-center text-4xl font-black">
                <h1>Clients <span style={{ color: '#7AB259' }}>Feedback </span></h1>
            </div>
            <div className='grid md:grid-cols-3  mt-4' >
                {
                    ReviewData.map(data =>
                        <div class="max-w-sm bg-white rounded-sm overflow-hidden p-4 shadow-lg m-8 md:m-16">
                            <div class="grid grid-cols-3">
                                <div class="">
                            <img style={{width:'70%'}} className="" src={data.image} alt="" />
                                </div>
                                <div class="text-left  col-span-2">
                                <div className="font-medium  text-gray-darker mb-1 text-xl">{data.name}</div>
                                <div className="font-medium  text-gray-darker  text-s">{data.profession}</div>
                                </div>
                            </div>
                            <p class="font-normal text-gray-dark text-sm mb-2 p-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias dolore, sunt consequuntur cupiditate voluptatibus quod?</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Reviews;









<div class="max-w-sm rounded-sm overflow-hidden shadow-lg m-16">
    <div class="mx-6 my-4 flex">
        <div class="flex-grow">a</div>
        <div class="flex-grow text-right">b</div>
    </div>
    <p class="font-normal text-gray-dark text-sm mb-2">
        Lorem ipsum dolor sit amet, consectetur
    </p>
</div>

