// src/components/About.jsx
import { useEffect, useRef } from 'react';

const About = () => {
    const aboutRef = useRef(null);

    // Animation on scroll for this section
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        // Remove class when out of view to re-trigger animation
                        entry.target.classList.remove('visible');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '50px'
            }
        );

        if (aboutRef.current) {
            const fadeInElements = aboutRef.current.querySelectorAll('.fade-in');
            const slideInElements = aboutRef.current.querySelectorAll('.slide-in-left, .slide-in-right');

            fadeInElements.forEach(el => observer.observe(el));
            slideInElements.forEach(el => observer.observe(el));
        }

        return () => observer.disconnect();
    }, []);

    // Quick facts data
    const quickFacts = [
        { icon: 'fas fa-graduation-cap', text: 'B.Sc. in Software Development Engineering' },
        { icon: 'fas fa-map-marker-alt', text: 'Based in Syria' },
        { icon: 'fas fa-code', text: 'Front-End Specialist' },
        { icon: 'fas fa-calendar-alt', text: 'Available for freelance projects' }
    ];

    return (
        <section id="about" ref={aboutRef} className="py-16 px-4 md:px-5 lg:px-6 dark-bg">
            <div className="center-container">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 section-title fade-in text-center">
                    About Me
                </h2>

                <div className="flex flex-col md:flex-row items-start gap-12">
                    {/* Left Column - About Text */}
                    <div className="md:w-2/3 slide-in-left">
                        <div className="space-y-6">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Hello! I'm <span className="primary-text font-semibold">Dana Jamool</span>, a Front-End Web Developer from Syria.
                                I hold a Software Development Engineering degree from the Syrian Virtual University.
                                My journey into front-end development began during my first year of Information Engineering studies,
                                where I developed a passion for creating intuitive and visually engaging user interfaces.
                            </p>

                            <p className="text-lg text-gray-300 leading-relaxed">
                                I specialize in building modern, responsive, and interactive web experiences using technologies
                                such as <span className="text-[#FF6500] font-semibold">HTML</span>, <span className="text-[#FF6500] font-semibold">CSS</span>,
                                <span className="text-[#FF6500] font-semibold"> Tailwind CSS</span>, <span className="text-[#FF6500] font-semibold">JavaScript</span>,
                                and <span className="text-[#FF6500] font-semibold">React.js</span>. My goal is to transform ideas into functional
                                and aesthetically refined digital solutions that provide smooth and meaningful user experiences.
                            </p>

                            <div className="mt-8 p-6 bg-gray-800/50 rounded-xl border-l-4 border-[#FF6500]">
                                <h3 className="text-xl font-bold mb-4 text-white">My Philosophy</h3>
                                <p className="text-gray-300">
                                    "Good design is as little design as possible. I focus on creating clean, efficient,
                                    and maintainable code that delivers exceptional user experiences."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Quick Facts */}
                    <div className="md:w-1/3 slide-in-right">
                        <div className="p-8 rounded-xl gradient-bg border border-gray-800 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-[#FF6500]/20 rounded-lg flex items-center justify-center mr-4">
                                    <i className="fas fa-info-circle text-[#FF6500] text-xl"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-white">Quick Facts</h3>
                            </div>

                            <ul className="space-y-5">
                                {quickFacts.map((fact, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start group hover:transform hover:translate-x-2 transition-transform duration-300"
                                    >
                                        <div className="w-10 h-10 bg-[#FF6500]/10 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-[#FF6500]/20 transition-colors">
                                            <i className={`${fact.icon} text-[#FF6500]`}></i>
                                        </div>
                                        <span className="text-gray-200 group-hover:text-white transition-colors">
                                            {fact.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Fun fact */}
                            <div className="mt-8 pt-6 border-t border-gray-700">
                                <div className="flex items-center">
                                    <i className="fas fa-lightbulb text-yellow-400 text-xl mr-3"></i>
                                    <p className="text-gray-300 italic">
                                        "I love turning complex problems into simple, beautiful designs."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;