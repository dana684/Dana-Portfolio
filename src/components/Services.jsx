import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    useEffect(() => {
        // تهيئة AOS مع إعدادات خفيفة
        AOS.init({
            duration: 600,      // مدة أقصر للأنيميشن
            once: true,         // تشغيل الأنيميشن مرة واحدة فقط
            mirror: false,      // لا نكرر الأنيميشن عند التمرير للخلف
            offset: 100,        // بدء الأنيميشن عند ظهور 100px من العنصر
            delay: 0,           // بدون تأخير افتراضي
            easing: 'ease-out', // نوع الانتقال
            anchorPlacement: 'top-bottom' // نقطة التثبيت
        });
    }, []);

    const servicesData = [
        {
            icon: "fas fa-code",
            title: "Front-End Development",
            description: "Developing clean, modern, and interactive user interfaces using HTML, CSS, JavaScript, and React.js."
        },
        {
            icon: "fas fa-mobile-alt",
            title: "Responsive Web Design",
            description: "Designing mobile-first, cross-device compatible layouts that ensure smooth user experiences."
        },
        {
            icon: "fab fa-php",
            title: "PHP Development",
            description: "Implementing server-side functionality and dynamic features using PHP and Laravel."
        }
    ];

    return (
        <section id="services" className="py-16 py-16 px-4 md:px-5 lg:px-6 dark-bg">
            <div className="center-container">
                {/* العنوان الرئيسي */}
                <h2
                    className="text-3xl font-bold mb-12 section-title"
                    data-aos="fade-down"
                    data-aos-duration="500"
                >
                    Services
                </h2>

                {/* شبكة الخدمات */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-xl gradient-bg border border-gray-800 card-hover"
                            data-aos="fade-up"
                            data-aos-duration="600"
                            data-aos-delay={index * 100} // تأخير متسلسل
                            data-aos-anchor-placement="top-center"
                        >
                            <div className="text-center mb-6">
                                {/* أيقونة الخدمة */}
                                <div
                                    className="inline-flex items-center justify-center w-16 h-16 primary-bg rounded-full mb-4"
                                    data-aos="zoom-in"
                                    data-aos-duration="400"
                                    data-aos-delay={index * 100 + 200}
                                >
                                    <i className={`${service.icon} text-2xl text-white`}></i>
                                </div>

                                {/* عنوان الخدمة */}
                                <h3
                                    className="text-xl font-bold mb-4"
                                    data-aos="fade-up"
                                    data-aos-duration="500"
                                    data-aos-delay={index * 100 + 300}
                                >
                                    {service.title}
                                </h3>

                                {/* وصف الخدمة */}
                                <p
                                    className="text-gray-300"
                                    data-aos="fade-up"
                                    data-aos-duration="500"
                                    data-aos-delay={index * 100 + 400}
                                >
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;