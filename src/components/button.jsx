import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import './css/button.scss'

const Button = (props) => {
    return (
        // <div >
            <Link className="myButton" to={"./work"}>
                {props.title}
                <FontAwesomeIcon icon={faArrowRight} />
            </Link>
        // </div>
    )
}

export default Button