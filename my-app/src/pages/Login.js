// import React, { useState,useEffect } from 'react'
// import { NavLink} from 'react-router-dom'
// import { useNavigate } from "react-router-dom"
// import {  
//     Box,
//     Button,
//     Stack,
//     TextField
// } from '@mui/material'

// import {auth} from "../../context/firebase";
// import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { useSignInWithGoogle } from 'react-firebase-hooks/auth';


// const Login = () => {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   // const { logIn, googleSignIn } = useUserAuth();
//   const navigate = useNavigate();
  
//   const [signInWithGoogle,
      
//       googleUser,
//       googleLoading,
//       googleError,
//   ] = useSignInWithGoogle(auth);


//   const [signInWithEmailAndPassword,
//        user,
//         loading,
//          error] = useSignInWithEmailAndPassword(auth)
  
//          useEffect(() => {
//           if (googleUser) {
//               console.log(googleUser);
//               navigate('/');
//           }
//           if (user) {
//               console.log(user);
//               navigate('/');
//           }
//       }, [user, googleUser, navigate]);
  
         
//          if(error)
//          console.log(error.message)
 
//          if(loading)
//          console.log("loading.........")




//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   setEmail()


//   //   const res = await fetch('/signin', {
//   //     method: "POST",
//   //     headers:{
//   //       "Content-Type":"application/json"
//   //     },

//   //     body: JSON.stringify({
//   //       email, password
//   //     })
//   //   });

//   //   const data = res.json();

//   //   if (data.status === 400 || !data) {
//   //     window.alert("Invalid Credentials")
//   //   }
//   //   else {

//   //     window.alert("Login Successful");
//   //     navigate('/home')
//   //   }
//   // }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage("");
//     await signInWithEmailAndPassword(email, password);

// };

// const handleGoogleSignIn = async (e) => {
//     console.log("clicked")
//     e.preventDefault();
//     await signInWithGoogle()

// };

//   return (
  
//     <Stack 
//     component='section'
//     direction="column"
//     justifyContent= 'center'
//     alignItems='center'
//     sx={{
//         py: 10,
//         px: 2,
//     }}
//     >
//     <Box 
//     component="form" 
//     noValidate 
//     onSubmit={handleSubmit} 
//     sx={{ 
//         mt: 1,
//         py: 2
//     }}>
//         <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//             value={email} onChange={(e) => setEmail(e.target.value)}
//         />
//         <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             value={password} onChange={(e) => setPassword(e.target.value)}
//         />
//         <Button 
//         variant="contained" 
//         fullWidth
//         type="submit"
//         size="medium"
//         sx= {{ 
//             fontSize: '0.9rem',
//             textTransform: 'capitalize', 
//             py: 2,
//             mt: 3, 
//             mb: 2,
//             borderRadius: 0,
//             backgroundColor: '#14192d',
//             "&:hover": {
//                 backgroundColor: '#1e2a5a',
//             }
//         }}
//         >
//             Login
//         </Button>
//         <NavLink to='/signup'>Not registered/Registerd Here</NavLink>
//     </Box>
//     </Stack>

//   )
// }

// export default Login



import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
// import { useUserAuth } from "../../context/UserAuthContext";
import TwitterIcon from '@mui/icons-material/Twitter';
import "./Login.css";
import {auth} from "../context/firebase";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    // const { logIn, googleSignIn } = useUserAuth();
    const navigate = useNavigate();
    
    const [signInWithGoogle,
        
        googleUser,
        googleLoading,
        googleError,
    ] = useSignInWithGoogle(auth);


    const [signInWithEmailAndPassword,
         user,
          loading,
           error] = useSignInWithEmailAndPassword(auth)
    
           useEffect(() => {
            if (googleUser) {
                console.log(googleUser);
                navigate('/');
            }
            if (user) {
                console.log(user);
                navigate('/');
            }
        }, [user, googleUser, navigate]);
    
           
           if(error)
           console.log(error.message)
   
           if(loading)
           console.log("loading.........")

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        await signInWithEmailAndPassword(email, password);
  
    };

    const handleGoogleSignIn = async (e) => {
        console.log("clicked")
        e.preventDefault();
        await signInWithGoogle()
    
    };

    return (
        <>




            <div className="login-container">
                

                <div className="form-container">
                    <div className="form-box" >
                        <h2 className="heading">Happening now</h2>

                        {error && <p>{error.message}</p>}
                        <form onSubmit={handleSubmit}>

                            <input
                                type="email" className="email"
                                placeholder="Email address"
                                onChange={(e) => setEmail(e.target.value)}
                            />



                            <input className="password"
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />


                            <div className="btn-login">
                                <button type="submit" className="btn" >Log In</button>
                            </div>
                        </form>
                        <hr />
                        <div>
                            <GoogleButton

                                className="g-btn"
                                type="light"

                                onClick={handleGoogleSignIn}
                            />


                        </div>
                    </div>
                    <div>
                        Don't have an account?
                        <Link
                            to="/signup"
                            style={{
                                textDecoration: 'none',
                                color: 'var(--twitter-color)',
                                fontWeight: '600',
                                marginLeft: '5px'
                            }}
                        >
                            Sign up
                        </Link>
                    </div>

                </div>


            </div>


        </>
    );
};

export default Login;