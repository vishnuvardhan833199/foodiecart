export const filterByCategory = (category, foods, restaurants) => {

  const filteredFoods = foods.filter(
    (food) => food.category.toLowerCase() === category.toLowerCase()
  );

  const restaurantIds = new Set(
    filteredFoods.map((food) => food.restaurantId)
  );

  const filteredRestaurants = restaurants.filter(
    (res) => restaurantIds.has(res.id)
  );

  return {
    foods: filteredFoods,
    restaurants: filteredRestaurants,
  };
};