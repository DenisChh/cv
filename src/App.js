import './App.css';

import Contact from './components/Contact';
import Interets from './components/Interets';
import Languages from './components/Languages';
import Profil from './components/Profil';
import Experience from './components/Experience';
import Projets from './components/Projets';
import Competences from './components/Competences';
import Formation from './components/Formation';

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
          <Projets />
      </div>
      <div className="Pages" id="ThirdPage">
          <Experience />
          <Formation />
      </div>
    </div >
  );
}

export default App;
