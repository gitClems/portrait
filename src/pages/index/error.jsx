import { removeMenu } from "../../components/appBar"
import { PreloadImages } from "../../components/loading"
import { person } from "../../data/dataSet"
import "../css/error.scss"


function Error() {
    return (
        <PreloadImages >
            <div id="error" onClick={removeMenu} onLoad={removeMenu}>
                <h1>Error !!!!!!!</h1>
                <img src={person.profile[1]} alt="" />
            </div>
        </PreloadImages>
    )

}

export default Error