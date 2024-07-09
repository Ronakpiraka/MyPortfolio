import React from "react";
import ProjectLogo from '../assets/Project_logo.png';
import Footer from './Footer';

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="w-full h-48 object-cover rounded-t-lg" src={image} alt="" />
            </a>
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            {tag}
                        </p>
                    ))}
                </div>
                {/* <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a> */}
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={ProjectLogo}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export const project = [
    {
        title: 'Telehealth GCP [Sep 2022 - Jun 2023]',
        description: 'Led the development of secure data generation and integration solutions on Google Cloud Platform, enhancing data security and accessibility by 85%. Developed React.js interfaces, improving user interaction and decreasing error rates by 20%.',
        image: ProjectLogo,
        git: 'https://github.com/ronakpiraka',
        technologies: ['ReactJS', 'AWS', 'NodeJS']
    },
    {
        title: 'SBI - YONO (Clone) [Aug 2022 - Nov 2022]',
        description: 'Developed a secure digital banking platform clone using Java and Angular, implementing robust encryption and authentication measures, leading to a 99.9% uptime and enhanced user trust.',
        image: ProjectLogo,
        git: "https://github.com/ronakpiraka",
        technologies: ['Angular JS', 'Java', 'Github']
    },
    {
        title: 'BSync - Brillio [Aug 2022 - Sep 2022]',
        description: 'Created a dynamic Single Sign-On (SSO) landing page with admin portals and AWS S3 bucket for image storage, improving admin efficiency by 40%. Implemented RSVP functionality, ensuring secure handling of user information and event details, resulting in a 75% increase in event participation.',
        image: ProjectLogo,
        git: "https://github.com/ronakpiraka",
        technologies: ['Angular JS', 'Java', 'Github']
    }
]

export default Projects;
