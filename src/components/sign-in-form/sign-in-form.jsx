import { useState ,} from "react"

import { createAuthUserWithEmailAndPassword,auth,createUserDocumentFromAuth,signwithGooglePopup,signInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";

import './sign-in-form.styles.scss'
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
const defaultFormFields ={
    
    Email:'',
    password:'',
    
}

const SignInForm = () =>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { Email, password,} = formFields;
    


    

    const resetFormField=() =>{
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async() =>{
         await signwithGooglePopup();
        
    }
    const handleSubmit = async(event) =>{
        event.preventDefault();

        try{
            const {user} =await signInAuthUserWithEmailAndPassword(Email,password);
            
            
            resetFormField();
            
        }
        catch(error){
            if(error.code === "auth/wrong-password")
                {
                    alert("Incorrect password for email");
                }
            console.log(error)
        }

    }

    const handleChange =(event) =>{
        const {name ,value} =event.target;

        setFormFields({...formFields,[name]:value});
    }



    return(

        <div className="sign-up-cotainer">
            <h2>ALready have an account??</h2>
            <span>Sign in with Email and password</span>
            <form onSubmit={() =>{}}>
                
               

               
                <FormInput label="Email" type="email" required  onChange={handleChange} name="Email"  value={Email}/>

                
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>

                
                
                <div className="buttons-container">
                <Button type="button" onClick={handleSubmit}>Sign In</Button>
                <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google signin</Button>
                </div>
            </form>
        </div> 

    )
}

export default SignInForm
