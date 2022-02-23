import * as Yup from 'yup'

const RegisterValidation = Yup.object().shape({
    email: Yup.string()
    .email('El correo es invalido')
    .required('Obligatorio'),
    password: Yup.string()
    .required('Obligatorio')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
    'Debe contenear al menos 6 caracteres, una letra mayuscula y minuscula y un numero')
})

export default RegisterValidation