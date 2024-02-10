import bishop from '../assets/bishop.png';

const ProjetsSolo = () => {
    return (
        <div className="Section" id="Projects">
            <div className="Header">
                <img src={bishop} width={30} height={30} alt="pawn" />
                Projets solo
            </div>
            <ul>
                <li>
                    <span className="bold">Mise en place d'un cluster d'applications web </span> (Wordpress, phpMyAdmin, Grafana)
                </li>
                <ul>
                    <li className="bold">
                        Kubernetes
                    </li>
                    <li className="bold">
                        Metallb
                    </li>
                    <li className="bold">
                        Containers Docker
                    </li>
                    <li className="bold">
                        Serveurs NGINX et ftps
                    </li>
                </ul>
                <li>
                    <span className="bold">Logiciel de rendu d'image 3D </span>en C utilisant la technique du <span className="bold">Raytracing</span>
                </li>
            </ul>
        </div>
    )
}

export default ProjetsSolo;