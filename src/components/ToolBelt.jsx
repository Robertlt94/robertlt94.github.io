import React, {useContext} from 'react';
import MyInfoContext from '../MyInfoContext';
import Tool from './Tool';

const ToolBelt = () => {
    const {techStack} = useContext(MyInfoContext);

    return (
        <article className='tool-belt'>
            <p className='tool-title'>Tech Stack</p>
            <div className='tool-container'>
                {techStack.currentTechStack.map((tech, index) => {
                    return (
                        <Tool name={tech.name} icon={tech.icon} key={index} />
                    )
                })}
            </div>
            <p className='tool-title'>Interested In</p>
            <div className='tool-container'>
                {techStack.interestedInTechStack.map((tech, index) => {
                    return (
                        <Tool name={tech.name} icon={tech.icon} key={index} />
                    )
                })}
            </div>
            <hr />
        </article>
    )
}

export default ToolBelt;