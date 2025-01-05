import React from 'react';
import { motion } from 'framer-motion';
import { Book, Users, Award, Brain, Rocket, GraduationCap, Heart, BookOpen, Target, Star } from 'lucide-react';

const Academics = () => {
    const classes = [
        {
            level: "Pre-Primary",
            grades: ["Nursery", "LKG", "UKG"],
            description: "Nurturing young minds through play-based learning, developing fundamental skills and curiosity.",
            focus: ["Basic literacy and numeracy", "Motor skills development", "Social interaction", "Creative expression"],
            icon: <GraduationCap className="w-8 h-8" />,
            bgColor: "bg-pink-100"
        },
        {
            level: "Primary",
            grades: ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"],
            description: "Building strong foundations in core subjects while fostering critical thinking and creativity.",
            focus: ["Language proficiency", "Mathematical concepts", "Environmental awareness", "Digital literacy"],
            icon: <Book className="w-8 h-8" />,
            bgColor: "bg-emerald-50"
        },
        {
            level: "Middle School",
            grades: ["Class 6", "Class 7", "Class 8"],
            description: "Advanced learning with specialized focus on science, mathematics, and competitive exam preparation.",
            focus: ["Advanced Mathematics", "Science & Technology", "Language Arts", "Social Sciences"],
            icon: <Brain className="w-8 h-8" />,
            bgColor: "bg-yellow-50"
        }
    ];

    const curriculum = [
        {
            name: "Cambridge University Press (U.K)",
            description: "World-renowned curriculum offering comprehensive learning materials and international standards of education.",
            features: [
                "International standard education",
                "Research-based learning approach",
                "Continuous assessment system",
                "Focus on critical thinking"
            ],
            image: "/academics/cup.png"
        },
        {
            name: "CBSE Academic Pattern",
            description: "Following the Central Board of Secondary Education pattern to ensure strong academic foundation.",
            features: [
                "Structured learning approach",
                "Comprehensive evaluation system",
                "Focus on practical knowledge",
                "Regular assessments"
            ],
            image: "/academics/cbse.jpg"
        }
    ];

    const competitiveExams = [
        {
            name: "Navodaya Foundation",
            description: "Specialized coaching for Jawahar Navodaya Vidyalaya entrance examination",
            icon: <Award className="w-6 h-6" />,
            image: "/academics/navodaya.jpg",
            features: [
                "Comprehensive study material",
                "Regular mock tests",
                "Personal mentoring",
                "Previous year paper analysis"
            ]
        },
        {
            name: "Sainik School Preparation",
            description: "Comprehensive preparation for Sainik School entrance tests",
            icon: <Award className="w-6 h-6" />,
            image: "/academics/sainik.jpg",
            features: [
                "Military aptitude training",
                "Physical fitness guidance",
                "Interview preparation",
                "Written exam coaching"
            ]
        },
        {
            name: "IIT-JEE Foundation",
            description: "Early preparation for future engineering aspirants",
            icon: <Rocket className="w-6 h-6" />,
            image: "/academics/iit.jpg",
            features: [
                "Advanced mathematics",
                "Physics concepts",
                "Chemistry fundamentals",
                "Problem-solving skills"
            ]
        },
        {
            name: "NEET Foundation",
            description: "Building strong base for future medical aspirants",
            icon: <Brain className="w-6 h-6" />,
            image: "/academics/neet.jpg",
            features: [
                "Biology focus",
                "Chemistry preparation",
                "Physics coaching",
                "Medical aptitude development"
            ]
        },
        {
            name: "Olympiad Training",
            description: "Preparation for various national and international Olympiads",
            icon: <Award className="w-6 h-6" />,
            image: "/academics/olympiad.jpg",
            features: [
                "Subject-specific training",
                "International level preparation",
                "Competitive strategy",
                "Advanced problem solving"
            ]
        }
    ];

    const facultyDepartments = [
        {
            name: "Pre-Primary Faculty",
            count: 12,
            expertise: "Early Childhood Education",
            icon: <Heart className="w-6 h-6" />,
            color: "text-pink-600",
            bgColor: "bg-pink-100",
            stats: {
                avgExperience: "8+ years",
                specialTraining: "Montessori Certified",
                studentRatio: "1:15"
            }
        },
        {
            name: "Primary Faculty",
            count: 18,
            expertise: "Primary Education Specialists",
            icon: <BookOpen className="w-6 h-6" />,
            color: "text-pink-600",
            bgColor: "bg-pink-100",
            stats: {
                avgExperience: "10+ years",
                specialTraining: "B.Ed Qualified",
                studentRatio: "1:20"
            }
        },
        {
            name: "Middle School Faculty",
            count: 15,
            expertise: "Subject Matter Experts",
            icon: <Target className="w-6 h-6" />,
            color: "text-pink-600",
            bgColor: "bg-pink-100",
            stats: {
                avgExperience: "12+ years",
                specialTraining: "Subject Specialists",
                studentRatio: "1:25"
            }
        }
    ];

    const facultyHighlights = [
        {
            title: "Highly Qualified",
            description: "All our teachers hold advanced degrees in their respective fields and are continuously updating their skills.",
            icon: <Star className="w-12 h-12" />,
            color: "text-yellow-600",
            bgColor: "bg-yellow-50"
        },
        {
            title: "Experienced Team",
            description: "Our faculty brings an average of 10+ years of teaching experience, ensuring quality education.",
            icon: <Award className="w-12 h-12" />,
            color: "text-emerald-600",
            bgColor: "bg-emerald-50"
        },
        {
            title: "Student-Focused",
            description: "Maintaining optimal teacher-student ratios for personalized attention and better learning outcomes.",
            icon: <Users className="w-12 h-12" />,
            color: "text-blue-600",
            bgColor: "bg-blue-50"
        }
    ];


    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-indigo-100">
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
                        Academic Excellence
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mb-8" />
                        <p className="text-2xl text-blue-100 max-w-3xl ">
                        Fostering intellectual growth through comprehensive education and innovative teaching methodologies.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Class Levels Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-indigo-900 mb-4">Academic Structure</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {classes.map((level, index) => (
                            <motion.div
                                key={level.level}
                                className={`${level.bgColor} backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <div className="flex items-center mb-6 text-indigo-600">
                                    {level.icon}
                                    <h3 className="text-2xl font-bold ml-4">{level.level}</h3>
                                </div>
                                <div className="mb-4">
                                    <p className="text-gray-900">{level.description}</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="font-semibold text-indigo-900">Grades:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {level.grades.map(grade => (
                                            <span key={grade} className="bg-indigo-100 text-indigo-900 font-medium px-3 py-1 rounded-full text-sm">
                                                {grade}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-4 space-y-2">
                                    <p className="font-semibold text-indigo-900">Key Focus Areas:</p>
                                    <ul className="space-y-1">
                                        {level.focus.map(item => (
                                            <li key={item} className="text-gray-700 flex items-center">
                                                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className="py-20 bg-gradient-to-b from-blue-100 via-white to-indigo-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-indigo-900 mb-4">Our Curriculum</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
                    </motion.div>

                    <div className="space-y-12">
                        {curriculum.map((item, index) => (
                            <motion.div
                                key={item.name}
                                className="bg-emerald-50 rounded-2xl shadow-lg overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <div className="md:flex">
                                    <div className="md:w-2/5">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-8 md:w-3/5">
                                        <h3 className="text-2xl font-bold text-indigo-900 mb-4">{item.name}</h3>
                                        <p className="text-gray-600 mb-6">{item.description}</p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {item.features.map(feature => (
                                                <div key={feature} className="flex items-center">
                                                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2" />
                                                    <span className="text-gray-900">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Competitive Exams Section  */}
            <section className="py-20 bg-gradient-to-b from-blue-100 via-white to-indigo-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-indigo-900 mb-4">Competitive Exam Foundation</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Preparing students for success in prestigious entrance examinations through specialized training and guidance.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {competitiveExams.map((exam, index) => (
                            <motion.div
                                key={exam.name}
                                className="bg-blue-50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="relative h-52 overflow-hidden">
                                    <img
                                        src={exam.image}
                                        alt={exam.name}
                                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-800/60 to-transparent" />
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <div className="flex items-center">
                                            {exam.icon}
                                            <h3 className="text-xl font-bold ml-2">{exam.name}</h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <p className="text-gray-600 mb-4">{exam.description}</p>
                                    <div className="space-y-2">
                                        {exam.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center text-gray-900">
                                                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2" />
                                                <span className="text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* New Enhanced Faculty Section */}
            <section className="py-24 bg-gradient-to-b from-blue-100 via-white to-indigo-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-indigo-900 mb-4">Our Distinguished Faculty</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Our educators are the cornerstone of our institution, bringing together expertise,
                            passion, and dedication to create an inspiring learning environment.
                        </p>
                    </motion.div>

                    {/* Faculty Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {facultyHighlights.map((highlight, index) => (
                            <motion.div
                                key={highlight.title}
                                className={`${highlight.bgColor} rounded-2xl p-8 shadow-lg`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <div className={`${highlight.color} mb-6`}>
                                    {highlight.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
                                <p className="text-gray-600">{highlight.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Department Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {facultyDepartments.map((dept, index) => (
                            <motion.div
                                key={dept.name}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <div className={`${dept.bgColor} p-6`}>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`${dept.color}`}>
                                            {dept.icon}
                                        </div>
                                        <span className="text-2xl font-bold text-gray-900">{dept.count}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.name}</h3>
                                    <p className="text-gray-600">{dept.expertise}</p>
                                </div>

                                <div className="p-6">
                                    <div className="space-y-4">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Average Experience</span>
                                            <span className="font-semibold text-gray-900">{dept.stats.avgExperience}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Qualification</span>
                                            <span className="font-semibold text-gray-900">{dept.stats.specialTraining}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Teacher-Student Ratio</span>
                                            <span className="font-semibold text-gray-900">{dept.stats.studentRatio}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Faculty Quote */}
                    <motion.div
                        className="mt-16 text-center bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="max-w-3xl mx-auto">
                            <blockquote className="text-xl text-gray-600 italic">
                                "Our faculty members are not just teachers; they are mentors, guides, and inspirational
                                leaders who are committed to nurturing the next generation of innovators and leaders."
                            </blockquote>
                            <div className="mt-4 text-gray-900 font-semibold">
                                - Principal
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Academics;