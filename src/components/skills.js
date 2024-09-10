import React from 'react';
import SkillData from '../components/skillData';
import SkillCard from '../components/skillCard';

function skills() {
  return (
    <section id="skills">
      <div name="work" className=" w-full bg-white py-16 px-4">
                 <div className='max-w-[1240px] mx-auto'>
                    <div className="pb-4">
                    <p className="text-4xl font-bold font-cutive  text-blacks">
                        Skills
                    </p>

                  
                    </div> 
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-7 gap-2 z-10">
                        {SkillData.map((SkillData, index) =>
                        <SkillCard
                        key={index}
                        name={SkillData.name}
                        logoImg={SkillData.logoImg}
                        />
                      )}

                    </div>
                </div>
    </section>
  );
}

export default skills;
