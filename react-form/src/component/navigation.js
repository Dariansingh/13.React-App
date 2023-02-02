import React from 'react'


export default class Navbar extends React.Component {
    render() {
        return ( 
            <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="contact.html">Contact</a>
            </nav>
            </div>
        );
    }
}