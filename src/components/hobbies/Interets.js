import pawn from '../../assets/pawn.png';
import './Hobbies.css'

const Interets = () => {
  return (
    <div className="Aside" id="Hobbies">
      <div className="Header">
        <img src={pawn} width={30} height={30} alt="pawn" />
        <div>
          Intérêts
        </div>
      </div>
      <ul>
        <li>
          Jeux
        </li>
        <li>
          Animation
        </li>
        <li>
          Guitare
        </li>
        <li>
          Ski
        </li>
        <li>
          Randonnée
        </li>
        <li>
          Volley-ball, Basket-ball
        </li>
      </ul>
    </div>
  )
}

export default Interets;