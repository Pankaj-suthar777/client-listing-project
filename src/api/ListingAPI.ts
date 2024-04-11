import axios from "axios";

export const GetListing = async (id: number) => {
  try {
    const res = await axios.get(
      `https://propertify.onrender.com/api/details/${id}`
    );
    return res;
  } catch (error) {
    console.error("Error fetching listing:", error);
    throw new Error("Failed to fetch listing.");
  }
};

export const GetAllListing = async () => {
  try {
    const res = await axios.get(
      "https://propertify.onrender.com/api/properties/all"
    );
    return res;
  } catch (error) {
    console.error("Error fetching listing:", error);
    throw new Error("Failed to fetch listing.");
  }
};

export const GetLatLngListing = async (lat: number, lng: number) => {
  try {
    const res = await axios.get(
      `https://propertify.onrender.com/api/properties/filter?Latitude=${lat}&longitude=${lng}`
    );
    return res;
  } catch (error) {
    console.error("Error fetching listing:", error);
    throw new Error("Failed to fetch listing.");
  }
};
