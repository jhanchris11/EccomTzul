import Error from "./Error"

const Input = ({ name, type, placeholder, estado, cambiarEstado, className, expresionRegular, error, funcion }) => {
    
    
    const onChange = (e) => {
        cambiarEstado({ ...estado, input: e.target.value })
    }
    
    const validacion = () => {
        if (expresionRegular) {
            if (expresionRegular.test(estado.input)) {
                cambiarEstado({ ...estado, isValid: 'true' })
            } else {
                cambiarEstado({ ...estado, isValid: 'false' })
            }
        }

        if (funcion) {
            funcion()
        }
    }
    
    return (
        <div>
            <input 
            name={name}
            type={type}
            placeholder={placeholder}
            value={estado.input}
            onChange={onChange}
            onKeyUp={validacion}
            onBlur={validacion}
            className={className}
            valid={estado.isValid}
            autoComplete='off'
            />
            {estado.isValid === 'false' && <span className="text-sm text-red-600">{error}</span>}
        </div>
    )
}

export default Input