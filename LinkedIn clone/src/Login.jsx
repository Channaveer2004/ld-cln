import React, { useState } from 'react'
import "./login.css"
import { login } from './userSlice'
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import { createUserWithEmailAndPassword } from 'firebase/auth';


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [propic, setPropic] = useState("")
    const dispatch = useDispatch

    const LoginToApp = (() => {
        e.preventDefault()
    })

    const register = () => {
        if (!name) {
            return alert("Please enter a full name")
        }
        function registerUser(auth, email, password, name, propic) {
            if (!email || !password || !name) {
                console.error('Missing required fields');
                return;
            }

            // Validate email format (basic check)
            if (!/\S+@\S+\.\S+/.test(email)) {
                console.error('Invalid email format');
                return;
            }

            createUserWithEmailAndPassword(auth, email, password)
                .then((userAuth) => {
                    return userAuth.user.updateProfile({
                        displayName: name,
                        photoURL: propic
                    }).then(() => userAuth); // Return userAuth for use in the next .then()
                })
                .then((userAuth) => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: propic,
                    }));
                })
                .catch((error) => {
                    // Handle errors here
                    console.error('Error creating user:', error.message); // Provide more detail in error
                });
        }
    }

    return (
        <div className='login'>
            <img src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png" alt="logo" />

            <form>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Full name '
                />

                <input
                    type="text"
                    placeholder='Profile pic URL'
                    value={propic}
                    onChange={(e) => setPropic(e.target.value)}
                />

                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='email' />

                <input
                    type="password"
                    value={password}
                    placeholder='passoword'
                    onChange={(e) => setPassword(e.target.value)} />

                <button
                    type='submit'
                    onClick={LoginToApp}>
                    Sign In
                </button>
            </form>
            <p>Not a member ? <span onClick={register}>Register Now</span></p>
        </div>
    )
}

export default Login