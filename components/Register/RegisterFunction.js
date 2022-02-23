import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/database'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const RegisterFunction = () => {
    const router = useRouter()
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState('')
    const [authError, setAuthError] = useState('')
    const [permitted, setPermitted] = useState(false)
    const firstUpdate = useRef(false)

    const register = async () => {
        setRegisterEmail('')
        setRegisterPassword('')

        try {
            await createUserWithEmailAndPassword(
              auth, 
              registerEmail, 
              registerPassword,
            ).then(function() {
                setPermitted(true)
            }).catch(function(error) {
                var errorCode = error.code
                var errorMessage = error.message

                if (errorCode === 'auth/email-already-exists') {
                    setAuthError('El email que intenta usar ya existe')
                }
                else if (errorCode === 'auth/invalid-email') {
                    setAuthError('El email es inválido')
                }
                else if (errorCode === 'auth/invalid-password') {
                    setAuthError('La contraseña es inválida')
                }
                else {
                    setAuthError('Ha ocurrido un error al intentar registrar su cuenta')
                }
            })
        } catch (error) {

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
                <h1 className="text-center text-2xl font-light">Registrarse</h1>
                <div>
                    <input 
                    placeholder="Correo electrónico"
                    value={registerEmail} 
                    onChange={e => setRegisterEmail(e.target.value)}
                    className='bg-transparent w-full outline-none border-sky-500 border-b-2 p-1 focus:border-sky-400 duration-100'
                    />
                </div>
                <div>
                    <input 
                    placeholder="Contraseña"
                    value={registerPassword} 
                    onChange={e => setRegisterPassword(e.target.value)}
                    className='bg-transparent w-full outline-none border-sky-500 border-b-2 p-1 focus:border-sky-400 duration-100'
                    />
                </div>
                <div>
                    <input 
                    placeholder="Confirmar contraseña"
                    value={registerConfirmPassword} 
                    onChange={e => setRegisterConfirmPassword(e.target.value)}
                    className='bg-transparent w-full outline-none border-sky-500 border-b-2 p-1 focus:border-sky-400 duration-100'
                    />
                </div>
                <div className="w-full h-min flex justify-center">
                    <button
                    onClick={register}
                    type='submit'
                    className="w-max font-semibold bg-sky-400 rounded-md text-white py-2 px-8 mt-2">
                        Registrarse
                    </button>
                </div>
            </form>
        </div>
        <div className="mt-2">
            <div className="text-center"><span className="text-gray-500">¿Ya tienes cuenta?</span> <Link href='/auth'><span className="cursor-pointer text-sky-500">Iniciar Sesión</span></Link></div>
        </div>
    </div>
 )
}

export default RegisterFunction