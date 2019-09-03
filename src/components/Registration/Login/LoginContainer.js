import React from 'react'
import { reduxForm, SubmissionError } from 'redux-form'

import LoginForm from './LoginForm'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import {Link} from "react-router-dom"


export  function validation(data){
    let errors ={}
    let isError = false
    if(data.email=== undefined && data.password=== undefined){
        errors.email = 'Required'
        errors.password = 'Required'
        isError = true
    }
    if (data.email === undefined){
        errors.email = 'Required'
        isError = true



    }
    if (data.password === undefined ){
        errors.password ='Required'

        isError = true
    }
    if(isError){
        return errors
    }else {
        let user ={}
        user.password = data.password
        user.email = data.email


}

}



export const FormContainer = ({ handleSubmit, props}) => {
    const submitForm = (formValues) => {
        validation(formValues)
    }

    return (
        <div>
         <LoginForm
            onSubmit={submitForm}
            handleSubmit={handleSubmit}
        />

        </div>


    )
}

// function mapDispatchToProps(dispatch){
//     return {
//         user:bindActionCreators(getUser,dispatch)
//     }
// }

const formConfiguration = connect(null)(FormContainer)

export default reduxForm({
    form:'login',
    validation
})(formConfiguration)