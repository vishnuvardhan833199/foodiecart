export default function HeroBanner(){

return(

<div className="
mx-6 mt-4
rounded-xl
bg-gradient-to-r
from-orange-500
to-pink-600
text-white
p-6
flex justify-between items-center
">

<div>

<h1 className="
text-3xl font-bold
">

AI-Powered Food Discovery

</h1>

<p className="mt-2">

Find the best food instantly

</p>

<button className="
mt-3
bg-white text-orange-500
px-4 py-2 rounded-full
">

Explore

</button>

</div>


<img
src="https://source.unsplash.com/300x200/?biryani,food"
className="rounded-xl"
/>

</div>

)

}