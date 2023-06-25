import { useState } from 'react';
import './App.scss';
import Background from './components/Background/Background';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import SkillContainer from './components/Skill/SkillContainer';
import ProjectContainer from './components/Project/ProjectContainer/ProjectContainer';

function App() {

  const [darkMode, setDarkMode] = useState<boolean>(true);
  let toggleMode = darkMode ? "dark" : "light";

  return (
  
    <div className={`App ${toggleMode}`} >
      <Navbar onToggleMode={() => setDarkMode(!darkMode)}/>
      <Background toggleDarkMode={`${toggleMode}`} />
      <About/>
      <SkillContainer/>
      <ProjectContainer/>
      <Footer />
    </div>
  );
};

export default App;
