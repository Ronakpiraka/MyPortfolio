import React, { useState } from "react";
import { certificate } from '../constants';
import Footer from './Footer';

const CertificateCard = ({ image, title, description, git, technologies }) => {
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
                {/* <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a> */}
            </div>
        </div>
    );
};

const Certificates = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {certificate.map((item, index) => (
                    <CertificateCard
                        key={index}
                        image= 'https://yourtrademarkattorney.com/wp-content/uploads/certification-mark.jpg'
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

export default Certificates;
