import { Truck, Leaf, Heart, Clock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Farm Fresh",
      description: "Vegetables harvested directly from organic farms, ensuring maximum freshness and nutritional value."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Direct Delivery",
      description: "We eliminate the middleman and deliver straight from farms to your house, maintaining quality and reducing costs."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Organic Quality",
      description: "All our vegetables are grown using sustainable farming practices without harmful pesticides or chemicals."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Delivery within 12 Hours",
      description: "Order anytime and get your fresh vegetables delivered within 12 hours, maintaining peak freshness."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About VegHigh
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing the way you get fresh vegetables. By connecting you directly 
            with local farms, we ensure you receive the highest quality produce while supporting 
            sustainable agriculture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-4 md:p-6 rounded-2xl bg-gradient-card shadow-card hover:shadow-fresh transition-all duration-300 transform hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary/10 text-primary rounded-full mb-3 md:mb-4">
                {feature.icon}
              </div>
              <h3 className="text-base md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                {feature.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-card rounded-3xl p-8 md:p-12 shadow-card">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-6">
                Why Choose VegHigh?
              </h3>
              <ul className="space-y-4 text-lg text-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <span>Direct partnerships with local organic farms</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <span>No preservatives or artificial treatments</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <span>Competitive prices by cutting out middlemen</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <span>Reliable delivery service across the city</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  <span>Supporting sustainable farming practices</span>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-right">
              <div className="inline-block bg-primary/5 rounded-3xl p-8">
                <h4 className="text-4xl font-bold text-primary mb-2">24/7</h4>
                <p className="text-lg text-muted-foreground mb-4">Order Anytime</p>
                <h4 className="text-4xl font-bold text-accent mb-2">100%</h4>
                <p className="text-lg text-muted-foreground">Fresh Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;