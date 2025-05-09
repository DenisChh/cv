import pawn from '../../assets/pawn.png';
import { AiFillHome } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import './Contact.css'

const Contact = () => {
    return (
        <div className="Aside" id="Contact">
            <div className="Header">
                <img src={pawn} width={30} height={30} alt="pawn" />
                <div>
                    Contact
                </div>
            </div>
            <div className='ContactMain'>
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
                        <FaEnvelope />
                        <div>
                            chheangdenis@gmail.com
                        </div>
                    </div>
                </div>
                <div className="ContactEntry">
                    <div className='IconWithText'>
                        <FaPhone />
                        <div>
                            0749575164
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;