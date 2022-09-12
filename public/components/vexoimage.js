import React, { Component } from 'react'
import './VexoimageStyles.css'

class vexoimage extends Component {
    render() {
        return (
      <div className='vexo.img'>
        <div className='heading'>
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
         </div>
        )
        }
    
}
export default vexoimage