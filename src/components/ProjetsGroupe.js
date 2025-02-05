import bishop from '../assets/bishop.png';

const ProjetsGroupe = () => {
    return (
        <div className="Section" id="Projects">
            <div className="Header">
                <img src={bishop} width={30} height={30} alt="pawn" />
                Projets
            </div>
            <ul>
                <li>
                    <span className="bold">Pong en ligne</span>
                </li>
                <ul>
                    <li>
                        Mise en place d'un système d'authentification via <span className="bold">Oauth2, Jwt et 2fa</span>
                    </li>
                    <li>
                        Conception d'un système de <span className="bold">chat</span> via l'application
                    </li>
                    <li>
                        Intégration d'une fonctionnalité de matchmaking
                    </li>
                    <li>
                        Développement de l'<span className="bold">UI</span> et de l'<span className="bold">UX</span> en <span className="bold">ReactJS</span>
                    </li>
                    <li>
                        Développement de l'interface graphique à l'aide de la libraire <span className="bold">Canvas</span>
                    </li>
                    <li>
                        Mise en place de l'api en <span className="bold">NestJS</span>
                    </li>
                    <li>
                        Conception de la base de données en <span className="bold">PostgreSQL</span>
                    </li>
                </ul>
                <li>
                    <span className="bold">Mise en place d'un cluster d'applications web avec Kubernetes </span>
                </li>
                <ul>
                    <li>
                        <span className="bold">Conteneurisation</span> des applications Wordpress, phpMyAdmin et Grafana via <span className="bold">Docker</span>
                    </li>
                    <li>
                        <span className="bold">Load balancing</span> via <span className="bold">Metallb</span>
                    </li>
                    <li>
                        Mise en place de serveurs <span className="bold">NGINX</span> et <span className="bold">ftps</span>
                    </li>
                    <li>
                        <span className="bold">Monitoring</span> des applications via <span className="bold">Telegraf</span>
                    </li>
                </ul>
                <li className="bold">
                    Serveur IRC
                </li>
                <ul>
                    <li>
                        Développement d'un serveur répondant à des requêtes d'un client IRC, dont :
                    </li>
                    <ul>
                        <li>
                            Envoi de messages entre utilisateurs
                        </li>
                        <li>
                            Création et gestion de canaux de discussion
                        </li>
                        <li>
                            Gestion des utilisateurs dans les canaux par les superusers
                        </li>
                    </ul>
                </ul>
                {/*<li className="bold">
                    Shell interprétant des commandes bash
    </li>
                <ul>
                    <li>
                        Projet en groupe de 2
                    </li>
    </ul>
                <li>
                    <span className="bold">Logiciel de simulation </span> de transfert de paquets de données dans un réseau selon l'algorithme du <span className="bold">Leaky Bucket</span>
                </li>
                <ul>
                    <li>
                        Projet en groupe de 8
                    </li>
                    <li>
                        Interface graphique utilisant la librarie <span className="bold">Gtk</span>
                    </li>
                    <li>
                        Fonctionnalités permettant d'entrer les paramètres de la simulation
                    </li>
                    <li>
                        Dessins de graphes illustrant les performances du bucket
                    </li>
                    <li>
                        Chargement/sauvegarde de simulations dans des fichiers
                    </li>
                </ul>
                <li className="bold">
                    Jeu de strategie 2D en C++
                </li>
                <ul>
                    <li>
                        Projet en groupe de 2
                    </li>
                    <li>
                        Interface graphique utilisant la librarie <span className="bold">Qt</span>
                    </li>
                    <li>
                        Génération de map aléatoire
                    </li>
                    <li>
                        Déplacement d'unités
                    </li>
                    <li>
                        Gestion de collisions
                    </li>
                    <li>
                        Combat entre unités
                    </li>
                </ul>
                <li className="bold">
                    Jeu de type Roguelike 2D en Java
                </li>
                <ul>
                    <li>
                        Projet en groupe de 3
                    </li>
                    <li>
                        Level design
                    </li>
                    <li>
                        Character design
                    </li>
                    <li>
                        Combats et intéractions avec des PNJ
                    </li>
                </ul>
                <li>
                    <span className="bold">42 Rushes</span>
                </li>
                <ul>
                    <li>
                        Projets en groupe de 2 à 3
                    </li>
                    <li>
                        Objectif : développer des solvers en C en un weekend
                    </li>
                    <li>
                        Problèmes algorithmiques abordés : problème des n dames (backtracking), problème du plus grand carré
                    </li>
    </ul>*/}
            </ul>
        </div>
    )
}

export default ProjetsGroupe;