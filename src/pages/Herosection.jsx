import React, { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Slider from '../components/Slider';
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Herosection = () => {

    return (

        <AutoplaySlider
            play={true}
            cancelOnInteraction={false}
            interval={5000}
            bullets={true}
            className='aws-btn w-full h-screen overflow-hidden'
        >
            <div className='w-full h-full'><Slider index={0} /></div>
            <div className='w-full h-full'><Slider index={1} /></div>
            <div className='w-full h-full'><Slider index={2} /></div>
            <div className='w-full h-full'><Slider index={3} /></div>
        </AutoplaySlider>

    )
}

export default Herosection;
