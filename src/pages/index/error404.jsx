import {  faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons"
import { removeMenu } from "../../components/appBar"
import BackButton from "../../components/backButton"
import { PreloadImages } from "../../components/loading"
import "../css/page404.scss"


function Page404(props) {
    window.scrollTo(0, 0)
    return (
        <PreloadImages >
            {/* <!DOCTYPE html> */}
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            </head>
            <body>
            <div id="error404" onClick={removeMenu} onLoad={removeMenu}>
                <div className="content">
                    <img src={require('../../assets/icons/not-found.png')} alt="" />
                    <h1 style={{ textAlign: 'center' }}>{props.title ? props.title : "Page introuvable"}</h1>
                    <h1 style={{ textAlign: 'center' }}>404</h1>
                    {
                        !props.title ?
                            <><BackButton title={"Revenir à l'acceuil"} to={"/"} icon = {faArrowCircleLeft}></BackButton></>
                            : <BackButton title = {props.prev.page} to = {props.prev.link} icon = {faArrowCircleLeft}></BackButton>
                    }
                </div>
            </div>
                
            </body>
            </html>
        </PreloadImages>
    )
}

export default Page404