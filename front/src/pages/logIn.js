import React, { Component } from 'react'
import styles from '../styles/form.css'

export class loginForm extends Component {

   constructor(props) {
      super(props)

       this.state = {
          email: "",
          password: ""
        }
   }
    emailHandler = (event) => {

     this.setState({
       email: `${event.target.value}`
     })
    }

    passwordHandler = (event) => {
     
        this.setState({
       password: `${event.target.value}`   
    })
    }
    
    formHandler = () => {
        const message = `${this.state.username} with email ${this.state.email} \n you're welcome`;

        return alert(message);
     }


    render() {
        return (
          <div>
                <form className="form" id='loginForm' onSubmit={this.formHandler}>
                    <h1>Log<span>In</span></h1>
                    <div className="label-input-container">
                        <div className='label-input'>
                            <label>Email</label>
                            <input type="email" value={this.state.email} onChange={this.emailHandler} />
                        </div>
                        <div className='label-input'>
                            <label>password</label>
                            <input type="password" value={this.state.password} onChange={this.passwordHandler} />
                        </div>
                            <input type="submit" value="Sign Up" className="submit" />
                            <span className="haveAccount">No account yet?  <a href='localhost:3000/signup'></a></span>
                        </div>
                </form>
          </div>
        )
    }
}

export default loginForm