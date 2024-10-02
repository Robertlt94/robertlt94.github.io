import React, {useContext} from 'react';
import MyInfoContext from '../MyInfoContext';
import LandingImage from './LandingImage';

const LandingSection = () => {
    const {robert} = useContext(MyInfoContext);
    const greeting = "Hello, my name is Robert Thao and I am a"
    const titles = ["IT Professional", " Software Engineer", "Project Manager", "Computer Science Student"]

    let speed = 50;

    return (
        <section id="top-of-page">
            <div className='landing-image-container'>
                <LandingImage />
            </div>
            <h1 className="sub-headers" id="typewriter-effect">Hello, my name is {robert.fullName}. I am a </h1>
            <article>
                <p>{robert.about}</p>
            </article>
        </section>
    )
};

export default LandingSection;