import React, { useRef } from 'react';
import "../css/contact.scss"
import "../css/message-sent.scss"
import emailjs from '@emailjs/browser';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PreloadImages } from '../../components/loading';
import { imgUrl } from '../../data/dataSet';
import { removeMenu } from '../../components/appBar';
import { useNavigate } from 'react-router-dom';

export const Merci = () => {
    return (
        <PreloadImages >
            <div id="message-sent" onClick={removeMenu} onLoad={removeMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-check-fill" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 4.697v4.974A4.5 4.5 0 0 0 12.5 8a4.5 4.5 0 0 0-1.965.45l-.338-.207z" />
                    <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686" />
                </svg>
                <p className='l1'>Message envoyé avec succès</p>
                <p className='l2'>Votre message a été bien énvoyé. Je m'assurerai de vous repondre le plus tôt possible. Merci</p>
            </div>
        </PreloadImages>
    )
}

const Contact = () => {
    const form = useRef()
    const navigate = useNavigate()
    var messageStatus = null
    const HandleContact = (e) => {
        e.preventDefault()

        const SERVICE_ID = 'service_zlckg8l'
        const YOUR_TEMPLATE_ID = 'template_57h4o1s'
        const YOUR_PUBLIC_KEY = 'RDSApqc4TJLDBC4Y7'

        try {
            emailjs.sendForm(
                SERVICE_ID,
                YOUR_TEMPLATE_ID,
                form.current,
                YOUR_PUBLIC_KEY
            ).then((result) => {
                messageStatus = 'contact/message-sent'
                // navigate(`/${messageStatus}`)
                console.log(result.status);
                navigate(`/contact/message-sent`)
                // emailjs.send(
                //     SERVICE_ID,
                //     YOUR_TEMPLATE_ID
                // )
            })

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <PreloadImages imageUrls={imgUrl}>
                <div id="contact-page" onClick={removeMenu} onLoad={removeMenu}>
                    <div class="form-style-6">
                        <h1>Envoyez-moi un méssage</h1>
                        <br />
                        <form key={messageStatus} ref={form} onSubmit={HandleContact}>
                            <label htmlFor="name">Nom et prénom</label>
                            <input type="text" name="name" id="name" placeholder='Nom et prénom' required />

                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder='exemple@gmail.com' required />

                            <label htmlFor="subject">Objet</label>
                            <select name="subject" id="subject" required>
                                <option style={{ fontFamily: "var(--font-family)" }} value="">Choisir un sujet</option>
                                <option value="Récruter">Récruter</option>
                                <option value="Devenir collaborateur">Devenir collaborateur</option>
                                <option value="Autre">Autre</option>
                            </select>

                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" cols="30" rows="10" required></textarea>

                            <div>
                                <button className='myButton' value={"send"} >Envoyez <FontAwesomeIcon style={{ marginLeft: 10 }} icon={faPaperPlane}></FontAwesomeIcon></button>
                            </div>
                        </form>
                    </div>
                </div>
            </PreloadImages>
        </>
    )
}


export default Contact