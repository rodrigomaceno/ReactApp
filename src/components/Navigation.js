import React from 'react';


// This is my navigation componenet that creates a navbar with some links
export default class Navigation extends React.Component{
    render(){
        // Here I created a navbar that is displayed on the top of the page
        return (
            
            <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 text-white">Rodrigo's World</span>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current='page' href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Menu</a>
                        </li>
                    </ul>  
                    </div>
                </div>
            </nav>
            
        )
        
    }
}
