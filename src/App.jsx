import { useState, useEffect } from "react";
import './App.css'
import Formulario from "./components/Formulario";
import Inicio from "./components/Inicio";

function App() {
  const [ping, setPing] = useState("")

  useEffect(() => {
    getPing().then((data) => setPing(data));
  }, [])

  const getPing = () => {
    return fetch("http://localhost:4002/demo")
      .then((response) => response.text())
      .catch(error => console.log('error', error))
      .finally(() => console.log('promise is finished'));
  }

  return (
    <>
      <div>
        <p>
          la respuesta es:  {ping}
        </p>

        
        <Formulario/>
       
        
       
      </div>
    </>
  )
}

export default App
