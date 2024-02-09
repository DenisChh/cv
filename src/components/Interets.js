import pawn from '../assets/pawn.png';

const Interets = () => {
    return (
        <div className="Section">
        <div className="Header">
          <img src={pawn} width={30} height={30} alt="pawn" />
          <div>
            Intérêts
          </div>
        </div>
        <ul>
          <li>
            Jeux-vidéos
          </li>
          <li>
            Jeux de société
          </li>
          <li>
            Mangas / Animés
          </li>
          <li>
            Guitare
          </li>
          <li>
            Piano
          </li>
          <li>
            Cinéma
          </li>
          <li>
            Ski
          </li>
          <li>
            Randonnée
          </li>
          <li>
            Volley-ball
          </li>
        </ul>
      </div>
    )
}

export default Interets;