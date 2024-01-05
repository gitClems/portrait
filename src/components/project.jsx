import { Link } from "react-router-dom"
import "./css/project.scss"
function Project(props) {
    return (
        <>
            <Link className="project-container" to={'/work/detail'}>
                <span>{props.title}</span>
                <img src={props.image} alt="Project 1" />
            </Link>
        </>
    )
}

export default Project