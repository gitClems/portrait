import "./css/loading.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from "react";

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