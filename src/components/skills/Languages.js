import pawn from '../../assets/pawn.png';

const Languages = () => {
    return (
        <div className="Aside" id="Languages">
            <div className="Header">
                <img src={pawn} width={30} height={30} alt="pawn" />
                <div> Languages </div>
            </div>
            <ul>
                <li>
                    Anglais (B2)
                </li>
                <li>
                    Français
                </li>
                <li>
                    Cambodgien
                </li>
            </ul>
        </div>
    )
}

export default Languages;