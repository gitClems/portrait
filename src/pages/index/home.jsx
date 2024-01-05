import Hero from "../../components/hero"
import "../css/home.scss"
import { person, skills } from "../../data/dataSet"
import Skills from "../../components/skills"

function Home() {
    return (
        <div className="home">
            <section>
                <Hero name={person.name} description={person.describe} profile={person.profile}></Hero>
            </section>
            <section className="skills">
                {skills.map((skill) => { return (<Skills title={skill.title} description={skill.description} ></Skills>) })}
            </section>
        </div>
    )

}


export default Home