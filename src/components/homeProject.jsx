import { Link } from "react-router-dom"
import "../css/homeProject.css"
function HomeProject(props) {
    const styles = {
        content: {
            marginLeft : 5,
            marginRight : 5,
        },
        img: {
            borderRadius : 10
        },
    }
    return (
        <>
            <div style={styles.content}>
                <Link  className="home-project-content" to={'/work'}>
                    <span style={styles.title}>{props.title}</span>
                    <img style={styles.img} src={props.image} alt="Project 1" />
                </Link>
            </div>
        </>
    )
}

export default HomeProject