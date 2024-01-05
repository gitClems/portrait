import "./css/skill.scss"

function Skill(props) {
    return (
        <>
            <div className="skill">
                <span className="skill-title"> {props.title}</span>
                <p className="skill-descript" >{props.description}</p>
            </div>
        </>
    )
}

export default Skill