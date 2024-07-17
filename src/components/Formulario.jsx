import React from "react";


export default function Formulario(){

  
   
      return (
        <div>
            <h1>Cargar nuevo Residente</h1>
        <form>
        <label htmlFor="nombre">Nombre </label>
        <input id="name" type="text" />
   
        <label htmlFor="apellido">Apellido</label>
        <input id="apellido" type="email" />
   
        <label htmlFor="dni">dni</label>
        <input id="dni" type="text" />

        <label htmlFor="direccionEdificio">direccion edificio</label>
        <input id="direccionEdificio" type="text" />

        <label htmlFor="departamento">departamento</label>
        <input id="departamento" type="text" />
   
        <input type="submit" />
      </form>
      </div>
      );
    

  }