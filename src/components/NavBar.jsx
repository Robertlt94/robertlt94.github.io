import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import HandymanIcon from '@mui/icons-material/Handyman';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Group } from '@mui/icons-material';

const navBar = ({viewPortWidth}) => {

    return (
        <section className="navbar">
            {viewPortWidth < 625?
                <div className="mobile-navbar-container">
                    <a href="#top-of-page" className="mobile-navbar-btns">
                        <div>
                            <PersonIcon sx={{ fontSize: 50 }} />
                            <p>About Me</p>
                        </div>
                    </a>
                    <a href="#education-section-anchor" className="mobile-navbar-btns">
                        <div>
                            <SchoolIcon sx={{ fontSize: 50 }} />
                            <p>School</p>
                        </div>
                    </a>
                    <a href="#experiences-section-anchor" className="mobile-navbar-btns">
                        <div>
                            <WorkIcon sx={{ fontSize: 50 }} />
                            <p>Exp</p>
                        </div>
                    </a>
                    <a href="#project-section-anchor" className="mobile-navbar-btns">
                        <div>
                            <HandymanIcon sx={{ fontSize: 50 }} />
                            <p>Project</p>
                        </div>
                    </a>
                    <a href="#bottom-of-page" className="mobile-navbar-btns">
                        <div>
                            <GroupAddIcon sx={{ fontSize: 50 }} />
                            <p>Connect</p>
                        </div>
                    </a>
                </div>
            :
                <>
                    <ul>
                        <li><a href="#top-of-page">Robert Thao</a></li>
                        <li><a href="#education-section-anchor">Education</a></li>
                        <li><a href="#experiences-section-anchor">Experiences</a></li>
                        <li><a href="#project-section-anchor">Projects</a></li>
                        <li><a href="#bottom-of-page">Connect</a></li>
                    </ul>
                </>
            }
        </section>
    )
}

export default navBar;