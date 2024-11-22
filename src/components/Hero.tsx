import { Camera, Key, Navigation } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative bg-gradient-to-br from-securam-navy to-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Advanced Security Solutions for Your Peace of Mind
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Securam provides cutting-edge CCTV systems, access control solutions, and vehicle tracking 
              technology to keep your assets safe and secure.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-securam-yellow text-securam-navy font-semibold rounded-lg hover:bg-opacity-90 transition">
                Get a Quote
              </button>
              <button className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition">
                View Services
              </button>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1557597774-9d475d5e8142?auto=format&fit=crop&q=80&w=800"
              alt="Security Camera System"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mb-32">
        <div className="grid md:grid-cols-3 gap-8 relative -mt-8">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <Camera className="h-12 w-12 text-securam-yellow mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-securam-navy">CCTV Systems</h3>
            <p className="text-gray-600">High-definition surveillance cameras with advanced monitoring capabilities.</p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <Key className="h-12 w-12 text-securam-yellow mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-securam-navy">Access Control</h3>
            <p className="text-gray-600">Smart access management systems for enhanced security.</p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <Navigation className="h-12 w-12 text-securam-yellow mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-securam-navy">Vehicle Tracking</h3>
            <p className="text-gray-600">Real-time fleet monitoring and management solutions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}