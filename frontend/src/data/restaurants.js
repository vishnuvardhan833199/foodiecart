const locations = [
  "Hyderabad",
  "Bangalore",
  "Mumbai",
  "Delhi"
];

const cuisines = [
  "Biryani",
  "South Indian",
  "Chinese",
  "Fast Food",
  "Healthy",
  "Dessert",
  "North Indian"
];

const famousByCity = {

  Hyderabad: [
    "Paradise Biryani",
    "Bawarchi",
    "Shah Ghouse",
    "Cafe Bahar",
    "Pista House"
  ],

  Bangalore: [
    "Meghana Foods",
    "Empire Restaurant",
    "CTR",
    "Truffles",
    "A2B"
  ],

  Mumbai: [
    "Leopold Cafe",
    "Bademiya",
    "Cafe Madras",
    "K Rustom"
  ],

  Delhi: [
    "Karim's",
    "Moti Mahal",
    "Haldiram's",
    "Bikanervala"
  ]

};


function random(arr){
  return arr[Math.floor(Math.random()*arr.length)]
}

function generateRestaurants(){

  const list=[]

  let id=1

  locations.forEach(city=>{

    famousByCity[city].forEach(name=>{

      const cuisine=random(cuisines)

      list.push({

        id:id++,

        name,

        location:city,

        cuisine,

        rating:
          (4+Math.random()).toFixed(1),

        deliveryTime:
          Math.floor(Math.random()*30)+20,

        avgPrice:
          Math.floor(Math.random()*300)+150,

        image:
`https://source.unsplash.com/600x400/?${cuisine},restaurant,food`

      })

    })

  })

  return list

}

export default generateRestaurants()