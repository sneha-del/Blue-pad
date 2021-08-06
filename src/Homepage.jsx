import React,{useState} from 'react'
import './homepage.css';
import Slider from './Slider';
import Video from './Video';
import Card from './Card';

const Homepage = () => {
    return (
        <>
        <div className="homepage">


            {/* first block */}
        <section className="slider">

            <Slider/>
        </section>
        {/* second block */}
        <section className="video">


<Video/>

        </section>
        {/* third block */}
        <Card/>
        <section className="grid">

        </section>
        </div>
        </>
    );
}

export default Homepage
