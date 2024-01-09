import { removeMenu } from "../../components/appBar"
import { PreloadImages } from "../../components/loading"
import { formation, person, skills } from "../../data/dataSet"
import "../css/about.scss"

function About() {

    return (
        <PreloadImages >
            <div id="about-page" onClick={removeMenu} onLoad={removeMenu}>
                <section className="sec-1 accroche">
                    <div className="message">
                        <p className="title">A propos de moi</p>
                        <p className="description">{person.about}</p>
                    </div>
                    <img src={person.profile[1]} alt="Profile" />
                </section>
                <section className="sec-2 formation">
                    <div>
                        <p className="title">Mes formations</p>
                        <div className="liste-formations">
                            {
                                formation.formations.map((formation) => {
                                    return (
                                        <>
                                            <span className="formation-item"> {formation.periode} : {formation.label}</span>
                                            <p className="description">{formation.description}</p>

                                            <span style={{ fontSize: 20, color: "white" }}>Outils / Méthodes / Mots clés</span>
                                            <div className="list-tools">
                                                {
                                                    formation.tools?.map((tool) => {
                                                        return (
                                                            <span className="tool" >{tool.keyword}</span>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>

                </section>
                {/* <section className="sec-3 skills">
                    {
                        skills ?
                            <>
                                <span className="title">Skills</span>
                                <ul className="list-skills">
                                    {
                                        skills.map(skill => {
                                            return (
                                                <li className="skill">{skill.title}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </>
                            : null

                    }
                </section> */}
            </div>
        </PreloadImages>
    )
}

export default About