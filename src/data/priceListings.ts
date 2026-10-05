export interface PriceListing {
  id: string;
  productId: string;
  vendorId: string;
  price: number;
  previousPrice: number;
  updatedAt: string;
}

export const priceListings: PriceListing[] = [
  // Indomie
  {
    id: "pl1",
    productId: "1",
    vendorId: "v1",
    price: 500,
    previousPrice: 450,
    updatedAt: "Today",
  },
  {
    id: "pl2",
    productId: "1",
    vendorId: "v2",
    price: 550,
    previousPrice: 500,
    updatedAt: "Today",
  },
  {
    id: "pl3",
    productId: "1",
    vendorId: "v3",
    price: 450,
    previousPrice: 480,
    updatedAt: "Yesterday",
  },

  // Peak Milk
  {
    id: "pl4",
    productId: "2",
    vendorId: "v1",
    price: 4500,
    previousPrice: 4800,
    updatedAt: "Today",
  },
  {
    id: "pl5",
    productId: "2",
    vendorId: "v2",
    price: 4700,
    previousPrice: 4900,
    updatedAt: "Today",
  },

  // Milo
  {
    id: "pl6",
    productId: "3",
    vendorId: "v1",
    price: 5200,
    previousPrice: 5000,
    updatedAt: "Today",
  },
  {
    id: "pl7",
    productId: "3",
    vendorId: "v2",
    price: 5100,
    previousPrice: 5000,
    updatedAt: "Yesterday",
  },

  // Golden Penny
  {
    id: "pl8",
    productId: "4",
    vendorId: "v3",
    price: 1200,
    previousPrice: 1350,
    updatedAt: "Today",
  },
  {
    id: "pl9",
    productId: "4",
    vendorId: "v4",
    price: 1150,
    previousPrice: 1250,
    updatedAt: "Today",
  },

  // Dano Milk
  {
    id: "pl10",
    productId: "5",
    vendorId: "v1",
    price: 4300,
    previousPrice: 4100,
    updatedAt: "Today",
  },
  {
    id: "pl11",
    productId: "5",
    vendorId: "v2",
    price: 4400,
    previousPrice: 4200,
    updatedAt: "Yesterday",
  },

  // Dangote Sugar
  {
    id: "pl12",
    productId: "6",
    vendorId: "v3",
    price: 2100,
    previousPrice: 1950,
    updatedAt: "Today",
  },

  // Golden Morn
  {
    id: "pl13",
    productId: "7",
    vendorId: "v1",
    price: 3200,
    previousPrice: 3500,
    updatedAt: "Today",
  },

  // Peak Evaporated Milk
  {
    id: "pl14",
    productId: "8",
    vendorId: "v2",
    price: 1200,
    previousPrice: 1100,
    updatedAt: "Today",
  },

  // Indomie Onion Chicken
  {
    id: "pl15",
    productId: "9",
    vendorId: "v1",
    price: 550,
    previousPrice: 500,
    updatedAt: "Today",
  },
  {
    id: "pl16",
    productId: "9",
    vendorId: "v2",
    price: 600,
    previousPrice: 550,
    updatedAt: "Today",
  },

  // Power Oil
  {
    id: "pl17",
    productId: "10",
    vendorId: "v3",
    price: 4800,
    previousPrice: 5200,
    updatedAt: "Today",
  },

  // Gino Tomato Paste
  {
    id: "pl18",
    productId: "11",
    vendorId: "v4",
    price: 700,
    previousPrice: 650,
    updatedAt: "Today",
  },

  // Omo Detergent
  {
    id: "pl19",
    productId: "12",
    vendorId: "v1",
    price: 6500,
    previousPrice: 7000,
    updatedAt: "Today",
  },
];