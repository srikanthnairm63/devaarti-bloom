import { Heart, Award, Leaf, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import logo from "../assets/devaarti-jasmine.jpeg";

const About = () => {
  const values = [
    { 
      icon: Heart, 
      title: "Devotion", 
      desc: "Every stick is crafted with love and spiritual intent, honoring the sacred tradition of incense making." 
    },
    { 
      icon: Award, 
      title: "Quality", 
      desc: "We use only premium natural ingredients, ensuring a pure and long-lasting fragrance experience." 
    },
    { 
      icon: Leaf, 
      title: "Sustainability", 
      desc: "Our eco-friendly practices ensure that we give back to nature what we take from it." 
    },
    { 
      icon: Users, 
      title: "Community", 
      desc: "Supporting local artisans and craftsmen who carry forward this ancient tradition." 
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              About <span className="text-primary">DevAArti</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A modern Indian incense brand rooted in tradition and devotion
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={logo} 
                alt="DevAArti Story" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-gold"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Our <span className="text-primary">Story</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                DevAArti Agarbatti was born from a simple yet profound vision — to bring the 
                divine essence of traditional Indian incense into modern homes. Our journey 
                began with a deep respect for the age-old practice of using agarbatti in 
                daily prayers and spiritual rituals.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Each fragrance in our collection is carefully crafted to elevate your 
                spiritual moments. From the soothing Rose to the calming Lavender, from 
                the pure Jasmine to the refreshing Pineapple — every aroma tells a story 
                of devotion and craftsmanship.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, DevAArti serves home users, temples, retail shop owners, wholesale 
                buyers, and export customers across the globe. We remain committed to our 
                founding principle: creating incense that makes every prayer more meaningful 
                and every moment more serene.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg bg-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Our <span className="text-primary">Mission</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide premium quality agarbatti that enhances the spiritual 
                  experience of our customers. We strive to preserve the traditional 
                  art of incense making while embracing modern quality standards and 
                  sustainable practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Our <span className="text-primary">Vision</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted and loved agarbatti brand in India and 
                  beyond. We envision a world where the divine fragrance of DevAArti 
                  brings peace, positivity, and spiritual connection to every home.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Our <span className="text-primary">Core Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at DevAArti
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-border hover:shadow-gold hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full gradient-gold flex items-center justify-center">
                    <value.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">
              Why Choose <span className="text-primary">DevAArti</span>?
            </h2>
            <div className="space-y-4 text-left">
              {[
                "Premium natural ingredients sourced ethically",
                "Long-lasting fragrances that fill your space with divine aroma",
                "Handcrafted with care by skilled artisans",
                "Wide range of fragrances to suit every preference",
                "Competitive pricing for wholesale and retail",
                "Reliable supply for temples and businesses",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full gradient-gold flex items-center justify-center text-primary-foreground text-sm font-bold flex-shrink-0">
                    ✓
                  </span>
                  <p className="text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
