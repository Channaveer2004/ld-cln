import React, { useState } from 'react'
import "./login.css"
import { login } from './userSlice'
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [propic, setPropic] = useState("")
    const dispatch = useDispatch()

    const loginToApp = (e) => {
        e.preventDefault();
    
        signInWithEmailAndPassword(auth, email, password)
          .then(userAuth => {
            dispatch(login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: userAuth.user.displayName,
              photoUrl: userAuth.user.photoURL,
            }));
          })
          .catch(error => alert(error.message));
      };

      
    const register = (e) => {
        e.preventDefault()
        if (!name) {
            return alert("Please enter a full name")
        }

        function registerUser(auth, email, password, name, propic) {
            if (!email || !password || !name) {
                console.error('Missing required fields');
                return;
            }

            if (!/\S+@\S+\.\S+/.test(email)) {
                console.error('Invalid email format');
                return;
            }

            createUserWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    const user = userCredential.user;
                    await updateProfile(user, {
                        displayName: name,
                        photoURL: propic
                    })
                    return user 
                })
                .then((user) => {
                    dispatch(login({
                        email: user.email,
                        uid: user.uid,
                        displayName: name,
                        photoUrl: propic,
                    }));
                })
                .catch((error) => {
                    // Handle errors here
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    if (errorCode === 'auth/email-already-in-use') {
                        alert('Email already in use. Please use a different email.');
                    } else if (errorCode === 'auth/invalid-email') {
                        alert('Invalid email format.');
                    } else if (errorCode === 'auth/weak-password') {
                        alert('Password is too weak. Please enter a stronger password.');
                    } else {
                        alert(`Error creating user: ${errorMessage}`);
                    }

                    console.error(`Error creating user: ${errorCode} - ${errorMessage}`);
                });
        }

        registerUser(auth, email, password, name, propic);
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
                    placeholder='Email'
                />

                <input
                    type="password"
                    value={password}
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    type='submit'
                    onClick={loginToApp}>
                    Sign In
                </button>
            </form>
            <p>Not a member? <span onClick={register}>Register Now</span></p>
        </div>
    )
}

export default Login
