
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import Newsletter from "@/components/Newsletter";

const featuredProducts = [
  {
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    hoverImage: "https://images.unsplash.com/photo-1505740106531-4243f3831c78",
    name: "Premium Headphones",
    price: "$299",
  },
  {
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
    hoverImage: "https://images.unsplash.com/photo-1572635196184-84e35138cf02",
    name: "Classic Sunglasses",
    price: "$199",
  },
  {
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    hoverImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf31",
    name: "Smart Watch",
    price: "$399",
  },
  {
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    hoverImage: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99g",
    name: "Portable Speaker",
    price: "$159",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
        <div className="relative text-center text-white z-10">
          <h1 className="font-clash text-5xl md:text-7xl mb-6 animate-fade-up">
            Premium Quality
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Discover our collection
          </p>
          <button className="bg-white text-black px-8 py-3 text-lg hover:bg-opacity-90 transition-colors animate-fade-up" style={{ animationDelay: "0.4s" }}>
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="font-clash text-3xl md:text-4xl text-center mb-16">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 md:py-32 bg-fokus-gray">
        <div className="container mx-auto px-4">
          <h2 className="font-clash text-3xl md:text-4xl text-center mb-16">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Headphones", "Speakers", "Accessories"].map((category, index) => (
              <div key={index} className="relative aspect-square group cursor-pointer overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${index + 1}`}
                  alt={category}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <h3 className="text-white font-clash text-2xl">{category}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Index;
