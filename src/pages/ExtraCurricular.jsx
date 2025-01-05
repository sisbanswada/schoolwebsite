import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Map, Shield, Activity, Heart } from 'lucide-react';

const ExtraCurricular = () => {
    const sports = [
        {
            name: "Cricket",
            image: "/extracarricular/cricket.jpg",
            description: "Professional cricket coaching with state-level trainers",
            facilities: ["Professional ground", "Training equipment", "Regular matches"]
        },
        {
            name: "Volleyball",
            image: "/extracarricular/volleyball.jpg",
            description: "Volleyball training for all age groups",
            facilities: ["Standard courts", "Team practices", "Inter-school matches"]
        },
        {
            name: "Athletics",
            image: "/extracarricular/athletics.jpg",
            description: "Track and field events with professional training",
            facilities: ["Running track", "Field events", "Professional training"]
        },
        {
            name: "Badminton",
            image: "/extracarricular/badminton.jpg",
            description: "Indoor badminton courts with structured training",
            facilities: ["Indoor courts", "Equipment provided", "Regular practice"]
        },
        {
            name: "Kho-Kho",
            image: "/extracarricular/khokho.jpg",
            description: "A traditional Indian tag sport emphasizing speed, strategy, and teamwork.",
            facilities: ["Dedicated kho-kho field", "Professional coaching", "Regular practice matches"]
        },
        {
            name: "Kabaddi",
            image: "/extracarricular/kabaddi.jpg",
            description: "An energetic team sport focusing on strength, agility, and tactical skills.",
            facilities: ["Kabaddi mat or court", "Strength and conditioning sessions", "Tournament participation"]
        }
    ];

    const karateProgram = {
        title: "Professional Karate Training",
        description: "Build confidence, discipline, and physical fitness through our comprehensive karate program.",
        images: [
            "/extracarricular/karate1.jpg",
            "/extracarricular/karate2.jpg",
            "/extracarricular/karate3.jpg"
        ],
        features: [
            {
                title: "Expert Instructors",
                description: "Black belt certified trainers with international experience"
            },
            {
                title: "Regular Belt Tests",
                description: "Structured progression through different belt levels"
            },
            {
                title: "Competition Training",
                description: "Preparation for state and national level competitions"
            },
            {
                title: "Self-Defense Focus",
                description: "Special emphasis on practical self-defense techniques"
            }
        ]
    };

    const moreActivities = [
        {
            name: "Nature & Historical Excursions",
            image: "/extracarricular/tour.png",
            description: "Exploring historical monuments and learning about our rich heritage, Outdoor camping and nature exploration activities",
            highlights: ["Wildlife education", "Adventure activities", "Environmental awareness"]
        },
        {
            name: "Dance Programs",
            image: "/extracarricular/dance.jpg",
            description: "Exploring rhythm, movement, and expression through dance.",
            highlights: ["Diverse dance styles", "Professional instructors", "Showcase opportunities"]
        },
        {
            name: "Demonstration Activities",
            image: "/extracarricular/prac.png",
            description: "Engaging students with hands-on learning experiences.",
            highlights: ["Interactive experiments", "Collaborative projects", "Real-world applications"]
        },
        {
            name: "Festival Celebrations",
            image: "/extracarricular/festival.jpg",
            description: "Celebrating cultural diversity and traditions through vibrant events.",
            highlights: ["Traditional performances", "Community participation", "Thematic decorations"]
        },
        {
            name: "Yoga",
            image: "/extracarricular/yoga.jpg",
            description: "Promoting mental and physical well-being through yoga practices.",
            highlights: ["Breathing exercises", "Flexibility improvement", "Stress management techniques"]
        }
    ];

    const safetyEducation = {
        title: "Safety Education Program",
        description: "Teaching essential personal safety skills through age-appropriate methods",
        modules: [
            {
                title: "Understanding Personal Space",
                content: "Learning about boundaries and respecting personal space",
                icon: <Shield className="w-6 h-6" />,
                color: "text-blue-600",
                bgColor: "bg-blue-50"
            },
            {
                title: "Safe and Unsafe Touch",
                content: "Identifying appropriate and inappropriate physical contact",
                icon: <Heart className="w-6 h-6" />,
                color: "text-pink-600",
                bgColor: "bg-pink-50"
            },
            {
                title: "Building Confidence",
                content: "Developing self-assurance and assertiveness skills",
                icon: <Trophy className="w-6 h-6" />,
                color: "text-yellow-600",
                bgColor: "bg-yellow-50"
            },
            {
                title: "Seeking Help",
                content: "Learning when and how to seek help from trusted adults",
                icon: <Activity className="w-6 h-6" />,
                color: "text-green-600",
                bgColor: "bg-green-50"
            }
        ]
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-100 via-white to-blue-100">
            {/* Hero Section */}

            <div className="relative h-[45vh] bg-indigo-950 overflow-hidden">
                <motion.div
                    className="absolute inset-0"
                    style={{ y: 0 }}
                    animate={{ y: [-10, 10] }}
                    transition={{ repeat: Infinity, duration: 20, repeatType: "reverse" }}
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#4338ca_0%,_#1e1b4b_100%)]" />
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10" />
                </motion.div>
                <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                            Beyond Academics
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mb-8" />
                        <p className="text-2xl text-blue-100 max-w-3xl ">
                            Nurturing talents and building character through diverse extra-curricular activities.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Sports Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-indigo-900 mb-4">Sports Excellence</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sports.map((sport, index) => (
                            <motion.div
                                key={sport.name}
                                className="bg-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="relative h-56">
                                    <img
                                        src={sport.image}
                                        alt={sport.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                                        {sport.name}
                                    </h3>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 mb-4">{sport.description}</p>
                                    <div className="space-y-2">
                                        {sport.facilities.map((facility, idx) => (
                                            <div key={idx} className="flex items-center text-gray-700">
                                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                                                <span>{facility}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Karate Section */}
            <section className="py-20 bg-gradient-to-b from-indigo-100 via-white to-blue-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-indigo-900 mb-4">{karateProgram.title}</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            {karateProgram.description}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

                        <motion.div
                            className="grid grid-cols-2 gap-4"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            {karateProgram.images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`rounded-xl overflow-hidden shadow-lg ${index === 2 ? 'col-span-2' : ''
                                        }`}
                                >
                                    <img
                                        src={image}
                                        alt="Karate Training"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            {karateProgram.features.map((feature, index) => (
                                <div key={index} className="bg-green-50 rounded-xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-indigo-900 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* More Activities Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-indigo-900 mb-4">More Activities</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {moreActivities.map((sport, index) => (
                            <motion.div
                                key={sport.name}
                                className="bg-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="relative h-56">
                                    <img
                                        src={sport.image}
                                        alt={sport.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                                        {sport.name}
                                    </h3>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 mb-4">{sport.description}</p>
                                    <div className="space-y-2">
                                        {sport.highlights.map((facility, idx) => (
                                            <div key={idx} className="flex items-center text-gray-700">
                                                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                                                <span>{facility}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Safety Education Section */}
            <section className="py-20 bg-gradient-to-b from-indigo-100 via-white to-blue-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-indigo-900 mb-4">{safetyEducation.title}</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            {safetyEducation.description}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {safetyEducation.modules.map((module, index) => (
                            <motion.div
                                key={module.title}
                                className={`${module.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className={`${module.color} mb-6`}>
                                    {module.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {module.title}
                                </h3>
                                <p className="text-gray-600">
                                    {module.content}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExtraCurricular;
