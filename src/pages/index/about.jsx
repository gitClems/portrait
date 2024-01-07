import { PreloadImages } from "../../components/loading"
import { formation, imgUrl, person, skills } from "../../data/dataSet"
import "../css/about.scss"

function About() {

    return (
        <PreloadImages imageUrls={imgUrl}>
            <div id="about-page">
                <section className="accroche">
                    <p className="title">A propos de moi</p>
                    <p className="message">Merci pour votre interêt. Lisez ci-dessous pour en savoir plus sur moi-même et mon parcours.</p>
                </section>
                <section className="profile">
                    <img src={person.profile[1]} alt="Profile" />
                </section>
                <section className="formation">
                    <div>
                        <span className="title">Formation</span>
                        <p >{formation.description}</p>
                    </div>
                    <ul>
                        {
                            formation.formationns.map((formation) => {
                                return (
                                    <li className="formation-item">
                                        {formation.periode} {formation.label}
                                        <p>{formation.description}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
                <section className="skills">
                    <div><span className="title">Skills</span></div>
                    <ul>
                        {
                            skills.map((skill) => {
                                return (
                                    <li className="skills-item">{skill.title}</li>
                                )
                            })
                        }
                    </ul>
                </section>
            </div>
        </PreloadImages>
    )
}

export default About