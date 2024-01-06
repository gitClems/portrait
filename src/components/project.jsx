import { Link } from "react-router-dom"
import "./css/project.scss"
function Project(props) {
    var array = []
    for (let index = 0; index < props.lenght; index++) {
        array.push(props.projects[index]);
    }
    return (
        <>
            {
                array.map((project) => {
                    return (
                        <Link onClick={this.forceUpdate}  key={project.id} className="project-container"
                            to={`/work/${project.id}`}
                        >
                            <span>{project.title}</span>
                            <img src={project.image} alt="Project 1" />
                        </Link>
                    )
                })
            }
        </>
    )
}

export default Project