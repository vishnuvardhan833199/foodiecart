const categories = [
  "Pizza",
  "Burger",
  "Biryani",
  "Salad",
  "Chicken",
  "Paneer",
  "Dessert",
  "Dosa",
  "Tea",
  "Lassi",
  "Milkshakes",
  "Bath",
  "Poori",
  "Idly",
  "Juices",
  "Chinese"
];

const locations = [
  "Hyderabad",
  "Bangalore",
  "Mumbai",
  "Delhi",
  "Chennai"
];

const famousFoodsByCity = {

  Hyderabad: [
    "Hyderabadi Biryani",
    "Irani Chai",
    "Double Ka Meetha",
    "Haleem",
    "Osmania Biscuit"
  ],

  Bangalore: [
    "Masala Dosa",
    "Filter Coffee",
    "Idli Vada",
    "Ragi Mudde"
  ],

  Mumbai: [
    "Vada Pav",
    "Pav Bhaji",
    "Bombay Sandwich",
    "Falooda"
  ],

  Delhi: [
    "Chole Bhature",
    "Butter Chicken",
    "Paratha",
    "Lassi"
  ],

  Chennai: [
    "Idli",
    "Dosa",
    "Sambar",
    "Filter Coffee"
  ]

};


function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


function generateFoods() {

  const foods = [];

  for (let i = 1; i <= 200; i++) {

    const category =
      randomFrom(categories);

    const location =
      randomFrom(locations);

    const famous =
      famousFoodsByCity[location] || [];

    const baseName =
      Math.random() > 0.6
        ? randomFrom(famous)
        : `${category} Special`;


    foods.push({

      id: i,

      name:
        `${baseName} ${i}`,

      category,

      location,


      price:
        Math.floor(Math.random() * 400) + 80,


      rating:
        Number(
          (3.5 + Math.random() * 1.5)
          .toFixed(1)
        ),


      veg:
        Math.random() > 0.4,


      offer:
        Math.random() > 0.7
          ? `${Math.floor(
              Math.random() * 40
            )}% OFF`
          : null,


      healthScore:
        Math.floor(
          Math.random() * 10
        ) + 1,


      calories:
        Math.floor(
          Math.random() * 600
        ) + 150,


      restaurantId:
        Math.floor(
          Math.random() * 20
        ) + 1,


      distance:
        (
          Math.random() * 8 + 0.5
        ).toFixed(1),


      prepTime:
        Math.floor(
          Math.random() * 30
        ) + 10,


      image:
        `https://source.unsplash.com/400x300/?${encodeURIComponent(
          category
        )},${encodeURIComponent(
          baseName
        )},food`

    });

  }

  return foods;

}


const foods =
  generateFoods();

export default foods;