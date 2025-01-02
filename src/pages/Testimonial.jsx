import React, { useEffect, useState } from 'react';
import { BsSquare, BsSquareFill, BsStarFill } from 'react-icons/bs';
import EmptyImg from '../assets/Empty-Image.png';
// import { Bounce, Fade, Flip, Hinge, JackInTheBox, Roll, Rotate, Slide, Zoom } from 'react-awesome-reveal';


const Testimonial = () => {
  const arr = [
    {
      name: "Mark Adair",
      role: "Web Designer | Software hub PVT. LTD.",
      title: "Amazing Design Inspiration",
      feedback: "The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive.",
      image: "https://readymadeui.com/profile_2.webp"
    },
    {
      name: "Jane Doe",
      role: "Frontend Developer | Creative Solutions LLC",
      title: "Outstanding Service",
      feedback: "Absolutely loved the experience. The customer service was excellent and the delivery was faster than expected.",
      image: "https://readymadeui.com/profile_2.webp"
    },
    {
      name: "John Smith",
      role: "Product Manager | Innovatech Co.",
      title: "Highly Recommend",
      feedback: "Their attention to detail is unmatched. I felt valued as a customer and will definitely return.",
      image: "https://readymadeui.com/profile_2.webp"
    },
    {
      name: "Alice Brown",
      role: "UX Designer | FlowState Inc.",
      title: "Exceptional Quality",
      feedback: "The quality of service was excellent. Staff were very attentive and the food was delicious.",
      image: "https://readymadeui.com/profile_2.webp"
    },
    {
      name: "Michael Johnson",
      role: "Backend Developer | CodeCraft Ltd.",
      title: "Prompt and Professional",
      feedback: "Service was prompt and professional. The staff went above and beyond to ensure satisfaction.",
      image: "https://readymadeui.com/profile_2.webp"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const clickIndex = (index) => {
    setCurrentIndex(index);
  };



  return (
    <div className='w-full  dark:bg-slate-900 dark:text-white '>
      <div className=' sm:w-10/12 w-full h-screen flex flex-col justify-center items-center gap-4 m-auto transition-all duration-200'>
        
        <p className=' text-4xl font-bold text-center'>Our Experts</p> 
        
        <hr className=' border-[1px] w-1/2' />
        <p className=' text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum illo modi minus earum voluptas unde, totam iusto cupiditate nihil delectus tenetur nam recusandae et fugiat nobis, amet velit rem. Nesciunt dolores fuga ducimus necessitatibus modi debitis nihil velit optio reprehenderit.</p>
        
        <div className=" w-[400px] sm:flex justify-center items-center gap-8 p-8 ">

          <div className="hover:scale-105  overflow-hidden flex flex-col justify-center items-center mb-8 shadow-2xl dark:bg-slate-950 dark:text-white shadow-gray-300 dark:shadow-gray-800 rounded-2xl transition-all cursor-pointer">

            <div className=" relative overflow-hidden top-6 gap-2">
              <img src={EmptyImg || arr[currentIndex].image} alt="img"
                className="rounded-full w-32 h-32 object-cover bg-gray-100 "
              />
              <p className=" absolute bottom-1 text-center px-4 bg-black text-white rounded-2xl left-10  text-sm flex justify-center items-center py-1 gap-1">
                {arr[currentIndex].rating}
                <BsStarFill className=" text-yellow-400" />
              </p>
            </div>

            <div className="flex flex-col px-10 pt-8 text-center text-sm gap-y-2">
              <p className=" font-bold text-base">{arr[currentIndex].name}</p>
              <p className=" text-sm tracking-wider text-gray-400">{arr[currentIndex].role}</p>
              <p className=" text-sm font-bold">{arr[currentIndex].title}</p>
              <p className=" rounded-2xl text-sm px-2 py-1 my-2">{arr[currentIndex].feedback}</p>
            </div>

            <div className=" w-full bg-sky-400 p-2">
              <p className=" text-center font-medium text-white">Book a session</p>
            </div>

          </div>

        </div>

        <div className='flex gap-2 mt-4'>
          {
            arr.map((ele, ind) => (
              <button
                key={ind} onClick={() => clickIndex(ind)}
                className=' transition-all duration-2000'
              >
                {currentIndex === ind ? <BsSquareFill /> : <BsSquare />}
              </button>
            ))
          }

        </div>
      </div>
    </div>
  );
}

export default Testimonial;
