import "./Form.css"
import CampoTexto from "../FieldText"
import ListaOpciones from '../OptionList'
import Boton from "../Button"

const Formulario = () => {
    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio", e)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Completar el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required />
            <CampoTexto titulo="Posición" placeholder="Ingresar puesto" required />
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" required />
            <ListaOpciones placeholder="Seleccionar equipo"/>
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}

export default Formulario