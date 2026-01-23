import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import product images
import roseImg from "@/assets/product-rose.jpeg";
import jasmineImg from "@/assets/product-jasmine.jpeg";
import lavenderImg from "@/assets/product-lavender.jpeg";
import pineappleImg from "@/assets/product-jasmine.jpeg";

// Map image URLs to actual imports
const imageMap: Record<string, string> = {
  "/assets/product-rose.jpeg": roseImg,
  "/assets/product-jasmine.jpeg": jasmineImg,
  "/assets/product-lavender.jpeg": lavenderImg,
  "/assets/product-pineapple.jpeg": pineappleImg,
};

export interface Product {
  id: string;
  name: string;
  fragrance: string;
  price: number;
  description: string;
  image_url: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  // Get actual image source
  const imageSrc = imageMap[product.image_url] || product.image_url;

  return (
    <Card className="group overflow-hidden border-border hover:shadow-gold hover:border-primary/50 transition-all duration-300">
      {/* Product Image */}
      <div className="relative overflow-hidden aspect-square bg-muted">
        <img
          src={imageSrc}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <Badge className="absolute top-3 right-3 gradient-gold text-primary-foreground">
          {product.fragrance}
        </Badge>
      </div>

      {/* Product Info */}
      <CardContent className="p-5">
        <h3 className="font-serif text-lg font-semibold text-foreground line-clamp-2 mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-serif font-bold text-primary">
            ₹{product.price}
          </span>
          <span className="text-xs text-muted-foreground">per pack</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
