import React, { Component } from 'react'
import style from '../styles/chat.css'
import ChattingForm from '../component/chattingForm';

export class chattingPage extends Component {
  render() {
    return (
        <div className='container'>
            <ChattingForm />
        </div>
    )
  }
}

export default chattingPage;
