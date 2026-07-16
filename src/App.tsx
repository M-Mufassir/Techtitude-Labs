import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

// Components
import Footer from "./components/Footer";
import DynamicBottomDock from "./components/DynamicBottomDock";
import Preloader from "./components/Preloader";

// Pages
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

// Academy Pages
import AcademyHome from "./Pages/AcademyHome";
import Courses from "./Pages/Courses";
import Workshops from "./Pages/Workshops";
import Builds from "./Pages/Builds";
import StudentShowcase from "./Pages/StudentShowcase";

// Studio Pages
import StudioHome from "./Pages/StudioHome";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import Process from "./Pages/Process";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const location = useLocation();
  const isGateway = location.pathname === "/";
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div className="min-h-screen flex flex-col font-body bg-[#070B14]">
      <main className="flex-1 pb-40 lg:pb-32"> {/* Increased padding to clear bottom dock on mobile */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Gateway */}
            <Route path="/" element={<Home />} />
            
            {/* Global Shared Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Academy Route Group */}
            <Route path="/academy" element={<AcademyHome />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/builds" element={<Builds />} />
            <Route path="/student-showcase" element={<StudentShowcase />} />

            {/* Studio Route Group */}
            <Route path="/studio" element={<StudioHome />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/process" element={<Process />} />
          </Routes>
        </AnimatePresence>
      </main>
      {!isGateway && <DynamicBottomDock />}
      {!isGateway && <Footer />}
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}


