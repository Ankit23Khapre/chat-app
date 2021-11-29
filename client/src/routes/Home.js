import React from "react"
import Logo from '../assets/img/logo.jpg'
import { Link } from 'react-router-dom'
export default function Home(){
    return (
      <>
        <div
          className="container justify-content-center "
          style={{ height: 70+ "vh" }}
        >
          <div className="row">
            <div className="col">
              <div className="card mt-2 cardSize">
                <img src={Logo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="test text-center mt-0">Welcome To Chat App</h4>
                  
                </div>
              </div>
            </div>
            <div className="col">
            <div className="card-body">
                    <h3>Online Chat</h3>
                  <p className="card-text">
                  Online chat may refer to any kind of communication over the Internet that offers a real-time transmission of text messages from sender to receiver. Chat messages are generally short in order to enable other participants to respond quickly. Thereby, a feeling similar to a spoken conversation is created, which distinguishes chatting from other text-based online communication forms such as Internet forums and email. Online chat may address point-to-point communications as well as multicast communications from one sender to many receivers and voice and video chat, or may be a feature of a web conferencing service.
                  </p>
                   <p>
                  Online chat in a less stringent definition may be primarily any direct text-based or video-based (webcams), one-on-one chat or one-to-many group chat (formally also known as synchronous conferencing), using tools such as instant messengers, Internet Relay Chat (IRC), talkers and possibly MUDs or other online games. The expression online chat comes from the word chat which means "informal conversation". Online chat includes web-based applications that allow communication – often directly addressed, but anonymous between users in a multi-user environment. 
                  </p>
                  <br/>
                        <form className="button">
                        <b> Create Account & login to use this App :  </b>
                            <Link className="btn btn-warning md-2 me-2" to='/create-account'>Create Account</Link>
                            <Link className="btn btn-primary  " to='/login'>Login</Link>
                        </form>
                </div>
            </div>
          </div>
        </div>
      </>
    );
}

