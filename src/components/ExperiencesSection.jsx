import React, {useContext} from 'react';
import MyInfoContext from '../MyInfoContext';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const ExperiencesPage = () => {
    const {experiences} = useContext(MyInfoContext);

    return (
        <section className='experiences-section' id="experiences">
            <h1 className='sub-headers' id="experiences-section-anchor" >Experiences</h1>
            <VerticalTimeline
                lineColor={'lightgrey'}
            >
            {experiences.map(((experience, key) => {
                return(
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#F0F0F0', borderRadius: '8pt', boxShadow: '-3px 3px 10px #c0c0c0' }}
                        contentArrowStyle={{ borderRight: '1rem solid #F0F0F0' }}
                        date={experience.duration}
                        iconStyle={{ background: '#F0F0F0', boxShadow: '-3px 3px 10px #c0c0c0' }}
                        icon={experience.icon}
                        key={key}
                        dateClassName={"vertical-timeline-element-date"}
                        iconClassName={"vertical-timeline-element-icon"}
                    >
                        <h3 className="vertical-timeline-element-title">{experience.title}</h3>
                        <div className="timeline-logo">{experience.logo}</div>
                        <h4 className="vertical-timeline-element-subtitle">{experience.company}</h4>
                        <ul>
                            {experience.details.map((detail, key) => {
                                return(
                                    <li key={key}>{detail}</li>
                                )
                            })}
                        </ul>
                    </VerticalTimelineElement>
                )
            }))}
            </VerticalTimeline>
        </section>
    )
}

export default ExperiencesPage;