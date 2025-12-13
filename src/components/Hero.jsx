// src/components/Hero.jsx
import { useState, useEffect, useRef } from 'react';
import avatar from '../assets/preview.png';

const Hero = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const heroRef = useRef(null);

    const fullText = "Daana Jamool";

    // Typing effect
    useEffect(() => {
        let i = 0;
        const typeWriter = () => {
            if (i < fullText.length) {
                setDisplayedText(prev => prev + fullText.charAt(i));
                i++;
                setTimeout(typeWriter, 100);
            } else {
                setIsTypingComplete(true);
            }
        };

        // Start typing with delay
        const timer = setTimeout(() => {
            setDisplayedText('');
            typeWriter();
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    // Animation on scroll for this section
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (heroRef.current) {
            const elements = heroRef.current.querySelectorAll('.fade-in, .slide-in-right');
            elements.forEach(el => observer.observe(el));
        }

        return () => observer.disconnect();
    }, []);

    // Handle smooth scrolling for buttons
    const handleScroll = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="hero" ref={heroRef} className="pt-30 pb-16 px-4 md:px-5 lg:px-6 orange-gradient-bg">
            <div className='center-container'>
                <div className=" flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-12 md:mb-0 fade-in">
                        <p className="primary-text font-semibold mb-2">Hello, I'm</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            {displayedText}
                            {!isTypingComplete && <span className="animate-pulse">|</span>}
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6 gradient-text">
                            Software Engineer – Front-End Developer
                        </h2>
                        <p className="text-lg text-gray-200 mb-8 max-w-xl">
                            Crafting seamless digital experiences with clean, user-centered design.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <button
                                onClick={() => handleScroll('projects')}
                                className="primary-bg text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition duration-300 pulse-animation transform hover:scale-105 active:scale-95">
                                View My Work
                            </button>
                            <a href="https://drive.google.com/file/d/1HBtycicmOPzLSSFj7fcEQWHqA7LwCZK4/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                                className="border border-[#FF6500] text-[#FF6500] font-semibold py-3 px-6 rounded-lg hover:bg-[#FF6500] hover:text-white transition duration-300 transform hover:scale-105 active:scale-95">
                                Download My CV
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-[50%] flex justify-center sm:justify-center md:justify-center lg:justify-end slide-in-right">
                        <div className="relative">
                            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-82 md:h-82 rounded-full border-5 border-[#FF6500] shadow-3xl">
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="text-white text-6xl font-bold">
                                        <img
                                            src={avatar}
                                            alt="Avatar"
                                            className=" -translate-y-4 scale-[1] sm:translate-x-13 sm:scale-[1.08]"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-4 -right-4 primary-bg text-white py-2 px-6 rounded-full font-semibold shadow-lg animate-bounce">
                                Available for work
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </section>
    );
};

export default Hero;