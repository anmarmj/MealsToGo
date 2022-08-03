import { mocks } from "./mock";
import camelize from "camelize";

export const resturantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const resturantsTransform = ({ results = [] }) => {
  const mapedResults = results.map((resturant) => {
    return {
      ...resturant,
      isOpenNow: resturant.opening_hours && resturant.opening_hours.open_now,
      isClosedTemporarily: resturant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mapedResults);
};

// resturantsRequest()
//   .then(resturantsTransform)
//   .then((transformResults) => {
//     console.log(transformResults);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
