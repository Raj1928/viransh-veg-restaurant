import { Camera } from 'lucide-react';

const images = [
  {
    url: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Restaurant Interior",
    span: "col-span-2 row-span-2"
  },
  {
    url: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Fresh Vegetables",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Dining Area",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Food Preparation",
    span: "col-span-1 row-span-2"
  },
  {
    url: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Restaurant Ambience",
    span: "col-span-2 row-span-1"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center mb-4">
            <Camera className="text-green-600 mr-2" size={32} />
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
              Our Ambience
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Step into our warm, welcoming space designed for memorable dining experiences
          </p>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${image.span} group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 via-green-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span className="text-white font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
