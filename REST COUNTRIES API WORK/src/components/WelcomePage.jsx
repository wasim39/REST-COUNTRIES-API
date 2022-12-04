import React from 'react'
import { Link } from 'react-router-dom'

function WelcomePage({userAction}) {
  return (
    <center>
    <div class="fixed-absolute">
    
        <h1 >We Warmly Welcome You Here!</h1> 
        <Link to="/FormInput" className='btn btn-danger'>let's Go Bois</Link>  
        
    </div>
    
    </center>
    
    )
  }
  
  export default WelcomePage
  