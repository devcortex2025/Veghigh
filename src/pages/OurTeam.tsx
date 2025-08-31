import { useState, useEffect } from "react";
import { Users, Award, Heart, Leaf, Truck, Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react";

const OurTeam = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const farmImages = [
    "/src/assets/img1.jpg",
    "/src/assets/img3.jpg",
    "/src/assets/img4.jpg",
    "/src/assets/img5.png"
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % farmImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [farmImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % farmImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + farmImages.length) % farmImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  const teamMembers = [
    {
      name: "Dinesh Foujdar",
      role: "Founder & CEO",
      description: "Dinesh Foujdar, a Postgraduate from IIT Jodhpur, founded this venture with the vision of delivering fresh, healthy, and affordable vegetables to every household.",
      expertise: ["Business Strategy", "Sustainable Farming", "Customer Relations"],
      contact: "+91 7023628056",
      email: "Veghigh001@gmail.com"
    },
    {
      name: "Manoj Jat",
      role: "Operations Head",
      description: "Manoj Jat leads the operations and logistics of the venture, ensuring that vegetables travel from farms to customers' homes in the freshest condition possible.",
      expertise: ["Operations Management", "Logistics", "Quality Control"],
      contact: "+91 8302XXXXXX",
      email: "info@veghigh.in"
    },
    {
      name: "Mohit Jat",
      role: "Marketing Manager",
      description: "As the Marketing Manager, Mohit Jat is the creative force behind spreading the brand's message of healthy and organic living.",
      expertise: ["Digital Marketing", "Brand Strategy", "Customer Engagement"],
      contact: "+91 7310XXXXXX",
      email: "info@veghigh.in"
    }
  ];

  const values = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainability",
      description: "We're committed to sustainable farming practices that protect our environment and ensure long-term food security."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Quality First",
      description: "Every vegetable we deliver meets our strict quality standards for freshness, nutrition, and safety."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Focus",
      description: "We believe in building strong relationships with our customers, farmers, and local communities."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Reliability",
      description: "We deliver on our promises, ensuring your vegetables arrive fresh and on time, every time."
    }
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20 bg-gradient-to-br from-background via-green-50/30 to-orange-50/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-fresh-green/20 to-fresh-orange/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-fresh-green" />
            <span className="text-xs sm:text-sm font-medium text-fresh-green">Meet Our Team</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
            The VegHigh Team
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2">
            Meet the passionate individuals behind VegHigh who work tirelessly to bring you 
            the freshest, highest quality organic vegetables every day.
          </p>
        </div>

        {/* Farm Partners Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our Farm Partners</h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Discover the beautiful farms and dedicated farmers who work with us to bring you 
              the freshest, highest quality vegetables every day.
            </p>
          </div>

          {/* Image Slider */}
          <div className="mb-12">
            <div className="relative max-w-3xl mx-auto">
              {/* Slides */}
              <div className="relative h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                {farmImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Farm partner ${index + 1}`}
                      className="w-full h-full object-contain bg-green-50"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        // Fallback to a placeholder
                        const placeholder = document.createElement('div');
                        placeholder.className = 'w-full h-full bg-gradient-to-br from-green-100 to-orange-100 flex items-center justify-center';
                        placeholder.innerHTML = `
                          <div class="text-center">
                            <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-fresh-green to-fresh-orange rounded-full flex items-center justify-center">
                              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <p class="text-gray-600 font-medium">Farm Image ${index + 1}</p>
                          </div>
                        `;
                        target.parentElement?.appendChild(placeholder);
                      }}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {farmImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-white scale-125"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Our Leadership Team</h2>
            <p className="text-lg sm:text-xl text-gray-700">Meet the passionate individuals leading VegHigh's mission</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/50 text-center"
              >
                                
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">{member.name}</h3>
                <p className="text-base sm:text-lg text-fresh-green font-semibold mb-4">{member.role}</p>
                <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">{member.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-600 mb-3">Expertise:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-fresh-green/10 text-fresh-green text-xs sm:text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>{member.contact}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>{member.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3 sm:mb-4">Our Values</h2>
            <p className="text-lg sm:text-xl text-gray-700">The principles that guide everything we do at VegHigh</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/50"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-fresh-green to-green-500 text-white rounded-xl sm:rounded-2xl mb-3 sm:mb-4 shadow-lg">
                  {value.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Join Our Team */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-fresh-green/10 via-green-100/20 to-fresh-orange/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/50">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-3 sm:mb-4">Join Our Mission</h3>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 max-w-2xl mx-auto">
              We're always looking for passionate individuals who share our vision of bringing fresh, 
              organic vegetables to every household. If you're interested in joining our team, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="mailto:info@veghigh.in"
                className="inline-flex items-center justify-center gap-2 bg-fresh-green hover:bg-green-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                Send us an Email
              </a>
              <a
                href="https://wa.me/message/HXMIDPL4XYVBJ1?text=Hi! I'm interested in joining the VegHigh team"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-fresh-orange text-fresh-orange hover:bg-fresh-orange hover:text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam; 