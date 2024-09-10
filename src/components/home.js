import React from 'react';
import image1 from '../assests/home1.jpg';
import HackPic from '../assests/hackPic.jpg';

function Home() {
  return (
    <section id="home" >
        <div className='w-full bg-white py-16 px-4'> 
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 mb-4'>
            <img className='hidden lg:flex justify-center items-center w-[500px] h-[400px]  my-4  border-2 border-black' src={image1} alt=''/>
                <div className='flex flex-col justify-center '>
                    <p className='text-[#000000] font-cutive font-bold text-sm mb-4 '>Full Stack Developer</p>
                    
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-cutive font-bold py-2 mb-2' >Shahd Mustafa</h1>
                    <p className='font-cutive text-sm mb-1'>
                        Hello there! 
                       My name is Shahd Mustafa, a Full stack software developer, I recently graduated from the University of Michigan in Software Engineering.
                    </p>
                    <p className='font-cutive text-sm mb-1'>
                    ✮ I am currently working as a game developer intern at Warrior Heart game studio, a Not-For-Profit game studio dedicated to creating exceptional video game experiences that are free 
                        from the constraints of traditional publishers or investors. Also, I am part the Hack Dearborn team, creating the events Web and Mobile Applicatoin.
                              
                    </p>
                    <p className='font-cutive text-sm mb-1'>
                    ✮ In my free time I love to pick up new hobbies, right now they are painting/drawing, embroidery, and reading.
                    </p>
                </div>

            </div>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <div className='flex flex-col justify-center '>
                    <p className='text-[#000000] font-bold font-cutive mb-4 text-sm '>Achievements</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-cutive mb-2 font-bold py-2'>Edu-Venture</h1>
                    <p className='font-cutive text-sm mb-1'>
                     Second Place Hackathon Winner! 
                   

                    </p>
                    <p className='font-cutive text-sm '>
                    ✮ Award presented by the University of Michigan Hackathon with the best project among 50 other teams. My team and I won this award for our project, EduVenture, a game that transforms the career exploration
                    process into an engaging and immersive storyline adventure.

                    </p>
                    
                </div>
                <img className='hidden lg:flex justify-center items-center w-[500px] h-[400px] ml-auto my-4 border-2 border-black ' src={HackPic} alt=''/>
            </div>


        </div>
        
        
        
     </section>
  );
}

export default Home;
