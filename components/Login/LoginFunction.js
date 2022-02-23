import { Formik, Form } from "formik"
import loginSchema from "./loginValidation"
import ErrorMessage from "./ErrorMessage"
import LoginProviders from "./LoginProviders"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/database'
import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

const LoginFunction = () => {
    const router = useRouter()
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [authError, setAuthError] = useState('')
    const [permitted, setPermitted] = useState(false)
    const firstUpdate = useRef(false)

    const signin = async () => {
        setLoginEmail('')
        setLoginPassword('')

        try {
            await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword,
            )
            .then(function() {
                setPermitted(true)
            })
            .catch(function(error) {
                var errorCode = error.code
                var errorMessage = error.message
    
                if (errorCode === 'auth/wrong-password') {
                    setAuthError('El email y/o la contraseña son invalidos')
                }
                else if (errorCode === 'auth/invalid-email') {
                    setAuthError('El email y/o la contraseña son invalidos')
                }
                else if (errorCode === 'auth/user-disabled') {
                    setAuthError('El usuario no tiene permisos para acceder')
                }
                else if (errorCode === 'auth/user-not-found') {
                    setAuthError('El usuario no fue encontrado')
                }
                else {
                    setAuthError('Ha ocurrido un error al intentar iniciar sesion, por favor intenta mas tarde')
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
        <>
            <div className="h-full flex flex-col">
                <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={loginSchema}
                onSubmit={(data) => null}
                >
                    {({
                        handleSubmit,
                        handleBlur,
                        handleChange,
                        values,
                        errors,
                        touched
                    }) => {
                        return (
                            <div className="h-2/3 flex flex-col justify-between">
                                <h1 className="text-center text-2xl font-light">Iniciar Sesión</h1>
                                <Form onSubmit={handleSubmit} className='h-full flex flex-col justify-evenly'>
                                    <div>
                                        <input 
                                        name='email'
                                        type='email'
                                        placeholder="Correo electrónico"
                                        className='bg-transparent w-full outline-none border-sky-500 border-b-2 p-1 focus:border-sky-400 duration-100'
                                        value={loginEmail}
                                        onChange={e => setLoginEmail(e.target.value)}
                                        onBlur={handleBlur}
                                        autoComplete='off'
                                        />
                                    </div>
                                    <div>
                                        <input
                                        name='password' 
                                        type='password'
                                        placeholder="Contraseña"
                                        className='bg-transparent w-full outline-none border-sky-500 border-b-2 p-1 focus:border-sky-400 duration-100'
                                        value={loginPassword}
                                        onChange={e => setLoginPassword(e.target.value)}
                                        onBlur={handleBlur}
                                        />
                                    </div>
                                    <div className="w-full h-min flex justify-center">
                                        <button
                                        className="w-max font-semibold bg-sky-400 rounded-md text-white py-2 px-8 mt-2"
                                        onClick={signin}
                                        type='submit'
                                        >
                                            Iniciar Sesión
                                        </button>
                                    </div>
                                    {authError && <ErrorMessage>{authError}</ErrorMessage>}
                                </Form>
                            </div>
                        )
                    }}
                </Formik>
                <div>
                    <div>
                        <LoginProviders />
                    </div>
                    <div>
                        <div className="text-center"><span className="text-gray-500">¿No tienes cuenta?</span> <Link href='/auth/registro'><span className="cursor-pointer text-sky-500">Regístrate</span></Link></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginFunction