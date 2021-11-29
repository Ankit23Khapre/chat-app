import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/img/logo.jpg'
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(){
        super();
        this.state={
            userInfo:[]
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/api/read')
            .then((res) => {
                this.setState({userInfo:res.data});
            })
            .catch((err) => {
                console.log('Err is ' + err)
            })
    }

    render() {
        let myPosts;
        var info = this.state.userInfo;
        if(!info){
            myPosts="Data Not Found";
        }
        else
        {
            myPosts = info.map((value,index) => {
                return(
                    <div className="card w-100 mb-3">
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div className="card-body">
                            <h5 className="card-title">{value.postCaption}</h5>
                            <p className="card-text">{value.postLocation}</p>
                        </div>
                    </div>
                );
            });
        }

        return (
            <div className="container pt-3">
                <div className="row">
                    {/* Post List */}
                    <div className="col-md-8 border">
                        {myPosts}
                    </div>
                    {/* Profile & folowers suggestions */}
                    <div className="col-md-4">
                        <div className="d-flex align-items-center mb-2">
                            <img src={Logo} className="rounded-circle logo me-2" alt="..."/>
                            <div className='row'>
                                <div className='col-md-9'>
                                <p className='m-0'><b>ankit_khapre</b></p>
                                <p className='m-0'>Ankit Khapre</p>
                                </div>   
                                <div className='col-md-3'>
                                 <Link className="btn btn-primary" to='/'>Profile</Link>
                                </div>
                            </div>
                         </div>
                         <hr/>


                        <div className="d-flex align-items-center mb-2">
                            <img src={Logo} className="rounded-circle logo me-2" alt="..."/>
                                <div className='row'>
                                    <div className='col-md-8'>
                                        <p className='m-0'><b>UserName</b></p>
                                         <p className='m-0'>first And Last Name</p>
                                    </div>
                                    <div className='col-md-4'>
                                        <Link className="btn btn-primary" to='/follow'>Follow</Link>
                                    </div>
                                 </div>
                        </div>


                        <div className="d-flex align-items-center mb-2">
                            <img src={Logo} className="rounded-circle logo me-2" alt="..."/>
                            
                                <div className='row'>
                                    <div className='col-md-8'>
                                        <p className='m-0'><b>UserName</b></p>
                                         <p className='m-0'>first And Last Name</p>
                                    </div>
                                    <div className='col-md-4'>
                                        <Link className="btn btn-primary" to='/follow'>Follow</Link>
                                    </div>
                                 </div>
                            
                        </div>

                        <div className="d-flex align-items-center mb-2">
                            <img src={Logo} className="rounded-circle logo me-2" alt="..."/>
                            
                                <div className='row'>
                                    <div className='col-md-8'>
                                        <p className='m-0'><b>UserName</b></p>
                                         <p className='m-0'>first And Last Name</p>
                                    </div>
                                    <div className='col-md-4'>
                                        <Link className="btn btn-primary" to='/follow'>Follow</Link>
                                    </div>
                                 </div>
                            
                        </div>

                        
                        <div className="d-flex align-items-center mb-2">
                            <img src={Logo} className="rounded-circle logo me-2" alt="..."/>
                            
                                <div className='row'>
                                    <div className='col-md-8'>
                                        <p className='m-0'><b>UserName</b></p>
                                         <p className='m-0'>first And Last Name</p>
                                    </div>
                                    <div className='col-md-4'>
                                        <Link className="btn btn-primary" to='/follow'>Follow</Link>
                                    </div>
                                 </div>
                            
                        </div>

                        <div className="d-flex align-items-center mb-2">
                            <img src={Logo} className="rounded-circle logo me-2" alt="..."/>
                            
                                <div className='row'>
                                    <div className='col-md-8'>
                                        <p className='m-0'><b>UserName</b></p>
                                         <p className='m-0'>first And Last Name</p>
                                    </div>
                                    <div className='col-md-4'>
                                        <Link className="btn btn-primary" to='/follow'>Follow</Link>
                                    </div>
                                 </div>
                            
                        </div>

                        <div className="d-flex align-items-center mb-2">
                            <img src={Logo} className="rounded-circle logo me-2" alt="..."/>
                            
                                <div className='row'>
                                    <div className='col-md-8'>
                                        <p className='m-0'><b>UserName</b></p>
                                         <p className='m-0'>first And Last Name</p>
                                    </div>
                                    <div className='col-md-4'>
                                        <Link className="btn btn-primary" to='/follow'>Follow</Link>
                                    </div>
                                 </div>
                        </div>
                    </div>
            
                </div>
        </div>
        )
    }
}