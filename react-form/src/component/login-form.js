import React from 'react'


export default class LoginForm extends React.Component {
    render() {
        return ( 
            <div className='container'>
            
            <form style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
                <input type="text" name="username" placeholder="Username"></input>
                <input type="text" name="password"  placeholder="Password"></input>
            </form> 
            <h3 className="login-header" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Login</h3>  
            </div>
        )
    }
}