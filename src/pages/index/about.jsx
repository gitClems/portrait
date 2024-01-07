import { PreloadImages } from "../../components/loading"
import ScrollToTop from "../../components/scrollTop"
import { formation, imgUrl } from "../../data/dataSet"
import "../css/about.scss"

function About(propos) {

    return (
        <PreloadImages imageUrls={imgUrl}>
            <div className="about-page">
                <section className="accroche">
                    <p className="title">A propos de moi</p>
                    <p className="message">Merci pour votre interêt. Lisez ci-dessous pour en savoir plus sur moi-même et mon parcours.</p>
                </section>
                <section className="profile">
                    <img src={propos.profile} alt="Profile" />
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
                        <li className="skills-item">Supply Chain Management</li>
                        <li className="skills-item">Business analysis</li>
                        <li className="skills-item">Operation research</li>
                        <li className="skills-item">Web and Mobile App dev</li>
                        <li className="skills-item">Dessign thinking</li>
                    </ul>
                </section>
                <ScrollToTop></ScrollToTop>
            </div>
        </PreloadImages>
    )

}

export default About