import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import logo from '../Img/Rock-logo.png';
import auth0Client from '../Login-components/Auth';

class NavBar extends Component{
    state ={
        openMenu:'close'
      }
    
      handlerMenu = () => {
        var navPages = document.getElementById('mobile--nav__display');
     
        if (navPages.style.display === 'none' || navPages.style.display === '' ) {
          navPages.style.display = 'block';
        } else {
          navPages.style.display = 'none';
        }
      };

    render(){
        return(
            <div>
                <nav>
                    <div className='desktop--nav'> 
                        <ul>
                            <li><NavLink to='/' className="desktop--link__style">Home</NavLink></li> 
                            <li> <NavLink to='/about' className="desktop--link__style">About</NavLink></li>
                            <li><NavLink to='/'><img src={logo} alt="Logo for Website"/></NavLink></li> 
                            <li> <NavLink to='/product' className="desktop--link__style">Products</NavLink></li>
                            <li><NavLink to='/contact' className="desktop--link__style">Contact</NavLink></li> 
                            {auth0Client.isAuthenticated() ? <li><NavLink to="/admin" className="desktop--link__style">Admin</NavLink></li> : null}
                            <li>
                                <NavLink to='/admin'>
                                {!auth0Client.isAuthenticated() && (
                                    <button onClick={auth0Client.signIn} >Log In</button>
                                )}
                                {auth0Client.isAuthenticated() && (
                                    <button onClick={auth0Client.signOut} >Log Out</button>
                                )}
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className='mobile--nav__container'> 
                        <div className="mobile--top__container">
                            <img src={logo} className="Img__Size" onClick={this.handlerMenu} alt="Logo for Website"/>  
                            <h1 className="top--text">Rocks-R-us</h1>
                            <i className="fas fa-search"></i> 
                        </div>
                        <ul id='mobile--nav__display'>
                            <li><NavLink to='/' className="mobile--link__style">Home</NavLink></li> 
                            <li> <NavLink to='/about' className="mobile--link__style">About</NavLink></li>
                            <li> <NavLink to='/product' className="mobile--link__style">Products</NavLink></li>
                            <li><NavLink to='/contact' className="mobile--link__style">Contact</NavLink></li> 
                            {auth0Client.isAuthenticated() ? <li><NavLink to="/admin" className="mobile--link__style">Admin</NavLink></li> : null}
                            <li>
                                <NavLink to='/admin'>
                                {!auth0Client.isAuthenticated() && (
                                    <button onClick={auth0Client.signIn} >Log In</button>
                                )}
                                {auth0Client.isAuthenticated() && (
                                    <button onClick={auth0Client.signOut} >Log Out</button>
                                )}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;