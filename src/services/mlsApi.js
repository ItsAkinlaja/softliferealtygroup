// Service to interact with SimplyRETS API (Test Feed)
const API_URL = "https://api.simplyrets.com/properties";
const AUTH = "Basic " + btoa("simplyrets:simplyrets"); // Default test credentials

export const fetchMLSListings = async (limit = 9, offset = 0) => {
  try {
    const response = await fetch(`${API_URL}?limit=${limit}&offset=${offset}&status=active`, {
      headers: {
        "Authorization": AUTH
      }
    });

    if (!response.ok) {
      throw new Error("Failed to fetch MLS data");
    }

    const data = await response.json();

    // Transform SimplyRETS data structure to match our app's PropertyCard format
    return data.map(property => ({
      id: property.mlsId,
      title: `${property.address.streetNumber} ${property.address.streetName}`,
      location: `${property.address.city}, ${property.address.state}`,
      price: `$${property.listPrice.toLocaleString()}`,
      type: property.property.type, // e.g., 'RES'
      bedrooms: property.property.bedrooms,
      bathrooms: property.property.bathsFull + (property.property.bathsHalf * 0.5),
      area: `${property.property.area.toLocaleString()} sqft`,
      image: property.photos[0] || "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop", // Fallback image
      developer: "MLS Listing",
      paymentPlan: "Mortgage / Cash",
      completion: "Ready",
      features: ["Garage", "Pool", "Fireplace", "Central Air"].slice(0, 3) // Mock features as API doesn't always return easy tags
    }));

  } catch (error) {
    console.error("MLS API Error:", error);
    return [];
  }
};
