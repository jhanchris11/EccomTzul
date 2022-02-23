import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { GoogleAuthProvider } from 'firebase/auth'
import { auth } from '../../config/database'

const config = {

    signInFlow: 'popup',

    signInSuccessUrl: '/',

    signInOptions: [
      GoogleAuthProvider.PROVIDER_ID,
    ],
}

const LoginProviders = () => {
    return (
        <div>
            <StyledFirebaseAuth uiConfig={config} firebaseAuth={auth} />
        </div>
    )
}

export default LoginProviders