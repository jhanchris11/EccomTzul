import { createUserWithEmailAndPassword } from 'firebase/auth'
import ErrorMessage from '../Login/ErrorMessage'
import { auth } from '../../config/database'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Input from './Input'

const RegisterFunction = () => {
    const router = useRouter()
    const [registerEmail, setRegisterEmail] = useState({input: '', isValid: null})
    const [registerPassword, setRegisterPassword] = useState({input: '', isValid: null})
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState({input: '', isValid: null})
    const [authError, setAuthError] = useState('')
    const [permitted, setPermitted] = useState(false)
    const [validForm, setValidForm] = useState(false)
    const firstUpdate = useRef(false)

    const expresiones = {
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, // 4 a 12 digitos.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }

    const validateConfirmPassword = () => {
        if (registerPassword.input.length > 0) {
            if (registerPassword.input !== registerConfirmPassword.input) {
                setRegisterConfirmPassword((prevState) => {
                    return {...prevState, isValid: 'false'}
                })
            } else {
                setRegisterConfirmPassword((prevState) => {
                    return {...prevState, isValid: 'true'}
                })
            }
        }
    }

    const register = async (e) => {
        e.preventDefault()

        if (
            registerEmail.isValid === 'true' &&
            registerPassword.isValid === 'true' &&
            registerConfirmPassword.isValid === 'true'
        ) {

            setValidForm(true)
            try {
                await createUserWithEmailAndPassword(
                  auth, 
                  registerEmail.input, 
                  registerPassword.input,
                ).then(function() {
                    setPermitted(true)
                    setRegisterEmail({ input: '' })
                    setRegisterPassword({ input: '' })
                    setRegisterConfirmPassword({ input: '' })
                }).catch(function(error) {
                    var errorCode = error.code
                    var errorMessage = error.message
    
                    if (errorCode === 'auth/email-already-exists') {
                        setAuthError('El email que intenta registrar ya existe')
                        setRegisterEmail({ input: '' })
                        setRegisterPassword({ input: '' })
                        setRegisterConfirmPassword({ input: '' })
                    }
                    else if (errorCode === 'auth/email-already-in-use') {
                        setAuthError('El email que intenta registrar ya existe')
                        setRegisterEmail({ input: '' })
                        setRegisterPassword({ input: '' })
                        setRegisterConfirmPassword({ input: '' })
                    }
                    else if (errorCode === 'auth/invalid-email') {
                        setAuthError('El email es inválido')
                        setRegisterEmail({ input: '' })
                        setRegisterPassword({ input: '' })
                        setRegisterConfirmPassword({ input: '' })
                    }
                    else if (errorCode === 'auth/invalid-password') {
                        setAuthError('La contraseña es inválida')
                        setRegisterEmail({ input: '' })
                        setRegisterPassword({ input: '' })
                        setRegisterConfirmPassword({ input: '' })
                    }
                    else {
                        setAuthError('Ha ocurrido un error al intentar registrar su cuenta')
                        setRegisterEmail({ input: '' })
                        setRegisterPassword({ input: '' })
                        setRegisterConfirmPassword({ input: '' })
                    }
                })
            } catch (error) {
    
            }
        } else {
            setValidForm(false)
        }
    }

    useEffect(() => {
        if (firstUpdate.current) {
         router.push('/')
        } else {
            firstUpdate.current = true
        }
     }, [permitted])

    return (
    <div className="h-full flex flex-col">
        <div className="h-2/3 flex flex-col justify-between">
            <form className='h-full flex flex-col justify-evenly'>
                <h1 className="font-fvolkhov text-center text-2xl font-light">Registrarse</h1>
                <div>
                    <Input 
                    name='email'
                    type='email'
                    placeholder="Correo electrónico"
                    estado={registerEmail} 
                    cambiarEstado={setRegisterEmail}
                    className='font-fvolkhov bg-transparent w-full outline-none border-amber-400 border-b-2 p-1 focus:border-amber-200 duration-150'
                    expresionRegular={expresiones.email}
                    error='El email es invalido'
                    />
                </div>
                <div>
                    <Input
                    name='password' 
                    type='password'
                    placeholder="Contraseña"
                    estado={registerPassword} 
                    cambiarEstado={setRegisterPassword}
                    className='font-fvolkhov bg-transparent w-full outline-none border-amber-400 border-b-2 p-1 focus:border-amber-200 duration-150'
                    expresionRegular={expresiones.password}
                    error='La contraseña debe contener al menos una mayúscula, una minúscula y un número'
                    />
                </div>
                <div>
                    <Input 
                    name='registerPassword'
                    type='password'
                    placeholder="Confirmar contraseña"
                    estado={registerConfirmPassword} 
                    cambiarEstado={setRegisterConfirmPassword}
                    className='font-fvolkhov bg-transparent w-full outline-none border-amber-400 border-b-2 p-1 focus:border-amber-200 duration-150'
                    error='La contraseña es incorrecta'
                    funcion={validateConfirmPassword}
                    />
                </div>
                <div className="w-full h-min flex justify-center">
                    <button
                    onClick={e => register(e)}
                    type='submit'
                    className="font-fvolkhov w-max font-semibold bg-amber-400 rounded-md text-white py-2 px-8 mt-2">
                        Registrarse
                    </button>
                </div>
                {authError && <ErrorMessage>{authError}</ErrorMessage>}
            </form>
        </div>
        <div className="mt-2">
            <div className="text-center"><span className="font-fvolkhov text-gray-500">¿Ya tienes cuenta?</span> <Link href='/auth'><span className="font-fvolkhov cursor-pointer text-amber-400">Iniciar Sesión</span></Link></div>
        </div>
    </div>
 )
}

export default RegisterFunction