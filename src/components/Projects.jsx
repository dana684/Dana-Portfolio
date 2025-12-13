import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import eco from '../assets/ecobuild.png';
import style from '../assets/styleshop.png';
import zen from '../assets/zen.png';
import flight from '../assets/flight.png';
import reg from '../assets/reg.png';

const projectData = [
    {
        name: "Booking Flight System",
        description: "A comprehensive flight booking platform with user authentication and real-time flight data.",
        techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        image: flight,
        link: ""
    },
    {
        name: "EcoBuild",
        description: "A sustainable construction company website with modern design and responsive layout.",
        techStack: ["HTML", "CSS", "Tailwind CSS"],
        image: eco,
        link: "https://eco-build-ieg2.onrender.com"
    },
    {
        name: "StyleShop",
        description: "An e-commerce fashion store with product catalog, shopping cart, and checkout functionality.",
        techStack: ["HTML", "CSS"],
        image: style,
        link: "https://style-shop-ydcv.onrender.com"
    },
    {
        name: "Zen Digital",
        description: "A digital agency website with interactive elements and smooth animations.",
        techStack: ["HTML", "CSS", "Tailwind CSS"],
        image: zen,
        link: "https://zen-digital-x0ky.onrender.com/"
    },
    {
        name: "Employees registration",
        description: "An Employees registration website for a specific company",
        techStack: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "PHP", "MySQL"],
        image: reg,
        link: ""
    },
];

const Projects = () => {
    useEffect(() => {
        // تهيئة AOS إذا لم تكن مهيئة بالفعل
        if (!AOS.initialized) {
            AOS.init({
                duration: 800,
                once: false,
                mirror: true,
                offset: 100
            });
        }

        // تحديث AOS عند إعادة تحميل المكون
        AOS.refresh();
    }, []);

    return (
        <section id="projects" className="py-16 py-16 px-4 md:px-5 lg:px-6 dark-bg">
            <div className="center-container">
                <h2
                    className="text-3xl font-bold mb-12 section-title"
                    data-aos="fade-down"
                    data-aos-delay="100"
                >
                    Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projectData.map((project, i) => (
                        <div
                            key={i}
                            className="project-card rounded-xl overflow-hidden border border-gray-800"
                            data-aos="fade-up"
                            data-aos-delay={i * 70}
                            data-aos-duration="800"
                        >
                            <div className="h-48 gradient-bg flex items-center justify-center overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2" data-aos="fade-up" data-aos-delay={i * 100 + 200}>
                                    {project.name}
                                </h3>
                                <p className="text-gray-300 mb-4" data-aos="fade-up" data-aos-delay={i * 100 + 300}>
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.techStack.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="text-sm bg-secondary-bg py-1 px-3 rounded-full"
                                            data-aos="zoom-in"
                                            data-aos-delay={i * 100 + techIndex * 50 + 400}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Project Overlay with Animation */}
                            <div className="project-overlay">
                                <a
                                    href={project.link}
                                    className="primary-bg text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-aos="zoom-in"
                                    data-aos-delay={i * 100 + 500}
                                >
                                    View Details
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;