import React from 'react';
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const TechTip = (details) => {

    return (
        <Tooltip title={details}>
            {/* <IconButton>
                <QuestionMarkIcon sx={{ fontSize: '16px', color: '#000', backgroundColor: '#c7c7c7', borderRadius: '50%', border: '1px solid #000', padding: '2px' }} />
            </IconButton> */}
        </Tooltip>
    );
};

export default TechTip;