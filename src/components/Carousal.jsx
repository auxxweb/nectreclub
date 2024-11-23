import React, { useState, useEffect ,useCallback } from "react";

const HalfCircleCarouselAutoplay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/1.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
    "/images/3.jpeg",

  ];

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  },[images.length]);

  useEffect(() => {
    const autoplay = setInterval(() => {
      handleNext();
    }, 3000); // Change images every 3 seconds

    return () => clearInterval(autoplay); // Clean up the interval on component unmount
  }, [handleNext]);

  return (
    <div className="relative w-4/5 mx-auto perspective-[1000px]">
      <div className="flex justify-center items-center transform-style-[preserve-3d] transition-transform duration-1000 ease-in-out relative w-full h-[400px] top-8">
        {images.map((image, index) => {
          const angle = (index - currentIndex) * 30; // Adjust angle for item spacing
          const isVisible = Math.abs(index - currentIndex) <= 2; // Show only items in the front half

          return isVisible ? (
            <div
              key={index}
              style={{
                ...styles.carouselItem,
                transform: `rotateY(${angle}deg) translateZ(300px)`,
              }}
            >
              <img src={image} alt={`Slide ${index}`} style={styles.image} />
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

const styles = {
  
  carousel: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transformStyle: "preserve-3d",
    transition: "transform 1s ease",
    position: "relative",
    width: "100%",
    height: "400px", // Height of the carousel container
  },
  carouselItem: {
    position: "absolute",
    width: "300px",
    height: "200px",
    transition: "transform 1s ease",
    transformOrigin: "center center -300px", // Make the rotation happen around a point
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
  },
};

export default HalfCircleCarouselAutoplay;
