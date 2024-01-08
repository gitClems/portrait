import "./css/loading.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from "react";
import { imgUrl } from "../data/dataSet";

export const PreloadImages = ({ children }) => {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const imagePromises = imgUrl.map((url) => {
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
                setImagesLoaded(true);
            });
    }, []);
    return <div>{imagesLoaded ? children : <Loading></Loading>}</div>;
}

function Loading() {
    return (
        <>
            <div className="loading">
                <div class="spinner d-flex align-items-center justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loading