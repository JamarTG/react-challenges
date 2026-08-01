// Build an image carousel that displays a sequence of images.

//     Requirements
// The image carousel component takes an array of image URLs.Example image URLs are provided in the skeleton code.
// Layout and positioning:
// The image carousel should be centered on the screen with a maximum size of 600px by 400px.
// Images should shrink to fit within the carousel so that the entire image is visible.Empty parts of the carousel can be filled with black.
// If the screen width is smaller than the image, the carousel should be resized to fit within the available horizontal space.
//     Navigation:
// Add left / right navigation buttons to allow the user to navigate through the images.The buttons should support cycling behavior, i.e., after the last image, the image cycles back to the first.
// Add page buttons at the bottom to directly jump to an image.You may assume there will be fewer than 10 images.
// Animations and transitions are not necessary for this question; they will be explored in Image Carousel II and Image Carousel III.
// For this question, there is a technical restriction that only one image element should be in the DOM at any time.

import { useState } from "react"
import imageCarouselData from "./data";
import "./ImageCarousel.css";

const ImageCarousel = () => {
    const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

    const handleNextImage = () => {
        if (activeImageIndex >= imageCarouselData.length - 1) {
            setActiveImageIndex(0)
            return;
        }
        setActiveImageIndex(prevActiveImageIndex => prevActiveImageIndex + 1);
    }

    const handlePrevImage = () => {
        if (activeImageIndex === 0) {
            setActiveImageIndex(imageCarouselData.length - 1)
            return;
        }
        setActiveImageIndex(prevActiveImageIndex => prevActiveImageIndex - 1);
    }


    return (
        <div className="carousel">
            <h1>Image Carousel</h1>
            <img src={imageCarouselData[activeImageIndex].src} alt={imageCarouselData[activeImageIndex].alt} />

            <div className="carousel-indicator">
                {
                    imageCarouselData.map((_, idx) => {
                        return <div onClick={() => setActiveImageIndex(idx)} className={`${idx === activeImageIndex ? 'active-' : ""}carousel-indicator-circle`}></div>
                    })
                }
            </div>

            <button onClick={() => handlePrevImage()} className="prev"></button>
            <button onClick={() => handleNextImage()} className="next"></button>
        </div>
    )
}

export default ImageCarousel
