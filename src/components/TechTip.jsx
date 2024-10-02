import React from 'react';
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const TechTip = (tech, detail) => {

    return (
        <Tooltip title="test 123">
            <IconButton>
                <QuestionMarkIcon sx={{ color: '#000' }} />
            </IconButton>
        </Tooltip>
    );
};

export default TechTip;