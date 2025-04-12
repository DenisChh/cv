import bishop from '../../assets/bishop.png';

const ProjetsSolo = () => {
    return (
        <div className="Section" id="Projects">
            <div className="Header">
                <img src={bishop} width={30} height={30} alt="pawn" />
                Projets solo
            </div>
            <ul>
                <li>
                    <span className="bold">Mise en place d'un cluster d'applications web avec Kubernetes </span>
                </li>
                <ul>
                    <li className="bold">
                        Dockering des applications Wordpress, phpMyAdmin et Grafana
                    </li>
                    <li className="bold">
                        Load balancing via Metallb
                    </li>
                    <li className="bold">
                        Mise en place de serveurs NGINX et ftps
                    </li>
                    <li className="bold">
                        
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