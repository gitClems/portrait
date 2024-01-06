import Hero from "../../components/hero"
import { PreloadImages } from "../../components/loading"
import "../css/home.scss"
import { person, projects, skills, imgUrl } from "../../data/dataSet"
import Skill from "../../components/skill"
import Project from "../../components/project"
import Button from "../../components/button"
import {faArrowRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons"

function Home() {
    return (
        <PreloadImages imageUrls={imgUrl}>
            <div className="home-page">
                <section className="l1">
                    <Hero name={person.name} description={person.describe} profile={person.profile[0]}></Hero>
                </section>
                <section className="l2">
                    {skills.map((skill) => { return (<Skill title={skill.title} description={skill.description} ></Skill>) })}
                </section>
                <section className="l3">
                    <span className="title">Mes réalisation<div className="see-more-top"><Button title={"Voir plus"} icon = {faArrowRight} to={"./work"}></Button></div></span>
                    <div className="home-project-display">
                        {<Project projects={projects} lenght={2}></Project>}
                    </div>
                    <div className="see-more-bottom"><Button title={"Voir plus"} icon = {faArrowRight} to={"./work"}></Button></div>
                </section>
                <section className="l4">
                    <Button title = {"Envoyez-moi un message"} icon = {faPaperPlane} to = {"./contact"}></Button>
                </section>
            </div>
        </PreloadImages>
    )

}


export default Home