import RestaurantCard from "./RestaurantCard";

export default function TopRestaurantsRow({
  restaurants,
  city
}) {

  const top =
    [...restaurants]
    .sort((a,b)=>b.rating-a.rating)
    .slice(0,8);

  return (

    <div className="px-6 mt-6">

      <h2 className="
      text-xl font-bold mb-3
      ">
        🔥 Top restaurants in {city}
      </h2>


      <div className="
      flex gap-4
      overflow-x-auto
      ">

        {top.map(r => (

          <div className="min-w-[250px]">

            <RestaurantCard
              key={r.id}
              restaurant={r}
            />

          </div>

        ))}

      </div>

    </div>

  );

}