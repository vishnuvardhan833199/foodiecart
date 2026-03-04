import { useState } from "react";

import { useNavigate }
from "react-router-dom";

import AuthCard
from "../components/AuthCard";

import {
createUserWithEmailAndPassword
} from "firebase/auth";

import {
auth
} from "../firebase";


export default function Signup(){

const navigate =
useNavigate();


const [form,setForm]=
useState({

name:"",
email:"",
password:"",
confirm:""

});


const [loading,setLoading]=
useState(false);



async function handleSubmit(e){

  e.preventDefault();

  if(form.password !== form.confirm){
    alert("Passwords do not match");
    return;
  }

  try{

    setLoading(true);

    const userCredential =
      await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

    const user = userCredential.user;

    // save profile locally
    localStorage.setItem(
      "userProfile",
      JSON.stringify({
        uid: user.uid,
        name: form.name,
        email: form.email
      })
    );

    // navigate immediately
    navigate("/location");

  }
  catch(error){
    alert(error.message);
  }
  finally{
    setLoading(false);
  }

}



return(

<AuthCard title="Create account">

<form
onSubmit={handleSubmit}
className="flex flex-col gap-3"
>


<input
placeholder="Name"
required
className="border p-3 rounded-lg"
onChange={e=>
setForm({
...form,
name:e.target.value
})
}
/>


<input
type="email"
placeholder="Email"
required
className="border p-3 rounded-lg"
onChange={e=>
setForm({
...form,
email:e.target.value
})
}
/>


<input
type="password"
placeholder="Password"
required
className="border p-3 rounded-lg"
onChange={e=>
setForm({
...form,
password:e.target.value
})
}
/>


<input
type="password"
placeholder="Confirm password"
required
className="border p-3 rounded-lg"
onChange={e=>
setForm({
...form,
confirm:e.target.value
})
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
hover:scale-105
transition
"
>

{loading
?
"Creating..."
:
"Signup"}

</button>


</form>

<button>
{loading ? "Creating account..." : "Signup"}
</button>

<p className="text-center mt-4">

Already have account?

<span
className="
text-orange-500
cursor-pointer ml-1
font-semibold
"
onClick={()=>
navigate("/login")
}
>

Login

</span>

</p>


</AuthCard>

);

}