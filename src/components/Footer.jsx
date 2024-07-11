import React from 'react';
import { FaGithub, FaFacebook, FaInstagram, FaWhatsapp, FaTelegram, FaYoutube } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { FiMail, FiGlobe, FiPhone } from 'react-icons/fi';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className='bg-slate-900 p-4' style={{ cursor: 'default' }}>
      <div className='flex justify-between flex-wrap gap-4'>
        <p className='text-white text-center w-full sm:w-auto font-light'>© {year} Ronak. All rights reserved.</p>
        <div className='text-white flex justify-around sm:w-[250px] w-full'>
          <a href="mailto:ronakpiraka@gmail.com" className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
            <FiMail className='text-xl' />
          </a>
          <a href="https://linkedin.com/in/ronak-piraka" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
            <AiFillLinkedin className='text-xl' />
          </a>
          <a href="https://github.com/ronakpiraka" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
            <FaGithub className='text-xl' />
          </a>
          <a href="https://linktr.ee/ronakpiraka" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
            <FiGlobe className='text-xl' />
          </a>
          <a href="tel:+917573883705" className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
            <FiPhone className='text-xl' />
          </a>
          <a href="https://www.facebook.com/ronakpiraka/" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
            <FaFacebook className='text-xl' />
          </a>
          <a href="https://www.instagram.com/gujju_guy" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
            <FaInstagram className='text-xl' />
          </a>
          <a href="https://wa.me/917573883705" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
            <FaWhatsapp className='text-xl' />
          </a>
          <a href="https://t.me/ronakpiraka" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
            <FaTelegram className='text-xl' />
          </a>
          <a href="https://www.youtube.com/channel/UCM-TLtKkXZTiISYv9qgBRSg" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
            <FaYoutube className='text-xl' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
