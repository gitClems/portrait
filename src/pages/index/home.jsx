import Hero from "../../components/hero"
import { PreloadImages } from "../../components/loading"
import "../css/home.scss"
import { person, projects, domains } from "../../data/dataSet"
import Project from "../../components/project"
import Button from "../../components/button"
import { faArrowRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import Domain from "../../components/domain"
import { removeMenu } from "../../components/appBar"

function Home() {
    return (
        <PreloadImages>
            <div id="home-page" onClick={removeMenu} onLoad={removeMenu}>
                <section className="l1">
                    <Hero name={`${person.fName} ${person.lName}`} description={person.description} profile={person.profile[0]}></Hero>
                </section>
                <section className="l2">
                    {domains.map((domain) => { return (<Domain id={domain.id} title={domain.title} description={domain.description} ></Domain>) })}
                </section>
                <section className="l3">
                    <span className="title">Mes réalisations
                        <div className="see-more-top"><Button title={"Voir plus"} icon={faArrowRight} to={"./work"}></Button></div>
                    </span>
                    <div className="home-project-display">
                        {<Project projects={projects} lenght={projects.length >= 2 ? 2 : projects.length}></Project>}
                    </div>
                    <div className="see-more-bottom"><Button title={"Voir plus"} icon={faArrowRight} to={"./work"}></Button></div>
                </section>
                <section className="l4">
                    <h1>Voulez-vous qu'on relève des défis ensemble ? </h1>
                    <Button title={"Envoyez-moi un message"} icon={faPaperPlane} to={"contact"}></Button>
                </section>
            </div>
        </PreloadImages>
    )

}


export default Home