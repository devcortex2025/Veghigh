import { Phone, Mail, MapPin, Clock, MessageCircle, Star, MoreVertical } from "lucide-react";
import sunriseIcon from "../assets/sunrise.png";
import eveningIcon from "../assets/evening-icon-20.jpg";

const Contact = () => {
  return (
    <section className="relative py-12 md:py-24 bg-gradient-to-br from-background via-green-50/30 to-orange-50/20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-fresh-green/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-fresh-orange/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-300/20 rounded-2xl animate-bounce delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-fresh-green/20 to-fresh-orange/20 px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6">
            <MessageCircle className="w-4 md:w-5 h-4 md:h-5 text-fresh-green" />
            <span className="text-xs md:text-sm font-medium text-fresh-green">Contact Us</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 md:mb-6 leading-tight">
            Get In Touch
          </h2>
          <p className="text-base md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            Ready to order fresh vegetables? Contact us today and experience the finest quality organic produce delivered right to your doorstep.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
          {/* Left Column - Contact Details */}
          <div className="space-y-4 md:space-y-6">
            {/* Phone Section */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/50 min-h-[120px] md:h-48 flex flex-col justify-center">
              <div className="flex items-start gap-3 md:gap-6">
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-[#424337] text-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Phone className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-2xl font-bold text-primary mb-2 md:mb-3">Phone & WhatsApp</h3>
                  <div className="space-y-1 md:space-y-2">
                    <p className="text-sm md:text-lg text-black flex items-center gap-2">
                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full"></span>
                      Order Hotline: <span className="font-semibold text-black">+91 9116538056</span>
                    </p>
                    <p className="text-sm md:text-lg text-black flex items-center gap-2">
                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full"></span>
                      WhatsApp: <span className="font-semibold text-black">+91 9116538056</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Section */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/50 min-h-[120px] md:h-48 flex flex-col justify-center">
              <div className="flex items-start gap-3 md:gap-6">
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-[#424337] text-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Mail className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-2xl font-bold text-primary mb-2 md:mb-3">Email</h3>
                  <div className="space-y-1 md:space-y-2">
                   
                    <p className="text-sm md:text-lg text-black flex items-center gap-2">
                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full"></span>
                      <span className="font-semibold text-black">info@veghigh.in</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Service Info */}
          <div className="space-y-4 md:space-y-6">
            {/* Service Area Section */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/50 min-h-[120px] md:h-48 flex flex-col justify-center">
              <div className="flex items-start gap-3 md:gap-6">
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-[#424337] text-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <MapPin className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-2xl font-bold text-primary mb-2 md:mb-3">Service Area</h3>
                  <div className="space-y-1 md:space-y-2">
                    <p className="text-sm md:text-lg text-black flex items-center gap-2">
                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full"></span>
                      <span className="font-semibold text-black">Alwar, Rajasthan </span>
                    </p>
                    <p className="text-sm md:text-lg text-black flex items-center gap-2">
                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full"></span>
                      <span className="font-semibold text-black">Pin Code 301001 & 301002</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Hours Section */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/50 min-h-[120px] md:h-48 flex flex-col justify-center">
              <div className="flex items-start gap-3 md:gap-6">
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-[#424337] text-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Clock className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-2xl font-bold text-primary mb-2 md:mb-3">Delivery Hours</h3>
                  <div className="space-y-2 md:space-y-3">
                    <div>
                      <p className="text-xs md:text-sm font-semibold text-black mb-1 flex items-center gap-2">
                        <img src={sunriseIcon} alt="Morning" className="w-5 h-5 md:w-6 md:h-6" />
                        Morning Slots: 7 - 10 AM
                      </p>
                    </div>
                    <div>
                      <p className="text-xs md:text-sm font-semibold text-black mb-1 flex items-center gap-2">
                        <img src={eveningIcon} alt="Evening" className="w-5 h-5 md:w-6 md:h-6" />
                        Evening Slots: 5 - 8 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-12 md:mt-16">
          <div className="bg-gradient-to-r from-fresh-green/10 via-green-100/20 to-fresh-orange/10 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 border border-white/50">
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
              <Star className="w-5 h-5 md:w-6 md:h-6 text-fresh-orange fill-current" />
              <h3 className="text-lg md:text-2xl font-bold text-primary">Why Choose VegHigh?</h3>
              <Star className="w-5 h-5 md:w-6 md:h-6 text-fresh-orange fill-current" />
            </div>
            <p className="text-base md:text-lg text-black max-w-3xl mx-auto mb-4 md:mb-6 px-2">
              Farm-fresh vegetables, competitive prices, and reliable delivery service. 
              We're committed to bringing the best quality produce directly from farms to your table.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-xs md:text-sm text-black">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full"></span>
                Fresh Daily
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full"></span>
                Best Prices
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full"></span>
                Fast Delivery
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full"></span>
                Quality Assured
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;