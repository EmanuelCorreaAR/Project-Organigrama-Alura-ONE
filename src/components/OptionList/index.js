import React from 'react'
import './OptionList.css'

const ListaOpciones = () => {

    //Metodo map -> arreglo.map( (equipo, index) => { 
    //    return <option></option>
    // })
    const equipos = [
        "Back End",
        "Front End",
        "Data Science",
        "DevOps",
        "UX y Diseño",
        "Mobile",
        "Innovación y Gestión"
    ]
    return <div className="lista-opciones">
        <label>Equipos</label>
        <select>
            {equipos.map((equipo, index) => <option key={index}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones