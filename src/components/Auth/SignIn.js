import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../FormikComponents/FormikControl'
import classes from './Auth.module.css'

function SignIn() {
    const initialValues = {
        email           : "",
        password        : "",
    }
    const validationSchema = Yup.object({
        email           : Yup.string().email('Invalid Email Format').required('Required!!'),
        password        : Yup.string().required('Required!!'),
    })
    const onSubmit = values => {
                console.log('Form data ',values)
                console.log('Saved data ',JSON.parse(JSON.stringify(values)))
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
                                    <FormikControl control='input' type='email' label='Email' name='email' />
                                    <FormikControl control='input' type='password' label='Password' name='password' />
                                    <div className={classes.SubmitPosition}>
                                        <button type="submit"  disabled={!formik.isValid}>Submit</button>
                                    </div>
                                </Form>
                }
            </Formik>
            <div className={classes.Line}></div>
            <div className={classes.Link}>
                <div className={classes.ForgotPassword}><a href="/forgotpassword">Forgot Password</a></div>
                <div className={classes.SignUp}><a href="/signup">Sign Up</a></div>
            </div>
        </div>
    )
}

export default SignIn
