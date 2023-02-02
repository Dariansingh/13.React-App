import React from 'react'


export default class LoginForm extends React.Component {
    render() {
        return ( 
            <form> <h3>Login</h3> 
                <input type="text" name="username" placeholder="Username"></input>
                <input type="text" name="password"  placeholder="Password"></input>
                
            </form>  
        )
    }
}