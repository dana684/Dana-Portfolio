import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const frontEnd = [
    {
        title: "HTML",
        rate: "95%"
    },
    {
        title: "CSS",
        rate: "90%"
    },
    {
        title: "Tailwind CSS",
        rate: "95%"
    },
    {
        title: "JavaScript",
        rate: "85%"
    },
    {
        title: "React.js",
        rate: "80%"
    }
];

const backEnd_DB = [
    {
        title: "PHP",
        rate: "70%"
    },
    {
        title: "Laravel",
        rate: "65%"
    },
    {
        title: "MySQL",
        rate: "75%"
    },
];

const Skills = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            mirror: true
        });
    }, []);

    const SkillItem = ({ title, rate, index }) => (
        <div
            data-aos="fade-up"
            data-aos-delay={index * 100}
        >
            <div className="flex justify-between mb-2">
                <span className="font-medium">{title}</span>
                <span className="primary-text font-bold">{rate}</span>
            </div>
            <div className="progress-container">
                <div
                    className="progress-bar"
                    style={{ width: rate }}
                    data-aos="slide-right"
                    data-aos-delay={index * 100 + 300}
                    data-aos-duration="1000"
                ></div>
            </div>
        </div>
    );

    return (
        <section id="skills" className="py-16 px-4 md:px-5 lg:px-6 gradient-bg">
            <div className="center-container">
                <h2
                    className="text-3xl font-bold mb-12 section-title"
                    data-aos="fade-down"
                    data-aos-delay="100"
                >
                    Skills
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Front-End Skills */}
                    <div data-aos="fade-right" data-aos-delay="200">
                        <div className="flex items-center mb-6">
                            <div className="inline-flex items-center justify-center w-12 h-12 primary-bg rounded-full mr-4">
                                <i className="fas fa-laptop-code text-xl text-white"></i>
                            </div>
                            <h3 className="text-xl font-bold">Front-End</h3>
                        </div>
                        <div className="space-y-6">
                            {frontEnd.map((skill, index) => (
                                <SkillItem
                                    key={index}
                                    title={skill.title}
                                    rate={skill.rate}
                                    index={index}
                                />
                            ))}

                        </div>
                    </div>

                    {/* Back-End & Database Skills */}
                    <div data-aos="fade-left" data-aos-delay="200">
                        <div className="flex items-center mb-6">
                            <div className="inline-flex items-center justify-center w-12 h-12 primary-bg rounded-full mr-4">
                                <i className="fas fa-server text-xl text-white"></i>
                            </div>
                            <h3 className="text-xl font-bold">Back-End & Database</h3>
                        </div>
                        <div className="space-y-6">
                            {backEnd_DB.map((skill, index) => (
                                <SkillItem
                                    key={index}
                                    title={skill.title}
                                    rate={skill.rate}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;