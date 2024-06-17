import React from "react";
import { signwithGooglePopup,createUserDocumentFromAuth} from  '../../utils/firebase/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signwithGooglePopup()
        const userDocref= await createUserDocumentFromAuth(user)
    }
    return(
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
        </div>
    )
}

export default SignIn