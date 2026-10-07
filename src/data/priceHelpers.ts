import { priceListings } from "./priceListings";
import { products } from "./products";
import { vendors } from "./vendors";

export const getProductListings = (productId: string) => {
  return priceListings.filter((listing) => listing.productId === productId);
};

export const getLowestPrice = (productId: string) => {
  const listings = getProductListings(productId);

  if (listings.length === 0) {
    return null;
  }

  return Math.min(...listings.map((listing) => listing.price));
};

export const getHighestPrice = (productId: string) => {
  const listings = getProductListings(productId);

  if (listings.length === 0) {
    return null;
  }

  return Math.max(...listings.map((listing) => listing.price));
};

export const getProductVendors = (productId: string) => {
  const listings = getProductListings(productId);

  return listings
    .map((listing) => {
      const vendor = vendors.find((vendor) => vendor.id === listing.vendorId);

      if (!vendor) {
        return null;
      }

      return {
        ...vendor,
        price: listing.price,
        previousPrice: listing.previousPrice,
        updatedAt: listing.updatedAt,
      };
    })
    .filter(Boolean);
};

export const getProductWithPrice = (productId: string) => {
  const product = products.find(
    (product) => product.id === productId
  );

  if (!product) {
    return null;
  }

  const listings = getProductListings(productId);

  if (listings.length === 0) {
    return {
      ...product,
      price: null,
      previousPrice: null,
    };
  }

  const lowestListing = listings.reduce((lowest, listing) =>
    listing.price < lowest.price ? listing : lowest
  );

  return {
    ...product,
    price: lowestListing.price,
    previousPrice: lowestListing.previousPrice,
  };
};
