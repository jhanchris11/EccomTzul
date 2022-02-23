import { signOut } from "firebase/auth"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { auth } from "../../config/database"
import { logout } from "../../redux/features/auth/Auth"
import { useRouter } from "next/router"

const LogoutButton = ({ children }) => {
    const dispatch = useDispatch()
    const router = useRouter()
    
    const signout = () => {
        signOut(auth)
        dispatch(logout())
        router.push('/')
    }

    return (
        <div onClick={signout}>
            <Link href='/'>
                {children}
            </Link>
        </div>
    )
}

export default LogoutButton