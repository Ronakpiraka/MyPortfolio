// import React from "react";
// import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import { FaGraduationCap } from 'react-icons/fa';
// import Footer from "./Footer";

// const Education = () => {
//   const educations = [
//     {
//       date: "2022 - Present",
//       degree: "Master of Science in Computer Science",
//       school: "University of Example",
//       description: "Specializing in Artificial Intelligence and Machine Learning.",
//     },
//     {
//       date: "2018 - 2022",
//       degree: "Bachelor of Technology in Computer Engineering",
//       school: "Institute of Example Technology",
//       description: "Graduated with First Class Honors.",
//     },
//   ];

//   return (
//     <div className="bg-primary w-full min-h-screen p-8">
//       <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Education</h2>
//       <VerticalTimeline>
//         {educations.map((education, index) => (
//           <VerticalTimelineElement
//             key={index}
//             date={education.date}
//             iconStyle={{ background: '#4a90e2', color: '#fff' }}
//             icon={<FaGraduationCap />}
//           >
//             <h3 className="vertical-timeline-element-title">{education.degree}</h3>
//             <h4 className="vertical-timeline-element-subtitle">{education.school}</h4>
//             <p>{education.description}</p>
//           </VerticalTimelineElement>
//         ))}
//       </VerticalTimeline>
//     </div>
//   );
// };

// export default Education;
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { educations } from '../constants';
import Footer from './Footer';


const Education = () => {
  return (
    <div className='education bg-black w-screen text-white pt-4 pt-16 overflow-x-hidden' id='education'>
      <div className='pt-12 sm:px-16'>
        <p className='font-light'>MY JOURNEY SO FAR.</p>
        <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>My Education.</h2>
      </div>
      <VerticalTimeline className='mt-9'>
        {educations.map((education) => (
          <VerticalTimelineElement
            className="relative vertical-timeline-element--work"
            contentStyle={{ background: "#1d1836", color: "#fff", }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={education.duration}
            iconStyle={{ background: '#fff' }}
            icon={
              <a className='flex justify-center items-center w-full h-full' href={education.url} target='_blank'>
                <img
                  src={education.logo}
                  alt={education.company}
                  className='w-[60%] h-[60%] object-contain'
                />
              </a>
            }
          >
            <div>
              <h3 className='text-white text-[24px] font-bold'>{education.role}</h3>
              <p
                className='text-secondary text-[16px] font-semibold'
                style={{ margin: 0 }}
              >
                {education.company}
              </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
              {education.points.map((point, index) => (
                <li
                  key={`education-point-${index}`}
                  className='text-white-100 text-[14px] pl-1 tracking-wider'
                >
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <Footer/>
    </div>
  )
}

export default Education;