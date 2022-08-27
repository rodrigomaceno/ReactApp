import React from "react";

export default class LoginForm extends React.Component{
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