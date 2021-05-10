import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../FormikComponents/FormikControl'
import classes from './Auth.module.css'
import axios from '../../common/axiosinstance'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

function SignUp() {
    const initialValues = {
        firstName       : "",
        lastName        : "",
        email           : "",
        password        : "",
        confirmPassword : "",
    }
    const validationSchema = Yup.object({
        firstName       : Yup.string().required('Required!!'),
        lastName       : Yup.string().required('Required!!'),
        email           : Yup.string().email('Invalid Email Format').required('Required!!'),
        password        : Yup.string().required('Required!!'),
        confirmPassword : Yup.string().oneOf([Yup.ref('password'),''], 'Password must match').required('Required!!'),
    })
    
    const onSubmit = values => {
                console.log('Form data ',values)
                console.log('Saved data ',JSON.parse(JSON.stringify(values)))
                axios.post('/api/user/post/signup',values)
                     .then(res =>{
                        toast(res.data.errorMsg)
                        console.log("data ",res.data.response)
                        window.location.href = "/user/update/"+res.data.response.userCode;
                     })
                     .catch(error=>{

                     })
            }
    return (
        <div className={classes.SignInUpLayout}>
            <Formik
                    initialValues       = {initialValues}
                    validationSchema    = {validationSchema}
                    onSubmit            = {onSubmit}
            >
                {
                    formik =>   <Form>
                                    <FormikControl control='input' type='text' label='First Name' name='firstName' />
                                    <FormikControl control='input' type='text' label='Last Name' name='lastName' />
                                    <FormikControl control='input' type='email' label='Email' name='email' />
                                    <FormikControl control='input' type='password' label='Password' name='password' />
                                    <FormikControl control='input' type='password' label='Confirm Password' name='confirmPassword' />
                                    <div className={classes.SubmitPosition}>
                                        <button type="submit"  disabled={!formik.isValid}>Submit</button>
                                    </div>
                                </Form>
                }
            </Formik>
            <div className={classes.Line}></div>
            <div className={classes.Link}>
                <div><a href="/signin">Sign In</a></div>
            </div>
        </div>
    )
}

export default SignUp
