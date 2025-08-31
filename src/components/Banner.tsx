import { X } from "lucide-react";
import { useState, useEffect } from "react";
import bannerImage from "../assets/banner-image.png";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show banner after a short delay for better UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative max-w-4xl w-full flex flex-col items-center py-6">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 w-10 h-10 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Banner Image Container */}
        <div className="w-full flex justify-center mb-4">
          <img 
            src={bannerImage} 
            alt="VegHigh Fresh Vegetables - Save Up To 50%"
            className="w-full max-w-xl h-auto object-contain rounded-xl shadow-xl"
          />
        </div>
        
        {/* Call to Action Section - Below Image */}
        <div className="w-full max-w-xl">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            <h3 className="text-xl font-bold text-primary mb-2 text-center">
              Fresh & Healthy Vegetables
            </h3>
            <p className="text-base text-gray-700 text-center mb-3">
              Save up to 50% on farm-fresh vegetables delivered to your doorstep
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <a
                href="https://wa.me/919116538056?text=Hi! I want to order fresh vegetables from VegHigh"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-fresh-green hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 text-center text-sm"
              >
                Order Now
              </a>
              <button
                onClick={handleClose}
                className="border-2 border-fresh-orange text-fresh-orange hover:bg-fresh-orange hover:text-white font-semibold px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 text-sm"
              >
                Continue to Site
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner; 