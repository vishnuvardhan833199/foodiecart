import {
BrowserRouter,
Routes,
Route
}
from "react-router-dom";


import Home
from "./pages/Home";

import Login
from "./pages/Login";

import Signup
from "./pages/Signup";

import LocationSetup
from "./pages/LocationSetup";


import ProtectedRoute
from "./components/ProtectedRoute";


export default function App(){


return(

<BrowserRouter>


<Routes>


<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<Signup/>}/>

<Route path="/location" element={<LocationSetup/>}/>

<Route
  path="/"
  element={
    <ProtectedRoute>
      <Home/>
    </ProtectedRoute>
  }
/>


</Routes>


</BrowserRouter>

);

}