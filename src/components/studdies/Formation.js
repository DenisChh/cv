import pawn from '../../assets/pawn.png';
import './Formation.css'

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
                    <div className='TitleLocationrow'>
                        <div className="bold">
                            Ecole 42
                        </div>
                        <div>
                            -
                        </div>
                        <div className='italic'>
                            Paris (75)
                        </div>
                    </div>
                </div>
            </div>
            <div className="FormationEntry">
                <div className="Date">
                    Obtenu en 2020
                </div>
                <div className='TitleLocationrow'>
                    <div className="bold">
                        Licence Informatique
                    </div>
                    <div>
                        -
                    </div>
                    <div className='italic'>
                        UVSQ, Versailles (78)
                    </div>
                </div>
            </div>
            <div className="FormationEntry">
                <div className="Date">
                    2010 - 2014
                </div>
                <div className='TitleLocationrow'>
                    <div className="bold">
                        Etudes de médecine et de psychologie
                    </div>
                    <div>
                        -
                    </div>
                    <div className='italic'>
                        Université Paris Descartes (75)
                    </div>
                </div>
            </div>
            <div className="FormationEntry">
                <div className="Date">
                    Obtenu en 2010
                </div>
                <div className='TitleLocationrow'>
                    <div className='column'>
                        <div className="bold">
                            Bac S spé Maths, Européenne Anglais
                        </div>
                    </div>
                    <div>
                        -
                    </div>
                    <div className='italic'>
                        Lycée Jules Ferry, Versailles (78)
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formation;