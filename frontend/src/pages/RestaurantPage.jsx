import { useParams } from "react-router-dom";
import foods from "../data/foods";
import FoodCard from "../components/FoodCard";
import { useState } from "react";

export default function RestaurantPage(){

const {id}=useParams();

const [filter,setFilter]=useState("all");

const filtered=

filter==="veg"
?
foods.filter(f=>f.veg)
:
filter==="nonveg"
?
foods.filter(f=>!f.veg)
:
foods;

return(

<div className="p-4">

<select
onChange={e=>setFilter(e.target.value)}
className="
border p-2 rounded
"
>

<option value="all">
All
</option>

<option value="veg">
Veg
</option>

<option value="nonveg">
Non-Veg
</option>

</select>

<div className="
grid grid-cols-4 gap-6 mt-4
">

{filtered.map(food=>(

<FoodCard
key={food.id}
food={food}
/>

))}

</div>

</div>

);

}