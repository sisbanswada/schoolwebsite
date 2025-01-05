// // src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import AboutUs from './pages/AboutUs';
// import Academics from './pages/Academics';
// import ExtraCurricular from './pages/ExtraCurricular';
// import Campus from './pages/Campus';
// import ContactUs from './pages/ContactUs';

// const App = () => {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         {/* Navbar is always present */}
//         <Navbar />

//         {/* Main Content */}
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<AboutUs />} />
//             <Route path="/academics" element={<Academics />} />
//             <Route path="/extra-curricular" element={<ExtraCurricular />} />
//             <Route path="/campus" element={<Campus />} />
//             <Route path="/contact" element={<ContactUs />} />
//           </Routes>
//         </main>

//         {/* Footer is always present */}
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;



// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Academics from './pages/Academics';
import ExtraCurricular from './pages/ExtraCurricular';
import Campus from './pages/Campus';
import ContactUs from './pages/ContactUs';
import Gallery from './pages/Gallery';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/extra-curricular" element={<ExtraCurricular />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/gallery" element={<Gallery   />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
