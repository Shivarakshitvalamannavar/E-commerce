import { useState , } from "react"

import { createAuthUserWithEmailAndPassword,auth,createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

import './sign-up-form.styles.scss'
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import { SignUpContainer } from "./sign-up-form.styles";

const defaultFormFields ={
    displayName:'',
    Email:'',
    password:'',
    confirmPassword:'',
}

const SignUpForm = () =>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, Email, password, confirmPassword} = formFields;
    
    

    const resetFormField=() =>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async(event) =>{
        event.preventDefault();

        if(formFields.password==formFields.confirmPassword)
            {
                console.log("Both are same ")
                const {user} = await createAuthUserWithEmailAndPassword(Email,password);
                
                await createUserDocumentFromAuth(user,{displayName});
                resetFormField();
  

            }
        else 
        {   alert("Passwords dont match ")
            console.log("Try again")
            return;
        }
        
        

    }

    const handleChange =(event) =>{
        const {name ,value} =event.target;

        setFormFields({...formFields,[name]:value});
    }



    return(

        <SignUpContainer>
            <h2>Don't have an account</h2>
            <span>Sign up with Email and password</span>
            <form onSubmit={() =>{}}>
                
                <FormInput  label =" Display Name" type="text " required onChange={handleChange} name="displayName" value={displayName} />

               
                <FormInput label="Email" type="email" required  onChange={handleChange} name="Email"  value={Email}/>

                
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>

                
                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

                <Button type="submit" onClick={handleSubmit}>Sign Up</Button>
            </form>
        </SignUpContainer>

    )
}

export default SignUpForm
