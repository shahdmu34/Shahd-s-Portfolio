import React from 'react';
import Project from './projects';
import Projectdata from './projectData';

function projectcard() {
    return (
        <section id="project" >
           <div name="work" className=" w-full bg-white py-16 px-4">
                 <div className='max-w-[1240px] mx-auto'>
                    <div className="pb-4">
                    <p className="text-4xl font-bold font-cutive  text-blacks">
                        Projects
                    </p>
                  
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-4  z-10">
                        {Projectdata.map((Projectdata, index) =>
                        <Project
                        key={index}
                        title={Projectdata.title}
                        description={Projectdata.description}
                        techStack={Projectdata.techStack}
                        imageUrl={Projectdata.imageUrl}
                        codeLink={Projectdata.codeLink}
                        demoLink={Projectdata.demoLink}

                        />
                        )}

                    </div>
                </div>
        </section>
    );
}

export default projectcard;
