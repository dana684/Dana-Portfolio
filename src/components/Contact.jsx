import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            once: true,
            mirror: false,
            offset: 100,
            delay: 0,
            easing: 'ease-out',
            anchorPlacement: 'top-bottom'
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        e.target.reset();
    };

    return (
        <section id="contact" className="py-16 px-4 md:px-5 lg:px-6 relative overflow-hidden">
            {/* خلفية متدرجة */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B192C] via-[#1E3E62] to-[#0B192C] opacity-90"></div>
            <div className="center-container relative z-10">
                {/* العنوان الرئيسي */}
                <h2 className="text-3xl font-bold mb-12 section-title"
                    data-aos="fade-down"
                    data-aos-duration="500">
                    Get In Touch
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* معلومات التواصل */}
                    <div className="space-y-8">
                        {/* بطاقة التواصل */}
                        <div className="contact-card p-8 rounded-2xl"
                            data-aos="fade-right"
                            data-aos-duration="600"
                            data-aos-delay="100">
                            <h3 className="text-2xl font-bold mb-6 gradient-text">Let's Work Together</h3>
                            <p className="text-gray-300 mb-8">I'm currently available for freelance projects or full-time
                                opportunities. Feel free to reach out if you'd like to collaborate or just say hello!</p>

                            <div className="space-y-6">
                                {/* البريد الإلكتروني */}
                                <div className="flex items-center p-4 rounded-xl bg-gradient-to-r from-[#0B192C] to-[#1E3E62] hover:from-[#1E3E62] hover:to-[#0B192C] transition-all duration-300"
                                    data-aos="fade-up"
                                    data-aos-duration="500"
                                    data-aos-delay="200">
                                    <div className="primary-bg p-3 rounded-full mr-4 contact-icon">
                                        <i className="fas fa-envelope text-white"></i>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Email</p>
                                        <a href="mailto:danaj5425@gmail.com"
                                            className="text-lg font-medium primary-text hover:underline">
                                            danaj5425@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* GitHub */}
                                <div className="flex items-center p-4 rounded-xl bg-gradient-to-r from-[#0B192C] to-[#1E3E62] hover:from-[#1E3E62] hover:to-[#0B192C] transition-all duration-300"
                                    data-aos="fade-up"
                                    data-aos-duration="500"
                                    data-aos-delay="300">
                                    <div className="primary-bg p-3 rounded-full mr-4 contact-icon">
                                        <i className="fab fa-github text-white"></i>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">GitHub</p>
                                        <a href="https://github.com/dana684"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-lg font-medium primary-text hover:underline">
                                            github.com/dana684
                                        </a>
                                    </div>
                                </div>

                                {/* LinkedIn */}
                                <div className="flex items-center p-4 rounded-xl bg-gradient-to-r from-[#0B192C] to-[#1E3E62] hover:from-[#1E3E62] hover:to-[#0B192C] transition-all duration-300"
                                    data-aos="fade-up"
                                    data-aos-duration="500"
                                    data-aos-delay="400">
                                    <div className="primary-bg p-3 rounded-full mr-4 contact-icon">
                                        <i className="fab fa-linkedin-in text-white"></i>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">LinkedIn</p>
                                        <a href="https://linkedin.com/in/dana-j-a676071bb"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-lg font-medium primary-text hover:underline">
                                            linkedin.com/in/dana-j-a676071bb
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* حالة التوفر */}
                        <div className="contact-card p-6 rounded-2xl"
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="500">
                            <div className="flex items-center mb-4">
                                <div className="w-3 h-3 primary-bg rounded-full mr-3 animate-pulse"></div>
                                <span className="font-semibold primary-text">Currently Available</span>
                            </div>
                            <p className="text-gray-300">I'm open to discussing new opportunities and projects. Response time:
                                within 24 hours.</p>
                        </div>
                    </div>

                    {/* نموذج التواصل */}
                    <div className="contact-card p-8 rounded-2xl"
                        data-aos="fade-left"
                        data-aos-duration="600"
                        data-aos-delay="100">
                        <h3 className="text-2xl font-bold mb-6 gradient-text">Send Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* الاسم */}
                                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
                                    <label className="block text-gray-400 mb-2">Your Name</label>
                                    <input type="text"
                                        placeholder="John Doe"
                                        className="contact-input w-full p-4 rounded-xl focus:outline-none text-white"
                                        required />
                                </div>

                                {/* البريد الإلكتروني */}
                                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                                    <label className="block text-gray-400 mb-2">Your Email</label>
                                    <input type="email"
                                        placeholder="john@example.com"
                                        className="contact-input w-full p-4 rounded-xl focus:outline-none text-white"
                                        required />
                                </div>
                            </div>

                            {/* الموضوع */}
                            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="400">
                                <label className="block text-gray-400 mb-2">Subject</label>
                                <input type="text"
                                    placeholder="Project Inquiry"
                                    className="contact-input w-full p-4 rounded-xl focus:outline-none text-white"
                                    required />
                            </div>

                            {/* الرسالة */}
                            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
                                <label className="block text-gray-400 mb-2">Your Message</label>
                                <textarea placeholder="Hi Dana, I'd like to discuss a project..."
                                    rows="5"
                                    className="contact-input w-full p-4 rounded-xl focus:outline-none text-white"
                                    required></textarea>
                            </div>

                            {/* زر الإرسال */}
                            <button type="submit"
                                className="w-full bg-gradient-to-r from-[#FF6500] to-[#FF8533] text-white font-semibold py-4 px-6 rounded-xl hover:opacity-90 transition duration-300 flex items-center justify-center"
                                data-aos="zoom-in"
                                data-aos-duration="500"
                                data-aos-delay="600">
                                <i className="fas fa-paper-plane mr-3"></i>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* عناصر عائمة للديكور */}
                <div className="absolute top-1/4 left-10 w-6 h-6 border-2 border-[#FF6500] rounded-full floating-element opacity-30"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="700"></div>
                <div className="absolute bottom-1/3 right-20 w-4 h-4 border-2 border-[#FF6500] rounded-full floating-element opacity-30"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="800"></div>
                <div className="absolute top-1/5 right-40 w-8 h-8 border-2 border-[#FF6500] rounded-full floating-element opacity-20"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="900"></div>
                <div className="absolute top-1/10 left-10 w-6 h-6 border-2 border-[#dfb396] rounded-full floating-element opacity-30"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="700"></div>
                <div className="absolute bottom-1/10 right-20 w-4 h-4 border-2 border-[#dfb396] rounded-full floating-element opacity-30"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="800"></div>
                <div className="absolute top-1/5 right-40 w-8 h-8 border-2 border-[#dfb396] rounded-full floating-element opacity-20"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="900"></div>
                <div className="absolute top-1/12 left-10 w-6 h-6 border-2 border-[#FF6500] rounded-full floating-element opacity-30"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="700"></div>
                <div className="absolute bottom-1/8 right-20 w-4 h-4 border-2 border-[#FF6500] rounded-full floating-element opacity-30"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="800"></div>
                <div className="absolute top-1/1 right-40 w-8 h-8 border-2 border-[#dfb396] rounded-full floating-element opacity-20"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="900"></div>
            </div>
        </section>
    );
};

export default Contact;