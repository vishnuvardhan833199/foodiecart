import {useCart} from "../context/CartContext"

export default function Checkout(){

const {cart}=useCart()

const total=
cart.reduce(
(a,b)=>a+b.price,
0
)

return(

<div className="p-6">

<h1 className="
text-3xl font-bold
text-purple-700
">

Checkout

</h1>

{cart.map((item,i)=>(

<div key={i}>

{item.name}
₹{item.price}

</div>

))}

<h2>
Total ₹{total}
</h2>

<button className="
bg-green-500
text-white
px-4 py-2
rounded
">

Place Order

</button>

</div>

)

}