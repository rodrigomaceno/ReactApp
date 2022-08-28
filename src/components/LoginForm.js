import React from "react";

// This is the React component I created for the Login Form
// I used a variable to store a border property for the form

export default class LoginForm extends React.Component{
    // This is the method that prints the XML to the screen
    render(){

        const x ={
            border: '1px solid black'
        }

        return (
            <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            
                <div className="col-md">
                </div>
            
                <div className="col-md">
                    <form style={x} className="form-control">
                        <br></br>
                
                        <div className="form-group">
                            <input type={'text'} className="form-control" placeholder="Username"/>
                        </div>

                        <div className="form-group">
                            <input type={'password'} className="form-control" placeholder="Password"/>
                        </div>
                    
                        <br></br>
                        <h3>Log In</h3>
                    
                    </form>
                </div>

                <div className="col-md">
                </div>
            
            </div>
        )
    }
}