
import { useState } from "react";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  hoverImage: string;
}

const ProductCard = ({ image, name, price, hoverImage }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer animate-fade-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden mb-4">
        <img
          src={isHovered ? hoverImage : image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="text-center">
        <h3 className="font-clash text-lg mb-2 text-fokus-black">{name}</h3>
        <p className="text-fokus-text">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
