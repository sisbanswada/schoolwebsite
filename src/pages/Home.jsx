import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap, Trophy, Atom } from 'lucide-react';
import { motion } from 'framer-motion';
import { path } from 'framer-motion/client';
import { p } from 'framer-motion/m';


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/hero/sl1-1.png',
      title: 'Welcome to Excellence',
      description: 'Nurturing the future'
    },
    {
      image: '/hero/sl2.jpg',
      title: 'Exceptional and Inspiring Educators',
      description: 'highly qualified and passionate teachers'
    },
    {
      image: '/hero/sl3.jpg',
      title: 'Holistic Development',
      description: 'Beyond academics - sports, arts, and more'
    }
  ];

  const facilities = [
    {
      title: 'Cambridge University Press Curriculum',
      description: 'Provides broad and balanced education for students, throughout school, work and life.',
      image: '/facilities/cambridge.png'
    },
    {
      title: 'C.B.S.E Academic Pattern',
      description: 'CBSE fosters conceptual understanding and critical thinking',
      image: '/facilities/cbse.png'
    },
    {
      title: 'Smart Classrooms',
      description: 'Smart and Interactive digital learning environment',
      image: '/facilities/smartclassroom.jpg'
    },
    {
      title: 'Science, Robotics, and Coding',
      description: 'Hands-on learning in science, robotics, and coding to develop practical skills.',
      image: '/facilities/labs.jpg'
    },
    {
      title: 'Expert Faculty',
      description: 'Experienced and trained teachers from all over India',
      image: '/facilities/expertfaculty.png'
    },
    {
      title: 'NAVODAYA and SAINIK classes',
      description: 'Exclusive training for Navodaya and Sainik entrance',
      image: '/facilities/navodayasainik.png'
    },
    {
      title: 'IIT-JEE and NEET Foundation',
      description: 'Foundation classes for various competative exams',
      image: '/facilities/jeeneet.png'
    },
    {
      title: 'Parent-Teacher Interaction',
      description: 'Frequent communication with parents to ensure overall development of students',
      image: '/facilities/ptm.jpg'
    },
    {
      title: 'Transport Facility',
      description: 'Safe and reliable transportation services covering extensive routes',
      image: '/facilities/schoolbus.jpg'
    }
  ];


  const achievements = [
    {
      title: '100% Results',
      description: 'Consistent academic excellence with top rankings in board examinations',
      path: '/achievements/100result.jpg',
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      title: 'Sports Champions',
      description: 'National level achievements in various sports',
      path: '/achievements/sportchamp.jpg',
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      title: 'Science and Technology',
      description: ' Participation and wins in science fairs, robotics competitions, or innovation challenges',
      path: '/achievements/science_fair.jpg',
      color: 'bg-violet-50 text-violet-600'
    }
  ];

  const campus_life = [
    { path: '/campus_life/cl1.jpg' },
    { path: '/campus_life/cl2.jpg' },
    { path: '/campus_life/cl3.jpg' },
    { path: '/campus_life/cl4.jpg' },
    { path: '/campus_life/cl5.jpg' },
    { path: '/campus_life/cl6.jpg' },
    { path: '/campus_life/cl7.jpg' },
    { path: '/campus_life/cl8.jpg' },
    { path: '/campus_life/cl9.jpg' },
    { path: '/campus_life/cl10.jpg' },
    { path: '/campus_life/cl11.jpg' },
    { path: '/campus_life/cl12.jpg' }
  ];


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-blue-100 via-white to-indigo-100">
      {/* Hero Carousel */}
      <div className="relative h-[80vh] overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 relative"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center text-white"
                >
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-3xl font-light">
                    {slide.description}
                  </p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-3 top-1/2 transform -translate-y-1/2"
        >
          <ChevronLeft className="h-8 w-8 text-white" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
        >
          <ChevronRight className="h-8 w-8 text-white" />
        </button>
      </div>


      {/* Facilities Section */}
      <section className="py-24 bg-gradient-to-b from-blue-100 via-white to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-900 mb-4">Our Facilities</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="group bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8 bg-gradient-to-b from-white/80 to-blue-50/80">
                  <h3 className="text-2xl font-semibold mb-3 text-indigo-900">{facility.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Achievements Section */}
      <section className="py-24 bg-gradient-to-b from-indigo-100 via-white to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-900 mb-4">Our Achievements</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-indigo-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={achievement.path}
                    alt={achievement.title}
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 bg-gradient-to-b from-white/80 to-blue-50/80">
                  <h3 className="text-2xl font-semibold mb-3 text-indigo-900">{achievement.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Campus Photos Section */}
      <section className="py-24 bg-gradient-to-b from-indigo-100 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-900 mb-4">Campus Life</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
          </div>

          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
              <div>
                <img className="h-auto max-w-full rounded-lg" src="/campus_life/cl1.jpg" alt="" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="/campus_life/cl2.jpg" alt="" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="/campus_life/cl3.jpg" alt="" />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
              </div>
              <div>
                <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
              </div>
            </div>
          </div> */}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {campus_life.map((campus, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl group h-auto max-w-full"
              >
                <img
                  src={campus.path}
                  alt={`Campus ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;