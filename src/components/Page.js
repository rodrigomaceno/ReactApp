import React from "react";
import LoginForm from "./LoginForm";
import Navigation from "./Navigation";

// This is my page componenet that is used to display both the Navbar and the LoginForm on the screen
export default class Page extends React.Component{
    render(){
        
        // This creates the HTML elements and display them neatly 
        return React.createElement('div', {}, React.createElement(Navigation, {}, null), React.createElement(LoginForm, {}, null))
        
        
    }
}