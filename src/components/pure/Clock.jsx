import React, { useEffect, useState } from 'react'

const Clock = (props) => {

    const [state, setState] = useState({
        fecha: new Date(),
        edad: 0,
        nombre: 'Martin',
        apellidos: 'San Jose'
    })

    const tick = () => {
        setState((prevState) => {
            let edad = prevState.edad + 1;
            return {
                ...prevState,
                fecha: new Date(),
                edad
            }
        })
   }

    useEffect(() => {
        this.timerID = setInterval(
            () => tick(), 1000
        );
        return clearInterval(this.timerID)
    }, [])

      return (
         <div>
         <h2>
         Hora Actual:
         {state.fecha.toLocaleTimeString()}
         </h2>
         <h3>{state.nombre} {state.apellidos}</h3>
         <h1>Edad: {state.edad}</h1>
         </div>
      )
   }

   
export default Clock;