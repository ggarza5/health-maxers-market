export interface HealthProduct {
  id: string;
  name: string;
  image: string;
  keywords: string[];
  website: string;
}

export const healthProducts: HealthProduct[] = [
  {
    id: "9",
    name: "Tiny Health Microbiome Test Kit",
    image: "https://cdn.prod.website-files.com/665edd5e2ca30b7e29e82a83/678a70f2de5618ae092d77ab_tiny-health-microbiome-family.avif",
    keywords: ["microbiome", "gut-health", "testing", "personalized", "family-health"],
    website: "https://www.tinyhealth.com/"
  },
  {
    id: "10",
    name: "GI Map Gut Health Test",
    image: "https://rootfunctionalmedicine.com/assets/root-functional-medicine-logo2-535a1ed0be65265330807e2664995d4c8991700c5af6d15f3b407f94bb71d4b4.svg",
    keywords: ["gut-health", "digestive", "functional-medicine", "comprehensive", "lab-testing"],
    website: "https://rootfunctionalmedicine.com/shop-root"
  },
  {
    id: "11",
    name: "Mindbloom At-Home Ketamine Therapy",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center",
    keywords: ["psychedelic-medicine", "ketamine-therapy", "mental-health", "neuroplasticity", "telehealth", "anxiety", "depression"],
    website: "https://www.mindbloom.com/"
  },
  {
    id: "12", 
    name: "Stella Ketamine-Assisted Therapy",
    image: "https://stellamentalhealth.com/thumbs/1355x1000/files/wonly/1_1000x736_intake-image-6_79872.jpg",
    keywords: ["psychedelic-therapy", "ketamine", "trauma-healing", "mental-health", "depression", "anxiety", "PTSD"],
    website: "https://www.stellacenter.com/"
  },
  {
    id: "13",
    name: "Theragun Percussive Massage Device",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
    keywords: ["percussive-massage", "muscle-recovery", "performance-therapy", "deep-tissue", "portable", "fitness"],
    website: "https://www.therabody.com/"
  },
  {
    id: "14",
    name: "Function Health Lab Testing Platform",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center",
    keywords: ["health-tech", "preventative-medicine", "personalized-health", "lab-testing", "wellness-technology", "biomarkers"],
    website: "https://www.functionhealth.com/"
  },
  {
    id: "15",
    name: "BetterHelp Online Therapy Platform",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop&crop=center",
    keywords: ["online-therapy", "mental-health", "licensed-therapists", "telehealth", "anxiety", "depression", "counseling"],
    website: "https://www.betterhelp.com/"
  },
  {
    id: "16",
    name: "Oura Ring Sleep & Recovery Tracker",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop&crop=center",
    keywords: ["smart-ring", "health-tracking", "sleep-monitoring", "wellness-technology", "personal-health", "biometrics"],
    website: "https://ouraring.com/"
  },
  {
    id: "17",
    name: "WHOOP Fitness & Recovery Band",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop&crop=center",
    keywords: ["fitness-tracker", "recovery-monitoring", "performance-optimization", "heart-health", "sleep-tracking", "strain-monitoring"],
    website: "https://www.whoop.com/"
  },
  {
    id: "18",
    name: "gammaCore Vagus Nerve Stimulator",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&crop=center",
    keywords: ["vagus-nerve-stimulation", "migraine-treatment", "non-invasive", "FDA-cleared", "drug-free", "neurostimulation"],
    website: "https://www.gammacore.com/"
  },
  {
    id: "19",
    name: "Fisher Wallace Neurostimulation Device",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop&crop=center",
    keywords: ["neurostimulation", "depression-treatment", "brain-stimulation", "mental-health", "mood-enhancement", "sleep-improvement"],
    website: "https://www.fisherwallace.com/"
  },
  {
    id: "20",
    name: "Apollo Neuro Stress Relief Wearable",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop&crop=center",
    keywords: ["touch-therapy", "stress-reduction", "sleep-improvement", "performance-enhancement", "vibration-therapy", "wellness-wearable"],
    website: "https://apolloneuro.com/"
  }
];