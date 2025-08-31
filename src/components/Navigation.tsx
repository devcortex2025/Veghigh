import { Facebook, Instagram, Twitter, Youtube, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logoImage from "../assets/veghigh.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Reset menu state when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Scroll progress only
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Calculate scroll progress (0 to 100)
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScrollY / scrollHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll to section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // If already on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white via-green-50 to-emerald-50 backdrop-blur-md border-b-2 border-green-200 shadow-lg">
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-200">
        <div 
          className="h-full bg-gradient-to-r from-fresh-green via-green-500 to-fresh-orange transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => {
                navigate('/');
                // Scroll to top after navigation
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              }}
              className="hover:opacity-80 transition-opacity duration-200 p-2 -m-2 touch-manipulation"
              aria-label="Go to Home"
            >
              <img 
                src={logoImage} 
                alt="VegHigh Logo" 
                className="h-10 w-auto"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-fresh-green transition-colors duration-200 font-medium"
            >
              Home
            </button>
            
            <button
              onClick={() => scrollToSection("products")}
              className="text-gray-700 hover:text-fresh-green transition-colors duration-200 font-medium"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-fresh-green transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-fresh-green transition-colors duration-200 font-medium"
            >
              Contact
            </button>
            <button
              onClick={() => {
                navigate('/order-process');
              }}
              className="text-gray-700 hover:text-fresh-green transition-colors duration-200 font-medium"
            >
              Order Process
            </button>
            <button
              onClick={() => {
                navigate('/news');
              }}
              className="text-gray-700 hover:text-fresh-green transition-colors duration-200 font-medium"
            >
              News
            </button>
            <button
              onClick={() => {
                navigate('/our-team');
              }}
              className="text-gray-700 hover:text-fresh-green transition-colors duration-200 font-medium"
            >
              Our Team
            </button>
            <button
              onClick={() => {
                navigate('/faq');
              }}
              className="text-gray-700 hover:text-fresh-green transition-colors duration-200 font-medium"
            >
              FAQ
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.facebook.com/share/1NfKJQ26AK/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 p-2 rounded-full hover:bg-blue-50"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/veghigh_official/profilecard/?igsh=d3h2Z2hmMHZkempy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600 transition-colors duration-200 p-2 rounded-full hover:bg-pink-50"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/veg_high?t=vH8S939OlY9_Qt_wOPczIA&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-400 transition-colors duration-200 p-2 rounded-full hover:bg-blue-50"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com/@veghigh?si=wk7B5Lt1nNceMVU_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-600 transition-colors duration-200 p-2 rounded-full hover:bg-red-50"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-fresh-green transition-colors duration-200 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-fresh-green transition-colors duration-200 font-medium text-left py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-fresh-green transition-colors duration-200 font-medium text-left py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-gray-700 hover:text-fresh-green transition-colors duration-200 font-medium text-left py-2"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-fresh-green transition-colors duration-200 font-medium text-left py-2"
              >
                Contact
              </button>
              <button
                onClick={() => {
                  navigate('/order-process');
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-fresh-green transition-colors duration-200 font-medium text-left py-2"
              >
                Order Process
              </button>
              <button
                onClick={() => {
                  navigate('/news');
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-fresh-green transition-colors duration-200 font-medium text-left py-2"
              >
                News
              </button>
              <button
                onClick={() => {
                  navigate('/our-team');
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-fresh-green transition-colors duration-200 font-medium text-left py-2"
              >
                Our Team
              </button>
              <button
                onClick={() => {
                  navigate('/faq');
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-fresh-green transition-colors duration-200 font-medium text-left py-2"
              >
                FAQ
              </button>
              
              {/* Mobile Social Media */}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <a
                  href="https://www.facebook.com/share/1NfKJQ26AK/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 p-2 rounded-full hover:bg-blue-50"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/veghigh_official/profilecard/?igsh=d3h2Z2hmMHZkempy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-600 transition-colors duration-200 p-2 rounded-full hover:bg-pink-50"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/veg_high?t=vH8S939OlY9_Qt_wOPczIA&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-400 transition-colors duration-200 p-2 rounded-full hover:bg-blue-50"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com/@veghigh?si=wk7B5Lt1nNceMVU_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition-colors duration-200 p-2 rounded-full hover:bg-red-50"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 