import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import "../cssfiles/togglepg.css"
import "../cssfiles/signUpandIn.css"
import "../cssfiles/flexx.css"
import { setupToggle } from './toggleForm';

import { AuthContext } from "../../context/authContext";

// Sign Up as well as Login page

function LoginSignup() {

  useEffect(() => {
    setupToggle();
  }, []);



// LKSEFJSLFHALJ
// const[errors, setErrors] = useState({});

// const [successMessage, setSuccessMessage] = useState('');
// const [errorMessage, setErrorMessage] = useState('');


// const handleInput = (event) =>
// {
//     setValues((prev) => ({...prev, [event.target.name]: event.target.value}));
// };
// LNWEOFWHEOH


// Login functionality related javascript VISUAL

// KLAEJFIN;OFW;I
// const [lvalues, setlValues] = useState({
//     email: '',
//     password: ''
// })

// const[lerrors, setlErrors] = useState({})

// const handleLogInput = (logevent) =>
// {
//     setlValues(prev => ({...prev, [logevent.target.name]: logevent.target.value}));
// }
// JALKEHNCINQ'RE




//visual effects funtionality
    useEffect(() => {
        const handleButtonClick = () => {
          const cont = document.querySelector('.cont');
          cont.classList.toggle('s--signup', !cont.classList.contains('s--signup'));
        };
    
        const imgBtn = document.querySelector('.img__btn');
        if (imgBtn) {
          imgBtn.addEventListener('click', handleButtonClick);
        }

        return () => {
            // Cleanup the event listener on component unmount
            if (imgBtn) {
              imgBtn.removeEventListener('click', handleButtonClick);
            }
          };
        }, []);
//visual effects funtionality
      



// LOGIN LOGIC CODE

const { login } = useContext(AuthContext);


const [loginputs, setlogInputs] = useState({
  email: "",
  password: "",
});

const [logerr, setlogErr] = useState(null);
// Step 1: Define a new state variable for the login message
const [isLoggedIn, setIsLoggedIn] = useState(false);

const navigate = useNavigate()

const loghandleChange = (e) => {
  setlogInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
};

const loghandleLogin = async (e) => {
  e.preventDefault();
  try {
    await login(loginputs);
    // navigate("/test")

    // Step 2: Update the state on successful login
    setIsLoggedIn(true);
    
  } catch (logerr) {
    setlogErr(logerr.response.data);
    setIsLoggedIn(false); // Optionally reset on error
  }


};










// LOGIN LOGIC CODE




// STUDENT SIGN UP LOGIC CODE
const [studentInputs, setStudentInputs] = useState({
  firstname: "",
  lastname: "",
  uniEmail: "",
  dob: "",
  nationality: "",
  phonenum: "",
  uniPassword: "",
  weconnectPassword: "",

});

const [err, setErr] = useState(null);

const [message, setMessage] = useState(""); // For success or error messages


const handleChange = (e) => {

 // Reset messages when user starts editing the form again
 setMessage("");
 setErr(null);


  setStudentInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
};


const handleClick = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post("http://localhost:8800/api/auth/studentregister", studentInputs);
    console.log(response.data); // Log the successful response data
    setMessage(response.data || "User created successfully!");
    setErr(null); // Reset any previous errors
  } catch (err) {
    console.error(err);
    setErr(err.response?.data || 'An unexpected error occurred');
  }
};

console.log(err)
// STUDENT SIGN UP LOGIC CODE


// RECRUITER SIGN UP LOGIC
// rec = recruiter

const [recInputs, setrecInputs] = useState({

  RecFirstname: "",
  RecLastname: "",
  RecEmail: "",
  CompanyName: "",
  RecCountry: "",
  RecPhoneNum: "",
  RecPass: ""
               

});

const [recerr, setrecErr] = useState(null);

const rechandleChange = (e) => {
  setrecInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
};

const rechandleClick = async (e) => {
  e.preventDefault();

  try {
    await axios.post("http://localhost:8800/api/auth/recruiterregister", recInputs);
  } catch (recerr) {
    setrecErr(recerr.response.data);
  }
};

console.log(recerr)

