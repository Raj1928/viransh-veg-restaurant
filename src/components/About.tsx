import { Heart, Sprout, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-left">
            <p className="text-lg text-gray-700 leading-relaxed">
              At <span className="font-semibold text-green-600">Viransh Veg</span>, we believe that vegetarian food is not just a choice—it's a celebration of nature's bounty, tradition, and wholesome living.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Founded with a passion for authentic vegetarian cuisine, we source only the freshest ingredients from local farms, ensuring every dish is packed with flavor, nutrition, and love.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Our kitchen is a sanctuary of purity where traditional recipes meet modern culinary techniques, creating an unforgettable dining experience for families, friends, and food lovers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 animate-fade-in-right">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Heart className="text-green-600 mb-3" size={40} />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Made with Love</h3>
              <p className="text-gray-600">Every dish is prepared with care, passion, and attention to detail</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Sprout className="text-green-600 mb-3" size={40} />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Farm Fresh</h3>
              <p className="text-gray-600">Sourced directly from trusted local farms for ultimate freshness</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Award className="text-green-600 mb-3" size={40} />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality First</h3>
              <p className="text-gray-600">Uncompromising standards in every ingredient and preparation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
