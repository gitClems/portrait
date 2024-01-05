import { PreloadImages } from "../../components/loading"
import { imgUrl } from "../../data/dataSet"
import "../css/error.scss"


function Error() {
    return (
        <PreloadImages imageUrls={imgUrl}>
            <div className="error">
                <h1>Error !!!!!!!</h1>
            </div>
        </PreloadImages>
    )

}

export default Error