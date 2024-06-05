import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { loginUserApi } from '../../apis/Api'

const Login = () => {

    //logic section

    //make a useState for 5 fields

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //use state for error message

    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')



    //validation
    var validate = () => {
        var isValid = true;

        if (email.trim() === '' || !email.includes('@')) {
            setEmailError("Email is required")
            isValid = false;
        }

        if (password.trim() === '') {
            setPasswordError("Password is required")
            isValid = false;
        }

        return isValid
    }

    //login button function
    const handleSubmit = (e) => {
        e.preventDefault()

        //call the validator
        var isValidated = validate();
        if (!isValidated) {
            return
        }
        const data = {
            "email": email,
            "password": password
        }

        loginUserApi(data).then((res) => {
            if (res.data.success === false) {
                toast.error(res.data.message)
            }
            else {
                toast.success(res.data.message)

                //succes-bool, message-text, token-text, user data-json object 
                //setting token and user data in local storage
                localStorage.setItem('token', res.data.token)

                //setting user data
                const convertedData = JSON.stringify(res.data.userData)

                //local storage set
                localStorage.setItem('user', convertedData)


            }


        })

    }


    return (
        <>
            <div className='container'>
                <h1>
                    Create An Account
                </h1>
                <form className='w-50'>

                    <label className='mt-4'>
                        email: {email}

                    </label>
                    <input onChange={(e) => setEmail(e.target.value)} type='text' className='form-control' placeholder='Enter your email'>
                    </input>
                    {
                        emailError && <p className='text-danger'>{emailError}</p>
                    }

                    <label className='mt-4'>
                        password: {password}
                    </label>
                    <input onChange={(e) => setPassword(e.target.value)} type='text' className='form-control mb-4' placeholder='Enter your password'>
                    </input>
                    {
                        passwordError && <p className='text-danger'>{passwordError}</p>
                    }


                    <button onClick={handleSubmit} className='btn btn-dark'> Login</button>



                </form>
            </div>
        </>
    )
}
export default Login;