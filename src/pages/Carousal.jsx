import React, { useEffect, useState, useMemo } from "react";
import gsap from "gsap";
import "./Carousal.css";

const Carousel = () => {
  const [rotationY, setRotationY] = useState(0); // State to track the rotation
  const [selectedImage, setSelectedImage] = useState(null); // State for the selected image

  // Memoize the images array
  const images = useMemo(
    () => [
      "/images/1.jpeg",
      "/images/2.jpeg",
      "/images/3.jpeg",
      "/images/4.jpeg",
      "/images/5.jpeg",
      "/images/6.jpeg",
      "/images/7.jpeg",
      "/images/8.jpeg",
      "/images/9.jpeg",
      "/images/10.jpeg",
    ],
    [] // Empty dependency array means it won't change
  );

  const handleClick = (i) => {
    const allImages = document.querySelectorAll(".img");
    allImages.forEach((img) => img.classList.remove("popped"));
    allImages[i].classList.add("popped");
    setSelectedImage(images[i]); // Set the clicked image for zoom
  };

  const closeZoom = () => {
    setSelectedImage(null); // Close the zoomed-in image
  };

  useEffect(() => {
    // Setup images on the ring
    gsap.set(".img", {
      rotateY: (i) => i * 36, // Distribute images evenly around the circle
      transformOrigin: "50% 50% 300px",
      z: -300,
      backgroundImage: (i) => `url(${images[i]})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      width: "150px",
      height: "200px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      backfaceVisibility: "hidden",
    });

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        const newRotation = rotationY - 36;
        setRotationY(newRotation);
      } else if (e.key === "ArrowLeft") {
        const newRotation = rotationY + 36;
        setRotationY(newRotation);
      }
    };

    gsap.to(".img", {
      rotateY: (i) => i * 36 + rotationY,
      duration: 0.5,
      ease: "power3.out",
    });

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [rotationY, images]);

  return (
    <div className="carousel-container">
      <div className="stage">
        <div className="ring">
          {Array.from({ length: images.length }).map((_, i) => (
            <div
              key={i}
              className="img"
              onClick={() => handleClick(i)}
            ></div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="modal" onClick={closeZoom}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Zoomed" />
            <button className="close-btn" onClick={closeZoom}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
