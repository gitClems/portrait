import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./css/hero.scss"
import { faChartSimple, faCode, faWarehouse } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react";

export const PreloadImages = ({ imageUrls, children }) => {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const imagePromises = (() => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = imageUrls;
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
    return <div>{imagesLoaded ? children : <p>Loading images...</p>}</div>;
}

const Hero = (props) => {

    return (
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
                    <PreloadImages imageUrls = {props.profile}>
                        <img src={props.profile} alt="Mon profile" width={350} />
                    </PreloadImages>
                </div>
            </div>
        </>
    )
}

export default Hero