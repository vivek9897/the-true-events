import React from 'react'
import {Link} from "react-router-dom"

const SignIn = ()=>{
    return(
        <div>
          
           


           
            
       
            <div class='mycard'>
            <div class="card auth2-card input-field">
            <h1>Login</h1>
            <input
            type = "text"
            placeholder = 'email'/>
            <input
            type = "text"
            placeholder = 'Password'/>
           

            <button className="btn waves-effect waves-light">Signup</button>
            <h5>
                <Link to="/"> not registered yet!</Link>
            </h5>
            </div>
           

 
        </div>

        </div>
       

      
        
    )

}
export default SignIn