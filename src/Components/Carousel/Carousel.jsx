import React, { useState, useEffect, useRef } from 'react';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        { url: 'https://imgs.search.brave.com/8eZg7TdBQh96Z8E_fkRBvv5ld7xheltlIQGsitjQsas/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMx/MDg3NjM5MC9waG90/by9zdHVkaW8tbWlj/cm9waG9uZS1iYW5u/ZXItd2l0aC1yZWQt/YW5kLWJsdWUtbmVv/bi1saWdodHMud2Vi/cD9iPTEmcz02MTJ4/NjEyJnc9MCZrPTIw/JmM9ZGdqSndFaEtC/MFhPSTZkOFR4TzNp/VDd5U1VkeHRwVkFO/eUp1N0l6ME1KQT0', alt: 'Slide 1' },
        { url: 'https://imgs.search.brave.com/7XoVl_uAXxIG-hIrncJGWsQwz553KuCrlVFR2eE15PU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90ZW1w/bGF0ZS5jYW52YS5j/b20vRUFEYW82bHps/ZHMvMS8wLzQwMHct/eGpkbXItRVlaVGMu/anBn', alt: 'Slide 2' },
        { url: 'https://imgs.search.brave.com/cPbHL626RYOHOToKq-na_DcLkJNdhkVOEN3gXd3mMEY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sYWcu/YXp1cmVlZGdlLm5l/dC93MnAtY21zLTEv/MTktMTItMjMtYXAt/Y3VzdG9tLWJhbm5l/cnMtY2FyZGluYWwu/anBn', alt: 'Slide 3' }
    ];
    
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
                className="w-full h-52 md:h-64 object-cover"
                />
            </div>
            ))}
        </div>
        
        <button
            onClick={() => setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2  text-black dark:text-white p-2 rounded-full text-3xl md:text-4xl"
        >
            <ion-icon name="chevron-back-circle-outline"></ion-icon>
        </button>
        <button
            onClick={goToNextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2  text-black dark:text-white p-2 rounded-full text-3xl md:text-4xl"
        >
            <ion-icon name="chevron-forward-circle-outline"></ion-icon>
        </button>
        </div>
    );
};

export default Carousel;