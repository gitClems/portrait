import React, { useRef } from 'react';
import "../css/contact.scss"
import emailjs from '@emailjs/browser';
import Button from '../../components/button';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();


        emailjs.sendForm('gmail', 'template_slwm0kh', form.current, 'wePEUiMFs1J-VZac-oh1C')
            .then((result) => {
                console.log(result.text);
                alert(result.text)
            }, (error) => {
                console.log(error.text);
                alert(error.text)
            });
    };
    return (
        <>
            <div className="contact-container">
                <div class="form-style-6">
                    <h1>Envoyez moi un méssage</h1>
                    <form ref={form} onSubmit={sendEmail}>
                        <label for="user_name">Nom et prénom</label>
                        <input type="text" name="user_name" placeholder="Nom et prénom" />

                        <label for="user_email">Adress e-mail</label>
                        <input type="email" name="user_email" placeholder="exemple@gmail.com" />

                        <label for="topic">Objet</label>
                        <input type="text" name="topic" placeholder="Le sujet de votre méssage" />

                        <label for="message">Message</label>
                        <textarea name="message" placeholder="Insérez votre méssage"></textarea>

                        <div>
                            <button type='button' className='myButton'>Envoyez <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon></button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


export default Contact