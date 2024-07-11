import React, { useState } from "react";
import { club } from '../constants';
import Footer from './Footer';

const ClubCard = ({ image, title, description, technologies }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    const truncateText = (text, length) => {
        if (text.length <= length) {
            return text;
        }
        return text.slice(0, length) + '...';
    };

    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="w-full h-48 object-cover rounded-t-lg" src={image} alt="" />
            </a>
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">
                    {isExpanded ? description : truncateText(description, 100)}
                    {description.length > 100 && (
                        <span 
                            onClick={toggleExpansion} 
                            className="text-blue-500 cursor-pointer"
                        >
                            {isExpanded ? ' see less' : ' see more'}
                        </span>
                    )}
                </p>
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
            </div>
        </div>
    );
};

const Clubs = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {club.map((item, index) => (
                    <ClubCard
                        key={index}
                        image={item.image || 'https://www.ntaskmanager.com/wp-content/uploads/2020/10/project-design-in-project-management.png'}
                        title={item.title}
                        description={item.description}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Clubs;
