import { useState } from "react";
import { X } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

// Import all images
import logo from "../assets/devaarti-jasmine.jpeg";
import roseImg from "@/assets/product-rose.jpeg";
import jasmineImg from "@/assets/product-jasmine.jpeg";
import lavenderImg from "@/assets/product-lavender.jpeg";
import pineappleImg from "@/assets/product-logo.jpeg";
import extraImg from "@/assets/product-extra.jpeg";

const galleryImages = [
  { src: logo, alt: "DevAArti Brand Logo", category: "Brand" },
  { src: roseImg, alt: "DevAArti Rose Agarbatti", category: "Products" },
  { src: jasmineImg, alt: "DevAArti Jasmine Agarbatti", category: "Products" },
  { src: lavenderImg, alt: "DevAArti Lavender Agarbatti", category: "Products" },
  { src: pineappleImg, alt: "DevAArti Pineapple Agarbatti", category: "Products" },
  { src: extraImg, alt: "DevAArti Special Collection", category: "Products" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Product <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our beautiful collection of divine fragrances and premium packaging
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-gold transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-background font-medium">{image.alt}</p>
                    <span className="text-background/70 text-sm">{image.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
          <DialogTitle className="sr-only">
            {selectedImage?.alt || "Gallery Image"}
          </DialogTitle>
          {selectedImage && (
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/90 flex items-center justify-center hover:bg-background transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent rounded-b-xl">
                <p className="text-background font-medium text-center">{selectedImage.alt}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Info Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
            Premium <span className="text-primary">Packaging</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each DevAArti agarbatti pack features elegant packaging that reflects our commitment 
            to quality. Perfect for personal use or as thoughtful gifts for loved ones.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
