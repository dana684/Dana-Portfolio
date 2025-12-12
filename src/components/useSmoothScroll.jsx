import { useEffect } from "react";

const useSmoothScroll = () => {

    useEffect(() => {
        const handleClick = (e) => {
            const target = e.target.closest('a[href^="#"]');
            if (!target) return;

            const targetId = target.getAttribute('href');
            if (targetId === '#') return;

            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);
};

export default useSmoothScroll;