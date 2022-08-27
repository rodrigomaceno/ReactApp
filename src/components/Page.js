import React from "react";
import LoginForm from "./LoginForm";
import Navigation from "./Navigation";

export default class Page extends React.Component{
    render(){
        
        
        return React.createElement('div', {}, React.createElement(Navigation, {}, null), React.createElement(LoginForm, {}, null))
        
        
    }
}