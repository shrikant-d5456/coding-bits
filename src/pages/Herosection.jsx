import React from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import EmptyImg from '../assets/Empty-Image.png';

const Herosection = () => {

    return (
        <section id='home'>
            <div className=' relative '>

                <img
                    src="https://codingbits.in/img/carousel-1.jpg"
                    alt='img'
                    className='w-full md:min-h-screen h-[100vh] object-cover '
                />

                <div className='absolute top-0 z-10 bg-[#1212139d] w-full h-screen flex justify-center items-center sm:p-0 p-4'>
                    <div className='sm:w-2/3 h-full flex flex-col justify-center items-center  m-auto'>
                        <div>
                            <p className='text-white md:text-8xl text-6xl font-extrabold uppercase tracking-normal'>
                               Unlock your Full Potential
                            </p>
                            <hr className='my-2' />
                            <p className=' text-white'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate repellat optio consequuntur aut illum delectus, excepturi ipsum hic id autem doloremque beatae nemo corporis. Odit non culpa dolore voluptas dolor.
                            </p>
                            <div className='flex gap-4 mt-4'>
                                <button className='btn-primary'>
                                  Read More <BsArrowRightCircleFill/>
                                </button>
                                <button className='btn-secondary' onClick={() => setnext(2)}>
                                  See More
                                </button>
                            </div>
                        </div>
                       <div className=' w-full flex gap-4 justify-end z-20 text-white '>
                       <button ><BsArrowLeftCircleFill className='text-4xl transition-all  hover:scale-125'/></button>
                       <button ><BsArrowRightCircleFill className='text-4xl transition-all hover:scale-125'/></button>
                       </div>
                    </div>
                </div>

            </div>


        </section>
    )
}

export default Herosection
