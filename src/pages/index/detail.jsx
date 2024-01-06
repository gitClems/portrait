import { useParams } from "react-router-dom";
import { PreloadImages } from "../../components/loading"
import { imgUrl, projects } from "../../data/dataSet"
import "../css/detail.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";

function Detail(props) {
    let params = useParams()
    // console.log(params);


    var height = 0
    var width = 0
    var size = 0


    function ImageSize() {
        const img = document.querySelector('.img-targeted')
        height = img.clientHeight
        width = img.clientWidth
        if (height > width) {
            // document.querySelector(".title").style.color = 'red'
            // img.style.height = width
            img.style.width = "300px"
            size = width
        }
        // size = height
        console.log('====================================');
        console.log([width, height]);
        console.log('====================================');
        console.log("Size: " + size);
        // return [width, height];
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
                                <span className="title">Les differentes étapes <FontAwesomeIcon icon={faListCheck}></FontAwesomeIcon></span>
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