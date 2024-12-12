import { MapPin, PhoneCall } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 border-t border-muted-foreground">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Foody</h3>
            <p>Delivering happiness one meal at a time.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Restaurants
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Cuisines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Offers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="flex items-center mb-2">
              <PhoneCall className="w-4 h-4 mr-2" />
              +1 (555) 123-4567
            </p>
            <p className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              123 Food Street, Tasty City
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted-foreground text-center">
          <p>&copy; 2024 Foody. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
