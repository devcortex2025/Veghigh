import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-8 h-8" />
              <h3 className="text-2xl font-bold">VegHigh</h3>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Your trusted partner for fresh, organic vegetables delivered directly 
              from farms to your doorstep. Supporting sustainable agriculture and 
              healthy living.
            </p>
            <div className="flex gap-4">
              <div className="bg-primary-foreground/10 rounded-lg p-3">
                <span className="text-sm font-medium">100% Organic</span>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-3">
                <span className="text-sm font-medium">Farm Fresh</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#about" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#vegetables" className="hover:text-primary-foreground transition-colors">Our Vegetables</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Delivery Areas</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>📞 +91 7023638056</p>
              <p>✉️ info@veghigh.in</p>
              <p>📍 Alwar 301001 & 301002</p>
              <p>🕒 Morning & Evening Slots</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2025 Devcortex. All rights reserved. | Bringing fresh vegetables from farms to your table.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;