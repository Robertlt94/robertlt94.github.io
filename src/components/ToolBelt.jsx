import React, {useContext, useEffect} from 'react';
import MyInfoContext from '../MyInfoContext';
import Tool from './Tool';
import { Tooltip } from '@mui/material';
import TechTip from './TechTip';

const ToolBelt = ({viewPortWidth}) => {
    const {techStack} = useContext(MyInfoContext);
    const credit = "Created with icon usage from @keno_reloaded! Find out more here: https://www.tech-stack-icons.com/"

    return (
        <article className='tool-belt'>
            <div className='tooltip-container'>
                {/* <p className='tool-title'>Tech Stack <span><TechTip detail={credit} /></span></p> */}
                <p className='tool-title'>The Tools</p>
            </div>
            <div className='tool-container' id="current-stack" >
                <div className="infinite-current current-loop-1">
                    {techStack.currentTechStack.map((tech, index) => {
                        return (
                            <Tool name={tech.name} icon={tech.icon} key={index} />
                        )
                    })}
                </div>
                {/* {viewPortWidth >= 625 ?
                    <div className="infinite-current current-loop-2">
                        {techStack.currentTechStack.map((tech, index) => {
                            return (
                                <Tool name={tech.name} icon={tech.icon} key={index} />
                            )
                        })}
                    </div>
                    :
                    <></>
                } */}
            </div>
            <p className='tool-title'>Interested In</p>
            <div className='tool-container' id="interested-stack" >
                <div className="infinite-interested interested-loop-1">
                    {techStack.interestedInTechStack.map((tech, index) => {
                        return (
                            <Tool name={tech.name} icon={tech.icon} key={index} />
                        )
                    })}
                </div>
                {/* {viewPortWidth >= 625 ?
                    <div className="infinite-interested interested-loop-2">
                        {techStack.interestedInTechStack.map((tech, index) => {
                            return (
                                <Tool name={tech.name} icon={tech.icon} key={index} />
                            )
                        })}
                    </div>
                    :
                    <></>
                } */}
            </div>
        </article>
    )
}

export default ToolBelt;