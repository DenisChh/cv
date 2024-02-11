import queen from '../assets/queen.png';

const Experience = () => {
    return (
        <div className="Section" id="Xp">
            <div className="Header">
                <img src={queen} width={30} height={30} alt="pawn" />
                Expérience professionnelle
            </div>
            <div className="Row">
                <div className="XPDate">
                    Juin 2023 - Janvier 2023
                </div>
                <div>
                    <div className="Title">
                        Développeur full-stack
                    </div>
                </div>
            </div>
            <ul>
                <li>
                    Analyse des besoins du client et mise en place de solutions techniques répondant à ces besoins
                </li>
                <li>
                    Rédaction du cahier des charges technique
                </li>
                <li>
                    Développement de l' <span className="bold"> UI </span> et de l'<span className="bold"> UX</span> en  <span className="bold"> React Native </span>
                </li>
                <li>
                    Mise en place de l'<span className="bold"> API </span> en <span className="bold">NestJS</span>
                </li>
                <li>
                    Mise en place de la <span className="bold">base de données </span> en <span className="bold">PostgreSQL</span>
                </li>
                <li>
                    Développement d'une interface de gestion de base de données pour le <span className="bold">backoffice</span> en <span className="bold">ReactJS</span>
                </li>
                <li>
                    Intégration d'un système d'<span className="bold">authentification via Firebase, Oauth2 et JWT Tokens</span>
                </li>
                <li>
                    Publication de l'application sur le <span className="bold">google Playstore</span>
                </li>
                <li>
                    Hébergement du backend et du backoffice via <span className="bold">Microsoft Azure</span>
                </li>
                <li>
                    Tests, scaling et maintenance de l'application
                </li>
            </ul>
        </div>

    )
}

export default Experience;