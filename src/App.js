import './App.css';
import {BrowserRouter} from 'react-router-dom'
import  {Home,Navbar} from './Components/import';
import About from './Components/About'
import Project from './Components/Project';
import Contact from './Components/Contact';
import StarsCanvas from './Components/Stars';

function App() {
  return (
    <BrowserRouter>
      <div className="content">

        <Navbar/>
        {/* <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes> */}
        <Home/>
        <About/>
        <Project/>
        
        <div className="cont">
        <Contact/>
        <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
