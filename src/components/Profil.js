import king from '../assets/king.png';
import photo from '../assets/photo.jpeg'

const Profil = () => {
  return (
    <div className="Profile">
      <div className="Avatar">
        <img src={photo} width="150" height="150" alt="Logo" />
        <span className="Name">Denis Chheang</span>
      </div>
      <div className="Section" id="Profile">
        <div className="Header">
          <img src={king} width={30} height={30} alt="pawn" />
          <div>
            Profil
          </div>
        </div>
        <div>
          <div className="Title">
            Développeur web et mobile full-stack
          </div>
          <div className="Text">
            Après 3 ans de formation à l'école 42 à Paris, j'ai été en charge de la conception intégrale d'une application mobile en tant que développeur indépendant pendant 8 mois.
            Rigoureux, autonome et à l'écoute, je suis à présent à la recherche de nouvelles opportunités.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profil;