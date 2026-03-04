import FoodCard from "./FoodCard";

export default function RecommendedFoodRow({
  foods,
  city
}) {

  if (!foods.length) return null;

  return (

    <div className="px-6 mt-6">

      <h2 className="
      text-xl font-bold mb-3
      ">
        ⭐ Recommended in {city}
      </h2>


      <div className="
      flex gap-4
      overflow-x-auto
      ">

        {foods.slice(0,10).map(food => (

          <div className="
          min-w-[220px]
          ">

            <FoodCard
              key={food.id}
              food={food}
            />

          </div>

        ))}

      </div>

    </div>

  );

}