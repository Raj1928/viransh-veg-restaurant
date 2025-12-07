import { Leaf, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      {/* Fixed Header with Logo and Menu Button */}
      <nav className="fixed w-full top-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 cursor-pointer">
              <Leaf className="text-white drop-shadow-lg" size={28} />
              <span className="text-2xl font-bold text-white drop-shadow-lg">
                Viransh Veg
              </span>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white drop-shadow-lg"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Animated Sidebar */}
      <div
        className={`fixed right-0 top-0 h-screen w-64 bg-white z-40 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-20 px-6 space-y-6">
          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-left text-gray-700 hover:text-teal-600 py-3 text-lg font-medium transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('dishes')}
            className="block w-full text-left text-gray-700 hover:text-teal-600 py-3 text-lg font-medium transition-colors"
          >
            Dishes
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className="block w-full text-left text-gray-700 hover:text-teal-600 py-3 text-lg font-medium transition-colors"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="block w-full text-left text-gray-700 hover:text-teal-600 py-3 text-lg font-medium transition-colors"
          >
            Contact
          </button>
          <button className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium text-lg">
            Visit
          </button>
        </div>
      </div>
    </>
  );
}
