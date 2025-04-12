import bishop from '../../assets/bishop.png';
import ForestBattle from './ForestBattle';
import Irc from './Irc';
import Kubernetes from './Kubernetes';
import Minirt from './Minirt';
import Pong from './Pong';
import Roguelike from './Roguelike';
import './projects.css'

const Projects = () => {
    return (
        <>
            <div className="Section" id="Projects">
                <div className="Header">
                    <img src={bishop} width={30} height={30} alt="pawn" />
                    Projets
                </div>
                <ul>
                    <Pong />
                    <Kubernetes />
                    <Irc />
                </ul>
            </div>
        </>
    )
}

export default Projects;