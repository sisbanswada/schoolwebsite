// import React from 'react';
// import { motion } from 'framer-motion';
// import { Target, Lightbulb } from 'lucide-react';

// const Gallery = () => {
    // const gallery = [
    //     { path: '/campus_life/cl1.jpg' },
    //     { path: '/campus_life/cl2.jpg' },
    //     { path: '/campus_life/cl3.jpg' },
    //     { path: '/campus_life/cl4.jpg' },
    //     { path: '/campus_life/cl5.jpg' },
    //     { path: '/campus_life/cl6.jpg' },
    //     { path: '/campus_life/cl7.jpg' },
    //     { path: '/campus_life/cl8.jpg' },
    //     { path: '/campus_life/cl9.jpg' },
    //     { path: '/campus_life/cl10.jpg' },
    //     { path: '/campus_life/cl11.jpg' },
    //     { path: '/campus_life/cl12.jpg' }
    // ];

//     return (
//         <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-indigo-100">
//             {/* Hero Section */}

//             <div className="relative h-[45vh] bg-indigo-950 overflow-hidden">
//                 <motion.div
//                     className="absolute inset-0"
//                     style={{ y: 0 }}
//                     animate={{ y: [-10, 10] }}
//                     transition={{ repeat: Infinity, duration: 20, repeatType: "reverse" }}
//                 >
//                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#4338ca_0%,_#1e1b4b_100%)]" />
//                     <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10" />
//                 </motion.div>
//                 <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 1, delay: 0.2 }}
//                     >
//                         <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
//                             Gallery
//                         </h1>
//                         <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mb-8" />
//                         <p className="text-2xl text-blue-100 max-w-3xl ">
//                             Few Glimpses of our campus, students, activities, environment and more...
//                         </p>
//                     </motion.div>
//                 </div>
//             </div>

//             {/* Campus Photos Section */}
//             <section className="py-24 bg-gradient-to-b from-indigo-100 via-white to-blue-100">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     {/* <div className="text-center mb-16">
//                         <h2 className="text-4xl font-bold text-indigo-900 mb-4">Campus Life</h2>
//                         <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
//                     </div> */}

//                     <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//                         {gallery.map((campus, index) => (
//                             <div
//                                 key={index}
//                                 className="relative overflow-hidden rounded-2xl group h-auto max-w-full"
//                             >
//                                 <img
//                                     src={campus.path}
//                                     alt={`Campus ${index + 1}`}
//                                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Gallery;



// import React from 'react';
// import { motion } from 'framer-motion';

// const Gallery = () => {
    // const gallery = [
    //     { type: 'image', path: '/campus_life/cl1.jpg' },
    //     { type: 'image', path: '/campus_life/cl2.jpg' },
    //     { type: 'video', path: '/campus_life/campus_tour.mp4' },
    //     { type: 'image', path: '/campus_life/cl3.jpg' },
    //     { type: 'video', path: '/campus_life/event_highlights.mp4' },
    //     { type: 'image', path: '/campus_life/cl4.jpg' },
    //     { type: 'image', path: '/campus_life/cl5.jpg' }
    // ];

//     return (
//         <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-indigo-100">
//             {/* Hero Section */}
//             <div className="relative h-[45vh] bg-indigo-950 overflow-hidden">
//                 <motion.div
//                     className="absolute inset-0"
//                     style={{ y: 0 }}
//                     animate={{ y: [-10, 10] }}
//                     transition={{ repeat: Infinity, duration: 20, repeatType: "reverse" }}
//                 >
//                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#4338ca_0%,_#1e1b4b_100%)]" />
//                     <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-10" />
//                 </motion.div>
//                 <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 1, delay: 0.2 }}
//                     >
//                         <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
//                             Gallery
//                         </h1>
//                         <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mb-8" />
//                         <p className="text-2xl text-blue-100 max-w-3xl ">
//                             Few Glimpses of our campus, students, activities, environment, and more...
//                         </p>
//                     </motion.div>
//                 </div>
//             </div>

//             {/* Campus Media Section */}
//             <section className="py-24 bg-gradient-to-b from-indigo-100 via-white to-blue-100">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//                         {gallery.map((item, index) => (
//                             <div
//                                 key={index}
//                                 className="relative overflow-hidden rounded-2xl group h-auto max-w-full"
//                             >
//                                 {item.type === 'image' ? (
//                                     <img
//                                         src={item.path}
//                                         alt={`Campus ${index + 1}`}
//                                         className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
//                                     />
//                                 ) : (
//                                     <video
//                                         src={item.path}
//                                         controls
//                                         className="w-full h-full object-cover rounded-2xl"
//                                     />
//                                 )}
//                                 <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Gallery;




import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, PlayCircle, PauseCircle } from 'lucide-react';

