export interface HealthProduct {
  id: string;
  name: string;
  image: string;
  keywords: string[];
}

export const healthProducts: HealthProduct[] = [
  {
    id: "9",
    name: "Tiny Health Microbiome Test Kit",
    image: "https://cdn.prod.website-files.com/665edd5e2ca30b7e29e82a83/678a70f2de5618ae092d77ab_tiny-health-microbiome-family.avif",
    keywords: ["microbiome", "gut-health", "testing", "personalized", "family-health"]
  },
  {
    id: "10",
    name: "GI Map Gut Health Test",
    image: "https://rootfunctionalmedicine.com/assets/root-functional-medicine-logo2-535a1ed0be65265330807e2664995d4c8991700c5af6d15f3b407f94bb71d4b4.svg",
    keywords: ["gut-health", "digestive", "functional-medicine", "comprehensive", "lab-testing"]
  },
  {
    id: "1",
    name: "Organic Superfood Smoothie Bowl",
    image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=400&h=300&fit=crop&crop=center",
    keywords: ["organic", "superfood", "antioxidants", "breakfast", "vegan"]
  },
  {
    id: "2", 
    name: "Premium Plant Protein Powder",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=300&fit=crop&crop=center",
    keywords: ["protein", "plant-based", "fitness", "recovery", "vanilla"]
  },
  {
    id: "3",
    name: "Cold-Pressed Green Juice",
    image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=300&fit=crop&crop=center", 
    keywords: ["detox", "green", "vitamins", "minerals", "energy"]
  },
  {
    id: "4",
    name: "Grass-Fed Collagen Supplements",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=400&h=300&fit=crop&crop=center",
    keywords: ["collagen", "skin-health", "joints", "grass-fed", "beauty"]
  },
  {
    id: "5", 
    name: "Himalayan Sea Salt",
    image: "https://images.unsplash.com/photo-1599909533134-ee91e5d37f4a?w=400&h=300&fit=crop&crop=center",
    keywords: ["minerals", "himalayan", "natural", "cooking", "electrolytes"]
  },
  {
    id: "6",
    name: "Organic MCT Oil",
    image: "https://images.unsplash.com/photo-1609501676725-7186f3d75fa1?w=400&h=300&fit=crop&crop=center",
    keywords: ["MCT", "keto", "brain-fuel", "coconut", "energy"]
  },
  {
    id: "7",
    name: "Probiotic Kombucha",
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=300&fit=crop&crop=center",
    keywords: ["probiotics", "gut-health", "fermented", "digestive", "immunity"]
  },
  {
    id: "8",
    name: "Raw Almond Butter",
    image: "https://images.unsplash.com/photo-1553986666-8d47a1ae4d9a?w=400&h=300&fit=crop&crop=center",
    keywords: ["raw", "nuts", "healthy-fats", "protein", "spreads"]
  }
];