// RECRUITER SIGN UP LOGIC








  return (
    
<>
    
{/* LOGIN FORM */}
{/* IIIIINNNNNNNN */}


    
    <div className="cont"> {/* biggest main div for both  */}
  {/* Sign In Form */}
  <div className="form sign-in">
    <h2>Welcome</h2>

    <label>

      <span>Email</span>

      <input type="email" 
      placeholder='Enter your Email' 
      name='email'
      onChange={loghandleChange} 
      className='form-control rounded-0'/>

      {/* {log.email && <span className='text-danger'>{lerrors.email}</span>} */}
   
    </label>


    <label>

      <span>Password</span>

      <input type="password" 
      placeholder='Enter your Password' 
      name='password'
      onChange={loghandleChange} 
      className='form-control rounded-0'/>

      {/* {lerrors.password && <span className='text-danger'>{lerrors.password}</span>} */}
    
    </label>


    <p className="forgot-pass">Forgot password?</p>

    <button 

    type="button" 
    // className="submit" 
    onClick={loghandleLogin} 
    style={{ display: 'block', margin: 'auto' }}>
    
    Login

    </button>

    {/* Step 3: Display the logged-in message conditionally */}
    {isLoggedIn && <p>You are logged in!</p>}
      {/* Display login errors if any */}
      {logerr && <p>Error: {logerr}</p>}


  {/* {errorMessage && <div className="error-message">{errorMessage}</div>}
  {successMessage && <div className="success-message">{successMessage}</div>} */}

  </div>



{/* IIIIINNNNNNNN */}
{/* LOGIN FORM */}











  {/* SIGN UP FORM */}
  
  <div className="sub-cont"> {/* big div for complete sign up page */}
  
    <div className="img"> {/* div for the left side of sign up page */}

      <div className="img__text m--up">
        <h3>Don't have an account? Please Sign up!</h3><h3>
        </h3></div>
      <div className="img__text m--in">
        <h3>If you already have an account, just sign in.</h3><h3>
        </h3></div>
      <div className="img__btn">
        <span className="m--up">Sign Up</span>
        <span className="m--in">Sign In</span>
      </div>

    </div> {/* div for the left side of sign up page */}

    






    
      

    <div className=" form sign-up formsignup"> {/* right side, sign up form div */}
{/* <div className="form sign-up formsignup"> */}

{/* toggle work start */}






{/* kjbkjbkj */}
<div className="wrapper">
  <div className="title-text">
    <div className="title login">Sign up as</div>
    <div className="title signup">Sign up as</div>
  </div>
  <div className="form-container">
    <div className="slide-controls">
      <input type="radio" name="slide" id="login" defaultChecked />
      <input type="radio" name="slide" id="signup" />
      <label htmlFor="login" className="slide login">Student</label>
      {/* wrote Student in place of Login */}
      <label htmlFor="signup" className="slide signup">Recruiter</label>
      {/* wrote Recruiter in place of Sign up */}
      <div className="slider-tab" />
    </div>


    <div className="form-inner"> {/* inner form div */}



{/* STUDENT SIGN UP FORM */}
      {/* considering login as the student sign up side of the toggle func */}
      <form action="#" className="login">

      


        <div className='flex-container'>


        <div className='flex-container-left'>

        <div className="field">

          <input type="text" 
          placeholder="First Name" 
          name="firstname"
          onChange={handleChange}
          required />

        </div>

        <div className="field">

          <input type="text" 
          placeholder="Last Name" 
          name="lastname"
          onChange={handleChange}
          required />

        </div>

        <div className="field">
          <input type="email"
          placeholder="University Domain Email Address"
          name="uniEmail"
          onChange={handleChange} 
          required />
        </div>

        <div className="field">

          <input type="date" 
          placeholder="Date of Birth"
          name="dob"
          onChange={handleChange} 
          required />

        </div>
        

        </div>

        <div className='flex-container-right'>

        <div className="field">

          <input type="text" 
          placeholder="Nationality"
          name="nationality"
          onChange={handleChange} 
          required />

        </div>

        <div className="field">

          <input type="number" 
          placeholder="Phone Number"
          name="phonenum"
          onChange={handleChange}
           required />

        </div>

        <div className="field">

          <input type="password" 
          placeholder="University Domain Password" 
          name="uniPassword"
          onChange={handleChange}
          required />

        </div>

        <div className="field">

          <input type="password" 
          placeholder="WeConnect Password" 
          name="weconnectPassword"
          onChange={handleChange}
          required />

        </div>

        </div>
        
        </div> {/* flex container div */}


        <div className="pass-link"><a href="#">Forgot password?</a></div>
       
        <div className="field btn"> 
          <div className="btn-layer" >
          
          
          {/* <input type="submit" defaultValue="Login" /> */}
            <button onClick={handleClick}>Register</button>
        </div>
        </div>

        {err && err}
        
        

       
  {/* Display message if it exists */}
  {/* {message && <div className={`message ${err ? 'error' : 'success'}`}>{message}
  </div>} */}

        <div className="signup-link">Not a member? <a href>Signup now</a></div>

      
      </form>
{/* STUDENT SIGN UP */}



      {/* further student signup form */}



{/* RECRUITER SIGN UP FORM */}
      <form action="#" className="signup">
        {/* considering signup as the recruiter sign up side of the toggle func */}


        <div className='flex-container'>


        <div className='flex-container-left'>

        <div className="field">

          <input type="text" 
          placeholder="First Name" 
          name="RecFirstname"
          onChange={rechandleChange}
          required />

        </div>

        <div className="field">
          <input type="text" 
          placeholder="Last Name" 
          name="RecLastname"
          onChange={rechandleChange}
          required />
        </div>

        <div className="field">
          <input type="email" 
          placeholder="Email Address" 
          name="RecEmail"
          onChange={rechandleChange}
          required />
        </div>

        <div className="field">
          <input type="text" 
          placeholder="Company Name"
          name="CompanyName"
          onChange={rechandleChange}
          required />
        </div>
        
        </div>

        <div className='flex-container-right'>

        <div className="field">
          <input type="text" 
          placeholder="Country" 
          name="RecCountry"
          onChange={rechandleChange}
          required />
        </div>

        <div className="field">
          <input type="number" 
          placeholder="Phone Number" 
          name="RecPhoneNum"
          onChange={rechandleChange}
          required />
        </div>

        <div className="field">
          <input type="password" 
          placeholder="Password" 
          name="RecPass"
          onChange={rechandleChange}
          required />
        </div>

        {/* <div className="field">
          <input type="password" placeholder="Confirm Password" required />
        </div> */}

        </div>
        
        </div> {/* flex container div */}



        <div className="field btn"> 
          <div className="btn-layer" >

          {/* <input type="submit" defaultValue="Signup" /> */}
          <button onClick={rechandleClick}>Register</button>
        </div>
        </div>

        {recerr && recerr}

      </form>
{/* RECRUITER SIGN UP FORM */}



    </div> {/* inner form div */}
    

  </div>
</div>

{/* jlbkjbj */}





{/* toggle work end */}
    </div> {/* right side, sign up form div */}

       

  </div> {/* big div for complete sign up page */}


</div> {/* biggest main div for both  */}
</>
  )
}

export default LoginSignup




    