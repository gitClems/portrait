import { useParams } from "react-router-dom";
import { PreloadImages } from "../../components/loading"
import { projects } from "../../data/dataSet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck, faLocationDot, faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import "../css/detail.scss"
import { removeMenu } from "../../components/appBar";

function Detail(props) {
    let params = useParams()
    function ImageSize() {
        const img = document.querySelector('.img-targeted')
        if (img.clientHeight > img.clientWidth) {
            img.style.width = "300px"
        }
    }


    return (
        <PreloadImages>
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
                                <p>{projects[params.id - 1]?.description}</p>
                                {
                                    projects[params.id - 1].location || projects[params.id - 1].periode ?
                                        <p style={{ fontSize: 13, color: "white" }}>
                                            <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: 5 }} /> {projects[params.id - 1].location}
                                            <br />
                                            <FontAwesomeIcon icon={faCalendarPlus} style={{ marginRight: 5 }} />{projects[params.id - 1].periode}
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
                    projects[params.id - 1].etapes ?
                        <section className="sec-2">
                            <span className="title">Les differentes étapes <FontAwesomeIcon icon={faListCheck}></FontAwesomeIcon></span>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <div className="liste-etape">
                                    {

                                        projects[params.id - 1].etapes?.map((etape) => {
                                            return (
                                                <>
                                                    <span className="etape">Phase {etape.id} :{etape.etape}</span>
                                                    <p className="description">{etape.description}</p>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </section> : ""
                }
            </div>
        </PreloadImages>
    )
}

export default Detail