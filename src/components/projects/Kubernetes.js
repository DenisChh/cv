const Kubernetes = () => {
    return (
        <>
            <li>
                <span className="bold">Cluster d'applications web avec Kubernetes </span>
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
        </>
    )
}

export default Kubernetes;