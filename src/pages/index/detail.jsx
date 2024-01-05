import { PreloadImages } from "../../components/loading"
import { imgUrl } from "../../data/dataSet"
import "../css/detail.scss"

function Detail(propos) {

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
                <section className="background">
                    <div>
                        <span className="title">Background</span>
                        <p >Durant tout mon parcours universitaire, j'ai pu dévélopper un bon nombre de connaissance aussi bien dans les sciences exactes que celles qui relèvent de l'esprit critique.</p>
                    </div>
                    <ul>
                        <li className="background-item">
                            2019-2021 : Facuilté des Sciences et Techniques de Monhammedia <br />
                            <p>J'ai su dévélopper des connaissance en analyse numérique et statistiques. Ceci combiné à l'algorithmique m'a donné des solides acquis sur la transformation d'un problème réel en solution mathématique et ensuite son intégration grace à des algorithmes.</p>
                        </li>
                        <li className="background-item">
                            2021-2024 : Ecole Nationale d'Informatique et d'Analyse des Systhème de Rabat <br />
                            <p>Avec mon orientation en Smart Supply Chain an Logistics, j'ai eu cette connaissance de l'informatique décisionnelle, du Business Intelligence et de la gestion des projets ainsi que leur suivi. L'utilisation des outils informatiques pour l'optimisation des processus au seins de l'entreprise est l'une de mes casquettes. En outre, une partie de mon orientation est la recherche opérationnelle à travers laquelles un accent est mis sur la résolution des problèmes liés à la logistiques: l'ulisation des mathématiques et des nouvelles technologies pour l'optimisation de la chaine logistique .</p>
                        </li>
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
            </div>
        </PreloadImages>
    )

}

export default Detail