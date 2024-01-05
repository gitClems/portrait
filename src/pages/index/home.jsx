import Hero, { PreloadImages } from "../../components/hero"
import "../css/home.scss"
import { person, projects, skills, imgUrl } from "../../data/dataSet"
import Skill from "../../components/skill"
import HomeProject from "../../components/homeProject"

function Home() {
    return (
        <PreloadImages imageUrls={imgUrl}>
            <div className="home">
                <section>
                    <Hero name={person.name} description={person.describe} profile={person.profile[0]}></Hero>
                </section>
                <section className="skills">
                    {skills.map((skill) => { return (<Skill title={skill.title} description={skill.description} ></Skill>) })}
                </section>
                <section className="home-work">
                    <span className="title">Mes réalisation</span>
                    <div className="home-work-display">
                        <HomeProject title={projects[0].title} image={projects[0].image}></HomeProject>
                        <HomeProject title={projects[1].title} image={projects[1].image}></HomeProject>
                        <HomeProject title={projects[2].title} image={projects[2].image}></HomeProject>
                    </div>
                </section>
            </div>
        </PreloadImages>
    )

}


export default Home