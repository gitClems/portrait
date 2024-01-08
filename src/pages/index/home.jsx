import Hero from "../../components/hero"
import { PreloadImages } from "../../components/loading"
import "../css/home.scss"
import { person, projects, imgUrl, domains } from "../../data/dataSet"
import Project from "../../components/project"
import Button from "../../components/button"
import { faArrowRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import Domain from "../../components/domain"
import { removeMenu } from "../../components/appBar"
import { useEffect } from "react"

function Home() {

    // function Click() {
        const page = document.querySelector('.page')
        page.addEventListener('click', () => {
            removeMenu()
            console.log("click");
        })

    // }

    // useEffect(()=> {
    //     Click()
    // })


    return (
        <PreloadImages imageUrls={imgUrl}>
            <div id="home-page" className="page">
                <section className="l1">
                    <Hero name={person.name} description={person.describe} profile={person.profile[0]}></Hero>
                </section>
                <section className="l2">
                    {domains.map((domain) => { return (<Domain id={domain.id} title={domain.title} description={domain.description} ></Domain>) })}
                </section>
                <section className="l3">
                    <span className="title">Mes réalisation<div className="see-more-top"><Button title={"Voir plus"} icon={faArrowRight} to={"./work"}></Button></div></span>
                    <div className="home-project-display">
                        {<Project projects={projects} lenght={projects.length >= 2 ? 2 : projects.length}></Project>}
                    </div>
                    <div className="see-more-bottom"><Button title={"Voir plus"} icon={faArrowRight} to={"./work"}></Button></div>
                </section>
                <section className="l4">
                    <Button title={"Envoyez-moi un message"} icon={faPaperPlane} to={"./contact"}></Button>
                </section>
            </div>
        </PreloadImages>
    )

}


export default Home