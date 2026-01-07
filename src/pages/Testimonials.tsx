import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    text: "The Rose fragrance is absolutely divine. I've been using DevAArti for my morning pooja for 6 months now, and I can't imagine switching to any other brand. The fragrance lasts so long!",
    category: "Home User",
  },
  {
    name: "Rajesh Kumar",
    location: "Mumbai",
    rating: 5,
    text: "As a temple priest, I've tried many agarbatti brands. DevAArti stands out for its pure, natural fragrance. Our devotees always compliment the divine aroma during prayers.",
    category: "Temple",
  },
  {
    name: "Anita Devi",
    location: "Jaipur",
    rating: 5,
    text: "DevAArti brings peace to my home. The Lavender fragrance is perfect for meditation and yoga sessions. Highly recommended for anyone seeking a calm atmosphere!",
    category: "Home User",
  },
  {
    name: "Suresh Agarwal",
    location: "Kolkata",
    rating: 5,
    text: "I run a puja items shop, and DevAArti has become our best-selling agarbatti brand. Customers love the quality and keep coming back for more. Great for business!",
    category: "Retailer",
  },
  {
    name: "Meena Patel",
    location: "Ahmedabad",
    rating: 5,
    text: "The Jasmine fragrance reminds me of my grandmother's pooja room. Such nostalgic and pure aroma. DevAArti has truly captured the essence of traditional Indian incense.",
    category: "Home User",
  },
  {
    name: "Vikram Singh",
    location: "Lucknow",
    rating: 5,
    text: "Excellent wholesale service and consistent quality. We've been partnering with DevAArti for our temple supplies business. Reliable and premium products every time.",
    category: "Wholesale Buyer",
  },
  {
    name: "Lakshmi Iyer",
    location: "Chennai",
    rating: 5,
    text: "The Pineapple fragrance is unique and refreshing. It's perfect for my evening prayers. My entire family loves the fresh, fruity aroma. A modern touch to devotion!",
    category: "Home User",
  },
  {
    name: "Ramesh Gupta",
    location: "Varanasi",
    rating: 5,
    text: "Being from Varanasi, I have high standards for agarbatti. DevAArti exceeds expectations with its authentic fragrances. Pure, long-lasting, and spiritually uplifting.",
    category: "Temple",
  },
];

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              What Our <span className="text-primary">Devotees Say</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Hear from our valued customers about their experience with DevAArti Agarbatti
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border hover:shadow-gold hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {testimonial.category}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 gradient-gold">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10,000+", label: "Happy Customers" },
              { value: "500+", label: "Temple Partners" },
              { value: "100+", label: "Retail Outlets" },
              { value: "4.9★", label: "Average Rating" },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
            Share Your <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            We'd love to hear about your experience with DevAArti Agarbatti. 
            Your feedback helps us serve you better!
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-md gradient-gold text-primary-foreground font-medium shadow-gold hover:opacity-90 transition-opacity"
          >
            Share Your Testimonial
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
