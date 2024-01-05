import { PreloadImages } from "../../components/loading"
import { imgUrl } from "../../data/dataSet"
import "../css/works.scss"


function Works() {
    return (
        <PreloadImages imageUrls={imgUrl}>
            <div className="work">
                <h1>My works</h1>
            </div>
        </PreloadImages>
    )

}

export default Works