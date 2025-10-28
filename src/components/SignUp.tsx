import React, { useState } from "react";

interface SignUpDate{
    firstName:string;
    lastName:string;
    email:string;
    phoneNo: string;
    role:string;
    password:string;
}
function SignUp(){
    const [form, setForm] = useState<SignUpDate> ({
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        role: "Administrator",
        password: ""
    });
    const [showPassword, setShowPassword] = useState(false);
     const handleChange= (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> )=> {
        setForm({...form, [e.target.name]: e.target.value});
     };
     const handleSignUp =() => {
        console.log("sign uop data: ", form);
     };

     return (
        <div className="container mt-4" style={{maxWidth:"400px", backgroundColor:"transparent"}}>
         <h3 className="text-center text-dark">Welcome to campusConnect</h3>
         <div className="row mb-3">
         <div className="col text-start">
         <label className="form-label text-dark">First Name</label>
         <input type="text" className="form-control" name="firstName" value={form.firstName} onChange={handleChange} />
         </div>

          <div className="col text-start">
         <label className="form-label text-dark">Last Name</label>
         <input type="text" className="form-control" name="lastName" value={form.lastName} onChange={handleChange} />
         </div>

     </div>
       
            <div className="mb-3 text-start">
              <label className="form-label text-dark">Email</label>
              <input type="email"  className="form-control" name="email" value={form.email} onChange={handleChange} />

            </div>
            
             <div className="mb-3 text-start">
              <label className="form-label text-dark">Phone No</label>
              <input type="text"  className="form-control" name="phoneNo" value={form.phoneNo} onChange={handleChange} />

            </div>
            
            <div className="mb-3 text-start">
            <label className="form-label text-dark">Role</label>
            <select className="form-select" name="role" value={form.role} onChange={handleChange} >
             <option value="Administrator">Administrator</option>
             <option value="Student">Student</option>
             <option value="Staff">Staff</option>
             <option value="other">Other</option>
            </select>
            </div>

            
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
             <button className="btn btn-primary" onClick={handleSignUp}>
              Create Account
             </button>
            </div>
        </div>
        
     )

}   
export default SignUp;