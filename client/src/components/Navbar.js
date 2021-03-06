import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlusCircle } from 'react-icons/fa';

import UserToken from "./UserToken";
import Logout from './Logout';
import Massag from '../routes/Massag';

export default function Navbar() {
    const { token } = UserToken();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/"><b>Chat Me</b></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            {
                                !token || token.err ?
                                    <>
                                    </>
                                    :
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/dashboard">Dashbaord</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/addPost">
                                                <FaPlusCircle /> Post
                                            </Link>
                                        </li>
                                        <li className="massage">
                                            <Link className='nav-link' to="/Massag">
                                                Massages
                                            </Link>
                                        </li>
                                    </>
                            }

                        </ul>
                        <div className="d-flex">
                            {
                                !token || token.err ?
                                    <>
                                        <Link className="btn btn-primary me-2" to='/login'>Login</Link>
                                        <Link className="btn btn-warning" to='/create-account'>Create Account</Link>
                                    </>
                                    :
                                    <>
                                        <Logout />
                                    </>
                            }

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}