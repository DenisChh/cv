const Minirt = () => {
    return (
        <>
            <li>
                <span className="bold"> Minirt, logiciel de rendu d'image 3D exploitant la technique du raytracing en C</span>
            </li>
            <ul>
                <li>
                    Mise en place de l'interface graphique à l'aide de la librairie <span className="bold">LibX</span>
                </li>
                <li>
                    Parsing d'un fichier décrivant l'image à rendre
                </li>
                <li>
                    Implémentation de fonctions permettant de déterminer la couleur d'un objet selon la lumière reçue
                </li>
                <li>
                    Affichage des objets de la scène
                </li>
                <li>
                    Mise en place de hooks permettant à l'utilisateur de se déplacer dans la scène et de modifier la position et l'orientation des objets dans la scène
                </li>
            </ul>
        </>
    )
}

export default Minirt;