import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LocationSetup(){

const navigate = useNavigate();

const [city,setCity]=useState("");
const [address,setAddress]=useState("");

function save(){

const profile =
JSON.parse(
localStorage.getItem("userProfile")
);

localStorage.setItem(
"userProfile",
JSON.stringify({
...profile,
city,
address
})
);

navigate("/");

}

return(

<div className="
min-h-screen flex
items-center justify-center
bg-gradient-to-r
from-orange-400
to-purple-500
">

<div className="
bg-white p-6 rounded-xl
w-96 shadow
">

<h2 className="
text-xl font-bold mb-4
">

Enter location

</h2>

<input
placeholder="City"
className="border p-2 w-full mb-3"
onChange={e=>setCity(e.target.value)}
/>

<input
placeholder="Address"
className="border p-2 w-full mb-3"
onChange={e=>setAddress(e.target.value)}
/>

<button
onClick={save}
className="
bg-orange-500
text-white w-full p-2 rounded
"
>

Continue

</button>

</div>

</div>

);

}