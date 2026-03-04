export default function RestaurantCard({
restaurant
}){

return(

<div className="
bg-white rounded-xl shadow
hover:shadow-xl hover:scale-105
transition overflow-hidden
">

<img
src={restaurant.image}
className="
h-40 w-full object-cover
"
/>

<div className="p-3">

<div className="font-bold">
{restaurant.name}
</div>

<div className="text-gray-500 text-sm">
⭐ {restaurant.rating}
• {restaurant.deliveryTime} min
</div>

<div className="
text-orange-500 text-sm
">
{restaurant.cuisine}
</div>

</div>

</div>

)

}