import photo from './assets/photo.jpeg';

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
      <div className="FirstPage">
        <div className="Aside">
          <div className="Avatar">
            <img src={photo} width="150" height="150" alt="Logo" />
            <span className="Name">Denis Chheang</span>
          </div>
          <Contact />
          <Interets />
          <Languages />
        </div >
        <div className="Main">
          <Profil />
          <Competences />
        </div>
      </div>
      <div className="SecondPage">
        <Projets />
      </div>
      <div className="ThirdPage">
        <Experience />
        <Formation />
      </div>
    </div >
  );
}

export default App;
