import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
function AuthModal({ onClose}:{onClose:()=>void}) {
    
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  const [showPassword, setShowPassword] = useState(false);
  interface SignUpDate {
    firstName:string;
    lastName:string;
    email:string;
    phoneNo: string;
    role:string;
   stud_staff_Id:string;
    password:string;
}
 const [form, setForm] = useState<SignUpDate> ({
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        role: "Administrator",
        stud_staff_Id: "",
        password: ""
    });
    const handleChange= (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> )=> {
            setForm({...form, [e.target.name]: e.target.value});
         };

      const handleSignUp = async () => {

  try {
    const response = await axios.post("http://localhost:5001/api/auth/signup", {
      name: form.firstName + " " + form.lastName,  // combine first & last
      email: form.email,
      phone: form.phoneNo,                        // match backend field
      password: form.password,
      role: form.role.toUpperCase(),              // Student → STUDENT
      stud_staff_Id: form.stud_staff_Id,
    });
    alert(response.data.message); // "User registered successfully!"
    setActiveTab("signin"); // switch to login after sucessful signup
  } catch (error) {
    console.error(error);
      // Type guard to check if it's an Axios error
  if (axios.isAxiosError(error)) {
    alert(error.response?.data?.error || "Signup failed!");
  } else {
    alert("Signup failed!");
  }

  }
};

// handle signIn
const [loginData, setLoginData]= useState({
  email:"",
  password:""
});

const handleLoginChange =(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
  setLoginData({
    ...loginData,
    [e.target.name]:e.target.value
  });
};

const handleSignIn = async () =>{
  try{
    const response = await axios.post("http://localhost:5001/api/auth/login",{
      email:loginData.email,
      password:loginData.password
    });
    alert(response.data.message);
      console.log("user data: ", response.data.user);
      onClose();
  } catch (error) {
    console.error(error);
    alert("Login Failed");
  }
};

  return (
    <div
      className="modal show d-block"
      tabIndex={-1}
      style={{ backgroundColor: "rgba(255, 255, 255, 0.7)", display:"block" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-light text-dark rounded-3 p-3">
          <div className="modal-header border-0">
            <h4 className="modal-title mx-auto">Welcome to campusConnect</h4>
            <button type="button" className="btn-close btn-close-dark" onClick={onClose}/>
          </div>

          <p className="text-center text-muted">
            Sign in to your account or create a new one to get started
          </p>

          {/* Tabs */}
          <div className="d-flex justify-content-center mb-3">
            <button
              className={`btn me-2 ${
                activeTab === "signin" ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setActiveTab("signin")}
            >
              Sign In
            </button>
            <button
              className={`btn ${
                activeTab === "signup" ? "btn-primary" : "btn-outline-primary"
                 }`}
                  onClick={() => setActiveTab("signup")}  >
                   Sign Up
             </button>
          </div>

          {/* Sign In Form */}
          {activeTab === "signin" && (
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter email"
                        name= "email" value={loginData.email} onChange={handleLoginChange}/>
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    placeholder="Enter password"
                    name="password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "🙈" : "👁"}
                  </button>
                </div>
              </div>

              <div className="d-grid">
                <button className="btn btn-success" onClick={handleSignIn}>Sign In</button>
              </div>

              <p className="text-center mt-2">
                <a href="#" className="text-decoration-none text-muted">
                  Forgot your password?
                </a>
              </p>
            </div>
          )}

          {/* Sign Up Form */}
          {activeTab === "signup" && (
            <div className="modal-body">
              <div className="row">
                <div className="col">
                  {/*first name*/}
                   <label className="form-label text-dark">First Name</label>
         <input type="text" className="form-control" name="firstName" value={form.firstName} onChange={handleChange} />
         </div>
             {/*last name*/}
          <div className="col text-start">
         <label className="form-label text-dark">Last Name</label>
         <input type="text" className="form-control" name="lastName" value={form.lastName} onChange={handleChange} />
         </div>
     </div>
           {/*email*/}
            <div className="mb-3 text-start">
              <label className="form-label text-dark">Email</label>
              <input type="email"  className="form-control" name="email" value={form.email} onChange={handleChange} />
            </div>
              {/*phone no*/}
             <div className="mb-3 text-start">
              <label className="form-label text-dark">Phone No</label>
              <input type="text"  className="form-control" name="phoneNo" value={form.phoneNo} onChange={handleChange} />
            </div>
              {/*role*/}
            <div className="mb-3 text-start">
            <label className="form-label text-dark">Role</label>
            <select className="form-select" name="role" value={form.role} onChange={handleChange} >
             <option value="Administrator">Administrator</option>
             <option value="Student">Student</option>
             <option value="Staff">Staff</option>
             <option value="other">Other</option>
            </select>
            </div>
                {/*Enter id*/}
                { form.role!="other" && (
                <div className="mb-3 text-start">
                  <label className="form-label text-dark">Enter ID</label>
                  <input type="text" className="form-control" name="stud_staff_Id" value={form.stud_staff_Id} onChange={handleChange} />
                  </div>
                  )}
                {/*password*/}
            <div className="mb-3 text-start">
            <label className="form-label text-dark ">Password</label>
           <div className="input-group">
            <input type={showPassword ? "text" :"password"} className="form-control" name="password" value={form.password} onChange={handleChange} />
            <button className="btn btn-outline-secondary"
                     type="button"
                     onClick={()=> setShowPassword(!showPassword)} >
                         {showPassword ? "🙈" : "👁"}
                         </button>
            </div>
            </div>

              <div className="d-grid">
                <button className="btn btn-success" onClick={handleSignUp}>Create Account</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
