import knight from '../../assets/knight.png';
import SkillLevel from '../utils/SkillLevel';
import './Skills.css'

const Competences = () => {
    return (
        <div className="Section" id="Skills">
            <div className="Header">
                <img src={knight} width={30} height={30} alt="pawn" />
                Compétences informatiques
            </div>
            <ul>
                <li className="SkillCategory">
                    <span className="Title">
                        Languages
                    </span>
                    <div className="Wrap">
                        <div className="Row">
                            <SkillLevel n={5} />
                            <div className="Language">
                                C
                            </div>
                        </div>
                        <div className="Row">
                            <SkillLevel n={4} />
                            <div className="Language">
                                C++
                            </div>

                        </div>
                        <div className="Row">
                            <SkillLevel n={3} />
                            <div className="Language">
                                Java
                            </div>

                        </div>
                        <div className="Row">
                            <SkillLevel n={5} />
                            <div className="Language">
                                HTML / CSS
                            </div>

                        </div>
                        <div className="Row">
                            <SkillLevel n={4} />
                            <div className='Language'>
                                JS / TS
                            </div>
                        </div>
                        <div className="Row">
                            <SkillLevel n={2} />
                            <div className="Language">
                                PHP
                            </div>

                        </div>
                        <div className="Row">
                            <SkillLevel n={3} />
                            <div className="Language">
                                MySQL
                            </div>
                        </div>
                        <div className="Row">
                            <SkillLevel n={4} />
                            <div className="Language">
                                PostgreSQL
                            </div>
                        </div>
                    </div>
                </li>
                <li className="SkillCategory">
                    <span className="Title">
                        Librairies/Frameworks
                    </span>
                    <div className="Wrap">
                        <div className="Row">
                            <SkillLevel n={4} />
                            <div className="Language">
                                React
                            </div>
                        </div>
                        <div className="Row">
                            <SkillLevel n={4} />
                            <div className="Language">
                                React Native
                            </div>
                        </div>
                        <div className="Row">
                            <SkillLevel n={4} />
                            <div className="Language">
                                NestJS
                            </div>
                        </div>
                        <div className="Row">
                            <SkillLevel n={4} />
                            <div className="Language">
                                TypeORM
                            </div>
                        </div>
                        <div className="Row">
                            <SkillLevel n={3} />
                            <div className='Language'>
                                LibX
                            </div>
                        </div>
                        <div className="Row">
                            <SkillLevel n={3} />
                            <div className="Language">
                                Qt
                            </div>
                        </div>
                        <div className="Row">
                            <SkillLevel n={3} />
                            <div className="Language">
                                GTK
                            </div>
                        </div>
                    </div>
                </li>
                <li className="SkillCategory">
                    <span className="Title">
                        DevOps
                    </span>
                    <div className="Wrap">
                        <div className="Row">
                            <SkillLevel n={4} />
                            <div className="Language">
                                Microsoft Azure
                            </div>
                        </div>
                        <div className="Row">
                            <SkillLevel n={3} />
                            <div className="Language">
                                Render Cloud
                            </div>
                        </div>
                        <div className="Row">
                            <SkillLevel n={3} />
                            <div className="Language">
                                Kubernetes
                            </div>
                        </div>
                        <div className="Row">
                            <SkillLevel n={4} />
                            <div className="Language">
                                Docker
                            </div>
                        </div>
                        <div className="Row">
                            <SkillLevel n={4} />
                            <div className="Language">
                                Google Firebase
                            </div>
                        </div>
                        <div className="Row">
                            <SkillLevel n={4} />
                            <div className="Language">
                                NGINX
                            </div>
                        </div>
                    </div>
                </li>
                <li className="SkillCategory">
                    <span className="Title">
                        Outils
                    </span>
                    <div>
                        Github, Trello, Vim, VSCode
                    </div>
                </li>
                <li className="SkillCategory">
                    <span className="Title">
                        Autres
                    </span>
                    <div>
                        Oauth2, Google2fa, Google Playstore, Stripe, React Geolocation
                    </div>
                </li>
            </ul >
        </div >
    )
}

export default Competences;