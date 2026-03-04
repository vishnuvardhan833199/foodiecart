export default function RecommendationRow({ foods }) {

  return (

    <div className="px-6">

      <h2 className="
      font-bold
      text-xl
      mb-3
      ">
        🤖 AI Recommendations
      </h2>


      <div className="
      flex gap-4
      overflow-x-auto
      ">

        {foods.slice(0,5).map(food => (

          <div
            key={food.id}
            className="
            min-w-[220px]
            bg-gradient-to-r
            from-orange-400
            to-red-500
            text-white
            p-4
            rounded-xl
            "
          >

            <img
              src={food.image}
              className="
              h-24 w-full
              object-cover
              rounded
              mb-2
              "
            />

            <div className="font-bold">
              {food.name}
            </div>

            ₹{food.price}

          </div>

        ))}

      </div>

    </div>

  );

}