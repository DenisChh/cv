import pawn from '../assets/pawn.png';

const Languages = () => {
    return (
        <div className="Section">
            <div className="Header">
                <img src={pawn} width={30} height={30} alt="pawn" />
                <div> Languages </div>
            </div>
            <ul>
                <li>
                    Anglais (B2)
                </li>
                <li>
                    Français (Maternelle)
                </li>
                <li>
                    Cambodgien (Courant)
                </li>
            </ul>
        </div>
    )
}

export default Languages;