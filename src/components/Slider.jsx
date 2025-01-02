import React from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';


const Slider = ({ index }) => {

    const array = [
        {
            title: "Unlock your Full Potential",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate repellat optio consequuntur aut illum delectus, excepturi ipsum hic id autem doloremque beatae nemo corporis. Odit non culpa dolore voluptas dolor.",
            image: "https://codingbits.in/img/carousel-1.jpg"
        },
        {
            title: "Empower Your Mind",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate repellat optio consequuntur aut illum delectus, excepturi ipsum hic id autem doloremque beatae nemo corporis. Odit non culpa dolore voluptas dolor.",
            image: "https://codingbits.in/img/carousel-2.jpg"
        },
        {
            title: "Achieve Your Goals",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate repellat optio consequuntur aut illum delectus, excepturi ipsum hic id autem doloremque beatae nemo corporis. Odit non culpa dolore voluptas dolor.",
            image: "https://codingbits.in/img/carousel-3.jpg"
        },
        {
            title: "Build Your Confidence",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate repellat optio consequuntur aut illum delectus, excepturi ipsum hic id autem doloremque beatae nemo corporis. Odit non culpa dolore voluptas dolor.",
            image: "https://codingbits.in/img/carousel-4.jpg"
        },
        {
            title: "Stay Motivated",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate repellat optio consequuntur aut illum delectus, excepturi ipsum hic id autem doloremque beatae nemo corporis. Odit non culpa dolore voluptas dolor.",
            image: "https://codingbits.in/img/carousel-5.jpg"
        }
    ];

    return (
        <section id='home'>
            <div className='relative'>
                <img
                    src={array[index].image}
                    alt='carousel'
                    className='w-full md:min-h-screen h-[100vh] object-cover'
                />

                <div className='absolute top-0 z-10 bg-[#28286e9d] w-full h-screen flex justify-center items-center sm:p-0 p-4'>
                    <div className='sm:w-2/3 h-full flex flex-col justify-center items-center m-auto'>
                        <div>
                            <p className='text-white md:text-8xl text-6xl font-extrabold uppercase tracking-normal'>
                                {array[index].title}
                            </p>
                            <hr className='my-2' />
                            <p className='text-white'>
                                {array[index].description}
                            </p>
                            <div className='flex gap-4 mt-4'>
                                <button className='btn-primary'>
                                    Read More <BsArrowRightCircleFill />
                                </button>
                                <button className='btn-secondary'>
                                    See More
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Slider
