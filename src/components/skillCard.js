import React from 'react';

const SkillCard =({
    name,
    logoImg,
    
}) => {
  return (
    <section id="Skills">
    <div className='cardcomponent border-2 border-black p-2 max-w-[200px] max-h-[80px] ml-2 mt-2  transition-transform duration-300 transform hover:scale-105 -z-10'>
        <div className='flex items-center'>
        <img src={logoImg} alt={name} className='w-[40px] h-[40px] object-contain'/>
        <p className='text-[15px] font-cutive ml-2 mt-2'>{name}</p>
        </div>
    </div>
    </section>

  );
}

export default SkillCard;