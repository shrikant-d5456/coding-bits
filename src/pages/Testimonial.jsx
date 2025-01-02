import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import EmptyImg from '../assets/Empty-Image.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/slider.css';

import Slider from "react-slick";

const Testimonial = () => {
  const arr = [
    {
      name: "Mark Adair",
      role: "Web Designer | Software hub PVT. LTD.",
      title: "Amazing Design Inspiration",
      feedback: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive.",
      image: "https://readymadeui.com/profile_2.webp",
      rating: 4.5,
    },
    {
      name: "Mark Adair",
      role: "Web Designer | Software hub PVT. LTD.",
      title: "Amazing Design Inspiration",
      feedback: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive.",
      image: "https://readymadeui.com/profile_2.webp",
      rating: 4.5,
    },
    {
      name: "Mark Adair",
      role: "Web Designer | Software hub PVT. LTD.",
      title: "Amazing Design Inspiration",
      feedback: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive.",
      image: "https://readymadeui.com/profile_2.webp",
      rating: 4.5,
    },
    {
      name: "Mark Adair",
      role: "Web Designer | Software hub PVT. LTD.",
      title: "Amazing Design Inspiration",
      feedback: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive.",
      image: "https://readymadeui.com/profile_2.webp",
      rating: 4.5,
    },
    {
      name: "Mark Adair",
      role: "Web Designer | Software hub PVT. LTD.",
      title: "Amazing Design Inspiration",
      feedback: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive.",
      image: "https://readymadeui.com/profile_2.webp",
      rating: 4.5,
    }

  ];


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="w-full h-screen flex justify-center items-center m-auto dark:bg-slate-900 dark:text-white">
      <div className="sm:w-10/12 w-full flex flex-col justify-center items-center gap-4 m-auto">
        
        <p className="text-4xl font-bold text-center">Our Experts</p>
        <hr className="border-[1px] w-1/2" />
        <p className="text-center">
          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus suscipit vero officia, numquam sit accusamus repellat cupiditate odit illo saepe sapiente error laborum provident vel dolorem temporibus fugiat magni sed?
        </p>
        <Slider {...settings} className="w-full  m-auto">
          {arr.map((ele, ind) => (
            <div key={ind} className="flex flex-col justify-center items-center p-6   ">

              <div className='w-full flex flex-col justify-center items-center m-auto dark:bg-slate-950 shadow-md shadow-slate-300 dark:shadow-slate-800 rounded-2xl transition-transform hover:scale-105 hover:shadow-xl'>

                <div className=" flex justify-center items-center mt-4 m-auto">
                  <img
                    src={ EmptyImg || ele.image }
                    alt={`${ele.name}'s profile picture`}
                    className="rounded-full w-32 h-32 object-cover bg-gray-100"
                  />
                </div>

                <div className="flex flex-col px-10 pt-8 text-center gap-2">
                  <p className="font-bold text-base">{ele.name}</p>
                  <p className="text-sm text-gray-400">{ele.role}</p>
                  <p className="font-bold">{ele.title}</p>
                  <p className="rounded-2xl text-sm px-2 py-1 my-2">{ele.feedback}</p>
                </div>

                <div className="w-full bg-sky-400 p-2  rounded-b-2xl">
                  <p className="text-center font-medium text-white">Book a session</p>
                </div>

              </div>

            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
