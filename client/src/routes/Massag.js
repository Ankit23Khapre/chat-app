import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Sent from '../assets/img/sent.png'
import File from '../assets/img/file.png'
export default function Massag(){
    return (
      <div className="container">
        <div className="card">
      
          <div className="card-body1 ">
            <p className="card-text">
              <div className="d-flex bd-highlight pt-12">
                <div className="p-2 flex-grow-1 bd-highlight">
                  <input
                    className="textarea"
                    type="text"
                    placeholder="Text Here"
                  />
                </div>
                <div className="p-2 bd-highlight icon ">
                  <Link to="/">
                    <img src={File} />
                  </Link>
                </div>
                <div className="p-2 bd-highlight icon">
                  <Link to="/">
                    <img src={Sent} />
                  </Link>
                </div>
                
              </div>
            </p>
          </div>
        </div>
      </div>
    );
}