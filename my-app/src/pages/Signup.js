// import React, { useState } from 'react'
// import { NavLink,useNavigate} from 'react-router-dom'
// import {  
//     Box,
//     Button,
//     Stack,
//     TextField
// } from '@mui/material'


// const Signup = () => {

//     const navigate = useNavigate();
//   // this is for storing redirecting history

//   //for taking field values 
//   let user,setUser;

//   // creating hooks
//   [user, setUser] = useState({ fname: "", lname: "", email: "", password: "", cpassword: "" });

//   let name, value;

//   //on filling field event 
//   const handleInputs = (e) => {
//     console.log(e);

//     //e.target.name whenever user input in the field the name of that field is stored in name variable
//     name = e.target.name;

//     //e.target.name whenever user input in the field the value of that field is stored in value variable
//     value = e.target.value;
    

//     setUser({ ...user, [name]: value })
    
//   }

// //for posting data to server 
// const handleSubmit= async(e) =>{

//   //this is for prevention page from loading on posting data or event occur
//   e.preventDefault();

//   //this is for storing data filled by user in input field
//   const {fname, lname, email, password, cpassword} =user;


//   // this is for taking data from client side to server
//   const res= await fetch("/register",{
//     method:"POST",
//     headers:{
//       "Content-Type":"application/json",
//       "Accept":"application/json",
//     },

//     // when we send data to server we have to change json into string
//     body: JSON.stringify({
//       fname, lname, email, password, cpassword
//     })
//   });

//   //server in return of accepting or rejecting data send a response 
//   const data =await res.json();
  
//   if(data.status=== 422 || !data){
//     window.alert("Invalid Registeration")
//   }
  
  
//   else{
//     window.alert("Registeration Successfull");
//     console.log("Registeration Successfull");

//     navigate("/login");
//   }

// }


//   return (

    
//     <Stack 
//     component='section'
//     direction="column"
//     justifyContent= 'center'
//     alignItems='center'
//     sx={{
//         py: 10,
//         px: 50,
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
//             type="text"
//             id="fname"
//             label="First Name"
//             name="fname"
//             autoComplete="first name"
//             autoFocus
//                 value={user.fname}
//                 onChange={handleInputs}
//                 placeholder="First Name"
//         />
//          <TextField
//             margin="normal"
//             required
//             fullWidth
//             type="text"
//             id="lname"
//             label="Last Name"
//             name="lname"
//             autoComplete="last name"
//             autoFocus
//                 value={user.lname}
//                 onChange={handleInputs}
//                 placeholder="Last Name"
//         />
//          <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//             value={user.email}
//             onChange={handleInputs}
//             placeholder="Email"
//         />
//          <TextField
//             margin="normal"
//             required
//             fullWidth
//             type="password"
//             id="password"
//             label="Password"
//             name="password"
//             autoComplete="password"
//             autoFocus
//                 value={user.password}
//                 onChange={handleInputs}
//                 placeholder="Password"
//         />
//         <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="password"
//             label="Confirm Password"
//             name="cpassword"
//             autoComplete="password"
//             autoFocus
//                 value={user.cpassword}
//                 onChange={handleInputs}
//                 placeholder="Confirm Password"
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
//             Signup
//         </Button>
//         <NavLink to='/signin'>Already registered</NavLink>
//     </Box>
//     </Stack>
//   )
// }

// export default Signup



import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useUserAuth } from "../../context/UserAuthContext";
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleButton from "react-google-button";
import "./Login.css"
import {auth} from "../context/firebase";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
const Signup = () => {
    const [username, setUsername] = useState(" ");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [password, setPassword] = useState("");
    // const { signUp } = useUserAuth();
    // const { googleSignIn } = useUserAuth();
   
    const x=process.env.REACT_APP_SERVER_URL;

    let navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    
      const [signInWithGoogle,
        googleUser,
        googleLoading,
        googleError,
    ] = useSignInWithGoogle(auth);



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




    const handleSubmit = async (e) => {
        console.log("clicked")
        
        e.preventDefault();
        setErrorMessage("");


        try {
     
            const data=await createUserWithEmailAndPassword(email,password)
            
            if(loading)
        console.log("loading.........")

        
        if(error)
        console.log(error.message)
            
            console.log(data)


            const user = {
                username: username,
                name: name,
                email: email,
            }

            fetch(`${x}/register`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user),
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        console.log(data)
                        navigate('/')
                    }
                })

        } catch (err) {
            setErrorMessage(err.message);
            window.alert(err.message);
        }
    };

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        signInWithGoogle()
        console.log(googleUser)
        if(user || googleUser)
           {
               console.log(user)
                 navigate('/')
           }

    };

    return (

        <>
            <div className="login-container">

          


                <div className="form-container">
                    <div className="">

                        <h2 className="heading">Happening now</h2>

                        <div class="d-flex align-items-sm-center">
                            <h3 className="heading1"> Join Us today </h3>
                        </div>


                        {errorMessage && <p className="errorMessage">{errorMessage}</p>}
                        <form onSubmit={handleSubmit}>

                            <input className="display-name" style={{ backgroudColor: "red" }}
                                type="username"
                                placeholder="@username "
                                onChange={(e) => setUsername(e.target.value)}
                            />

                            <input className="display-name" style={{ backgroudColor: "red" }}
                                type="name"
                                placeholder="Enter Full Name"
                                onChange={(e) => setName(e.target.value)}
                            />

                            <input className="email"
                                type="email"
                                placeholder="Email address"
                                onChange={(e) => setEmail(e.target.value)}
                            />



                            <input className="password"
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />


                            <div className="btn-login">
                                <button type="submit" className="btn">Sign Up</button>
                            </div>
                        </form>
                        <hr />
                        <div className="google-button">
                            <GoogleButton

                                className="g-btn"
                                type="light"

                                onClick={handleGoogleSignIn}
                            />
                        </div>
                        <div>
                            Already have an account?
                            <Link
                                to="/login"
                                style={{
                                    textDecoration: 'none',
                                    color: 'var(--twitter-color)',
                                    fontWeight: '600',
                                    marginLeft: '5px'
                                }}
                            >
                                Log In
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Signup;
