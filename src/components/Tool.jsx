import React from 'react';
import StackIcon from 'tech-stack-icons';

const Tool = ({name, icon}) => {

    return (
        <div className='tool'>
            <div>
                <StackIcon name={icon} style={{fontSize: "100px"}} />
            </div>
            <div>
                <p className='tool-name'>{name}</p>
            </div>
        </div>
    )
}

export default Tool;