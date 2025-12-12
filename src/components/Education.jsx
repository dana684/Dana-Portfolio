import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const educationData = [
    {
        name: "B.Sc. in Software Development Engineering",
        place: "Syrian Virtual University",
        date: "2019–2026",
        details: "Comprehensive software engineering degree focusing on modern development practices and technologies."
    },
    {
        name: "Associate Degree in Business Administration",
        place: "University of the People, USA",
        date: "2023–2025",
        details: "Business administration degree providing foundational knowledge in management, marketing, and entrepreneurship."
    },
    {
        name: "OUSOS Fundamentals Training",
        place: "Frontend React Course",
        date: "2025",
        details: "Advanced React.js course covering modern hooks, state management, and component architecture."
    },
    {
        name: "Building Web Applications in PHP",
        place: "Coursera – University of Michigan",
        date: "2024",
        details: "Comprehensive PHP web development course covering server-side scripting, databases, and web security."
    },
    {
        name: "Master Full-Stack Development with Laravel & PHP",
        place: "Coursera",
        date: "2024",
        details: "Full-stack development course focusing on Laravel framework for building robust web applications."
    }
];

const Education = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            once: true,
            offset: 100,
            delay: 0,
            easing: 'ease-out'
        });
    }, []);

    return (
        <section id="Education" className="orange-gradient-bg py-16 px-4 md:px-5 lg:px-6 py-12 md:py-16 lg:py-20">
            <div className="center-container max-w-7xl">
                <h2
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-center sm:text-left section-title"
                    data-aos="fade-down"
                    data-aos-duration="500"
                >
                    Education
                </h2>

                <div className="relative">
                    {/* الخط الزمني */}
                    <div className="absolute left-4 sm:left-6 md:left-1/2 h-full w-0.5 sm:w-1 bg-gradient-to-b from-[#FF6500] to-[#FF8533] transform md:-translate-x-1/2"
                        data-aos="fade-in"
                        data-aos-duration="800">
                    </div>

                    <div className="space-y-8 sm:space-y-10 md:space-y-12">
                        {educationData.map((e, i) => {
                            const isEven = i % 2 === 0;

                            return (
                                <div
                                    key={i}
                                    className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? '' : 'md:flex-row'}`}
                                    data-aos="fade-up"
                                    data-aos-duration="600"
                                    data-aos-delay={i * 50}
                                >
                                    {/* المحتوى الأيسر (للعناصر الزوجية على الشاشات الكبيرة) */}
                                    <div className={`md:w-1/2 ${isEven ? 'md:pr-6 lg:pr-8 xl:pr-12 md:text-right order-1' : 'md:pl-6 lg:pl-8 xl:pl-12 order-3'} mb-4 md:mb-0 w-full pl-10 sm:pl-12 md:pl-0`}
                                        data-aos={isEven ? "fade-right" : "fade-left"}
                                        data-aos-duration="500"
                                        data-aos-delay={i * 50 + 100}>
                                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white leading-tight mb-1 sm:mb-2">
                                            {e.name}
                                        </h3>
                                        <p className="primary-text font-semibold text-sm sm:text-base mb-1">
                                            {e.place}
                                        </p>
                                        <p className="text-gray-300 text-xs sm:text-sm md:text-base">
                                            {e.date}
                                        </p>
                                    </div>

                                    {/* النقطة على الخط الزمني */}
                                    <div className={`absolute left-3 sm:left-4 md:left-1/2 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-[#FF6500] to-[#FF8533] flex items-center justify-center z-10 transform md:-translate-x-1/2 ${isEven ? 'order-2' : 'order-2'}`}
                                        data-aos="zoom-in"
                                        data-aos-duration="400"
                                        data-aos-delay={i * 50 + 150}>
                                    </div>

                                    {/* المحتوى الأيمن (للعناصر الزوجية على الشاشات الكبيرة) */}
                                    <div className={`md:w-1/2 ${isEven ? 'md:pl-6 lg:pl-8 xl:pl-12 order-3 mt-2 sm:mt-4 md:mt-0' : 'md:pr-6 lg:pr-8 xl:pr-12 md:text-right order-1 mt-2 sm:mt-4 md:mt-0'} w-full pl-10 sm:pl-12 md:pl-0`}
                                        data-aos={isEven ? "fade-left" : "fade-right"}
                                        data-aos-duration="500"
                                        data-aos-delay={i * 50 + 200}>
                                        <p className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed">
                                            {e.details}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;