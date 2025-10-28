import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {useState} from "react";

function BookAppoint(){
   const [currentStepIndex, setcurrentStepIndex]=useState(1);
 
   const next=() => {
    if(currentStepIndex < 4) 
    setcurrentStepIndex( currentStepIndex+1);
   };

   const back =()=>{
    if(currentStepIndex > 1) 
    setcurrentStepIndex(currentStepIndex-1);
   };

   const handleSubmit =()=>{
    alert("success full");
   };

   return(
    <>
    <div>
          

            <div className="progress mb-4" style={{height:"8px"}}>
                <div className="progress-bar bg-primary" style={{width: `${(currentStepIndex /4)*100}%`}}>
                </div>
            </div>
            <p className="text-center text-muted mb-4">Step {currentStepIndex} of 4</p>

            {/*step 1*/}

            {currentStepIndex== 1 && (
                <div  > 
                    <h5 className="text-dark mb-3">Select Department</h5>
                   <div className='row g-3'>
                    <div className='col-md-6 border border-primary rounded-2'>
                    <div className='text-dark ms-3 mt-3 '> 
                        <h6 >Registeral</h6>
                        <p>6 office avaliable</p>
                    </div>
                    </div>
                    <div className='col-md-6 border border-primary  rounded-2'>
                    <div className='text-dark ms-3 mt-3'> 
                        <h6>Computer Science</h6>
                        <p>6 office avaliable</p>
                    </div>
                    </div>
                    <div className='col-md-6 border border-primary  rounded-2'>
                    <div className='text-dark ms-3 mt-3'> 
                        <h6>Electrical</h6>
                        <p>9 office avaliable</p>
                    </div>
                    </div>
                     <div className='col-md-6 border border-primary  rounded-2'>
                    <div className='text-dark ms-3 mt-2 '> 
                        <h6>Administration</h6>
                        <p>10 office avaliable</p>
                    </div>
                    </div>
                </div>
                </div>

            )
             
            }

            {/*step 2*/}
            {currentStepIndex==2 && (
                <div className='d-flex flex-column justify-content-between gap-3'> 
                    <h5 className="text-dark mb-3">Choose office</h5>
                    <div className='border border-primary rounded-3 '>
                        <div className='ms-3'>
                        <p className='mt-2'>Reg-001</p>
                        <i className='bi bi-geo-alt'>
                            <span className='ms-3'>Department building ground</span>
                        </i>
                        <p>Dr. kibreab M.</p>
                        </div>
                    </div>
                     <div className='border border-primary rounded-3 '>
                        <div className='ms-3'>
                        <p className='mt-2'>Reg-001</p>
                        <i className='bi bi-geo-alt'>
                            <span className='ms-3'>Department building ground</span>
                        </i>
                        <p>Dr. kibreab M.</p>
                        </div>
                    </div>
                    <div className='border border-primary rounded-3 '>
                        <div className='ms-3'>
                        <p className='mt-2'>Reg-001</p>
                        <i className='bi bi-geo-alt'>
                            <span className='ms-3'>Department building ground</span>
                        </i>
                        <p>Dr. kibreab M.</p>
                        </div>
                    </div>
                </div>
            )}

            {/*step 3*/}
            {currentStepIndex ==3 && (
                <div>
                    <h5 className="text-dark mb-3">Pick Service</h5>
                    <div className='border border-primary rounded-3 mb-3 p-3'>
                        <h6>Project Review</h6>
                        <p className='mt-2'>Review the project requirements and specifications.</p>
                    </div>
                </div>
            )}

            {/*step 4*/}

            {currentStepIndex === 4 && (
                <div>
                    <div className="mb-3">
                     <label className="form-label">Select date</label> <br></br>
                     <input className='form-control w-25' type="date"></input>    
                    </div>
                    <div className="mb-3"> 
                        <label className=" form-label">
                            Avaliable Time Slot
                        </label> <br></br> 
                        <input type= "time "/>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Reminder Preference</label>  <br></br>
                      <select className="form-select">
                        <option value="before 10min"> before 10min</option>
                        <option value="before 20min"> before 20min</option>
                        <option value="before 30min"> before 30min</option>
                        <option value="before 1hour"> before 1hour</option>
                        </select>             
                   </div>
                   <div className="mb-3">
                    <label className="form-label ">Additional Note</label> <br></br>
                   <textarea className='form-control form-control-lg' placeholder='Enter any additional need' />
                   </div>

                </div>
            )}

            {/*button*/}
                <div className="d-flex justify-content-between mt-4">
                    {currentStepIndex >1 && (
                        <button className="btn btn-outline-primary" onClick={back}>
                            <i className="bi bi-arrow-left"></i>
                            Back
                        </button>
                    )}

                    {currentStepIndex < 4 && (
                        <button className="btn btn-primary ms-auto" onClick={next}>
                            Next <i className="bi bi-arrow-right"></i>
                            
                        </button>

                    )}

                    {currentStepIndex === 4 && (
                        <button className="btn btn-success ms-auto" onClick={handleSubmit}>
                            Confirm Booking
                        </button>
                    )}
                </div>

        </div>
     
    </>
   )
}
export default BookAppoint;

