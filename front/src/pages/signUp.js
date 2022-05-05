import React, { Component } from 'react'
import styles from '../styles/form.css'
import { Link } from 'react-router-dom'

export class Form extends Component {

   constructor(props) {
      super(props)

       this.state = {
          email: "",
          username: "",
          password: ""
        }
   }
    emailHandler = (event) => {

     this.setState({
       email: `${event.target.value}`
     })
    }

    usernameHandler = (event) => {

     this.setState({
        username: `${event.target.value}`
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
                <form className="form" onSubmit={this.formHandler}>
                    <h1>Sign<span>Up</span></h1>
                    <div className="label-input-container">
                        <div className='label-input'>
                            <label>Email</label>
                            <input type="email" value={this.state.email} onChange={this.emailHandler} />
                        </div>
                        <div className='label-input'>
                            <label>userName</label>
                            <input className="text" value={this.state.username} onChange={this.usernameHandler} />
                        </div>
                        <div className='label-input'>
                            <label>password</label>
                            <input type="password" value={this.state.password} onChange={this.passwordHandler} />
                        </div>
                            <input type="submit" value="Sign Up" className="submit" />
                            <span className="haveAccount">Already have an account  <Link to='/login'>logIn</Link></span>
                        </div>
                </form>
          </div>
        )
    }
}

export default Form