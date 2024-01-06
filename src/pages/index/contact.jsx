import React, { useRef } from 'react';
import "../css/contact.scss"
import emailjs from '@emailjs/browser';

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
                        <label htmlFor="user_name">Nom et prénom</label>
                        <input type="text" name="user_name" placeholder="Nom et prénom" />

                        <label htmlFor="user_email">Adress e-mail</label>
                        <input type="email" name="user_email" placeholder="exemple@gmail.com" />

                        <label htmlFor="topic">Objet</label>
                        <input type="text" name="topic" placeholder="Le sujet de votre méssage" />

                        <label htmlFor="message">Message</label>
                        <textarea name="message" placeholder="Insérez votre méssage"></textarea>

                        <div>
                            <input className="myButton" type="submit" value="Send" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


export default Contact