import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Logo />
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-securam-navy hover:text-securam-yellow transition">Home</a>
            <a href="#services" className="text-securam-navy hover:text-securam-yellow transition">Services</a>
            <a href="#about" className="text-securam-navy hover:text-securam-yellow transition">About</a>
            <a href="#contact" className="text-securam-navy hover:text-securam-yellow transition">Contact</a>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="block px-3 py-2 text-securam-navy hover:text-securam-yellow">Home</a>
            <a href="#services" className="block px-3 py-2 text-securam-navy hover:text-securam-yellow">Services</a>
            <a href="#about" className="block px-3 py-2 text-securam-navy hover:text-securam-yellow">About</a>
            <a href="#contact" className="block px-3 py-2 text-securam-navy hover:text-securam-yellow">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}