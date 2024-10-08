import React, {useContext} from 'react';
import MyInfoContext from '../MyInfoContext';
import LandingImage from './LandingImage';
import ToolBelt from './ToolBelt';
import TypeWriter from './TypeWriter';

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
            <TypeWriter />
            <article>
                <p>{robert.about}</p>
            </article>
            <ToolBelt />
        </section>
    )
};

export default LandingSection;