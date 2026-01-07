-- Create products table
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  fragrance TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create contacts table for enquiries
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on both tables
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Products are publicly readable (no auth required for viewing)
CREATE POLICY "Products are publicly viewable" 
ON public.products 
FOR SELECT 
USING (true);

-- Contacts can be inserted by anyone (for enquiry form)
CREATE POLICY "Anyone can submit contact enquiry" 
ON public.contacts 
FOR INSERT 
WITH CHECK (true);

-- Insert sample product data
INSERT INTO public.products (name, fragrance, price, description, image_url) VALUES
('DevAArti Rose Fragrance Agarbatti', 'Rose', 70.00, 'Floral incense crafted for daily pooja and devotion.', '/assets/product-rose.jpeg'),
('DevAArti Jasmine Fragrance Agarbatti', 'Jasmine', 70.00, 'Pure jasmine aroma for calm and positivity.', '/assets/product-jasmine.jpeg'),
('DevAArti Lavender Fragrance Agarbatti', 'Lavender', 70.00, 'Relaxing lavender fragrance for peaceful prayers.', '/assets/product-lavender.jpeg'),
('DevAArti Pineapple Fragrance Agarbatti', 'Pineapple', 70.00, 'Fresh fruity aroma with a modern devotional touch.', '/assets/product-pineapple.jpeg');