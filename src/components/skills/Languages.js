import pawn from '../../assets/pawn.png';
import './Languages.css'

const Languages = () => {
    return (
        <div className="Aside" id="Languages">
            <div className="Header">
                <img src={pawn} width={30} height={30} alt="pawn" />
                <div> Languages </div>
            </div>
            <ul>
                <li>
                    Anglais niveau B2
                </li>
                <li>
                    Français
                </li>
            </ul>
        </div>
    )
}

export default Languages;