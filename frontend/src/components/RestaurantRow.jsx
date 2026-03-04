import RestaurantCard from "./RestaurantCard";

export default function RestaurantRow({
  title,
  restaurants
}) {

  return (

    <div className="px-6 mt-6">

      <h2 className="
      font-bold
      text-xl
      mb-3
      ">
        {title}
      </h2>


      <div className="
      grid
      grid-cols-4
      gap-4
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