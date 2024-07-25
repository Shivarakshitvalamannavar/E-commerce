/* trunk-ignore-all(prettier) */
// import { useState , } from "react"

// import { createAuthUserWithEmailAndPassword,auth,createUserDocumentFromAuth
// } from "../../utils/firebase/firebase.utils";

// import './sign-up-form.styles.scss'
// import Button from "../button/button.component";
// import FormInput from "../form-input/form-input.component";

// import { SignUpContainer } from "./sign-up-form.styles";

// const defaultFormFields ={
//     displayName:'',
//     Email:'',
//     password:'',
//     confirmPassword:'',
// }

// const SignUpForm = () =>{
//     const [formFields, setFormFields] = useState(defaultFormFields);
//     const {displayName, Email, password, confirmPassword} = formFields;
    
    

//     const resetFormField=() =>{
//         setFormFields(defaultFormFields);
//     }

//     const handleSubmit = async(event) =>{
//         event.preventDefault();

//         if(password === confirmPassword)
//             {
//                 console.log("Both are same ")
//                 const {user} = await createAuthUserWithEmailAndPassword(Email,password);
                
//                 await createUserDocumentFromAuth(user,{displayName});
//                 resetFormField();
  

//             }
//         else 
//         {   alert("Passwords dont match ")
//             console.log("Try again")
//             return;
//         }
        
        

//     }

//     const handleChange =(event) =>{
//         const {name ,value} =event.target;

//         setFormFields({...formFields,[name]:value});
//     }



//     return(

//         <SignUpContainer>
//             <h2>Don't have an account</h2>
//             <span>Sign up with Email and password</span>
//             <form onSubmit={() =>{}}>
                
//                 <FormInput  label =" Display Name" type="text " required onChange={handleChange} name="displayName" value={displayName} />

               
//                 <FormInput label="Email" type="email" required  onChange={handleChange} name="Email"  value={Email}/>

                
//                 <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>

                
//                 <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

//                 <Button type="submit" onClick={handleSubmit}>Sign Up</Button>
//             </form>
//         </SignUpContainer>

//     )
// }

// export default SignUpForm

// Commenting above code since making changes to include user saga 

import { useState , } from "react"

import { createAuthUserWithEmailAndPassword,auth,createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

import './sign-up-form.styles.scss'
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import { SignUpContainer } from "./sign-up-form.styles";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";

const defaultFormFields ={
    displayName:'',
    Email:'',
    password:'',
    confirmPassword:'',
}

const SignUpForm = () =>{
    const dispatch =useDispatch();

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, Email, password, confirmPassword} = formFields;
    
    

    const resetFormField=() =>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async(event) =>{
        event.preventDefault();

        if(password === confirmPassword)
            {
                console.log("Both are same ")
                dispatch(signUpStart(Email,password,displayName))
  

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
