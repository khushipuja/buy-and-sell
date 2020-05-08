import React,{useState} from 'react'
import * as Yup from 'yup'
import {Redirect} from 'react-router-dom'
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

const loginSchema=Yup.object().shape({
    
    email: Yup.string().email('Invalid email').required('Email cannot be empty!'),
    password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Password cannot be empty!'),

});

 function Login() {

const [auth, setauth] = useState(false)

const login=async (values)=>{
console.log(values);
const user={
  username:values.name,
  email:values.email,
  password:values.password

}
axios.post('http://localhost:8000/api/login',user).then(res=>{
  console.log(res.data);
  
  setauth(true);
  localStorage.setItem("token",res.data);
  
}).catch(err=>{
  console.log(err);
  
})

}


    return (
      auth?<Redirect to="/about" />:
        <div>
            <h1>Login</h1>
            <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={loginSchema}
      onSubmit={login}
    >
      {({ errors, touched }) => (
          <div className="container">
        <Form>
          
          <Field name="email" type="email" className="form__input" placeholder="Enter your email"/>
          {errors.email && touched.email ? (
            <div className="error__input">{errors.email}</div>
          ) : null}
          <Field name="password" className="form__input" placeholder="Enter your password" />
          {errors.password && touched.password ? <div className="error__input">{errors.password}</div> : null}
          
          <button type="submit" className="submit__button">Submit</button>
          
        </Form>
        </div>
      )}
    </Formik>
        </div>
    )
}

export default Login
