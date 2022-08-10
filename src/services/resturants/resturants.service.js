import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const resturantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("No resturant in this location");
    }
    resolve(mock);
  });
};

export const resturantsTransform = ({ results = [] }) => {
  const mapedResults = results.map((resturant) => {
    resturant.photos = resturant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...resturant,
      isOpenNow: resturant.opening_hours && resturant.opening_hours.open_now,
      isClosedTemporarily: resturant.business_status === "CLOSED_TEMPORARILY",
      address: resturant.vicinity,
    };
  });
  return camelize(mapedResults);
};
