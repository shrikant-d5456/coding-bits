import React from 'react';
import {BsGoogle,BsFacebook,BsTwitterX,BsInstagram,BsYoutube} from 'react-icons/bs';

function Footer() {
    return (
        <div id='contact' className='w-screen text-sm dark:bg-slate-950 dark:text-white '>
            <footer className="lg:flex w-screen">

                <div className="lg:w-2/5 p-4 m-auto ">
                    <h1 className="text-2xl font-bold ml-4 mb-4"> Developer {`</>`} </h1><hr className='border-green' /> 
                    <span className="flex gap-8 text-2xl m-4 ">
                        <i><BsGoogle/></i>
                        <i><BsInstagram/></i>
                        <i><BsFacebook/></i>
                        <i><BsYoutube/></i>
                        <i><BsTwitterX/></i>
                    </span>
                </div>

                <div className="lg:w-3/5 w-full p-2 lg:flex gap-4 list-none ">
                    <div className="m-2 flex flex-col gap-4">
                        <li className="font-medium ">Useful Links</li>
                    </div>
                    <hr />
                    <div className="m-2 flex flex-col gap-2">
                        <li className="font-medium ">Information</li>
                        <li>About Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>What info we collect ?</li>
                    </div>
                    <hr />
                    <div className="m-2 flex flex-col gap-2">
                        <li className="font-medium ">Contact Us</li>
                        <li>Mangaon, Raigad</li>
                        <li>Phone - </li>
                        <li>Email - <a href='mailto:'>codingBits.com</a></li>
                        <li>FAQ</li>
                    </div>
                    <hr />
                </div>
            </footer>
            <div className=" p-2 text-center font-semibold ">
                <p className='text-sm my-4'>Designed &👩🏻‍💻by Developer | © All Rights Reserved {new Date().getFullYear()} </p>
            </div>
        </div>
    )
}

export default Footer