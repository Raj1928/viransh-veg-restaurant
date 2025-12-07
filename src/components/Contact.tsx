import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Visit Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to serve you! Drop by or get in touch
          </p>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in-left">
            <div className="flex items-start space-x-4 group">
              <div className="bg-green-100 p-4 rounded-2xl group-hover:bg-green-200 transition-colors duration-300">
                <MapPin className="text-green-600" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Address</h3>
                <p className="text-gray-600 leading-relaxed">
                  123 Green Street, Vegetarian Plaza<br />
                  Food District, City 456789
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="bg-green-100 p-4 rounded-2xl group-hover:bg-green-200 transition-colors duration-300">
                <Phone className="text-green-600" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
                <p className="text-gray-600">+91 98765 43210</p>
                <p className="text-gray-600">+91 98765 43211</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="bg-green-100 p-4 rounded-2xl group-hover:bg-green-200 transition-colors duration-300">
                <Mail className="text-green-600" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600">hello@viranshveg.com</p>
                <p className="text-gray-600">reservations@viranshveg.com</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 animate-fade-in-right">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Opening Hours</h3>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="font-semibold text-gray-700">Monday - Friday</span>
                <span className="text-gray-600">11:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="font-semibold text-gray-700">Saturday - Sunday</span>
                <span className="text-gray-600">10:00 AM - 11:00 PM</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-6">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-green-100 p-4 rounded-full hover:bg-green-600 hover:text-white text-green-600 transition-all duration-300 transform hover:scale-110"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="bg-green-100 p-4 rounded-full hover:bg-green-600 hover:text-white text-green-600 transition-all duration-300 transform hover:scale-110"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="bg-green-100 p-4 rounded-full hover:bg-green-600 hover:text-white text-green-600 transition-all duration-300 transform hover:scale-110"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
