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



    //validation
    var validate = () => {
        var isValid = true;

        //validate the firstName
        if (firstName.trim() === "") {
            setFirstNameError("First name is required")
            isValid = false;
        }

        if (lastName.trim() === "") {
            setLastNameError("last name is required")
            isValid = false;
        }

        if (email.trim() === "") {
            setEmailError("Email is required")
            isValid = false;
        }

        if (password.trim() === "") {
            setPasswordError("Password is required")
            isValid = false;
        }

        if (confirmPassword.trim() === "") {
            setConfirmPasswordError("Confirm Password is required")
            isValid = false;
        }

        if (confirmPassword.trim() !== password.trim()) {
            setConfirmPasswordError("Password and confirmation password don't match")
            isValid = false;
        }

        return isValid;


    }

    //submit butoton function
    const handleSubmit = (e) => {
        e.preventDefault()

        //call the validator
        var isValidated = validate();
        if (!isValidated) {
            return

        }


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

                    {
                        firstNameError && <p className='text-danger'>{firstNameError}</p>
                    }

                    <label className='mt-4'>
                        Last Name: {lastName}
                    </label>
                    <input onChange={handleLastName} type='text' className='form-control' placeholder='Enter your last name'>
                    </input>
                    {
                        lastNameError && <p className='text-danger'>{lastNameError}</p>
                    }

                    <label className='mt-4'>
                        Email: {email}
                    </label>
                    <input onChange={handleEmail} type='text' className='form-control' placeholder='Enter your email'>
                    </input>
                    {
                        emailError && <p className='text-danger'>{emailError}</p>
                    }

                    <label className='mt-4'>
                        Password: {password}
                    </label>
                    <input onChange={handlePassword} type='text' className='form-control' placeholder='Enter your password'>
                    </input>
                    {
                        passwordError && <p className='text-danger'>{passwordError}</p>
                    }

                    <label className='mt-4'>
                        Confirm password: {confirmPassword}
                    </label>
                    <input onChange={handleConfirmPassword} type='text' className='form-control mb-4' placeholder='Confirm your password'>
                    </input>
                    {
                        confirmPasswordError && <p className='text-danger'>{confirmPasswordError}</p>
                    }


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
