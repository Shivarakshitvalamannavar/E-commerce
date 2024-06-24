import React from "react";
import { auth,signwithGooglePopup,createUserDocumentFromAuth,signwithGoogleRedirect} from  '../../utils/firebase/firebase.utils'
import SignUpForm from "../../components/sign-up-form/sign-up-form";
import SignInForm from "../../components/sign-in-form/sign-in-form";


const Authentication = () => {

    // useEffect(() => {
    //     const fetchRedirectResult = async () => {
    //         const response = await getRedirectResult(auth);
    //         console.log(response);
    //         if(response){
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }

    // //     };

    //     fetchRedirectResult();
    // }, []);

    const logGoogleUser = async () => {
        const {user} = await signwithGooglePopup()
        const userDocref= await createUserDocumentFromAuth(user)
    }

    return(

        <div>
            <h1>Sign In</h1>
            <SignInForm/>
            <SignUpForm/>
            {/* <button onClick={signwithGoogleRedirect}>
                Sign in with Google Redirect
            </button> */}
        </div>
    )
}

export default Authentication