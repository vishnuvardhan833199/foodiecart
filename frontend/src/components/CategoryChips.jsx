const categories = [

  { name: "Biryani", emoji: "🍚" },
  { name: "Fried Rice", emoji: "🍛" },
  { name: "Pulao", emoji: "🍲" },
  { name: "Jeera Rice", emoji: "🍚" },

  { name: "Rolls", emoji: "🌯" },
  { name: "Shawarma", emoji: "🥙" },
  { name: "Wraps", emoji: "🌯" },

  { name: "Noodles", emoji: "🍜" },
  { name: "Manchurian", emoji: "🥡" },
  { name: "Momos", emoji: "🥟" },
  { name: "Chilli Chicken", emoji: "🍗" },

  { name: "Burger", emoji: "🍔" },
  { name: "Fries", emoji: "🍟" },
  { name: "Sandwich", emoji: "🥪" },
  { name: "Snacks", emoji: "🍿" },

  { name: "Pizza", emoji: "🍕" },
  { name: "Pasta", emoji: "🍝" },
  { name: "Garlic Bread", emoji: "🥖" },

  { name: "Butter Chicken", emoji: "🍗" },
  { name: "Paneer", emoji: "🧀" },
  { name: "Dal", emoji: "🥘" },
  { name: "Curry", emoji: "🍛" },

  { name: "Roti", emoji: "🫓" },
  { name: "Naan", emoji: "🫓" },
  { name: "Paratha", emoji: "🫓" },
  { name: "Dosa", emoji: "🥞" },
  { name: "Idli", emoji: "⚪" },
  { name: "Poori", emoji: "🥯" },

  { name: "Grill", emoji: "🔥" },
  { name: "Kebab", emoji: "🍢" },
  { name: "BBQ", emoji: "🍖" },

  { name: "Healthy", emoji: "🥗" },
  { name: "Protein Bowl", emoji: "🥗" },
  { name: "Salad", emoji: "🥬" },

  { name: "Cake", emoji: "🍰" },
  { name: "Ice Cream", emoji: "🍨" },
  { name: "Milkshake", emoji: "🥤" },
  { name: "Juice", emoji: "🧃" },
  { name: "Falooda", emoji: "🍧" },

  { name: "Thali", emoji: "🍱" },
  { name: "Combo", emoji: "🍽️" }

];


export default function CategoryChips({
  selected,
  setSelected
}) {

  return (

    <div className="
    flex
    gap-3
    px-6
    py-4
    overflow-x-auto
    scrollbar-hide
    ">

      {categories.map(cat => (

        <button
          key={cat.name}
          onClick={() => setSelected(cat.name)}
          className={`
          flex items-center gap-2
          px-4 py-2
          rounded-full
          font-medium
          whitespace-nowrap
          transition-all duration-200

          ${
            selected === cat.name
              ?
              "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-105"
              :
              "bg-white hover:bg-orange-100 shadow"
          }
          `}
        >

          <span>{cat.emoji}</span>

          {cat.name}

        </button>

      ))}

    </div>

  );

}