const Gallery = () => {
    // const gallery = [
    //     { type: 'image', path: '/campus_life/cl1.jpg' },
    //     { type: 'video', path: '/gallery/vd1.mp4' },
    //     { type: 'image', path: '/campus_life/cl2.jpg' },
    //     { type: 'video', path: '/gallery/vd1.mp4' },
    //     { type: 'image', path: '/campus_life/cl3.jpg' },
    //     { type: 'video', path: '/gallery/vd1.mp4' },
    //     // ... rest of your images
    // ];

    const gallery = [
        { type: 'image', path: '/gallery/ig-0-1.jpg' },
        { type: 'image', path: '/gallery/ig-0-2.jpg' },
        { type: 'image', path: '/gallery/ig-0-3.jpg' },
        { type: 'image', path: '/campus_life/cl1.jpg' },
        { type: 'image', path: '/campus_life/cl2.jpg' },
        { type: 'image', path: '/campus_life/cl3.jpg' },
        { type: 'image', path: '/gallery/ig-0-4.jpg' },
        { type: 'image', path: '/gallery/ig-0-5.jpg' },
        { type: 'image', path: '/gallery/ig-0-6.jpg' },
        { type: 'image', path: '/campus_life/cl4.jpg' },
        { type: 'image', path: '/campus_life/cl5.jpg' },
        { type: 'image', path: '/campus_life/cl6.jpg' },
        { type: 'image', path: '/campus_life/cl7.jpg' },
        { type: 'image', path: '/campus_life/cl8.jpg' },
        { type: 'image', path: '/campus_life/cl9.jpg' },
        { type: 'image', path: '/gallery/ig-1-7.jpg' },
        { type: 'image', path: '/gallery/ig-1-8.jpg' },
        { type: 'image', path: '/gallery/ig-1-9.jpg' },
        { type: 'image', path: '/gallery/ig-0-10.jpg' },
        { type: 'image', path: '/gallery/ig-0-11.jpg' },
        { type: 'image', path: '/gallery/ig-0-12.jpg' },
        { type: 'image', path: '/campus_life/cl10.jpg' },
        { type: 'image', path: '/campus_life/cl11.jpg' },
        { type: 'image', path: '/campus_life/cl12.jpg' },
        { type: 'video', path: '/gallery/vd1.mp4' },
        { type: 'video', path: '/gallery/vd2.mp4' },
        { type: 'video', path: '/gallery/vd3.mp4' },
        { type: 'video', path: '/gallery/vd4.mp4' },
        { type: 'video', path: '/gallery/vd5.mp4' },
        { type: 'video', path: '/gallery/vd6.mp4' },

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
                            Gallery
                        </h1>
                        <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mb-8" />
                        <p className="text-2xl text-blue-100 max-w-3xl">
                            Few Glimpses of our campus, students, activities, environment and more...
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Gallery Section */}
            <section className="py-24 bg-gradient-to-b from-indigo-100 via-white to-blue-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {gallery.map((item, index) => (
                            item.type === 'image' ? (
                                <ImageItem key={index} item={item} />
                            ) : (
                                <VideoItem key={index} item={item} />
                            )
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

const ImageItem = ({ item }) => (
    <div className="relative overflow-hidden rounded-2xl group h-auto max-w-full">
        <img
            src={item.path}
            alt="Campus"
            loading='lazy'
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
);

const VideoItem = ({ item }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [controlsVisible, setControlsVisible] = useState(false);
    const controlsTimeoutRef = useRef(null);
    const observerRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.7,
        };

        const handleIntersect = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    videoRef.current.play();
                    setIsPlaying(true);
                } else {
                    videoRef.current.pause();
                    setIsPlaying(false);
                }
            });
        };

        observerRef.current = new IntersectionObserver(handleIntersect, options);
        if (videoRef.current) {
            observerRef.current.observe(videoRef.current);
        }

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
            if (controlsTimeoutRef.current) {
                clearTimeout(controlsTimeoutRef.current);
            }
        };
    }, []);

    const showControlsWithTimeout = () => {
        setControlsVisible(true);
        if (controlsTimeoutRef.current) {
            clearTimeout(controlsTimeoutRef.current);
        }
        controlsTimeoutRef.current = setTimeout(() => {
            setControlsVisible(false);
        }, 3000); // Controls will stay visible for 3 seconds
    };

    const togglePlay = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
        showControlsWithTimeout();
    };

    const toggleMute = () => {
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(!isMuted);
        showControlsWithTimeout();
    };

    const handleTouchStart = () => {
        showControlsWithTimeout();
    };

    return (
        <div 
            className="relative overflow-hidden rounded-2xl group h-auto max-w-full touch-manipulation"
            onTouchStart={handleTouchStart}
        >
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                loop
                muted={isMuted}
                playsInline
            >
                <source src={item.path} type="video/mp4" />
            </video>
            
            {/* Play/Pause Button Overlay */}
            <button
                onClick={togglePlay}
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    text-white transition-all duration-300 md:group-hover:opacity-100
                    ${controlsVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                {isPlaying ? (
                    <PauseCircle className="w-16 h-16" />
                ) : (
                    <PlayCircle className="w-16 h-16" />
                )}
            </button>
            
            {/* Audio Control */}
            <button
                onClick={toggleMute}
                className={`absolute bottom-4 right-4 text-white bg-black/50 p-2 
                    rounded-full transition-all duration-300 md:group-hover:opacity-100
                    ${controlsVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                {isMuted ? (
                    <VolumeX className="w-6 h-6" />
                ) : (
                    <Volume2 className="w-6 h-6" />
                )}
            </button>
        </div>
    );
};

export default Gallery;