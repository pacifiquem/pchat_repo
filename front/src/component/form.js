import React from 'react'
import '../styles/form.css'

function signUpForm (){
    return(
        <div>
            <form className="form">
                <h1>Sign<span>Up</span></h1>
                <div className="label-input-container">
                    <div className='label-input'>
                        <label>Email</label>
                        <input type="email" value={email} />
                    </div>
                    <div className='label-input'>
                        <label>userName</label>
                        <input className="text" value={username} />
                    </div>
                    <div className='label-input'>
                        <label>password</label>
                        <input type="password" value={password} />
                    </div>
                        <input type="submit" value="Sign Up" className="submit" />
                        <span className="haveAccount">Already have an account  LOG IN</span>
                    </div>
            </form>
        </div>
    );
}

export default signUpForm;