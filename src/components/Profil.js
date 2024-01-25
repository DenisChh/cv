import king from '../assets/king.png';

const Profil = () => {
    return (
        <div className="Profile">
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
              Rigoureux, autonome et à l'écoute, je suis à present à la recherche de nouvelles opportunités.
            </div>
          </div>
        </div>
    )
}

export default Profil;