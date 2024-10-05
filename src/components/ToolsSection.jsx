import React, {useContext} from 'react';
import MyInfoContext from '../MyInfoContext';
import BuildIcon from '@mui/icons-material/Build';

const ToolBelt = () => {
    const {Tools} = useContext(MyInfoContext);

    return (
        <article className='tool-belt' id="Tools">
            <h3>The Tool Belt</h3>
            <div className='frontend'>

            </div>
            <div className='backend'>

            </div>
            <div className='design'>

            </div>
            <div className='miscellaneous'>

            </div>
            <div className='ambitions'>

            </div>
        </article>
    )
}

export default ToolBelt;