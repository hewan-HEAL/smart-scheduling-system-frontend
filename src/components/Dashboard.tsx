import { useState } from 'react';
import image from '../assets/image.jpg';
//import amu from '../assets/amu.jpg';
import SignUp from './SignUp';
import AuthModal from './AuthModal';
function Dashboard(){
    const[showSignUp, setShowSignUp] = useState(false);
    const [showModal, setShowModal] = useState(false);
    return (
        <>

       <div  className="text-dark" >
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
                <a className="navbar-brand fw-bold text-primary" href="#">
                   Arba Minch University {"  "}
                   <span className='text-dark' style={{fontSize:"0.7em", verticalAlign:"sub"}}>University Appointment scheduling system  </span> 
                </a>
                <div className="mx-auto d-flex gap-5">
                    <a href="#" className="nav-link">Feature</a>
                    <a href="#" className="nav-link">How it Works</a>
                    <a href="#" className="nav-link">Contact</a>
                    
                </div>
                <div className='d-flex gap-2'>
                  
                    <button onClick={ ()=> setShowModal(true)} className="btn btn-primary">LogIn</button>
               </div>
            </nav>
            {/* hero section*/}
            <div className="container py-5">
                <div className="row align-items-center">
                    {/*Left content*/}
                    <div className="col-md-6 text-start" >
                        <span className="badge bg-primary-subtle text-primary mb-2">
                            Smart Universtiy Scheduling
                        </span>
                        <h1 className="fw-bold mb-4">
                            Book meetings with <span className="text-primary">university officials</span> effortlessly
                        </h1>
                        <p className="text-muted mb-4">
                          Smart-scheduling systems enables anyone to easily schedule appointments with university officials—no more waiting in line or phone tag.
                        </p>
                        <div className="row mb-2">
                            <div className="col-6">
                                 <p>📅 Smart Scheduling</p>
                                 <p>🏢 Multi-Department</p>
                            </div>
                            <div className="col-6">
                              <p>⏱️ Real-time Availability</p>
                                <p>🔔 Instant Notifications</p>
                            </div>
                        </div>
                        <div className="d-flex gap-3">
                           <button  onClick={() => setShowModal(true)}  className="btn btn-primary" >
                              Book Your first Meeting
                            </button>

                      {/* Show modal only when button is clicked */}
   
                        {showModal && (
                          <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                            <AuthModal onClose={() => setShowModal(false)} />
                          </div>
                        )} 
                          <button className="btn btn-outline-primary">Watch Demo</button>
                        </div>

                    </div>
                    {/*Right content*/}
                    <div className="col-md-6 text-center">
                        <img 
                           src={image}
                           alt="meeting image"
                           className='img-fluid rounded shadow'
                           style={{width:"600px", height:"400px", objectFit:"cover"}}
                           />
                           <div className='bg-white shadow rounded p-2 position-absolute'
                             style={{ bottom: "110px", left: "60%", transform: "translateX(-50%)" }}>
                            <strong className='text-dark' >Meeting Confirmed</strong> <br />
                            Tomorrow at 2:00 PM
                           </div>
                            <div className='bg-white shadow rounded p-2 position-absolute'
                             style={{ bottom: "370px", left: "84%", transform: "translateX(-50%)" }}>
                            <strong className='text-dark' >Today's Schedule</strong> <br />
                            8 Appointment -2 avaliable slots
                           </div>
                    </div>
                    </div>
                    </div>
 {/* Bootstrap Modal for SignUp */}
     {showSignUp && (
  <div
    className="modal d-block"
    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Create Account</h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => setShowSignUp(false)}
          ></button>
        </div>
        <div className="modal-body">
          <SignUp />
        </div>
      </div>
    </div>
  </div>
)}
      </div>
        </>
    );
}
export default Dashboard;