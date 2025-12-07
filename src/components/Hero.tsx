import { Leaf } from 'lucide-react';
import viransh_bg from "../public/viransh_bg.webp";
import viransh_bg_2 from "../public/viransh_bg_2.webp";

const bgImages = [
  viransh_bg,
  viransh_bg_2,

  // Add more background images here
  // import image1 from "../public/image1.jpg";
  // import image2 from "../public/image2.jpg";
];

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background images with smooth crossfade */}
<div className="absolute inset-0">
  {bgImages.map((image, index) => (
    <div
      key={index}
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${image})`,
        animation: `fadeZoom 16s ease-in-out ${index * 8}s infinite`,
        opacity: index === 0 ? 1 : 0,
      }}
    />
  ))}
</div>


      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 opacity-10 ">
        <div className="absolute top-10 left-10 animate-float">
          <Leaf size={80} className="text-white transform rotate-12" />
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <Leaf size={60} className="text-white transform -rotate-45" />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-float">
          <Leaf size={100} className="text-white transform rotate-90" />
        </div>
        <div className="absolute bottom-20 right-1/3 animate-float-delayed">
          <Leaf size={70} className="text-white transform -rotate-12" />
        </div>
      </div>

<div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 animate-fade-in animate-text-float">
        <div className="flex items-center justify-center mb-6">
          <Leaf className="text-white mr-3" size={48} />
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">
            Viransh Veg
          </h1>
          <Leaf className="text-white ml-3" size={48} />
        </div>

        <p className="text-xl sm:text-2xl md:text-3xl text-white/95 font-light mb-8 tracking-wide">
          Pure Veg. Pure Taste.
        </p>

        <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Experience the finest vegetarian cuisine crafted with love, tradition, and the freshest ingredients
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
            Explore Menu
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
            Visit Us
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white/70 rounded-full"></div>
        </div>
      </div>

      <style>{`
  @keyframes fadeZoom {
    0% { opacity: 0; transform: scale(1); }
    10% { opacity: 1; }
    50% { opacity: 1; transform: scale(1.05); }
    70% { opacity: 0; transform: scale(1.05); }
    100% { opacity: 0; transform: scale(1); }
  }

  @keyframes textFloat {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-12px);
    }
  }

  .animate-text-float {
    animation: textFloat 4s ease-in-out infinite;
  }
`}</style>


    </section>
  );
}
