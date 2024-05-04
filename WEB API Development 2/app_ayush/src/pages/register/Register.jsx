import React, { useState } from 'react'

const Register = () => {

    //logic section

    //make a useState for 5 fields
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    //use state for error message
    const [firstNameError, setFirstNameError] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')

    //Make a each function for changing the value 
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }


    //submit butoton function
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(firstName, lastName, email, password, confirmPassword)
    }

    return (
        <>
            <div className='container'>
                <h1>
                    Create An Account
                </h1>
                <form className='w-50'>
                    <label className='mt-4'>
                        First Name: {firstName}
                    </label>
                    <input onChange={handleFirstName} type='text' className='form-control mt' placeholder='Enter your first name'>
                    </input>

                    <label className='mt-4'>
                        Last Name: {lastName}
                    </label>
                    <input onChange={handleLastName} type='text' className='form-control' placeholder='Enter your last name'>
                    </input>

                    <label className='mt-4'>
                        Email: {email}
                    </label>
                    <input onChange={handleEmail} type='text' className='form-control' placeholder='Enter your email'>
                    </input>

                    <label className='mt-4'>
                        Password: {password}
                    </label>
                    <input onChange={handlePassword} type='text' className='form-control' placeholder='Enter your password'>
                    </input>

                    <label className='mt-4'>
                        Confirm password: {confirmPassword}
                    </label>
                    <input onChange={handleConfirmPassword} type='text' className='form-control mb-4' placeholder='Confirm your password'>
                    </input>


                    <button onClick={handleSubmit} className='btn btn-dark'> Create an account</button>



                </form>
            </div>
        </>
    )
}

export default Register

//step 1: Make complete UI of register page (fields, button, etc)
//step 2: Input (type)- make a state
//step 3: OnChange- set the value to the state
