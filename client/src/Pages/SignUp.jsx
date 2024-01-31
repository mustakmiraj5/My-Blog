import React, { useState } from 'react';

const SignUp = () => {
    const [formData, setFormData] = useState({})
    const handleChange = (e) => {
        setFormData({...formData, [e.target.id] : e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div>
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
        <div className="form-control mt-6">
          <button className="btn btn-outline btn-warning text-white">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;