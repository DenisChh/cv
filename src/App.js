import logo from './logo.png';
import king from './king.png';
import queen from './queen.png';
import pawn from './pawn.png';
import bishop from './bishop.png';
import knight from './knight.png';

import './App.css';
import { AiFillHome } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <div className="Aside">
        <div className="Avatar">
          <img src={logo} width="100" height="100" alt="Logo" />
        </div>
        <div className="Section">
          <div className="Header">
            <img src={pawn} width={30} height={30} alt="pawn" />
            <div>
              Contact
            </div>
          </div>
          <div className="ContactEntry">
            <div className="IconWithText">
              <AiFillHome />
              <div>
                <div>
                  6 bis rue de la Fraternité
                </div>
                <div>
                  91200 Athis-Mons
                </div>
              </div>
            </div>
          </div>
          <div className="ContactEntry">
            <div className='IconWithText'>
              <AiFillMail />
              <div>
                denis.c1@live.fr
              </div>
            </div>
          </div>
          <div className="ContactEntry">
            <div className='IconWithText'>
              <AiOutlinePhone />
              <div>
                0749575164
              </div>
            </div>
          </div>
        </div>
        <div className="Section">
          <div className="Header">
            <img src={pawn} width={30} height={30} alt="pawn" />
            <div>
              Intérêts
            </div>
          </div>
          <ul>
            <li>
              Jeux
            </li>
            <li>
              Musique
            </li>
            <li>
              Théâtre
            </li>
            <li>
              Cinéma
            </li>
            <li>
              Ski
            </li>
            <li>
              Randonnée
            </li>
            <li>
              Volley-ball
            </li>
          </ul>
        </div>
        <div className="Section">
          <div className="Header">
            <img src={pawn} width={30} height={30} alt="pawn" />
            <div> Languages </div>
          </div>
          <ul>
            <li>
              Anglais
            </li>
            <li>
              Français
            </li>
            <li>
              Cambodgien
            </li>
          </ul>
        </div>
      </div>

      <div className="Main">
        <div className="Profile">
          <div className="Header">
            <img src={king} width={30} height={30} alt="pawn" />
            <div>
              Profil
            </div>
          </div>
          <div>
            <div className="Title">
              Développeur web et mobile full-stack
            </div>
            <div className="Text">
              Après 3 ans de formation à l'école 42 à Paris, j'ai été en charge de la conception intégrale d'une application mobile en tant que développeur indépendant pendant 8 mois.
              Rigoureux, autonome et à l'écoute, je suis à present à la recherche de nouvelles opportunités.
            </div>
          </div>
        </div>
        <div className="Section">
          <div className="Header">
            <img src={queen} width={30} height={30} alt="pawn" />
            Expérience professionnelle
          </div>
          <div className="Row">
            <div className="Date">
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
              Developpement d'une interface de gestion de base de données pour le <span className="bold">backoffice</span> en <span className="bold">React</span>
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

        <div className="Section">
          <div className="Header">
            <img src={bishop} width={30} height={30} alt="pawn" />
            Projets
          </div>
          <ul>
            <li>
              <span className="bold">Pong en ligne</span> (web app avec <span className="bold">websockets et REST API</span>)
            </li>
            <ul>
              <li>
                Projet en groupe de 3
              </li>
              <li>
                Mise en place d'un système d'authentification via <span className="bold">Oauth2, Jwt et 2fa</span>
              </li>
              <li>
                Mise en place d'un Chat via l'application
              </li>
              <li>
                Intégration d'une fonctionnalité de matchmaking
              </li>
              <li>
                Développement de l'UI et de l'UX en React
              </li>
              <li>
                Mise en place de l'api en NestJS
              </li>
            </ul>
            <li>
              <span className="bold">Rushes de l'école 42</span>
            </li>
            <ul>
              <li>
                Projets en groupe de 2 à 3
              </li>
              <li>
                Objectif : développer des solvers en C en un weekend répondant à une problématique algorithmique donnée
              </li>
              <li>
                Problèmes algorithmiques abordés : problème des n dames (backtracking), problème du plus grand carré
              </li>
            </ul>
            <li>
              <span className="bold">Mise en place d'un cluster d'applications web </span> (Wordpress, phpMyAdmin, Grafana, NGINX, serveur ftps)
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
            <li className="bold">
              Mise en place d'un serveur IRC
            </li>
            <ul>
              <li>
                Projet en groupe de 3
              </li>
              <li>
                Serveur répondant a des requêtes d'un client IRC
              </li>
              <li>
                Envoi de messages entre utilisateurs
              </li>
              <li>
                Creation de canaux de discussion
              </li>
              <li>
                Gestion des utilisateurs dans les canaux par les superusers (ban, mute, promote)
              </li>
            </ul>
            <li className="bold">
              Creation d'un shell interprétant des commandes bash
            </li>
            <ul>
              <li>
                Projet en groupe de 2
              </li>
            </ul>
            <li>
              <span className="bold">Logiciel de rendu d'image 3D </span>en C utilisant la technique du Raytracing
            </li>
            <li>
            <span className="bold">Logiciel de simulation </span> de transfert de paquets de données dans un réseau selon l'algorithme du Leaky Bucket
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
                Gestion de collision
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
                Combats et intéraction avec des PNJ
              </li>
            </ul>
          </ul>
        </div>

        <div className="Section">
          <div className="Header">
            <img src={knight} width={30} height={30} alt="pawn" />
            Compétences informatiques
          </div>
          <ul>
            <li className="SkillCategory">
              <span className="bold">
                Languages
              </span>
              <div className="Wrap">
                <div className="Row">
                  <div className="Percentage">
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                  </div>
                  <div className="Language">
                    C
                  </div>
                </div>
                <div className="Row">
                  <div className="Percentage">
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Whitequartile" />
                  </div>
                  <div className="Language">
                    C++
                  </div>

                </div>
                <div className="Row">
                  <div className="Percentage">
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Whitequartile" />
                    <div className="Whitequartile" />
                  </div>
                  <div className="Language">
                    Java
                  </div>

                </div>
                <div className="Row">
                  <div className="Percentage">
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                  </div>
                  <div className="Language">
                    HTML / CSS
                  </div>

                </div>
                <div className="Row">
                  <div className="Percentage">
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                  </div>
                  <div className='Language'>
                    JS / TS
                  </div>

                </div>
                <div className="Row">
                  <div className="Percentage">
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Whitequartile" />
                    <div className="Whitequartile" />
                    <div className="Whitequartile" />
                  </div>
                  <div className="Language">
                    PHP
                  </div>

                </div>
                <div className="Row">
                  <div className="Percentage">
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Whitequartile" />
                  </div>
                  <div className="Language">
                    MySQL
                  </div>
                </div>
                <div className="Row">
                  <div className="Percentage">
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Whitequartile" />
                  </div>
                  <div className="Language">
                    PostgreSQL
                  </div>
                </div>

                {/*<div className="Language">
                  <img src={c} width={80} height={80} alt="c" />
                </div>
                <div className="Language">
                  <img src={cpp} width={80} height={80} alt="c" />
                </div>
                <div className="Language">
                  <img src={java} width={80} height={80} alt="c" />
                </div>
                <div className="Language">
                  <img src={web} width={150} height={80} alt="c" />
                </div>
                <div className="Language">
                  <img src={js} width={150} height={80} alt="c" />
                </div>
                <div className="Language">
                  HTML/CSS
                </div>
                <div className="Language">
                  PHP
                </div>
                <div className="Language">
                  MySQL
                </div>
                <div className="Language">
                  PostgreSQL
  </div>*/}
              </div>
            </li>
            <li className="SkillCategory">
              <span className="bold">
                Librairies/Frameworks
              </span>
              <div className="Wrap">
                <div className="Row">
                  <div className="Percentage">
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                  </div>
                  <div className="Language">
                    React
                  </div>

                </div>
                <div className="Row">
                  <div className="Percentage">
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Whitequartile" />
                  </div>
                  <div className="Language">
                    React Native
                  </div>

                </div>
                <div className="Row">
                  <div className="Percentage">
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Whitequartile" />
                    <div className="Whitequartile" />
                  </div>
                  <div className="Language">
                    NestJS
                  </div>

                </div>
                <div className="Row">
                  <div className="Percentage">
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                  </div>
                  <div className="Language">
                    TypeORM
                  </div>

                </div>
                <div className="Row">
                  <div className="Percentage">
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                  </div>
                  <div className='Language'>
                    LibX
                  </div>

                </div>
                <div className="Row">
                  <div className="Percentage">
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Whitequartile" />
                    <div className="Whitequartile" />
                    <div className="Whitequartile" />
                  </div>
                  <div className="Language">
                    Qt
                  </div>

                </div>
                <div className="Row">
                  <div className="Percentage">
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Greenquartile" />
                    <div className="Whitequartile" />
                  </div>
                  <div className="Language">
                    GTK
                  </div>

                </div>

              </div>
            </li>
            <li>
              <span className="bold">
                Outils
              </span>
              <ul className="ListTechno">
                <li className="Techno">
                  Docker
                </li>
                <li className="Techno">
                  Kubernetes
                </li>
                <li className="Techno">
                  NGINX
                </li>
                <li className="Techno">
                  Oauth2
                </li>
                <li className="Techno">
                  Google2fa
                </li>
                <li className="Techno">
                  Github
                </li>
                <li className="Techno">
                  Microsoft Azure
                </li>
                <li className="Techno">
                  Render cloud
                </li>
                <li className="Techno">
                  Google Firebase
                </li>
                <li className="Techno">
                  Google Playstore
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="Section">
          <div className="Header">
            <img src={pawn} width={30} height={30} alt="pawn" />
            Formation
          </div>
          <div className="Formation">
            <div className="Date">
              2020 - 2023
            </div>
            <div>
              <div className="Title">
                Ecole 42
              </div>
              <div>
                Paris (75)
              </div>
            </div>

          </div>
          <div className="Formation">
            <div className="Date">
              2020
            </div>
            <div>
              <div className="Title">
                Licence Informatique
              </div>
              <div>
                UVSQ, Versailles (78)
              </div>
            </div>

          </div>
          <div className="Formation">
            <div className="Date">
              2010 - 2014
            </div>
            <div>
              <div className="Title">
                Etudes de médecine et de psychologie
              </div>
              <div>
                Universite Paris Descartes (75)
              </div>
            </div>
          </div>
          <div className="Formation">
            <div className="Date">
              2010
            </div>
            <div>
              <div className="Title">
                Baccalauréat Scientifique
              </div>
              <div>
                Spécialité mathématiques, mention Européenne Anglais
              </div>
              <div>
                Lycée Jules Ferry, Versailles (78)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
