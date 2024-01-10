import { removeMenu } from "../../components/appBar"
import { PreloadImages } from "../../components/loading"
import "../css/error404.scss"


function Page404() {
    return (
        <PreloadImages >
            <div id="error" onClick={removeMenu} onLoad={removeMenu}>
                <div className="content">
                    <img src={require('../../assets/icons/not-found.png')} alt="" />
                    <h1 style={{textAlign : 'center'}}>Page not found</h1>
                    <br />
                    <h1 style={{textAlign : 'center'}}>404</h1>
                </div>
            </div>
        </PreloadImages>
    )
}

export default Page404