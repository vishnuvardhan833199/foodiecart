import { useState } from "react";

import foods from "../data/foods";
import restaurants from "../data/restaurants";

import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";

import CategoryIcons from "../components/CategoryIcons";

import RecommendedFoodRow
from "../components/RecommendedFoodRow";

import TopRestaurantsRow
from "../components/TopRestaurantsRow";

import RestaurantGrid
from "../components/RestaurantGrid";


export default function Home(){

const [location,setLocation]=
useState("Hyderabad");

const [category,setCategory]=
useState(null);


/* city data */

const cityFoods=
foods.filter(
f=>f.location===location
);

const cityRestaurants=
restaurants.filter(
r=>r.location===location
);


/* category filter */

const filteredFoods=
category
?
cityFoods.filter(f=>
f.name.toLowerCase()
.includes(category.toLowerCase())
||
f.category.toLowerCase()
.includes(category.toLowerCase())
)
:
cityFoods;


return(

<div className="bg-[#f8f6f1] min-h-screen">

<Navbar
location={location}
setLocation={setLocation}
/>

<HeroBanner/>


{/* CATEGORY ICONS */}

<CategoryIcons
selected={category}
onSelect={setCategory}
/>


{/* ROW 1 */}

<RecommendedFoodRow
foods={filteredFoods}
city={location}
/>


{/* ROW 2 */}

<TopRestaurantsRow
restaurants={cityRestaurants}
city={location}
/>


{/* ROW 3 */}

<RestaurantGrid
restaurants={cityRestaurants}
city={location}
/>


</div>

);

}