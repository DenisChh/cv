import './App.css';

import Contact from './components/profile/Contact';
import Interets from './components/hobbies/Interets';
import Languages from './components/skills/Languages';
import Profil from './components/profile/Profil';
import Experience from './components/exp/Experience';
import Projects from './components/projects/Projects';
import Competences from './components/skills/Competences';
import Formation from './components/studdies/Formation';

function App() {
  return (
    <div className="App">
      <div className="Pages" id="FirstPage">
        <Profil />
        <div className="Main">
          <div className="MainAside">
            <Contact />
            <Interets />
            <Languages />
          </div>
          <Competences />
        </div >
      </div>
      <div className="Pages" id="SecondPage">
        <Experience />
        <Projects />
        <Formation />
      </div>
    </div >
  );
}

export default App;
