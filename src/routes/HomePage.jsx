import React, {useState, useEffect} from 'react';
import NavBar from '../components/NavBar';
import LandingSection from '../components/LandingSection';
import ExperiencesSection from '../components/ExperiencesSection';
import EducationSection from '../components/EducationSection';
import ProjectSection from '../components/ProjectSection';
import ConnectSection from '../components/ConnectSection';

const HomePage = () => {
    // variable to hold the width value of the viewport of the device the user is currently on
    const [viewPortWidth, setViewPortWidth] = useState(window.innerWidth);

    useEffect(() => {
        // function to obtain the current width of the viewport the user is using and setting it as the value for viewPortWidth
        function viewPortChange() {
            setViewPortWidth(window.innerWidth)
            // console logs current viewPortWidth value
            console.log(viewPortWidth)
        };
        // call the function with initial page load to obtain initial value
        viewPortChange();

        // add event listener - on viewport change, get new viewport width
        window.addEventListener("resize", viewPortChange);

        // remove event listener
        return () => {
            window.removeEventListener("resize", viewPortChange);
        }
    }, []);

    return (
        <div>
            <NavBar viewPortWidth={viewPortWidth} />
            <div className="main-background" id="observeThis">
                <LandingSection id="top" />
                <EducationSection id="education" />
                <ExperiencesSection id="experience" />
                <ProjectSection id="project" />
                <ConnectSection id="bottom" />
            </div>
        </div>
    )
}

export default HomePage;