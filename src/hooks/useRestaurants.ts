import restaurantData from "@/data.json";

export const useRestaurants = () => {
  const data = restaurantData.restaurants;

  const getRestaurantById = (id: number) => {
    return data?.find((restaurant) => restaurant.id === id);
  };

  return { restaurants: data, getRestaurantById };
};
