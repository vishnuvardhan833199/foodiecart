import {
signOut
}
from "firebase/auth";

import {
auth
}
from "../firebase";


export default function Navbar({

location,
setLocation

}){


function logout(){

signOut(auth);

}


return(

<div className="
bg-white
shadow
px-6 py-3
flex justify-between
items-center
">


<div className="
text-xl font-bold
text-orange-500
">

FoodieCart AI

</div>



<div className="flex gap-4">


<button>

Home

</button>


<button>

Orders

</button>


<button
onClick={logout}
className="
text-red-500
"
>

Logout

</button>


</div>


</div>

);

}