import { useParams } from "react-router-dom";
import { PreloadImages } from "../../components/loading"
import { projects } from "../../data/dataSet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck, faLocationDot, faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import "../css/detail.scss"
import { removeMenu } from "../../components/appBar";
import Page404 from "./error404";

function Detail(props) {
    let params = useParams()

    // eslint-disable-next-line eqeqeq
    const projectExist = projects.find((p) => p.id == params.id)
    function ImageSize() {
        const img = document.querySelector('.img-targeted')
        if (img.clientHeight > img.clientWidth) {
            img.style.width = "300px"
        }
    }

    return (
        <PreloadImages>
            {/* <!DOCTYPE html> */}
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
            </head>
            <body>
            {
                projectExist ?
                    <div id="detail-page" onClick={removeMenu} onLoad={removeMenu}>
                        <section className="sec-1">
                            <div className="title-image cl">
                                <p className="title">{params ? projects[params.id - 1].title : "-"}</p>
                                <div className="image">
                                    <img className="img-targeted" src={projects[params.id - 1].image} alt={`${projects[params.id - 1].title}`}
                                        onLoad={() => ImageSize()}
                                    />
                                </div>
                            </div>
                            {
                                projects[params.id - 1].description ?
                                    <div className="description-tools cl">
                                        <span style={{ fontSize: 20, color: "white" }}>Description</span>
                                        <p className="description">{projects[params.id - 1]?.description}</p>
                                        {
                                            projects[params.id - 1].location || projects[params.id - 1].period ?
                                                <p style={{ fontSize: 13, color: "white" }}>
                                                    <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: 5 }} /> {projects[params.id - 1].location}
                                                    <br />
                                                    <FontAwesomeIcon icon={faCalendarPlus} style={{ marginRight: 5 }} />{projects[params.id - 1].period}
                                                </p>
                                                : null
                                        }
                                        {
                                            projects[params.id - 1].tools ?
                                                <span style={{ fontSize: 20, color: "white" }}>Outils / Méthodes / Mots clés</span>
                                                : null
                                        }
                                        <div className="tools-list">
                                            {
                                                projects[params.id - 1].tools?.map((tool) => {
                                                    return (
                                                        <span className="tool" >{tool.keyword}</span>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    : null
                            }
                        </section>
                        {
                            projects[params.id - 1].steps ?
                                <section className="sec-2">
                                    <span className="title"><FontAwesomeIcon style={{ marginRight: 10 }} icon={faListCheck}></FontAwesomeIcon>Les differentes étapes</span>
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <div className="list-step">
                                            {
                                                projects[params.id - 1].steps?.map((step) => {
                                                    return (
                                                        <>
                                                            <span className="step">Phase {step.id}: {step.step}</span>
                                                            <p className="description">{step.description}</p>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </section> : ""
                        }
                    </div>
                    : <Page404 title={"Projet introuvable"} prev={{ page: "Réalisations", link: '/work' }}></Page404>
            }
                
            </body>
            </html>
        </PreloadImages>
    )
}

export default Detail