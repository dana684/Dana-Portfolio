import MobileMenu from "../components/MobileMenu"
import React, { useState, useEffect } from 'react';
const linksnav = [
    {
        name: "Home",
        href: "#hero"
    },
    {
        name: "About",
        href: "#about"
    },
    {
        name: "Skills",
        href: "#skills"
    },
    {
        name: "Projects",
        href: "#projects"
    },
    {
        name: "Education",
        href: "#Education"
    },
    {
        name: "Services",
        href: "#services"
    },
    {
        name: "Contact",
        href: "#contact"
    },
]
const Header = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]');
            const scrollPosition = window.scrollY + 100; // إضافة إزاحة للهيدر

            let currentSectionId = 'home';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSectionId = sectionId;
                }
            });

            setActiveSection(currentSectionId);
        };

        // إضافة حدث التمرير
        window.addEventListener('scroll', handleScroll);

        // تشغيل مرة واحدة عند التحميل
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // التنقل السلس
    const handleSmoothScroll = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);

        if (element) {
            const headerHeight = 80; // ارتفاع الهيدر
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // إغلاق القائمة المتنقلة إذا كانت مفتوحة
            setMobileMenuOpen(false);

            // تحديث القسم النشط مباشرة
            setActiveSection(sectionId);
        }
    };

    // تبديل القائمة المتنقلة
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    return (
        <nav className="fixed w-full z-50 py-4 px-6 dark-bg shadow-lg">
            <div className="center-container">
                <div className="flex justify-between items-center">
                    {/* الشعار */}
                    <a
                        href="#home"
                        onClick={(e) => handleSmoothScroll(e, '#home')}
                        className="text-2xl font-bold gradient-text hover:opacity-90 transition-opacity"
                    >
                        Dana.J
                    </a>

                    {/* قائمة سطح المكتب */}
                    <div className="hidden md:flex space-x-8">
                        {linksnav.map((link, i) => {
                            const sectionId = link.href.replace('#', '');
                            return (
                                <a
                                    href={link.href}
                                    key={i}
                                    onClick={(e) => handleSmoothScroll(e, link.href)}
                                    className={`nav-link font-medium transition-all duration-300 ${activeSection === sectionId ? 'active-nav' : ''
                                        }`}
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* قائمة الجوال - تمرير حالة القسم النشط */}
                <MobileMenu
                    links={linksnav}
                    activeSection={activeSection}
                    onLinkClick={handleSmoothScroll}
                />
            </div>
        </nav>

    )
}

export default Header
