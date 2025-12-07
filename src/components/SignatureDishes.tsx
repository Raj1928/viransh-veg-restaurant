import { Sparkles } from 'lucide-react';

const dishes = [
  {
    name: "Paneer Tikka Masala",
    description: "Cottage cheese in rich, creamy tomato gravy with aromatic spices",
    image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "Chef's Special"
  },
  {
    name: "Dal Makhani",
    description: "Slow-cooked black lentils in butter and cream, pure comfort in a bowl",
    image: "https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "Bestseller"
  },
  {
    name: "Veg Biryani",
    description: "Fragrant basmati rice layered with fresh vegetables and exotic spices",
    image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "Signature"
  },
  {
    name: "Palak Paneer",
    description: "Fresh spinach curry with soft cottage cheese cubes, healthy & delicious",
    image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "Healthy Choice"
  },
  {
    name: "Chole Bhature",
    description: "Spiced chickpea curry paired with fluffy, golden fried bread",
    image: "https://images.pexels.com/photos/14477881/pexels-photo-14477881.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "Traditional"
  },
  {
    name: "Masala Dosa",
    description: "Crispy South Indian crepe filled with spiced potato, served with chutney",
    image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800",
    tag: "Classic"
  }
];

export default function SignatureDishes() {
  return (
    <section id="dishes" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="text-green-600 mr-2" size={32} />
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
              Signature Dishes
            </h2>
            <Sparkles className="text-green-600 ml-2" size={32} />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most beloved creations, crafted to perfection
          </p>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  {dish.tag}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors duration-300">
                  {dish.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}
