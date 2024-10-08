import React, {useContext} from 'react';
import MyInfoContext from '../MyInfoContext';
import Tool from './Tool';
import { Tooltip } from '@mui/material';
import TechTip from './TechTip';

const ToolBelt = () => {
    const {techStack} = useContext(MyInfoContext);
    const credit = "Created with icon usage from @keno_reloaded! Find out more here: https://www.tech-stack-icons.com/"

    return (
        <article className='tool-belt'>
            <div className='tooltip-container'>
                {/* <p className='tool-title'>Tech Stack <span><TechTip detail={credit} /></span></p> */}
                <p className='tool-title'>Tech Stack</p>
            </div>
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
        </article>
    )
}

export default ToolBelt;