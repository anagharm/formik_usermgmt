import React, { useState, useEffect } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../FormikComponents/FormikControl'
import axios from '../../common/axiosinstance'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function UpdateUser(props) {
    const backDate = () => {
        var todayDate = new Date();
        var year_18 = todayDate.getFullYear() - 18;
        return new Date(todayDate.getDate() + "-" + todayDate.getMonth() + "-" + year_18)
    }
    const initialValues = {
        title: "",
        firstName: "",
        lastName: "",
        mobileNumber: "",
        email: "",
        // address         : {},
        gender: "",
        designation: "",
        skills: [],
        description: "",
        dob: backDate()
    }
    // const [initialValues, setInitialValues] = useState({
    //     title: "",
    //     firstName: "",
    //     lastName: "",
    //     mobileNumber: "",
    //     email: "",
    //     // address         : {},
    //     gender: "",
    //     designation: "",
    //     skills: [],
    //     description: "",
    //     dob: backDate()
    // });
    // const [initialValues, setInitialValues] = useState()
    const titleOptions = [
        { key: 'Select', value: '' },
        { key: 'Mr', value: 'Mr' },
        { key: 'Mrs', value: 'Mrs' },
        { key: 'Ms', value: 'Ms' },
    ]
    const genderOptions = [
        { key: 'Select', value: '' },
        { key: 'Male', value: 'male' },
        { key: 'Female', value: 'female' },
        { key: 'Other', value: 'other' },
    ]
    const designationOptions = [
        { key: 'Select an option', value: '' },
        { key: 'Software Trainee', value: 'trainee' },
        { key: 'Software Engineer', value: 'engineer' },
        { key: 'Senior Software Engineer', value: 'senioreng' },
        { key: 'Team Lead', value: 'teamlead' },
        { key: 'Project Lead', value: 'projectlead' },
        { key: 'Asst Project Manager', value: 'asstmanager' },
        { key: 'Project Manager', value: 'manager' },
    ]
    const skillsOptions = [
        { key: 'HTML', value: 'html' },
        { key: 'CSS', value: 'css' },
        { key: 'Bootstrap', value: 'bootstrap' },
        { key: 'JavaScript', value: 'javascript' },
        { key: 'React JS', value: 'reactjs' },
    ]
    const validationSchema = Yup.object({
        title: Yup.string().required('Required!!'),
        firstName: Yup.string().required('Required!!').max(15),
        lastName: Yup.string().required('Required!!').max(15),
        email: Yup.string().email('Invalid Email Format').required('Required!!'),
        mobileNumber: Yup.string().length(10).required("Required!!"),
        gender: Yup.string().required('Required!!'),
        designation: Yup.string().required('Required!!'),
        skills: Yup.array().required('Required!!!'),
        brief: Yup.string().required('Required!!'),
        dob: Yup.date().required('Required!!').nullable(),
    })
    const onSubmit = values => {
        console.log('Form data ', values)
        console.log('Saved data ', JSON.parse(JSON.stringify(values)))
        var tempData = {
            title: values.title,
            firstName: values.firstName,
            lastName: values.lastName,
            mobileNo: values.mobileNumber,
            dob: values.dob,
            gender: values.gender,
            skills: values.skills,
            designation: values.designation,
            description: values.description
        };
        axios.post('/api/profile/patch/updateuserdetails', tempData)
            .then(res => {
                toast(res.data.errorMsg)
            })
    }
    // async function getInitialValues() {
    //     try {
    //         const res = await axios.get('/api/profile/get/viewuserdetails/' + props.match.params.usercode)
    //         return ({
    //             title: "",
    //             firstName: res.data.response?.firstName || "",
    //             lastName: res.data.response?.lastName || "",
    //             mobileNumber: "",
    //             email: res.data.response?.emailId || "",
    //             gender: "",
    //             designation: "",
    //             skills: [],
    //             description: "",
    //             dob: backDate()
    //         })
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    // useEffect(() => {
    //     if (props.match.params.usercode) {
    //         getInitialValues().then(res => { setInitialValues(res) });
    //     }
    // }, [])
    // if (initialValues.email !== "") {
        console.log("initialValues ", initialValues)
        return (
            <div >
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {
                        formik => {
                            console.log("formik ", formik)
                            return (
                                <Form>
                                    <FormikControl control='select' label='Title' name='title' options={titleOptions} />
                                    <FormikControl control='input' type='text' label='First Name' name='firstName' />
                                    <FormikControl control='input' type='text' label='Last Name' name='lastName' />
                                    <FormikControl control='input' type='text' label='Mobile Number' name='mobileNumber' />
                                    <FormikControl control='input' type='email' label='Email' name='email' />
                                    <FormikControl control='radio' label='Gender' name='gender' options={genderOptions} />
                                    <FormikControl control='select' label='Designation' name='designation' options={designationOptions} />
                                    <FormikControl control='checkbox' label='Skills' name='skills' options={skillsOptions} />
                                    <FormikControl control='date' label='Date of Birth' name='dob' />
                                    <FormikControl control='textarea' label='Description' name='description' />
                                    <button type="submit" >Submit</button>
                                </Form>
                            )
                        }
                    }
                </Formik>
            </div>
        )
    // } else {
    //     return (<div>Loading</div>)
    // }

}

export default UpdateUser
