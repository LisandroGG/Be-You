import React, { useState, useEffect, useRef } from 'react';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        { url: 'https://i.imgur.com/OfEd7eC.png', alt: 'Presentacion' },
        { url: 'https://i.imgur.com/DAeOXsi.png', alt: 'Nueva colección' },
        { url: 'https://i.imgur.com/1ck42Ma.png', alt: 'Talles'}
    ];

    const slideInterval = useRef(null);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const resetInterval = () => {
        if (slideInterval.current) {
            clearInterval(slideInterval.current);
        }
        slideInterval.current = setInterval(goToNextSlide, 4000);
    };

    useEffect(() => {
        resetInterval();  
        return () => clearInterval(slideInterval.current); 
    }, []);

    useEffect(() => {
        resetInterval();
    }, [currentIndex]);

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <img
                            src={slide.url}
                            alt={slide.alt}
                            className="w-full h-52 md:h-96 object-cover"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>

            <button
                aria-label="prevButton"
                onClick={goToPrevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full text-3xl md:text-4xl"
            >
                <ion-icon name="chevron-back-circle-outline"></ion-icon>
            </button>
            <button
                aria-label="nextButton"
                onClick={goToNextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full text-3xl md:text-4xl"
            >
                <ion-icon name="chevron-forward-circle-outline"></ion-icon>
            </button>
        </div>
    );
};

export default Carousel;