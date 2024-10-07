import React, {useContext} from 'react';
import MyInfoContext from '../MyInfoContext';
import BuildIcon from '@mui/icons-material/Build';

const ProjectSection = () => {
    const {projects} = useContext(MyInfoContext);

    return (
        <section className='project-section' id="project">
            <h1 className='sub-headers' id="project-section-anchor">Projects</h1>
            <div>
                <h1 className='under-development'>Currently:</h1>
                <BuildIcon fontSize='large' color='warning' />
                <h1 className='under-development'>Under Development</h1>
                {/* {projects.map(((project, index) => {
                    return (
                        <div className="project-container" key={index} >
                            <ul>
                                <li>{project.name}</li>
                                <li>{project.media}</li>
                                <li>{project.tech}</li>
                                <li>{project.details}</li>
                            </ul>
                        </div>
                    )
                }))} */}
            </div>
        </section>
    )
}

export default ProjectSection;