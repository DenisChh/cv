import queen from '../../assets/queen.png';
import Animation from './Animation';
import Kosherapp from './Kosherapp';
import './exp.css'

const Experience = () => {
    return (
        <div className="Section" id="Xp">
            <div className="Header">
                <img src={queen} width={30} height={30} alt="pawn" />
                Expérience professionnelle
            </div>
            <ul className="JobsContainer">
                <li>
                    <Kosherapp />
                </li>
                {/*<li>
                    <Animation />
                </li>*/}
            </ul>
        </div>

    )
}

export default Experience;