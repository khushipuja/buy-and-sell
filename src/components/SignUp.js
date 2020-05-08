import React,{useState} from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import './SignUp.css'
import axios from 'axios'
import {  Redirect } from "react-router-dom";
const SignupSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').required('First Name Cannot be empty!'),
    email: Yup.string().email('Invalid email').required('Email cannot be empty!'),
    password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Password cannot be empty!'),
  });
  
function SignUp() {
  
 const [auth, setauth] = useState(false);
  const signup=(values)=>{
    console.log(values);


    axios.post('http://localhost:8000/api/register',{username:values.name,email:values.email,password:values.password}).then(
        (response)=>{console.log(response)
        setauth(true);
         console.log(auth);
         
       }
    ).catch(err=>{console.log(err);
    })

    
   }
   return (
     auth?<Redirect to="/login" />:
       <div>
           <h1>SignUp</h1>
           <Formik
     initialValues={{
       name: '',
       email: '',
       password: '',
     }}
     validationSchema={SignupSchema}
     onSubmit={signup}
   >
     {({ errors, touched }) => (
         <div className="container">
       <Form>
         <Field name="name" className="form__input" placeholder="Enter your name"/>
         {errors.name && touched.name ? (
           <div className="error__input">{errors.name}</div>
         ) : null}
         <Field name="email" type="email" className="form__input" placeholder="Enter your email"/>
         {errors.email && touched.email ? (
           <div className="error__input">{errors.email}</div>
         ) : null}
         <Field name="password" className="form__input" placeholder="Enter your password" />
         {errors.password && touched.password ? <div className="error__input">{errors.password}</div> : null}
         
         <button  className="submit__button">Submit</button>
         
       </Form>
       </div>
     )}
   </Formik>
       </div>
   )
}

export default SignUp
