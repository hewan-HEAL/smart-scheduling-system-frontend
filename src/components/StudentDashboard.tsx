import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FaBell, FaUserCircle } from "react-icons/fa";
import { Navbar, Nav, Modal } from "react-bootstrap";
import { useState } from 'react';
import BookAppoint from './component/ BookAppoint';

function StudentDashboard() {
      const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showBooking, setShowBooking] = useState(false);
  const sidebarWidth = sidebarOpen ? 220 : 70;

  return (
    <div className="container-fluid">
      <div className="row">

        {/* Sidebar */}
        <div
          className="bg-primary text-light min-vh-100 d-flex flex-column justify-content-between"
          style={{ width: sidebarWidth, transition: "width 0.3s" }}
        >
          <div>
            <a className="text-decoration-none text-light d-flex align-items-center mt-4 px-2">
              <span className="fs-5">
                {sidebarOpen ? "📅 campusConnect" : "📅"}
              </span>
            </a>
            <hr className="text-secondary" />
            <ul className="nav nav-pills flex-column">
              <li className="nav-item my-1">
                <a href="#" className="nav-link text-white fs-5">
                  <i className="bi bi-house"></i>
                  {sidebarOpen && <span className="ms-3">Dashboard</span>}
                </a>
              </li>
              <li className="nav-item my-1">
                <a href="#" className="nav-link text-white fs-6" onClick={() => setShowBooking(true)}>
                  <i className="bi bi-calendar-event"></i>
                  {sidebarOpen && <span className="ms-3">Book Appointment</span>}
                </a>
              </li>
              <li className="nav-item my-1">
                <a href="#" className="nav-link text-white fs-6">
                  <i className="bi bi-clock"></i>
                  {sidebarOpen && <span className="ms-3">My Appointment</span>}
                </a>
              </li>
              <li className="nav-item my-1">
                <a href="#" className="nav-link text-white fs-6">
                  <i className="bi bi-alarm"></i>
                  {sidebarOpen && <span className="ms-3">Notification</span>}
                </a>
              </li>
              <li className="nav-item my-1">
                <a href="#" className="nav-link text-white fs-6">
                  <i className="bi bi-gear"></i>
                  {sidebarOpen && <span className="ms-3">Settings</span>}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <a href="#" className="nav-link text-white fs-6 mb-5 ms-2">
              <i className="bi bi-box-arrow-right"></i>
              {sidebarOpen && <span className="ms-3">Logout</span>}
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div
          className="col px-0"
          style={{ marginLeft: sidebarWidth, transition: "margin-left 0.3s" }}
        >
          <Navbar
            bg="light"
            expand="lg"
            className="px-4 shadow-sm"
            style={{
              position: "fixed",
              top: 0,
              left: sidebarWidth,
              width: `calc(100% - ${sidebarWidth}px)`,
              transition: "all 0.3s",
              zIndex: 1000
            }}
          >
            <Navbar.Brand href="#" className="text-primary">
              <i className="bi bi-hdd-stack" onClick={() => setSidebarOpen(!sidebarOpen)}></i>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto d-flex gap-5">
                <Nav.Link href="#dashboard">Features</Nav.Link>
                <Nav.Link href="#appointments">How it works</Nav.Link>
                <Nav.Link href="#courses">Contact</Nav.Link>
              </Nav>
              <div className="d-flex align-items-center gap-4 ms-5">
                <FaBell size={20} style={{ cursor: "pointer" }} />
                <FaUserCircle size={24} style={{ cursor: "pointer" }} />
              </div>
            </Navbar.Collapse>
          </Navbar>

          <div className="px-3 ms-0" style={{ marginTop: "80px" }}>
            <div className="p-4 text-light rounded-5" style={{ backgroundColor: "#4fc1faff", width: "800px" }}>
              <h2>Welcome to Dashboard</h2>
              <p>Manage your appointments and stay on track with your academic journey</p>
            </div>
          </div>

          <div className='d-flex gap-5 mt-4'>
            <div className='text-dark border border-dark p-4 rounded-4 mt-2'>
              <h6>Upcoming Event</h6>
              <p>No upcoming events</p>
            </div>
            <div className='text-dark border border-dark p-4 rounded-4 mt-2'>
              <h6>Queue position</h6>
              <p>No users in the queue</p>
            </div>
            <div className='text-dark border border-dark p-4 rounded-4 mt-2'>
              <h6>Next Appointment</h6>
              <p>No upcoming appointments</p>
            </div>
          </div>

          <div className='text-dark border border-primary rounded-4 mt-5 p-4 '>
            <span>Upcoming Appointment</span>
            <button className='btn btn-info btn-sm rounded-3 text-light ms-5'
              style={{ backgroundColor: "#4fc1faff" }}
              onClick={() => setShowBooking(true)}>+ Book New</button>
                 <div className='d-flex justify-content-end mt-3 gap-3 '>
            
              
        </div>
            <div className='mt-3 d-flex flex-column gap-3'>
              <p>Your queue and appointment status</p>
              <div className='border border-primary rounded-3 p-3 '>
                <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex a;ign-items-center gap-2'>
                <h6 className='d-flex'>Registration Process</h6> 
                <span className='badge bg-success'>Confirmed</span>
                </div>
                <div className='d-flex flex-column gap-2 mt-3'>
                <button className='bi bi-compass btn btn-light text-dark '>   Direction</button>
                <button className='bi bi-eye btn btn-light text-dark'>   View Details</button>
                </div>
               </div>
                <i className='bi bi-geo-alt'>
                  <span className='ms-3'>Computer Science - CS-001</span>
                </i>
                <p className='mt-2'>Date: 25th June, 2024 | Time: 10:00 AM</p>
                
                <i className='bi bi-people'>
                  <span className='ms-3'>Dr.Getahun</span>
                </i>
              </div>
              <div className='border border-primary rounded-3 p-3 '>
                <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex  gap-2'>
                <h6 className='d-flex'>Grading change</h6> 
                <span className='badge bg-warning'>Pending</span>
                </div>
                  <div className='d-flex flex-column gap-2'>
                <button className='bi bi-compass btn btn-light text-dark '>   Direction</button>
                <button className='bi bi-eye btn btn-light text-dark'>   View Details</button>
                </div>
               
               </div>
                <i className='bi bi-geo-alt'>
                  <span className='ms-3'>Computer Science - CS-001</span>
                </i>
                <p className='mt-2'>Date: 25th June, 2024 | Time: 10:00 AM</p>
                
                <i className='bi bi-people'>
                  <span className='ms-3'>Mr.abte</span>
                </i>
              </div>
            </div>
            </div>

        </div>
      </div>

      {/* Modal */}
      <Modal show={showBooking} onHide={() => setShowBooking(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Book Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BookAppoint />
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default StudentDashboard;