import { createUserWithEmailAndPassword } from 'firebase/auth'
import RegisterValidation from './RegisterValidation'
import ErrorMessage from '../Login/ErrorMessage'
import { auth } from '../../config/database'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ErrorMessage from '../Login/ErrorMessage'

const RegisterFunction = () => {
  const router = useRouter()
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('')
  const [authError, setAuthError] = useState('')
  const [permitted, setPermitted] = useState(false)
  const firstUpdate = useRef(false)

    const register = async (e) => {
        e.preventDefault()

        try {
            await createUserWithEmailAndPassword(
              auth, 
              registerEmail, 
              registerPassword,
            ).then(function() {
                setPermitted(true)
                setRegisterEmail('')
                setRegisterPassword('')
                setRegisterConfirmPassword('')
            }).catch(function(error) {
                var errorCode = error.code
                var errorMessage = error.message

                if (errorCode === 'auth/email-already-exists') {
                    setAuthError('El email que intenta registrar ya existe')
                    setRegisterEmail('')
                    setRegisterPassword('')
                    setRegisterConfirmPassword('')
                }
                else if (errorCode === 'auth/email-already-in-use') {
                    setAuthError('El email que intenta registrar ya existe')
                    setRegisterEmail('')
                    setRegisterPassword('')
                    setRegisterConfirmPassword('')
                }
                else if (errorCode === 'auth/invalid-email') {
                    setAuthError('El email es inválido')
                    setRegisterEmail('')
                    setRegisterPassword('')
                    setRegisterConfirmPassword('')
                }
                else if (errorCode === 'auth/invalid-password') {
                    setAuthError('La contraseña es inválida')
                    setRegisterEmail('')
                    setRegisterPassword('')
                    setRegisterConfirmPassword('')
                }
                else {
                    setAuthError('Ha ocurrido un error al intentar registrar su cuenta')
                    setRegisterEmail('')
                    setRegisterPassword('')
                    setRegisterConfirmPassword('')
                }
            })
        } catch (error) {

        }
    }
  }, [permitted])

  return (
    <div className="h-full flex flex-col">
        <div className="h-2/3 flex flex-col justify-between">
            <form className='h-full flex flex-col justify-evenly'>
                <h1 className="font-fvolkhov text-center text-2xl font-light">Registrarse</h1>
                <div>
                    <input 
                    type='email'
                    placeholder="Correo electrónico"
                    value={registerEmail} 
                    onChange={e => setRegisterEmail(e.target.value)}
                    className='font-fvolkhov bg-transparent w-full outline-none border-amber-400 border-b-2 p-1 focus:border-amber-200 duration-150'
                    />
                </div>
                <div>
                    <input 
                    type='password'
                    placeholder="Contraseña"
                    value={registerPassword} 
                    onChange={e => setRegisterPassword(e.target.value)}
                    className='font-fvolkhov bg-transparent w-full outline-none border-amber-400 border-b-2 p-1 focus:border-amber-200 duration-150'
                    />
                </div>
                <div>
                    <input 
                    type='password'
                    placeholder="Confirmar contraseña"
                    value={registerConfirmPassword} 
                    onChange={e => setRegisterConfirmPassword(e.target.value)}
                    className='font-fvolkhov bg-transparent w-full outline-none border-amber-400 border-b-2 p-1 focus:border-amber-200 duration-150'
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
