import { Button } from "@/components/ui/button";
import logoImage from "@/assets/veghigh.png";
import heroImage from "@/assets/hero-vegetables.jpg";
import ComingSoon from "./ComingSoon";
import { useState } from "react";

const Hero = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <section className="relative min-h-[80vh] sm:h-[85vh] md:h-[90vh] lg:h-[95vh] xl:h-[75vh] flex items-center justify-center overflow-hidden bg-solid-white py-4 sm:py-6 md:py-8 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 md:pb-16">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Fresh organic vegetables from VegHigh"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center min-h-full">
        <div className="mb-6 sm:mb-8 md:mb-9">
          <img 
            src={logoImage} 
            alt="VegHigh Logo" 
            className="h-12 sm:h-16 md:h-20 lg:h-28 xl:h-32 mx-auto"
          />
        </div>
        <div className="relative mb-6 sm:mb-8 max-w-4xl mx-auto">
          {/* Creative geometric background */}
          <div className="absolute inset-0 bg-gradient-to-br from-fresh-green/20 via-white/95 to-fresh-orange/20 rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2rem] shadow-xl sm:shadow-2xl overflow-hidden">
            {/* Animated geometric shapes - responsive sizes */}
            <div className="absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-fresh-green/30 to-transparent rounded-full blur-lg sm:blur-xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-tl from-fresh-orange/30 to-transparent rounded-full blur-lg sm:blur-xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-r from-fresh-green/20 to-fresh-orange/20 rounded-full blur-md sm:blur-lg animate-bounce delay-500"></div>
            <div className="absolute top-1/4 right-1/4 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-gradient-to-l from-fresh-orange/20 to-fresh-green/20 rounded-full blur-md sm:blur-lg animate-bounce delay-700"></div>
          </div>
          
          {/* Main content container with glass effect */}
          <div className="relative bg-white/80 backdrop-blur-xl rounded-[1rem] sm:rounded-[1.5rem] md:rounded-[2rem] p-4 sm:p-6 md:p-8 lg:p-10 shadow-xl sm:shadow-2xl border border-white/50">
            {/* Top decorative elements */}
            <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-fresh-green rounded-full animate-ping"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-fresh-orange rounded-full animate-ping delay-300"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-fresh-green rounded-full animate-ping delay-700"></div>
            </div>
            
            {/* Content with enhanced responsive styling */}
            <div className="text-center relative z-10">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-4 sm:mb-5 md:mb-6 leading-relaxed font-bold drop-shadow-lg">
                <span className="bg-gradient-to-r from-fresh-green via-green-500 to-fresh-orange bg-clip-text text-transparent">
                  Fresh vegetables delivered directly from farms to your doorstep
                </span>
              </p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 leading-relaxed font-medium drop-shadow-sm px-2 sm:px-0">
                Experience the finest quality organic vegetables, harvested fresh and delivered with care. 
                Skip the middleman and get farm-fresh produce at unbeatable prices.
              </p>
            </div>
            
            {/* Bottom decorative elements */}
            <div className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-fresh-orange rounded-full animate-ping delay-500"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-fresh-green rounded-full animate-ping delay-1000"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-fresh-orange rounded-full animate-ping delay-1500"></div>
            </div>
          </div>
          
          {/* Corner accents - responsive sizes */}
          <div className="absolute -top-0.5 sm:-top-1 -left-0.5 sm:-left-1 w-4 h-4 sm:w-6 sm:h-6 border-l-2 border-t-2 border-fresh-green rounded-tl-lg"></div>
          <div className="absolute -top-0.5 sm:-top-1 -right-0.5 sm:-right-1 w-4 h-4 sm:w-6 sm:h-6 border-r-2 border-t-2 border-fresh-orange rounded-tr-lg"></div>
          <div className="absolute -bottom-0.5 sm:-bottom-1 -left-0.5 sm:-left-1 w-4 h-4 sm:w-6 sm:h-6 border-l-2 border-b-2 border-fresh-orange rounded-bl-lg"></div>
          <div className="absolute -bottom-0.5 sm:-bottom-1 -right-0.5 sm:-right-1 w-4 h-4 sm:w-6 sm:h-6 border-r-2 border-b-2 border-fresh-green rounded-br-lg"></div>
        </div>
        
        {/* Buttons section - positioned to always be visible */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-6 sm:mt-8 lg:mt-12 w-full max-w-2xl">
          <Button 
            size="lg" 
            className="bg-fresh-green hover:bg-fresh-green-light text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full transition-all duration-300 w-full sm:w-auto min-w-[200px]"
            onClick={() => window.open("https://wa.me/message/HXMIDPL4XYVBJ1?text=Hi! I want to order fresh vegetables from VegHigh", "_blank")}
          >
            Order on WhatsApp
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-fresh-orange text-fresh-orange hover:bg-fresh-orange hover:text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full transition-all duration-300 w-full sm:w-auto min-w-[200px]"
            onClick={() => setShowComingSoon(true)}
          >
            Download Mobile App
          </Button>
        </div>
      </div>
      
      {/* Coming Soon Modal */}
      {showComingSoon && (
        <ComingSoon onClose={() => setShowComingSoon(false)} />
      )}
    </section>
  );
};

export default Hero;