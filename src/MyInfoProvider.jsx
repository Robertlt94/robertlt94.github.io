import React, {useState} from 'react';
import MyInfoContext from './MyInfoContext';
import CodeIcon from '@mui/icons-material/Code';
import GroupsIcon from '@mui/icons-material/Groups';
import CheckIcon from '@mui/icons-material/Check';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import Seeds from './components/assets/seedsofsuccess_logo.jpeg';
import Monicat from './components/assets/monicatdata_logo.jpeg';
import Mdh from './components/assets/reading_math_inc_logo.jpeg';
import Walmart from './components/assets/walmart_logo.jpeg';
import Brakebush from './components/assets/brakebush_chicken_logo.jpeg';
import Randstad from './components/assets/randstadusa_logo.jpeg';
import Teksystems from './components/assets/teksystems_logo.jpeg';
import Sppl from './components/assets/saint_paul_public_library_logo.jpeg';
import Boberto from './components/assets/Boberto.png';
import Roberto from './components/assets/me.jpg';
import Setup from './components/assets/setup.jpeg';
import Linkedin from './components/assets/linkedin_logo.svg';
import Github from './components/assets/github_logo.svg';
import MetroState from './components/assets/Metro_State_University.jpg';
import MidState from './components/assets/Mid_State_Technical_College.jpg';
import Coursera from './components/assets/Coursera_Online.svg';
import HackTheGap from './components/assets/Hack_The_Gap.jpg';
import PrimeDigitalAcademy from './components/assets/Prime_Digital_Academy.jpeg';

