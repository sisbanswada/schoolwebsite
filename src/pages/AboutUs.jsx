import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb } from 'lucide-react';

const AboutUs = () => {

  const managementTeam = [
    {
      name: "Bipasha",
      role: "Chairman",
      image: "/aboutus/chairman.jpg",
      message: "Education is no longer about the four R's. It is all about embarking on a journey of discovery... \n Discovery of the self, discovery of the environment and discovery of the world we live in. Sunshine International School sets out to mould its students to become compassionate thinkers, balanced communicators and reflective enquiries. As a chairman of the school, it is my mission to ensure the school continues its journey towards excellence and provides best to the students, parents, teachers and everyone connected with school",
      qualifications: "B.Ed, M.Com, LLB"
    },
    {
      name: "Hulsar Shankar",
      role: "Principal",
      image: "/aboutus/principal.jpg",
      message: "A child’s mind is like a fertile soil – rich, vibrant with life and eager to absorb every experience that comes within his or her universe. At Sunshine International School, it is our endeavour to create a nation of talented, bright and creative future generations who will contribute positively to enrich the world. We are committed to offer the best education to each and every student from diverse backgrounds. SIS hones leadership qualities in every child and at the same time makes them aware of their role as socially – conscious citizens of the future.",
      qualifications: "M.A, B.Ed"
    },
    {
      name: "Lakshmi",
      role: "Head Master",
      image: "/aboutus/headmaster.jpg",
      message: "Education is a lifelong process which is to be nurtured with love and care. It must be built on a firm and broad foundation for students to excel in life. Our aim is to prepare our students with the intellectually-stimulated learning which drives concept learning and practical approach which are necessary to meet the challenges in both academics and life skills. We encourage our students to believe in themselves and their strengths. The policy of the school is to strengthen the child with the necessary skills to face the future.",
      qualifications: "B.A, B.Ed"
    }
  ];

  const coreValues = [
    {
      title: "Mission",
      description:
        "To provide exceptional education that develops well-rounded individuals equipped with knowledge, skills, and values necessary for success in a rapidly evolving global society. We are committed to maintaining academic excellence while fostering creativity, critical thinking, and character development.",
      icon: <Target className="w-12 h-12 text-indigo-600" />, // Lucide icon for Mission
      bgColor: "bg-yellow-50"
    },
    {
      title: "Vision",
      description:
        "To be a globally recognized institution that nurtures future leaders through holistic education, innovative teaching methodologies, and strong ethical foundations. We envision creating a learning environment that inspires excellence, fosters creativity, and builds character.",
      icon: <Lightbulb className="w-12 h-12 text-indigo-600" />, // Lucide icon for Vision
      bgColor: "bg-pink-100"
    },
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
              About Us
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mb-8" />
            <p className="text-2xl text-blue-100 max-w-3xl ">
              Empowering minds, shaping futures, and building characters.
              We are committed to excellence in education and holistic development.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Brief Description */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-indigo-900 mb-8">Our Legacy of Excellence</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              For over two decades, our institution has stood as a beacon of educational excellence,
              fostering an environment where learning transcends traditional boundaries. We believe
              in nurturing not just academic brilliance, but also character, creativity, and
              leadership qualities that prepare our students for the challenges of tomorrow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-20 bg-gradient-to-b from-blue-100 via-white to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-900 mb-4">Our Leadership</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            {managementTeam.map((member, index) => (
              <motion.div
                key={member.role}
                className="bg-blue-50 rounded-2xl shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:w-3/5">
                    <div className="uppercase tracking-wide text-base text-indigo-600 font-semibold">
                      {member.role}
                    </div>
                    <h3 className="mt-2 text-2xl font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">{member.qualifications}</p>
                    <p className="mt-4 text-gray-700 leading-relaxed">
                      {member.message}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gradient-to-b from-blue-100 via-white to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-900 mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                className={`${value.bgColor} rounded-2xl shadow-lg p-8 ${value.title === "Mission" ? "bg-blue-100" : "bg-purple-100"
                  }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="flex items-center mb-6">
                  <div className={`bg-indigo-100 rounded-xl p-3`}>{value.icon}</div>
                  <h3 className="ml-4 text-2xl font-bold text-indigo-900">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {value.description}
                </p>
                <ul className="list-disc pl-6 text-gray-700">
                  {value.title === "Mission" ? (
                    <>
                      <li>Academic Excellence</li>
                      <li>Character Development</li>
                      <li>Global Perspective</li>
                    </>
                  ) : (
                    <>
                      <li>Innovation in Learning</li>
                      <li>Student Leadership</li>
                      <li>Community Impact</li>
                    </>
                  )}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;