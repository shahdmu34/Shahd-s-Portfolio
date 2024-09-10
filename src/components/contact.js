import React from 'react';

function contact() {
  return (
    <section id="contact">
       <div className='flex justify-between gap-x-2 max-w-[1240px] mx-auto' >
               
        <a href={"shahdmu@umich.edu"} target='_blank' rel='noopner norefferrer'>
          <button className='font-cutive text-s  hover:scale-110 transition-transform duration-300'>Email</button>
         </a>

         <p className='text-xl'>•</p>
               
               
        <a href={"https://github.com/shahdmu34"} target='_blank' rel='noopner norefferrer'>
           <button className='font-cutive text-s  hover:scale-110 transition-transform duration-300'>Github</button>
        </a>
                
        <p className='text-xl'>•</p>
                
        <a href={"https://www.linkedin.com/in/shahd-m-mustafa"} target='_blank' rel='noopner norefferrer'>
           <button className='font-cutive text-s  hover:scale-110 transition-transform duration-300 '>Linkedin</button>
        </a>
                
            </div>
    </section>
  );
}

export default contact;
