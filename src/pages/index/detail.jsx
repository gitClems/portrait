import { useParams } from "react-router-dom";
import { PreloadImages } from "../../components/loading"
import { imgUrl, projects } from "../../data/dataSet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import "../css/detail.scss"

function Detail(props) {
    let params = useParams()

    var height = 0
    var width = 0


    function ImageSize() {
        const img = document.querySelector('.img-targeted')
        height = img.clientHeight
        width = img.clientWidth
        if (height > width) {
            img.style.width = "300px"
        }
    }


    return (
        <PreloadImages imageUrls={imgUrl}>
            <div className="detail-page">
                <section className="sec-1">
                    <div className="title-image cl">
                        <p className="title">{params ? projects[params.id - 1].title : "-"}</p>
                        <div className="image">
                            <img className="img-targeted" src={projects[params.id - 1].image} alt={`${projects[params.id - 1].title}`}
                                onLoad={() => ImageSize()}
                            />
                        </div>
                    </div>
                    <div className="description-tools cl">
                        <p style={{ fontSize: 20 }}>Description</p>
                        <p>{params ? projects[params.id - 1].description : "-"}</p>
                        {/* <div> */}
                        <p style={{ fontSize: 20 }}>Outils ou processus :</p>
                        <div className="tools-list">

                            {
                                projects[params.id - 1].tools?.map((tool) => {
                                    return (
                                        <span className="tool" >{tool.keyword}</span>
                                    )
                                })
                            }
                        </div>
                        {/* </div> */}
                    </div>
                </section>
                <section className="sec-2">
                    {

                        projects[params.id - 1].etapes ?
                            <div>
                                <span className="title">Les differentes étapes <FontAwesomeIcon icon={faListCheck}></FontAwesomeIcon></span>
                                <div>
                                    <ol className="liste-etape">
                                        {

                                            projects[params.id - 1].etapes?.map((etape) => {
                                                return (
                                                    <>
                                                        <li className="etape"><span>Phase {etape.id} : </span>{etape.etape}</li>
                                                        <p className="description">{etape.description}</p>
                                                    </>
                                                )
                                            })
                                        }
                                    </ol>
                                </div>
                            </div> : ""
                    }
                </section>
            </div>
        </PreloadImages>
    )

}

export default Detail