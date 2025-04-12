const Pong = () => {
    return (
        <div className='ProjectEntry'>
            <li>
                <span className="Title">Pong en ligne</span>
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
                    Développement de l'<span className="bold">UI</span> et de l'<span className="bold">UX</span> en <span className="bold">React</span>
                </li>
                <li>
                    Développement de l'interface graphique à l'aide de la libraire <span className="bold">Canvas</span>
                </li>
                <li>
                    Mise en place de <span className="bold">websockets</span> pour le chat et le jeu
                </li>
                <li>
                    Mise en place de l'api en <span className="bold">NestJS</span>
                </li>
                <li>
                    Conception de la base de données en <span className="bold">PostgreSQL</span>
                </li>
            </ul>
        </div>
    )
}

export default Pong;