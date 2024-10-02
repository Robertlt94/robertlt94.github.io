import React, {useContext} from 'react';
import MyInfoContext from '../MyInfoContext';

const EducationSection = () => {
    const {education} = useContext(MyInfoContext);

    return (
        <section className='education-section' id="education"> 
            <h1 className='sub-headers' id="education-section-anchor">Education</h1>
            <div className="education-container">
                {education.map(((degree, index) => {
                    return (
                        <div className="each-education" key={index}>
                            {/* <img src={degree.image} className="school-picture" /> */}
                            {degree.image}
                            <ul>
                                <li><p>{degree.subject} {degree.type}</p></li>
                                <li><p>{degree.school}</p></li>
                                <li><p>{degree.graduationYear}</p></li>
                            </ul>
                        </div>
                    )
                }))}
            </div>
        </section>
    )
}

export default EducationSection;