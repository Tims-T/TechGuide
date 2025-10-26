import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import RootLayout from "./layouts/RootLayout";


const apikey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const url = import.meta.env.VITE_SUPABASE_URL;

const supabase = createClient(url, apikey);

console.log(url)


function App() {
  const [instruments, setInstruments] = useState([]);

  
  useEffect(() => {
    getInstruments();
  }, []);

  async function getInstruments() {
    const { data } = await supabase.from("users").select('*');
    console.log(data)
    setInstruments(data);
  }
  

  console.log("hi?")

  return (
    <BrowserRouter>
      <Routes>
        <Route element = {<RootLayout/>}>

          <Route index path = "/" element = {<SignInPage/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;