import './App.css';
import Line from '../src/components/line';
import NavBar from '../src/components/Navbar';
import Home from '../src/components/home';
import Skills from '../src/components/skills';
import Projectcard from './components/projectcard';
import Contact from './components/contact'

function App() {
  return (

    <div className='bg-[#eef0f3] min-h-screen'>
      <div className="Title flex justify-center items-center">
          <h1 className='text-center text-3xl pt-8 font-cutive font-semibold text-[#3e68bb]'>
          Shahd Mustafa
          </h1>
          
      </div>

      <div className='Line'>
        <Line></Line>
      </div>

      <div>
        <NavBar></NavBar>
      </div>

      <div className='Line'>
        <Line></Line>
      </div>

      <div>
        <Home/> 
      </div>

      <div>
        <Skills/>
      </div>
      <div>
        <Projectcard/>
      </div>
      
      
      <div className='Line'>
        <Line></Line>
      </div>

      <div>
        <Contact/>
      </div>


      <div className='Line'>
        <Line></Line>
      </div>
      

    
    </div>
   
  );
}

export default App;
