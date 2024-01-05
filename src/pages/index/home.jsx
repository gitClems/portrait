import Hero from "../../components/hero"
import "../css/home.scss"
import { person, skills } from "../../data/dataSet"
import Skill from "../../components/skill"

function Home() {
    return (
        <div className="home">
            <section>
                <Hero name={person.name} description={person.describe} profile={person.profile}></Hero>
            </section>
            <section className="skills">
                {skills.map((skill) => { return (<Skill title={skill.title} description={skill.description} ></Skill>) })}
            </section>
        </div>
    )

}


export default Home