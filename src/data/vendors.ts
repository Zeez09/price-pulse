
export type VendorType =
  | "Shop"
  | "Market"
  | "Restaurant"
  | "Pharmacy";

export interface Vendor {
  id: string;
  name: string;
  type: VendorType;
  description: string;
  image: string;
  location: string;
  city: string;
  phone: string;
  openingHours: string;
  verified: boolean;
}

export const vendors: Vendor[] = [
  {
    id: "v1",
    name: "Shoprite",
    type: "Shop",
    description:
      "A major supermarket offering groceries, food items, drinks, household products and more.",
    image: "https://picsum.photos/500/300?random=21",
    location: "Lekki Phase 1",
    city: "Lagos",
    phone: "+234 800 000 0001",
    openingHours: "8:00 AM - 9:00 PM",
    verified: true,
  },

  {
    id: "v2",
    name: "SPAR",
    type: "Shop",
    description:
      "Supermarket offering groceries, beverages, household essentials and everyday products.",
    image: "https://picsum.photos/500/300?random=22",
    location: "Victoria Island",
    city: "Lagos",
    phone: "+234 800 000 0002",
    openingHours: "8:00 AM - 9:00 PM",
    verified: true,
  },

  {
    id: "v3",
    name: "Mile 12 Market",
    type: "Market",
    description:
      "A major food market with fresh produce, groceries and everyday food items.",
    image: "https://picsum.photos/500/300?random=23",
    location: "Ketu",
    city: "Lagos",
    phone: "+234 800 000 0003",
    openingHours: "6:00 AM - 7:00 PM",
    verified: false,
  },

  {
    id: "v4",
    name: "Balogun Market",
    type: "Market",
    description:
      "A busy Lagos market with a wide range of food, household and consumer products.",
    image: "https://picsum.photos/500/300?random=24",
    location: "Lagos Island",
    city: "Lagos",
    phone: "+234 800 000 0004",
    openingHours: "8:00 AM - 6:00 PM",
    verified: false,
  },

  {
    id: "v5",
    name: "The Place",
    type: "Restaurant",
    description:
      "A popular restaurant serving meals, snacks, drinks and other food items.",
    image: "https://picsum.photos/500/300?random=25",
    location: "Ikeja",
    city: "Lagos",
    phone: "+234 800 000 0005",
    openingHours: "10:00 AM - 10:00 PM",
    verified: true,
  },

  {
    id: "v6",
    name: "Chicken Republic",
    type: "Restaurant",
    description:
      "Quick-service restaurant offering meals, snacks, drinks and other food products.",
    image: "https://picsum.photos/500/300?random=26",
    location: "Yaba",
    city: "Lagos",
    phone: "+234 800 000 0006",
    openingHours: "9:00 AM - 10:00 PM",
    verified: true,
  },

  {
    id: "v7",
    name: "HealthPlus",
    type: "Pharmacy",
    description:
      "Pharmacy offering medicines, healthcare products, personal care and wellness essentials.",
    image: "https://picsum.photos/500/300?random=27",
    location: "Ikeja GRA",
    city: "Lagos",
    phone: "+234 800 000 0007",
    openingHours: "8:00 AM - 8:00 PM",
    verified: true,
  },

  {
    id: "v8",
    name: "Medplus",
    type: "Pharmacy",
    description:
      "Pharmacy and health store offering medicines, personal care and wellness products.",
    image: "https://picsum.photos/500/300?random=28",
    location: "Lekki",
    city: "Lagos",
    phone: "+234 800 000 0008",
    openingHours: "8:00 AM - 9:00 PM",
    verified: true,
  },
];
