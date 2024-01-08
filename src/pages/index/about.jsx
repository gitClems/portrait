import { removeMenu } from "../../components/appBar"
import { PreloadImages } from "../../components/loading"
import { formation, person, skills } from "../../data/dataSet"
import "../css/about.scss"

function About() {

    return (
        <PreloadImages >
            <div id="about-page" onClick={removeMenu} onLoad={removeMenu}>
                <section className="accroche">
                    <span className="title">A propos de moi</span>
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
                    <ul className="formation-list">
                        {
                            formation.formations.map((formation) => {
                                return (
                                    <li className="formation-item">
                                        {formation.periode} {formation.label}
                                        <p>{formation.description}</p>
                                        {
                                            formation.tools ?
                                                <>
                                                    <span style={{ fontSize: 20, color: "white" }}>Outils / Méthodes / Mots clés</span><div className="tools-list">
                                                        {formation.tools?.map((tool) => {
                                                            return (
                                                                tool.keyword ? <span className="tool">{tool.keyword}</span> : null
                                                            )
                                                        })}
                                                    </div>
                                                </> : null
                                        }
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