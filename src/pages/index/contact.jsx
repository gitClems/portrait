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
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const subject = document.getElementById('subject').value
        const message = document.getElementById('message').value
        const data = { name, email, subject, message }
        console.log(data);

        const SERVICE_ID = 'service_zlckg8l'
        const YOUR_TEMPLATE_ID = 'template_57h4o1s'
        const YOUR_PUBLIC_KEY = 'HuElWtPHbw3WlvufV'


        try {
            emailjs.sendForm(
                SERVICE_ID,
                YOUR_TEMPLATE_ID,
                form.current,
                YOUR_PUBLIC_KEY
            ).then((result) => {
                console.log(result.text);
                messageStatus = "message-sent"
                navigate(`./${messageStatus}`)
                return result.text
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
                                <option  style={{fontFamily : "var(--font-family)"}} value="">Choisir un sujet</option>
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