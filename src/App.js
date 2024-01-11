import logo from './logo.png';
import c from './c.png';
import cpp from './cpp.png';
import java from './java.png';
import web from './web.png';
import php from './php.png';
import mysql from './mysql.png';
import psql from './psql.png';
import js from './js.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Aside">
        <div className="Avatar">
          <img src={logo} width="100" height="100" alt="Logo" />
        </div>
        <div className="Section">
          <div className="Header">
            Contact
          </div>
          <div> Denis Chheang </div>
          <div> 6 bis rue de la Fraternite </div>
          <div> 91200 Athis-Mons </div>
          <div> denis.c1@live.fr </div>
          <div> 0749575164 </div>
        </div>
        <div className="Section">
          <div className="Header">
            Interets
          </div>
          <ul>
            <li>
              Jeux
            </li>
            <li>
              Musique
            </li>
            <li>
              Theatre
            </li>
            <li>
              Cinema
            </li>
            <li>
              Ski
            </li>
            <li>
              Randonnee
            </li>
            <li>
              Volley-ball
            </li>
          </ul>
        </div>
        <div className="Section">
          <div className="Header">
            Languages
          </div>
          <ul>
            <li>
              Anglais
            </li>
            <li>
              Francais
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
            Profil
          </div>
          <div>
            <div className="Title">
              Developpeur web et mobile full-stack
            </div>
            <div className="Text">
              Apres 3 ans de formation a l'ecole 42 a Paris, j'ai ete en charge de la conception integrale d'une application mobile en tant que developpeur independant pendant 8 mois.
              Rigoureux, autonome et a l'ecoute, je suis a present a la recherche de nouvelles opportunites.
            </div>
          </div>
        </div>
        <div className="Section">
          <div className="Header">
            Experience professionnelle
          </div>
          <div className="Row">
            <div className="Date">
              Juin 2023 - Janvier 2023
            </div>
            <div>
              <div className="Title">
                Developpeur full-stack
              </div>
            </div>
          </div>
          <ul>
            <li>
              Analyse des besoins du client et mise en place de solutions techniques repondant a ces besoins
            </li>
            <li>
              Redaction du cahier des charges technique
            </li>
            <li>
              Developpement de l'UI et de l'UX en React Native
            </li>
            <li>
              Mise en place de l'API en NestJS
            </li>
            <li>
              Mise en place de la base de donnees en PostgreSQL
            </li>
            <li>
              Developpement d'une interface de gestion de base de donnees pour le backoffice en React
            </li>
            <li>
              Integration d'un systeme d'authentification via Firebase, Oauth2 et JWT Tokens
            </li>
            <li>
              Publication de l'application sur le google Playstore
            </li>
            <li>
              Hebergement du backend et du backoffice via Microsoft Azure
            </li>
            <li>
              Tests et maintenance de l'application
            </li>
          </ul>
        </div>

        <div className="Section">
          <div className="Header">
            Projets
          </div>
          <ul>
            <li>
              Pong en ligne (web app avec websockets et REST API)
            </li>
            <ul>
              <li>
                Projet en groupe de 3
              </li>
              <li>
                Mise en place d'un systeme d'authentification via Oauth2, Jwt et 2fa
              </li>
              <li>
                Mise en place d'un systeme de Chat
              </li>
              <li>
                Integration d'une fonctionnalite de matchmaking
              </li>
              <li>
                UI / UX en React
              </li>
              <li>
                Mise en place de l'api en NestJS
              </li>
            </ul>
            <li>
              Rushs de l'ecole 42
            </li>
            <ul>
              <li>
                Projets en groupe de 2 a 3
              </li>
              <li>
                Objectif : developper des solvers en C en un weekend repondant a une problematique algorithmique
              </li>
              <li>
                Problemes algorithmiques abordes : probleme des n dames (backtracking), probleme du plus grand carre
              </li>
            </ul>
            <li>
              Mise en place d'un cluster d'applications (Wordpress, phpMyAdmin, Grafana, NGINX, serveur ftps)
            </li>
            <ul>
              <li>
                Kubernetes
              </li>
              <li>
                Metallb
              </li>
              <li>
                Containers Docker
              </li>
              <li>
                Serveurs NGINX et ftps
              </li>
            </ul>
            <li>
              Mise en place d'un serveur IRC
            </li>
            <ul>
              <li>
                Projet en groupe de 3
              </li>
              <li>
                Serveur repondant a des requetes d'un client IRC
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
            <li>
              Creation d'un shell interpretant des commandes semblables au bash
            </li>
            <ul>
              <li>
                Projet en groupe de 2
              </li>
            </ul>
            <li>
              Logiciel de rendu d'image 3D en C utilisant la technique du Raytracing
            </li>
            <li>
              Logiciel de simulation de transfert asynchrone de paquets de donnees entre clients selon l'algorithme du Leaky Bucket
            </li>
            <ul>
              <li>
                Projet en groupe de 8
              </li>
              <li>
                Interface graphique utilisant la librarie Gtk
              </li>
              <li>
                Dessin de graphes quantifiant le nombre de paquets recus et perdus en fonction du temps et du debit d'envoi de paquets
              </li>
            </ul>
            <li>
              Jeu de strategie 2D en C++
            </li>
            <ul>
              <li>
                Projet en groupe de 2
              </li>
              <li>
                Interface graphique utilisant la librarie Qt
              </li>
              <li>
                Generation de map aleatoire
              </li>
              <li>
                Deplacement d'unites
              </li>
              <li>
                Gestion de collision
              </li>
              <li>
                Combat entre unites
              </li>
            </ul>
            <li>
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
                Combats et interaction avec des PNJ
              </li>
            </ul>
          </ul>
        </div>

        <div className="Section">
          <div className="Header">
            Competences informatiques
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
            Formation
          </div>
          <div className="Formation">
            <div className="Date">
              Novembre 2020 - aujourd'hui
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
                Etudes de medecine et de psychologie
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
                Baccalaureat Scientifique
              </div>
              <div>
                Specialite mathematiques, mention Europeenne Anglais
              </div>
              <div>
                Lycee Jules Ferry, Versailles (78)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
