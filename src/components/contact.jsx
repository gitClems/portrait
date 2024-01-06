import "./css/contact.scss"

const Contact = () => {
    return (
        <>
            <div className="contact-container">
                <div class="form-style-6">
                    <h1>Contact Us</h1>
                    <form>
                        <label htmlFor="name">Nom et prénom</label>
                        <input type="text" name="name" placeholder="Nom et prénom" />

                        <label htmlFor="email">Adress e-mail</label>
                        <input type="email" name="email" placeholder="exemple@gmail.com" />

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