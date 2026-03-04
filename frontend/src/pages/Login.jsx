import { useState }
from "react";

import { useNavigate }
from "react-router-dom";

import AuthCard
from "../components/AuthCard";

import {
signInWithEmailAndPassword,
signInWithPopup
}
from "firebase/auth";

import {
auth,
googleProvider
}
from "../firebase";


export default function Login(){

const navigate =
useNavigate();


const [email,setEmail]=
useState("");

const [password,setPassword]=
useState("");

const [loading,setLoading]=
useState(false);



async function handleLogin(e){

e.preventDefault();


try{

setLoading(true);


await signInWithEmailAndPassword(

auth,
email,
password

);


navigate("/");


}
catch(error){

alert("Invalid login");

}
finally{

setLoading(false);

}

}



async function googleLogin(){

try{

await signInWithPopup(

auth,
googleProvider

);

navigate("/");

}
catch(error){

alert(error.message);

}

}



return(

<AuthCard title="Welcome back">


<form
onSubmit={handleLogin}
className="flex flex-col gap-3"
>


<input
type="email"
placeholder="Email"
required
className="border p-3 rounded-lg"
onChange={e=>
setEmail(e.target.value)
}
/>


<input
type="password"
placeholder="Password"
required
className="border p-3 rounded-lg"
onChange={e=>
setPassword(e.target.value)
}
/>



<button
className="
bg-gradient-to-r
from-orange-500
to-red-500
text-white
py-3
rounded-lg
font-semibold
"
>

{loading
?
"Logging in..."
:
"Login"}

</button>


</form>



<button
onClick={googleLogin}
className="
mt-3
border
py-3
rounded-lg
w-full
hover:bg-gray-50
"
>

Continue with Google

</button>



<p className="text-center mt-4">

No account?

<span
className="
text-orange-500
cursor-pointer ml-1
font-semibold
"
onClick={()=>
navigate("/signup")
}
>

Signup

</span>

</p>


</AuthCard>

);

}