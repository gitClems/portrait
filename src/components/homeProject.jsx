import { Link } from "react-router-dom"
import "./css/homeProject.scss"
function HomeProject(props) {
    return (
        <>
            <Link className="home-project-content" to={'/work'}>
                <span>{props.title}</span>
                <img src={props.image} alt="Project 1" />
            </Link>
        </>
    )
}

export default HomeProject