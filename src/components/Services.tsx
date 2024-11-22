import { Camera, Key, Navigation, Shield, Bell, Eye } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Camera className="h-12 w-12 text-securam-yellow" />,
      title: "CCTV Installation",
      description: "Professional installation of high-definition security cameras with night vision and remote viewing capabilities."
    },
    {
      icon: <Eye className="h-12 w-12 text-securam-yellow" />,
      title: "Video Monitoring",
      description: "24/7 video surveillance with motion detection and instant alerts to your mobile device."
    },
    {
      icon: <Key className="h-12 w-12 text-securam-yellow" />,
      title: "Access Control",
      description: "Biometric and card-based access systems for secure entry management."
    },
    {
      icon: <Shield className="h-12 w-12 text-securam-yellow" />,
      title: "Door Security",
      description: "Electronic door locks and integrated security systems for controlled access."
    },
    {
      icon: <Navigation className="h-12 w-12 text-securam-yellow" />,
      title: "Vehicle Tracking",
      description: "GPS-based fleet tracking with real-time location updates and route optimization."
    },
    {
      icon: <Bell className="h-12 w-12 text-securam-yellow" />,
      title: "Alert Systems",
      description: "Instant notifications for vehicle status, maintenance needs, and security breaches."
    }
  ];

  return (
    <div id="services" className="bg-gray-50 pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-securam-navy">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive security and tracking solutions for your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-securam-navy">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}