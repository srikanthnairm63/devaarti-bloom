import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/devaarti-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="DevAArti Logo" 
                className="h-12 w-12 rounded-full object-cover border-2 border-primary"
              />
              <div>
                <h3 className="text-lg font-serif font-bold">DevAArti</h3>
                <p className="text-xs opacity-80">Agarbatti</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Where Devotion Meets Divine Fragrance. Crafted to elevate your spiritual moments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About Us", "Products", "Gallery", "Testimonials", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-").replace("-us", "")}`}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-primary">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm opacity-80">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>India</span>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-80">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-80">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span>info@devaarti.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-primary">Business Hours</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="flex justify-between">
                <span>Mon - Sat:</span>
                <span>9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>10:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-60">
              © {new Date().getFullYear()} DevAArti Agarbatti. All rights reserved.
            </p>
            <p className="text-sm opacity-60">
              Made with devotion in India 🙏
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
