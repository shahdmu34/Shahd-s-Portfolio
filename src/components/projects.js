import React from 'react';

const project =({
    title,
    description,
    techStack,
    imageUrl,
    codeLink,
    demoLink,
}) => {
  return (
    <section id="project">
        <div className='cardcomponent border-2 border-black p-8 max-w-[400px] max-h-[650px] ml-2 mt-6 mr-2 transition-transform duration-300 transform hover:scale-105 -z-10'>
            <h3 className='mb-4 font-cutive font-semibold'>{title}</h3>
            <img src={imageUrl} alt={title} className=' max-w-[300px] max-h-[200px] w-full object-cover border-2 border-black'/>
            
            <p className='font-cutive mt-4 text-sm'>{description}</p>
            <p className='font-cutive mt-4 text-sm'>{techStack}</p>


            <div className='mt-4 flex justify-center'>
                {codeLink && (
                    <a href={codeLink} target='_blank' rel='noopner norefferrer'>
                        <button className='font-cutive text-sm border-2 border-black text-black px-4 py-2 mr-2  '>Code</button>
                    </a>
                )}
                {demoLink && (
                    <a href={demoLink} target='_blank' rel='noopner norefferrer'>
                        <button className='font-cutive text-sm  border-2 border-black text-black px-4 py-2 mr-2'>Demo</button>
                    </a>
                )}
            </div>
      </div>
    </section>
  );
}

export default project;
