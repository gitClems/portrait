import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./css/hero.scss"
import { faChartSimple, faCode, faWarehouse } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react";
import Loading from "./loading";

export const PreloadImages = ({ imageUrls, children }) => {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const imagePromises = imageUrls.map((url) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = url;
                img.onload = resolve;
            });
        });

        Promise.all(imagePromises)
            .then(() => {
                setImagesLoaded(true);
            })
            .catch((error) => {
                console.error('Error preloading images:', error);
                setImagesLoaded(true); // Set to true to avoid infinite loading if an error occurs
            });
    }, [imageUrls]);
    return <div>{imagesLoaded ? children : <Loading></Loading>}</div>;
}

const Hero = (props) => {

    return (
        // <PreloadImages imageUrls={props.profile}>
            <>
                <div className="hero" >
                    <div className="accroche">
                        <div className="me">
                            <p className="cl-hi" >Bonjour,</p>
                            <p className="cl-name" >Je m'appelle {props.name}</p>
                            <p className="cl-what" >{props.description}</p>
                        </div>
                        <div className="tools">
                            <div className="tool"><FontAwesomeIcon icon={faWarehouse} />SCM</div>
                            <div className="tool"><FontAwesomeIcon icon={faChartSimple} />BI</div>
                            <div className="tool"><FontAwesomeIcon icon={faCode} />Dev</div>
                        </div>
                    </div>
                    <div className="profile">
                        <img src={props.profile} alt="Mon profile" width={350} />
                    </div>
                </div>
            </>
        // </PreloadImages>
    )
}

export default Hero