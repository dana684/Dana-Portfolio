import React, { useState } from 'react';

const MobileMenu = ({ links, activeSection, onLinkClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (e, href) => {
        onLinkClick(e, href);
        setIsOpen(false); // إغلاق القائمة بعد النقر
    };

    return (
        <>
            {/* زر القائمة المتنقلة */}
            <button
                onClick={toggleMenu}
                className="md:hidden text-2xl primary-text focus:outline-none"
                aria-label="Toggle menu"
            >
                <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>

            {/* القائمة المتنقلة */}
            <div className={`md:hidden mt-4 pb-4 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
                <div className="flex flex-col space-y-4">
                    {links.map((link, i) => {
                        const sectionId = link.href.replace('#', '');
                        return (
                            <a
                                key={i}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className={`font-medium py-2 px-4 rounded transition-colors ${activeSection === sectionId
                                    ? 'primary-bg text-white'
                                    : 'hover:bg-gray-800'
                                    }`}
                            >
                                {link.name}
                            </a>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default MobileMenu;