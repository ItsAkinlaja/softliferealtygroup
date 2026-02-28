// Mock data for properties
const PROPERTIES = [
  {
    id: 1,
    title: "The Royal Atlantis Residences",
    location: "Palm Jumeirah, Dubai",
    price: "$5,200,000",
    type: "Penthouse",
    bedrooms: 4,
    bathrooms: 5,
    area: "4,500 sqft",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    developer: "Kerzner International",
    paymentPlan: "Ready to Move",
    completion: "Ready",
    features: ["Private Pool", "Beach Access", "Michelin Dining", "Concierge"]
  },
  {
    id: 3,
    title: "Como Residences",
    location: "Palm Jumeirah, Dubai",
    price: "$6,800,000",
    type: "Sky Villa",
    bedrooms: 5,
    bathrooms: 6,
    area: "7,000 sqft",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    developer: "Nakheel",
    paymentPlan: "60/40",
    completion: "Q3 2027",
    features: ["360 Views", "Private Beach", "Smart Home", "Gated Community"]
  },
   {
    id: 4,
    title: "Mayfair Townhouse",
    location: "London, UK",
    price: "$10,800,000",
    type: "Townhouse",
    bedrooms: 3,
    bathrooms: 3,
    area: "2,800 sqft",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    developer: "Grosvenor",
    paymentPlan: "Flexible",
    completion: "Ready",
    features: ["Historic Facade", "Modern Interior", "Private Garden", "Central Location"]
  },
  {
    id: 5,
    title: "Amali Island",
    location: "The World Islands",
    price: "$4,100,000",
    type: "Villa",
    bedrooms: 5,
    bathrooms: 6,
    area: "6,000 sqft",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop",
    developer: "Amali",
    paymentPlan: "50/50",
    completion: "Q4 2026",
    features: ["Private Island", "Boat Access", "Secluded Luxury", "Nature Reserve"]
  },
  {
    id: 6,
    title: "Central Park Penthouse",
    location: "New York, USA",
    price: "$18,000,000",
    type: "Penthouse",
    bedrooms: 3,
    bathrooms: 4,
    area: "3,500 sqft",
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?q=80&w=2070&auto=format&fit=crop",
    developer: "Extell",
    paymentPlan: "Cash",
    completion: "Ready",
    features: ["Park Views", "White Glove Service", "Spa", "Private Elevator"]
  }
];

export const getProperties = async () => {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(PROPERTIES);
    }, 500);
  });
};

export const getPropertyById = async (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(PROPERTIES.find(p => p.id === parseInt(id)));
        }, 500);
    });
}
