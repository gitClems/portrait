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
                    <div className="title-image-tools cl">
                        <p className="title">{params ? projects[params.id - 1].title : "-"}</p>
                        <div className="image">
                            <img className="img-targeted" src={projects[params.id - 1].image} alt={`${projects[params.id - 1].title}`}
                                onLoad={() => ImageSize()}
                            />
                        </div>
                    </div>
                    <div className="description cl">
                        <p>{params ? projects[params.id - 1].description : "-"}</p>
                    </div>
                </section>
                <section className="sec-2">
                    {

                        projects[params.id - 1].etapes ?
                            <div>
                                <div className="title"><FontAwesomeIcon icon={faListCheck}></FontAwesomeIcon><span>Les differentes étapes </span></div>
                                <div>
                                    <ol className="liste-etape">
                                        {

                                            projects[params.id - 1].etapes?.map((etape) => {
                                                return (
                                                    <>
                                                        <li className="etape">{etape.etape}</li>
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