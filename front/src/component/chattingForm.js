import React, { Component } from 'react'
import { IconsManifest } from 'react-icons';
import styles from '../styles/chattingForm.css'

export class chattingForm extends Component {
  render() {
    return (
      <div className='chattContainer'>
        <form action={this.chattingFormHandler} method="post">
            <input type="text" placeholder="Type Message"/>
            <input type="submit" value={<IconsManifest />} />
        </form>
      </div>
    )
  }
}

export default chattingForm
