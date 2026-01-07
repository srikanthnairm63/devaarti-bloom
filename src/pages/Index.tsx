import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Heart, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";
import { useProducts } from "@/hooks/useProducts";
import logo from "@/assets/devaarti-logo.jpeg";

const Index = () => {
  const { data: products, isLoading } = useProducts();

  const features = [
    { icon: Sparkles, title: "Divine Fragrances", desc: "Handcrafted aromas for spiritual elevation" },
    { icon: Heart, title: "Made with Devotion", desc: "Each stick infused with love and care" },
    { icon: Shield, title: "Premium Quality", desc: "Natural ingredients for pure experience" },
  ];

  const testimonials = [
    { name: "Priya Sharma", text: "The Rose fragrance is absolutely divine. Perfect for my morning pooja.", rating: 5 },
    { name: "Rajesh Kumar", text: "Best agarbatti brand I've used. The fragrance lasts so long!", rating: 5 },
    { name: "Anita Devi", text: "DevAArti brings peace to my home. Highly recommended!", rating: 5 },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-accent opacity-50" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary) / 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-8 inline-block animate-float">
              <img 
                src={logo} 
                alt="DevAArti Logo" 
                className="w-32 h-32 mx-auto rounded-full object-cover shadow-gold border-4 border-primary"
              />
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 animate-fade-in">
              <span className="text-gradient-gold">DevAArti</span> Agarbatti
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Where Devotion Meets Divine Fragrance
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Crafted to elevate your spiritual moments, DevAArti blends divine fragrances 
              with elegant presentation, making every prayer more meaningful and serene.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button asChild size="lg" className="gradient-gold text-primary-foreground shadow-gold text-lg px-8">
                <Link to="/products">
                  Explore Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8">
                <Link to="/contact">Get Wholesale Quote</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Why Choose <span className="text-primary">DevAArti</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We bring centuries of tradition into modern homes with our premium incense sticks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-gold transition-shadow duration-300 bg-card">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-gold flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Our <span className="text-primary">Divine Collection</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our handcrafted fragrances, each designed to enhance your spiritual experience
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-square bg-muted animate-pulse rounded-lg" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              <Link to="/products">View All Products <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              What Our <span className="text-primary">Devotees Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-card">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="link" className="text-primary">
              <Link to="/testimonials">Read More Reviews <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
            Ready to Elevate Your Spiritual Experience?
          </h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg">
            Whether for home, temple, or business — we have the perfect fragrance for you.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
