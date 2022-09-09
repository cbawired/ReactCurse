/**
 * solucion del ejercicio 
 */
 import React, { useState, useEffect } from 'react'

 function EjercicioSesiones456() {
 
     const initialData = {
         fecha: new Date(),
         edad: 0,
         nombre: "Martín",
         apellidos: "San José"
     }
 
     const [datos, setDatos] = useState(initialData);

    /**
    * Ciclos de vida del componente
    */
     
     
    useEffect(() => {    
        console.log("Did mount the component");
        const tick = () => {
            setDatos(
                {
                    edad: ++datos.edad,
                    fecha: new Date(),
                    nombre: "Martín",
                    apellidos: "San José"
                }
            )
        }
        
            const timerID = setInterval (
            () => tick(), 1000
        );
        
        return() => {
            console.log("Will Unmount the component");
            clearInterval(timerID);

            
        }
    }, [datos]);

 
     return (
         <div>
             <h2>
                 Hora Actual:
                 {datos.fecha.toLocaleTimeString()}
             </h2>
             <h3>
                 {datos.nombre} {datos.apellidos}
             </h3>
             <h1>
                 Edad: {datos.edad}
             </h1>
         </div>
     )
 }
 
 export default EjercicioSesiones456;