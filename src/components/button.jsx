import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import './css/button.scss'

const Button = (props) => {
    return (
        // <div >
            <Link className="myButton" onClick={this.forceUpdate}  to={props.to}>
                {props.title}
                <FontAwesomeIcon icon={props.icon} />
            </Link>
        // </div>
    )
}

export default Button