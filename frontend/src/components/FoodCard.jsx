export default function FoodCard({ food }) {

  if (!food) return null;

  return (

    <div className="
    bg-white
    rounded-xl
    shadow
    hover:shadow-lg
    hover:scale-105
    transition
    overflow-hidden
    ">

      <img
        src={food.image}
        alt={food.name}
        className="
        w-full
        h-40
        object-cover
        "
      />


      <div className="p-3">

        <div className="
        font-semibold
        text-gray-800
        ">
          {food.name}
        </div>


        <div className="
        flex justify-between
        items-center
        mt-2
        ">

          <span className="
          text-orange-500
          font-bold
          ">
            ₹{food.price}
          </span>


          <span className="
          text-green-600
          text-sm
          ">
            ⭐ {food.rating}
          </span>

        </div>


        {food.offer && (

          <div className="
          text-xs
          text-red-500
          mt-1
          ">
            {food.offer}
          </div>

        )}

      </div>

    </div>

  );

}