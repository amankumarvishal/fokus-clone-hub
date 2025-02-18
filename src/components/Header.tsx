
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Search } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-fokus-black hover:text-fokus-text transition-colors">
              Shop
            </a>
            <a href="#" className="text-fokus-black hover:text-fokus-text transition-colors">
              Collection
            </a>
            <a href="#" className="text-fokus-black hover:text-fokus-text transition-colors">
              About
            </a>
          </nav>

          <a href="/" className="font-clash font-semibold text-xl md:text-2xl">
            INSTA ELECTRIC HUB
          </a>

          <div className="flex items-center space-x-4">
            <button className="hover:text-fokus-text transition-colors">
              <Search size={24} />
            </button>
            <button className="hover:text-fokus-text transition-colors">
              <ShoppingBag size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="container mx-auto px-4 py-8">
          <nav className="flex flex-col space-y-6 text-lg">
            <a href="#" className="text-fokus-black hover:text-fokus-text transition-colors">
              Shop
            </a>
            <a href="#" className="text-fokus-black hover:text-fokus-text transition-colors">
              Collection
            </a>
            <a href="#" className="text-fokus-black hover:text-fokus-text transition-colors">
              About
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
