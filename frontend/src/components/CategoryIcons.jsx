const categories = [

  "Biryani",
  "Fried Rice",
  "Noodles",
  "Burger",
  "Pizza",

  "Dosa",
  "Idli",
  "Poori",
  "Paratha",

  "Chicken",
  "Paneer",
  "Kebab",

  "Healthy",
  "Dessert",
  "Juice",
  "Milkshake"

];

export default function CategoryIcons({
  selected,
  onSelect
}) {

  return (

    <div className="
    px-6 py-4
    overflow-x-auto
    ">

      <div className="
      flex gap-6
      w-max
      ">

        {categories.map(cat => (

          <div
            key={cat}
            onClick={() => onSelect(cat)}
            className="
            flex flex-col
            items-center
            cursor-pointer
            transition
            hover:scale-110
            "
          >

            <img
              src={`https://source.unsplash.com/200x200/?${encodeURIComponent(cat)},food`}
              className={`
              w-20 h-20
              rounded-full
              object-cover
              shadow-md
              border-4

              ${
                selected === cat
                  ?
                  "border-orange-500"
                  :
                  "border-white"
              }
              `}
            />


            <span className="
            text-sm
            font-medium
            mt-2
            whitespace-nowrap
            ">
              {cat}
            </span>

          </div>

        ))}

      </div>

    </div>

  );

}