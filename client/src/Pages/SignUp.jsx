import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.css'

const SignUp = () => {
    const [formData, setFormData] = useState({})
    const[error, setError] = useState("");
    const notify = () => toast.error('Sign Up Failed!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
      });
    const navigate = useNavigate()
    const handleChange = (e) => {
        setFormData({...formData, [e.target.id] : e.target.value.trim()})
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
          const res = await fetch('/api/auth/signup', {
            method:'POST',
            headers:{'Content-Type' : 'Application/json'},
            body: JSON.stringify(formData)
          });
          const data = await res.json();
          if(data.success === false){
            setError(data.message)
            notify()
          }
          // console.log(data)
          if(res.ok) {
            navigate('/signin')}
          // }else{
          //   notify()
          // }
        }catch(error){
          setError(error.message)
          notify()
        }
    }
    // console.log(error)
    return (
        <div>
          <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
            <div className="hero min-h-screen bg-gray-900">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SignUp now!</h1>
      <p className='py-6'>Discover stories, thinking, and expertise from writers on any topic.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Your Username</span>
          </label>
          <input id='username' onChange={handleChange} type="text" placeholder="username" className="input input-bordered input-warning w-full max-w-xs" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input id='email' onChange={handleChange} type="email" placeholder="email" className="input input-bordered input-warning w-full max-w-xs" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
          <input id='password' onChange={handleChange} type="password" placeholder="password" className="input input-bordered input-warning w-full max-w-xs" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-2">
          <button className="btn btn-outline btn-warning text-white">Sign Up</button>
          {error && <p className='text-red-600 pt-2 w-56'>{error}</p>}
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;