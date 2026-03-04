export default function AIRecommendation({
foods
}){

return(

<div className="px-6">

<h2 className="
text-xl font-bold mb-3
">

🤖 Recommended for you

</h2>


<div className="
flex gap-4 overflow-x-auto
">

{foods.slice(0,6).map(food=>(

<div
key={food.id}
className="
min-w-[220px]
bg-gradient-to-r
from-purple-500
to-orange-500
text-white
rounded-xl
p-3
hover:scale-105
transition
">

<img
src={food.image}
className="
h-28 w-full object-cover
rounded mb-2
"
/>

<div>{food.name}</div>
<div>₹{food.price}</div>

</div>

))}

</div>

</div>

)

}