const MyInfoProvider = ({children}) => {
    const [robert] = useState(
        {
            fullName: "Robert Thao",
            profession: ["IT Professional", "Software Engineer", "Project Manager", "Scrum Master"],
            location: "Minnesota",
            about: "With a rich background spanning public health, retail, and community outreach, I bring a unique perspective to IT, software engineering, and project management. My journey across various industries has refined my problem-solving abilities, leadership skills, and customer-centric approach. Alongside my non-traditional path, I’ve pursued certifications in front-end and back-end development, full-stack software engineering, and project management, driven by a passion for technology and innovation. I thrive in dynamic, fast-paced environments, and am eager to leverage my multifaceted skills to create impactful solutions that meet the needs of both teams and clients."
        }
    );
    const [heroImages] = useState([{id: 0, image: Boberto}, {id: 1, image: Roberto}, {id: 2, image: Setup}]);
    const [education] = useState(
        [
            {
                subject: "Computer Science",
                type: "Bachelor's Degree",
                school: "Metro State University",
                graduationYear: "Current Student",
                image: <img src={MetroState} className="school-picture" />,
            },
            {
                subject: "Meta Back-End Developer",
                type: "Certificate",
                school: "Coursera",
                graduationYear: "Current Student",
                image: <img src={Coursera} className="school-picture" />,
            },
            {
                subject: "Frontend Development",
                type: "Certificate",
                school: "Hack The Gap",
                graduationYear: "2024",
                image: <img src={HackTheGap} className="school-picture" />,
            },
            {
                subject: "Meta Front-End Developer Professional",
                type: "Certificate",
                school: "Coursera",
                graduationYear: "2024",
                image: <img src={Coursera} className="school-picture" />,
            },
            {
                subject: "Full Stack Software Engineering",
                type: "Certificate",
                school: "Prime Digital Academy",
                graduationYear: "2022",
                image: <img src={PrimeDigitalAcademy} className="school-picture" />,
            },
            {
                subject: "Business Management",
                type: "Associate's Degree",
                school: "Mid-State Technical College",
                graduationYear: "2021",
                image: <img src={MidState} className="school-picture" />,
            },
            {
                subject: "Project Management",
                type: "Technical Diploma",
                school: "Mid-State Technical College",
                graduationYear: "2021",
                image: <img src={MidState} className="school-picture" />,
            }
        ]
    )
    const [experiences] = useState(
        [
            {
                duration: "Sep 2024 - Current",
                title: "Project Manager & Software Develper",
                icon: <CodeIcon />,
                logo: <img src={Seeds} className='company-logo' />,
                company: "Seeds of Success",
                details: [
                    "Project Manager: Led cross-functional teams in the development of the company product, utilizing Agile methodologies to ensure project success.",
                    "Full-Stack Development: Designed and developed frontend UI/UX components using Figma and backend solutions using Express, REST APIs, SQL, and MongoDB, creating a scalable demo product for stakeholder engagement and pitching."
                ]
            },
            {
                duration: "July 2024 - Aug 2024",
                title: "Software Engineer Intern",
                icon: <CodeIcon />,
                logo: <img src={Monicat} className='company-logo' />,
                company: "Monicat Data",
                details: [
                    "QA tested web applications manually for bugs and ensured they met final development standards before handoff to clients.",
                    "Contributed to frontend development using React.js and Next.js, enhancing UI and UX consistency across platforms.",
                    "Utilized Scrum and Agile methodologies to develop, test, and deliver web applications through iterative sprints, ensuring timely and efficient project completion."
                ]
            },
            {
                duration: "Aug 2023 - Jul 2024",
                title: "Public Health Project Coordintor",
                icon: <GroupsIcon />,
                logo: <img src={Mdh} className='company-logo' />,
                company: "Ampact",
                details: [
                    "Served my service term at the Minnesota Department of Health with their Community Health Worker Traning Program",
                    "Researched missing data, identified potential networking opportunities, apprenticeship and scholarship recipient sites, and enhanced project capacity through strategic initiatives.",
                    "Established presence with various partners and organizations statewide, focusing on diversity to address gap areas identified in year 1 of the initiative.",
                    "Assisted in progress reports, weekly meetings, and presentations to ensure seamless project coordination.",
                    "Acquired proficiency in Adobe Captivate 2023 to modernize e-learning materials for the state's Learning Management System (LMS).",
                    "Formulated documents to consolidate data and resources for streamlined reporting processes."
                ]
            },
            {
                duration: "Apr 2021 - Dec 2021",
                title: "Front End Team Lead",
                icon: <GroupsIcon />,
                logo: <img src={Walmart} className='company-logo' />,
                company: "Walmart",
                details: [
                    "Oversaw daily operations, including opening/closing, cash handling, self-checkouts, and the maintenance team.",
                    "Analyzed sales reports to mitigate profit loss.",
                    "Managed a team of 20-30 members per shift, emphasizing customer satisfaction and team morale.",
                    "Conducted training sessions for new hires on company policies, procedures, and technical skills."
                ]
            },
            {
                duration: "Jul 2020 - Apr 2021",
                title: "Quality Assurance Specialist & Backup Receiver",
                icon: <CheckIcon />,
                logo: <img src={Brakebush} className='company-logo' />,
                company: "Brakebush Chicken",
                details: [
                    "Ensured compliance with USDA and company standards through facility testing and inspections.",
                    "Collaborated with department leads and managers to address deficiencies and violations.",
                    "Conducted product assessments and utilized SAP for data tracking.",
                    "Enforced USDA, OSHA, and company standards and trained employees on compliance.",
                    "Certified to operate pallet jacks and scissor lifts, contributing to facility operations.",
                    "Contributed to policy implementation and improvement through collaboration with leadership."
                ]
            },
            {
                duration: "Jul 2019 - Feb 2020",
                title: "Customer Service Intermediate",
                icon: <ScreenSearchDesktopIcon />,
                logo: <img src={Randstad} className='company-logo' />,
                company: "Randstad USA",
                details: [
                    "Resolved technical issues as a Tier 1 Help Desk support in Target North Campus' HRO IT department, enhancing user experience.",
                    "Leveraged SalesForce, ServiceNow, ActiveDirectory, and other proprietary software to streamline support processes and improve efficiency.",
                    "Collaborated with third-party vendors to identify and implement effective solutions, ensuring timely issue resolution.",
                    "Diagnosed and resolved issues on various operating systems including Windows, MacOS, Androids, and iOS systems.",
                    "Troubleshot network devices such as cameras, printers, and POS systems to maintain seamless operations at retail locations."
                ]
            },
            {
                duration: "Mar 2019 - May 2019",
                title: "Support Analyst",
                icon: <ScreenSearchDesktopIcon />,
                logo: <img src={Teksystems} className='company-logo' />,
                company: "TEKsystems",
                details: [
                    "Supported Tier 1 Help Desk operations for the company's software utilized in computer testing in school districts across the nation, ensuring seamless user experience.",
                    "Documented and escalated issues effectively using SalesForce CRM, enhancing tracking and resolution efficiency.",
                    "Collaborated with engineers, district engineers, and school IT staff to troubleshoot and resolve technical issues promptly."
                ]
            },
            {
                duration: "Feb 2013 - May 2016",
                title: "Library Customer Service Assistant 1 & CreaTech Studio Mentor",
                icon: <GroupsIcon />,
                logo: <img src={Sppl} className='company-logo' />,
                company: "Saint Paul Public Library",
                details: [
                    "Managed and curated the library's collection, including special collections, ensuring accessibility and organization.",
                    "Developed and executed community programming tailored to address the specific needs of the local community, promoting engagement and inclusivity.",
                    "Established a nurturing environment for teenagers to explore mentorship opportunities, cutting-edge technology, and social connections, fostering a sense of belonging and personal growth.",
                    "Managed user databases including Sprockets, Sierra, and ActiveNet to facilitate seamless operations within the shared space between Saint Paul Public Libraries and Saint Paul Parks and Recreation.",
                    "Proactively acquired proficiency in new software and hardware to support ongoing technological advancements, enabling effective training and assistance for volunteers, teens, and other stakeholders."
                ]
            }
        ]
    );
    const [projects] = useState(
        [
            {
                name: "test",
                media: "test",
                tech: "test",
                details: "test"
            },
            {
                name: "test",
                media: "test",
                tech: "test",
                details: "test"
            },
            {
                name: "test",
                media: "test",
                tech: "test",
                details: "test"
            },
            {
                name: "test",
                media: "test",
                tech: "test",
                details: "test"
            },
            {
                name: "test",
                media: "test",
                tech: "test",
                details: "test"
            }
        ]
    );
    const [connects] = useState(
        [
            {
                link: "https://www.linkedin.com/in/robertlt/",
                platform: "LinkedIn",
                logo: <img src={Linkedin} alt="Platform Logo" className="connects-logo"/>
            },
            {
                link: "https://github.com/Robertlt94",
                platform: "GitHub",
                logo: <img src={Github} alt="Platform Logo" className="connects-logo"/>
            },
        ]
    )

    return (
        <MyInfoContext.Provider value={{robert, heroImages, education, experiences, projects, connects}} >
            {children}
        </MyInfoContext.Provider>
    )
}

export default MyInfoProvider;