const LeakyBucket = () => {
    return (
        <div className='ProjectEntry'>
            <li>
                <span className="Title">Logiciel de simulation </span> de transfert de paquets de données dans un réseau selon l'algorithme du <span className="bold">Leaky Bucket</span>
            </li>
            <ul>
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
        </div>
    )
}