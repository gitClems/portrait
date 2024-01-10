import { removeMenu } from "../../components/appBar"
import { PreloadImages } from "../../components/loading"
import "../css/page404.scss"


function Page404(props) {
    window.scrollTo(0,0)
    return (
        <PreloadImages >
            <div id="error404" onClick={removeMenu} onLoad={removeMenu}>
                <div className="content">
                    <img src={require('../../assets/icons/not-found.png')} alt="" />
                    <h1 style={{textAlign : 'center'}}>{props.title ? props.title : "Page introuvable"}</h1>
                    <h1 style={{textAlign : 'center'}}>404</h1>
                </div>
            </div>
        </PreloadImages>
    )
}

export default Page404