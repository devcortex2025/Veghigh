import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ComingSoonProps {
  onClose: () => void;
}

const ComingSoon = ({ onClose }: ComingSoonProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription logic here
    alert("Thank you! We'll notify you when the app launches.");
    setEmail("");
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto my-4">
        {/* Animated background shapes */}
        <div className="absolute inset-0 bg-gradient-to-br from-fresh-green/20 via-white/95 to-fresh-orange/20 rounded-xl sm:rounded-2xl md:rounded-[2rem] shadow-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-fresh-green/30 to-transparent rounded-full blur-lg sm:blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-tl from-fresh-orange/30 to-transparent rounded-full blur-lg sm:blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-r from-fresh-green/20 to-fresh-orange/20 rounded-full blur-md sm:blur-lg animate-bounce delay-500"></div>
        </div>

        {/* Main content container */}
        <div className="relative bg-white/90 backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-[2rem] p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl border border-white/50 text-center">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* App icon placeholder */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-fresh-green to-fresh-orange rounded-2xl sm:rounded-3xl mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>

          {/* Main heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-fresh-green to-fresh-orange bg-clip-text text-transparent">
            Coming Soon!
          </h2>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-4 sm:mb-6 font-semibold">
            Our Mobile App is in Development
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-lg mx-auto">
            We're working hard to bring you the ultimate VegHigh experience on your mobile device. 
            Get ready for seamless ordering, real-time tracking, and exclusive mobile-only features!
          </p>

          {/* Features list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-md mx-auto">
            <div className="flex items-center space-x-2 sm:space-x-3 text-left">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-fresh-green rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm sm:text-base text-gray-700">Push Notifications</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 text-left">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-fresh-green rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm sm:text-base text-gray-700">Real-time Tracking</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 text-left">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-fresh-green rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm sm:text-base text-gray-700">Easy Reordering</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 text-left">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-fresh-green rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm sm:text-base text-gray-700">Exclusive Deals</span>
            </div>
          </div>

          {/* Email subscription form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Get notified when we launch:</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fresh-green focus:border-transparent text-sm sm:text-base"
                required
              />
              <Button
                type="submit"
                className="bg-fresh-green hover:bg-fresh-green-light text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base"
              >
                Notify Me
              </Button>
            </div>
          </form>

          {/* Progress bar */}
          <div className="mt-6 sm:mt-8 max-w-md mx-auto">
            <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-2">
              <span>Development Progress</span>
              <span>75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
              <div className="bg-gradient-to-r from-fresh-green to-fresh-orange h-2 sm:h-3 rounded-full animate-pulse" style={{ width: '75%' }}></div>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-fresh-green rounded-full animate-ping"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-fresh-orange rounded-full animate-ping delay-300"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-fresh-green rounded-full animate-ping delay-700"></div>
          </div>
        </div>

        {/* Corner accents */}
        <div className="absolute -top-0.5 sm:-top-1 -left-0.5 sm:-left-1 w-4 h-4 sm:w-6 sm:h-6 border-l-2 border-t-2 border-fresh-green rounded-tl-lg"></div>
        <div className="absolute -top-0.5 sm:-top-1 -right-0.5 sm:-right-1 w-4 h-4 sm:w-6 sm:h-6 border-r-2 border-t-2 border-fresh-orange rounded-tr-lg"></div>
        <div className="absolute -bottom-0.5 sm:-bottom-1 -left-0.5 sm:-left-1 w-4 h-4 sm:w-6 sm:h-6 border-l-2 border-b-2 border-fresh-orange rounded-bl-lg"></div>
        <div className="absolute -bottom-0.5 sm:-bottom-1 -right-0.5 sm:-right-1 w-4 h-4 sm:w-6 sm:h-6 border-r-2 border-b-2 border-fresh-green rounded-br-lg"></div>
      </div>
    </div>
  );
};

export default ComingSoon; 