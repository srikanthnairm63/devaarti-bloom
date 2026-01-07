import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";
import { useProducts } from "@/hooks/useProducts";
import { Skeleton } from "@/components/ui/skeleton";

const Products = () => {
  const { data: products, isLoading, error } = useProducts();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Our <span className="text-primary">Divine Collection</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover our handcrafted fragrances, each designed to enhance your spiritual experience
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Product Info */}
          <div className="text-center mb-12">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All our agarbatti packs are priced at ₹70 each. For bulk orders and wholesale 
              pricing, please contact us directly.
            </p>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="aspect-square w-full rounded-lg" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-8 w-1/4" />
                </div>
              ))}
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12">
              <p className="text-destructive">Failed to load products. Please try again later.</p>
            </div>
          )}

          {/* Products */}
          {products && products.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {/* Empty State */}
          {products && products.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Wholesale CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Looking for <span className="text-primary">Wholesale Orders</span>?
            </h2>
            <p className="text-muted-foreground mb-6">
              We offer special pricing for bulk orders, temple supplies, and retail partnerships. 
              Contact us for customized quotes and exclusive deals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-md gradient-gold text-primary-foreground font-medium shadow-gold hover:opacity-90 transition-opacity"
              >
                Get Wholesale Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
