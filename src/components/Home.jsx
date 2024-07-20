import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { name } from '../constants';
import { motion } from "framer-motion";
import Background from './Background';
import Footer from './Footer';
import ButtonLink from './ButtonLink';

const Home = () => {
  const ref = useRef(0);
  const [text, setText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current < name.length) {
        ref.current++;
        setText((prevText) => prevText + name[ref.current - 1]);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className='area relative z-0 bg-black w-screen h-screen'>
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className='hero relative h-[calc(100vh)] flex justify-center items-center text-white' id='hero'>
        <div className='pt-4 h-36 backdrop-blur-sm rounded-3xl'>
          <h1 className='text-6xl sm:text-7xl font-extrabold mt-2'>Hi, I'm&nbsp;<span className='text-yellow-200 font-extrabold'>{text}</span></h1>
          <p className='mt-3 text-xl'>I love to learn and build scalable and optimized frontend systems.</p>
          <button
            onClick={handleContactClick}
            className='p-3 bg-yellow-200 hover:bg-yellow-300 text-black font-bold rounded mt-4'
          >
            Contact Me  →
          </button>
        </div>      
      </div>
      <Footer/>
    </div>  
  );
}

export default Home;
