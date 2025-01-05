import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const ContactUs = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-100 via-white to-blue-100">
            {/* Hero Section with Parallax */}
            <div className="relative h-[40vh] bg-indigo-950 overflow-hidden">
                <motion.div
                    className="absolute inset-0"
                    style={{ y: 0 }}
                    animate={{ y: [-10, 10] }}
                    transition={{ repeat: Infinity, duration: 20, repeatType: "reverse" }}
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#4338ca_0%,_#1e1b4b_100%)]" />
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10 bg-cover bg-center" />
                </motion.div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <h1 className="text-6xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                            Contact Us
                        </h1>
                        <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mb-8" />
                        <p className="text-2xl sm:text-xl md:text-2xl text-blue-100 max-w-3xl">
                            We're here to transform your queries into solutions.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Admission Info Card */}
            <section className="py-16 sm:py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.div {...fadeInUp} className="bg-blue-100 rounded-3xl shadow-xl p-8 sm:p-12 backdrop-blur-lg">
                        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-950 mb-6 sm:mb-8">
                            Begin Your Journey
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12">
                            <div>
                                <h3 className="text-xl sm:text-2xl font-semibold text-indigo-900 mb-4">Application Process</h3>
                                <ul className="space-y-4">
                                    {["Connect with our office through your preferred channel", "Submit required documentation including transcripts", "Receive personalized admission guidance"].map((step, i) => (
                                        <motion.li
                                            key={i}
                                            className="flex items-center text-gray-900"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.2 }}
                                        >
                                            <div className="w-2 h-2 bg-indigo-500 rounded-full mr-4" />
                                            {step}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-yellow-50 rounded-2xl p-6 sm:p-8">
                                <h3 className="text-lg sm:text-xl font-semibold text-indigo-900 mb-4">Contact Hours</h3>
                                <div className="space-y-3 text-gray-900">
                                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-indigo-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                        {[{
                            icon: <Phone className="w-6 h-6 sm:w-8 sm:h-8" />,
                            title: "Call Us",
                            content: ["+91 90638 08828", "+91 83418 04341"],
                            bgcolor: 'bg-pink-50',
                            color: 'text-pink-600'
                        }, {
                            icon: <Mail className="w-6 h-6 sm:w-8 sm:h-8" />,
                            title: "Email Us",
                            content: ["sunshineinternationalschool22@gmail.com"],
                            bgcolor: 'bg-yellow-50',
                            color: 'text-yellow-600'
                        }, {
                            icon: <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />,
                            title: "Visit Us",
                            content: ["NGOs Colony, Banswada", "Kamareddy, Telangana - 503187"],
                            bgcolor: 'bg-green-50',
                            color: 'text-green-600'
                        }].map((item, i) => (
                            <motion.div
                                key={i}
                                className={`group ${item.bgcolor} rounded-3xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300`}
                                whileHover={{ y: -5 }}
                                {...fadeInUp}
                            >
                                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-indigo-100 transition-colors">
                                    <div className={`${item.color}`}>{item.icon}</div>
                                </div>
                                <h3 className="text-lg sm:text-2xl font-semibold text-indigo-900 mb-2 sm:mb-4">{item.title}</h3>
                                {item.content.map((line, j) => (
                                    <p key={j} className="text-sm sm:text-base text-black">{line}</p>
                                ))}
                            </motion.div>
                        ))}
                    </div>

                    {/* Social Media */}
                    <motion.div
                        className="mt-8 sm:mt-12 flex justify-center space-x-4 sm:space-x-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {[{
                            Icon: Facebook,
                            color: "text-blue-600",
                            url: "https://www.facebook.com/profile.php?id=100082965777198"
                        }, {
                            Icon: Instagram,
                            color: "text-pink-600",
                            url: "https://www.instagram.com/ssisbanswada"
                        }].map(({ Icon, color, url }, i) => (
                            <motion.a
                                key={i}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center ${color} transition-all duration-300`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                            </motion.a>
                        ))}
                    </motion.div>

                </div>
            </section>
        </div>
    );
};

export default ContactUs;
