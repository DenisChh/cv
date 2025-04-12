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
            <div className="Section" id="pageBreak">
                <div className="Header">
                    <img src={bishop} width={30} height={30} alt="pawn" />
                    Projets
                </div>
                <ul>
                    <Pong />
                    <Kubernetes />
                    <Irc />
                    {/*<Minirt />*/}
                </ul>
            </div>
            {/*
            <div className="Section">
                <ul>
                    <ForestBattle />
                    <Roguelike />
                </ul>
            </div>
            */}
        </>
    )
}

export default Projects;