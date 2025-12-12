import { useState, useEffect } from 'react';

const BacktoTopButton = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsActive(window.scrollY > 300);
        };

        // Add event listener
        window.addEventListener('scroll', handleScroll);

        // Clear event listener   
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToHero = (e) => {
        e.preventDefault();
        const heroElement = document.getElementById('hero');
        if (heroElement) {
            heroElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    return (
        <a href="#hero" onClick={scrollToHero} className={`fixed bottom-6 right-6 ${isActive ? "translate-x-0" : "translate-x-[100px]"} primary-bg text-white p-3 rounded-full shadow-lg w-10 h-12 rounded-full bg-[#FF6500] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition duration-300 z-40`}>
            <i className="fas fa-arrow-up"></i>
        </a>

    )
}
export default BacktoTopButton