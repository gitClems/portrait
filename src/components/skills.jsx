import "./css/skill.scss"

function Skills(props) {

    return (
        <>
            <div className="skill">
                <span className="skill-title"> {props.title}</span>
                <p className="skill-descript" >{props.description}</p>
            </div>
        </>
    )

}

export default Skills
