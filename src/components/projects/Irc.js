const Irc = () => {
    return (
        <div className='ProjectEntry'>
            <li className="Title">
                Serveur IRC en C
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
        </div>
    )
}

export default Irc;