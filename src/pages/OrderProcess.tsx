import { ShoppingCart, Phone, Clock, Truck, CheckCircle, Star } from "lucide-react";

const OrderProcess = () => {
  const steps = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Contact Us",
      description: "Call us at +91 9116538056 or send a WhatsApp message to place your order.",
      details: "You can reach us anytime - we're available 24/7 to take your orders."
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Place Your Order",
      description: "Tell us what vegetables you need and specify your preferred delivery time slot.",
      details: "Choose from our wide selection of fresh, organic vegetables available daily."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Confirm Order",
      description: "We'll confirm your order details, pricing, and delivery time slot.",
      details: "Get instant confirmation via WhatsApp with all order details."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Fresh Delivery",
      description: "Your vegetables are harvested fresh and delivered within 12 hours.",
      details: "We ensure peak freshness by harvesting only after order confirmation."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality Check",
      description: "Inspect your vegetables upon delivery and ensure satisfaction.",
      details: "We guarantee 100% fresh vegetables or your money back."
    }
  ];

  const benefits = [
    "No minimum order quantity",
    "Fresh vegetables harvested daily",
    "Competitive prices",
    "Flexible delivery time slots",
    "Quality guarantee",
    "Direct farm-to-door delivery"
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20 bg-gradient-to-br from-background via-green-50/30 to-orange-50/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-fresh-green/20 to-fresh-orange/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
            <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-fresh-green" />
            <span className="text-xs sm:text-sm font-medium text-fresh-green">Order Process</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
            How to Order
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2">
            Ordering fresh vegetables from VegHigh is simple and convenient. 
            Follow these easy steps to get farm-fresh produce delivered to your doorstep.
          </p>
        </div>

        {/* Order Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/50"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-fresh-green to-green-500 text-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                  {step.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-fresh-green">#{index + 1}</div>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-3 sm:mb-4">{step.title}</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-2 sm:mb-3 leading-relaxed">{step.description}</p>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{step.details}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-fresh-green/10 via-green-100/20 to-fresh-orange/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/50 mb-8 sm:mb-12 md:mb-16">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3 sm:mb-4">Why Choose Our Order Process?</h2>
            <p className="text-base sm:text-lg text-gray-700">Experience the easiest way to get fresh vegetables</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-fresh-green fill-current" />
                <span className="text-sm sm:text-base text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg border border-white/50">
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">Ready to Order?</h3>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
              Start your journey to fresh, organic vegetables today!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="https://wa.me/message/HXMIDPL4XYVBJ1?text=Hi! I want to order fresh vegetables from VegHigh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-fresh-green hover:bg-green-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Order on WhatsApp
              </a>
              <a
                href="tel:+917023638056"
                className="inline-flex items-center justify-center gap-2 border-2 border-fresh-orange text-fresh-orange hover:bg-fresh-orange hover:text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProcess; 