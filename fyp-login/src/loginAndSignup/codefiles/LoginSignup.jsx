import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import "../cssfiles/togglepg.css"
import "../cssfiles/signUpandIn.css"
import "../cssfiles/flexx.css"
// fyp-login\src\loginAndSignup\cssfiles\flexx.css
import { setupToggle } from './toggleForm';
// Sign Up as well as Login page

function LoginSignup() {

  useEffect(() => {
    setupToggle();
  }, []);

// Sign Up functionality related javascript
//     const navigate = useNavigate();

//     const [values, setValues] = useState({
//     name: '',
//     email: '',
//     password: ''
// });

const[errors, setErrors] = useState({});

const [successMessage, setSuccessMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');


const handleInput = (event) =>
{
    setValues((prev) => ({...prev, [event.target.name]: event.target.value}));
};

// const handleSubmit = async (event) =>
// {
//     event.preventDefault();
//     // setErrors(Validation(values));
//     // console.log(values);

//     try {
//       const response = await axios.post('http://localhost:5000/api/CreateUser', {
//         name: values.name,
//         email: values.email,
//         password: values.password
//       });
//       console.log("successful");
//       //give the file name after api
//       setSuccessMessage('Signup successful!'); // Set success message
//       setErrorMessage(''); // Clear any previous error message
      
//     } catch (error) {
//       console.error('Error creating user:', error);
//       setErrorMessage('Signup failed. Please try again.'); // Set error message
//       setSuccessMessage(''); // Clear any previous success message
      
//     }
// };
// Sign Up functionality related javascript



// Login functionality related javascript VISUAL

const [lvalues, setlValues] = useState({
    email: '',
    password: ''
})

const[lerrors, setlErrors] = useState({})

const handleLogInput = (logevent) =>
{
    setlValues(prev => ({...prev, [logevent.target.name]: logevent.target.value}));
}

// const handleLogSubmit = async (logevent) =>
// {
//     logevent.preventDefault();
//     // setErrors(Validation(lvalues));

// try {
//   // Perform login operation

//   const response = await axios.post("http://localhost:5000/api/LoginUser", {
//     email: lvalues.email,
//     password: lvalues.password,
//   });
//   console.log('Login successful');
//   setSuccessMessage('Login successful!'); // Set success message
//   setErrorMessage(''); // Clear any previous error message
//   navigate('/');
// } catch (lerror) {
//   console.error('Error during login:', lerror);
//   setErrorMessage('Invalid credentials. Please try again.'); // Set error message
//   setSuccessMessage(''); // Clear any previous success message
// }
// };
// Login functionality related javascript


// fetchData(); // Call the async function




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
      
// NEW CODE FOR NEW SIGNUPS LOGIC

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

// og code
// const handleClick = async (e) => {
//   e.preventDefault();

//   try {
//     await axios.post("http://localhost:8800/api/auth/studentregister", studentInputs);
//   } catch (err) {
//     setErr(err.response.data);
//   }
// };


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



























    

  return (
    
<>
    

    {/* IIIIINNNNNNNN */}
    
    <div className="cont"> {/* biggest main div for both  */}
  {/* Sign In Form */}
  <div className="form sign-in">
    <h2>Welcome</h2>

    <label>
      <span>Email</span>
      <input type="email" placeholder='Enter your Email' name='email'
      // onChange={handleLogInput} 
      className='form-control rounded-0'/>
      {lerrors.email && <span className='text-danger'>{lerrors.email}</span>}
    </label>

    <label>
      <span>Password</span>
      <input type="password" placeholder='Enter your Password' name='password'
      // onChange={handleLogInput} 
      className='form-control rounded-0'/>
      {lerrors.password && <span className='text-danger'>{lerrors.password}</span>}
    </label>
    <p className="forgot-pass">Forgot password?</p>
    <button type="button" className="submit" 
    // onClick={handleLogSubmit} 
    style={{ display: 'block', margin: 'auto' }}>Sign In</button>

    {errorMessage && <div className="error-message">{errorMessage}</div>}
  {successMessage && <div className="success-message">{successMessage}</div>}

  </div>
{/* IIIIINNNNNNNN */}











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



{/* STUDENT SIGN UP */}
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
          
          
          {/* <input type="submit"  /> */}
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


      {/* further student signup form */}





      <form action="#" className="signup">
        {/* considering signup as the recruiter sign up side of the toggle func */}


        <div className='flex-container'>


        <div className='flex-container-left'>

        <div className="field">
          <input type="text" placeholder="First Name" required />
        </div>

        <div className="field">
          <input type="text" placeholder="Last Name" required />
        </div>

        <div className="field">
          <input type="email" placeholder="Email Address" required />
        </div>

        <div className="field">
          <input type="date" placeholder="Date of Birth" required />
        </div>
        
        </div>

        <div className='flex-container-right'>

        <div className="field">
          <input type="text" placeholder="Country" required />
        </div>

        <div className="field">
          <input type="number" placeholder="Phone Number" required />
        </div>

        <div className="field">
          <input type="password" placeholder="Password" required />
        </div>

        <div className="field">
          <input type="password" placeholder="Confirm Password" required />
        </div>

        </div>
        
        </div> {/* flex container div */}




        <div className="field btn">
          <div className="btn-layer" />
          <input type="submit" defaultValue="Signup" />
        </div>

      </form>


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




     {/* <h2>Create your Account</h2>
      <label>

        <span>Name</span>
        <input type="text" placeholder='Enter your Name' name='name' 
        //  onChange={handleInput}
          className='form-control rounded-0'/>
         {errors.name && <span className='text-danger'>{errors.name}</span>}
      
      </label>
      <label>
        <span>Email</span>
        <input type="email" placeholder='Enter your Email' name='email'
        // onChange={handleInput} 
        className='form-control rounded-0'/>
        {errors.email && <span className='text-danger'>{errors.email}</span>}
      </label>

      <label>
        <span>Password</span>
        <input type="password" placeholder='Enter your Password' name='password'
        // onChange={handleInput} 
        className='form-control rounded-0'/>
        {errors.password && <span className='text-danger'>{errors.password}</span>}
      </label>

      <button type="button" className="submit" 
      // onClick={handleSubmit} 
      style={{ display: 'block', margin: 'auto' }}>Sign Up</button> 
      {errorMessage && <div className="error-message">{errorMessage}</div>}
  {successMessage && <div className="success-message">{successMessage}</div>} */}
      {/* add onclick btn here, dont add brackets */}
