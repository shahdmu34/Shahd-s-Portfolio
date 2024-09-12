import React from 'react';

function contact() {
  return (
    <section id="contact">
       <div className=' w-full bg-[#eef0f3]min-h-screen flex justify-between items-center px-4  text-[#28426b] z-20 max-w-[1240px] mx-auto  ' >
       
               
               
        <a href={"https://github.com/shahdmu34"} target='_blank' rel='noopner norefferrer'>
           <button className='font-cutive text-s text-[#28426b]  hover:scale-110 transition-transform duration-300'>Github</button>
        </a>
                
        <p className='text-xl'>•</p>
                
        <a href={"https://www.linkedin.com/in/shahd-m-mustafa"} target='_blank' rel='noopner norefferrer'>
           <button className='font-cutive text-s  text-[#28426b] hover:scale-110 transition-transform duration-300 '>Linkedin</button>
        </a>
                
            </div>
    </section>
  );
}

export default contact;
