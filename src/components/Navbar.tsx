import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 glass">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo using a standard <img> tag */}
          <div className="flex items-center">
            <img
              src="/localcarstorelogo.png"
              alt="Local Car Store Logo"
              className="h-12 w-auto" // Adjust size as needed
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {["About", "Features", "Team", "Testimonials", "Pricing", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Call to Action Button */}
          <Button className="bg-white text-black hover:bg-gray-200 text-sm sm:text-base px-4 sm:px-6">
            Go To APP
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
