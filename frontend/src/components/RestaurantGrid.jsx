import RestaurantCard from "./RestaurantCard";

export default function RestaurantGrid({
  restaurants,
  city
}) {

  return (

    <div className="px-6 mt-6 pb-20">

      <h2 className="
      text-xl font-bold mb-3
      ">
        🍽 All restaurants in {city}
      </h2>


      <div className="
      grid
      grid-cols-4
      gap-5
      ">

        {restaurants.map(r => (

          <RestaurantCard
            key={r.id}
            restaurant={r}
          />

        ))}

      </div>

    </div>

  );

}