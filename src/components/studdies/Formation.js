import pawn from '../../assets/pawn.png';

const Formation = () => {
    return (
        <div className="Section" id="Formation">
            <div className="Header">
                <img src={pawn} width={30} height={30} alt="pawn" />
                Formation
            </div>
            <div className="FormationEntry">
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
            <div className="FormationEntry">
                <div className="Date">
                    Obtenu en 2020
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
            <div className="FormationEntry">
                <div className="Date">
                    2010 - 2014
                </div>
                <div>
                    <div className="Title">
                        Etudes de médecine et de psychologie
                    </div>
                    <div>
                        Université Paris Descartes (75)
                    </div>
                </div>
            </div>
            <div className="FormationEntry">
                <div className="Date">
                    Obtenu en 2010
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
    )
}

export default Formation;