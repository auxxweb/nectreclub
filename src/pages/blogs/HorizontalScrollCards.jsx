import React, { useEffect } from 'react';
import './cards.css'; // Ensure the correct path to your CSS file

const HorizontalScroll = () => {
    // Add the scroll event listener on component mount
    useEffect(() => {
        const scrollContainer = document.getElementById('scrollContainer');

        function scrollHorizontally(e) {
            e = window.event || e;
            const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

            // Prevent vertical scroll (up/down) from triggering horizontal scroll
            if (Math.abs(delta) === 1 && e.deltaY === 0) {
                return;
            }

            const scrollSpeed = 15; // Scroll speed
            scrollContainer.scrollLeft -= (delta * scrollSpeed);
            e.preventDefault();
        }

        // Attach event listeners
        if (window.addEventListener) {
            // For modern browsers
            window.addEventListener("mousewheel", scrollHorizontally, false); // IE9, Chrome, Safari, Opera
            window.addEventListener("DOMMouseScroll", scrollHorizontally, false); // Firefox
        } else {
            // For older IE versions
            window.attachEvent("onmousewheel", scrollHorizontally);
        }

        // Cleanup the event listener on component unmount
        return () => {
            if (window.removeEventListener) {
                window.removeEventListener("mousewheel", scrollHorizontally, false);
                window.removeEventListener("DOMMouseScroll", scrollHorizontally, false);
            } else {
                window.detachEvent("onmousewheel", scrollHorizontally);
            }
        };
    }, []);

    return (
        <div className="horizontal-scroll-container" id="scrollContainer">
          {Array.from({ length: 19 }).map((_, index) => (
  <div className="relative card animated-card" key={index}>
    <img
      src={`https://picsum.photos/300/200?random=${index + 1}`}
      alt={`Card ${index + 1}`}
      className="card-image w-full h-full object-cover"
    />
    {/* Black shade at the bottom of the image */}
    <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-black to-transparent"></div>
    <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col justify-end text-white">
      <h2 className="font-bold text-2xl text-gray-100 uppercase tracking-wide mb-2">
        This title {index + 1}
      </h2>
      <p className="ml-0 text-sm text-wrap text-gray-300 mb-4">
        This card has an updated sleek and modern design.
      </p>
      <button className="w-20 px-6 py-2 bg-black text-white rounded-lg hover:bg-black transition-colors">
         More
      </button>
    </div>
  </div>
))}


        </div>
    );
};

export default HorizontalScroll;
