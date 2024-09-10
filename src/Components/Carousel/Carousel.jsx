import React, { useState, useEffect, useRef } from 'react';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        { url: 'https://i.imgur.com/BvMyTVZ.png', alt: 'Slide 1' },
        /*{ url: 'https://imgs.search.brave.com/7XoVl_uAXxIG-hIrncJGWsQwz553KuCrlVFR2eE15PU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90ZW1w/bGF0ZS5jYW52YS5j/b20vRUFEYW82bHps/ZHMvMS8wLzQwMHct/eGpkbXItRVlaVGMu/anBn', alt: 'Slide 2' },
        { url: 'https://imgs.search.brave.com/cPbHL626RYOHOToKq-na_DcLkJNdhkVOEN3gXd3mMEY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sYWcu/YXp1cmVlZGdlLm5l/dC93MnAtY21zLTEv/MTktMTItMjMtYXAt/Y3VzdG9tLWJhbm5l/cnMtY2FyZGluYWwu/anBn', alt: 'Slide 3' }
    */];
    
    const slideInterval = useRef(null);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    useEffect(() => {
        slideInterval.current = setInterval(goToNextSlide, 4000);
        return () => clearInterval(slideInterval.current);
    }, []);

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
                />
            </div>
            ))}
        </div>
        
        <button
            aria-label="prevButton"
            onClick={() => setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2  text-black dark:text-white p-2 rounded-full text-3xl md:text-4xl"
        >
            <ion-icon name="chevron-back-circle-outline"></ion-icon>
        </button>
        <button
            aria-label="nextButton"
            onClick={goToNextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2  text-black dark:text-white p-2 rounded-full text-3xl md:text-4xl"
        >
            <ion-icon name="chevron-forward-circle-outline"></ion-icon>
        </button>
        </div>
    );
};

export default Carousel;