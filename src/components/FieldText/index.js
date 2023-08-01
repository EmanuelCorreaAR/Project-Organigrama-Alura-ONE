import "./FieldText.css"

const CampoTexto = (props) => {
  
    const placeholderModificado = `${props.placeholder}...`;
    
    // Verificar si es el campo de la foto para cambiar el tipo a file
    const inputType = props.titulo.toLowerCase() === "foto" ? "file" : "text";
  
    return (
      <div className="campo-texto">
        <label>{props.titulo}</label>
        <input type={inputType} placeholder={placeholderModificado} required={props.required} />
      </div>
    );
  };
  
  export default CampoTexto;

  
  
  
  
  
  