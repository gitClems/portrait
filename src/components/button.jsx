import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import './css/button.scss'

const Button = (props) => {
    return (
        <Link className="myButton" to={props.to} onClick={() => { window.scrollTo(0,0)}}>
            {props.title}
            <FontAwesomeIcon className="icon" icon={props.icon} />
        </Link>
    )
}

export default Button