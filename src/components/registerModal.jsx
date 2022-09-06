import './registerModal.css'
import { useState } from 'react';
import DataService from '../services/dataService';

const RegisterModal = () => {

    const [userRegister, setuserRegister] = useState({});

    const registerChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        let copy = {...userRegister};
        copy[name] = value;
        setuserRegister(copy);
    }

    const register = async () => {
        console.log('Registering User...');
        let clone = userRegister;
        clone["admin"] = "no"

        //send to server
        let instance = new DataService();
        let savedUser = await instance.saveUser(clone);
    }

    return(

        <div className="register-modal">
            <div className="modal fade" id="registerModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title text-center">Sign Up</h5>
            
                <div className="form-floating mb-3">
                    <input type="text" className="form-control form-control-sm" id="firstName" placeholder="Enter your first name" required name="fname" onChange={registerChange}/>
                    <label htmlFor="fname"><i className="bi bi-person-circle"></i>First Name</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control form-control-sm" id="lastName" placeholder="Enter your last name" required name="lname" onChange={registerChange}/>
                    <label htmlFor="lname"><i className="bi bi-person-circle"></i>Last Name</label>
                </div>

                <div className="form-floating mb-2">
                    <input type="email" className="form-control form-control-sm" id="email" placeholder="Enter your email" required name="email" onChange={registerChange}/>
                    <label htmlFor="email"><i className="bi bi-envelope-fill"></i>Email</label>
                </div>

                <div className="form-floating mb-2">
                    <input type="text" className="form-control form-control-sm" id="phoneNumber" placeholder="Enter your phone number" name="phone" required onChange={registerChange}/>
                    <label htmlFor="phone"><i className="bi bi-telephone-fill"></i>Phone Number</label>
                </div>

                <div className="form-floating mb-2">
                    <input type="password" className="form-control form-control-sm" placeholder="Enter a password" required name="password1" onChange={registerChange}/>
                    <label htmlFor="password1"><i className="bi bi-lock-fill"></i>Password</label>
                    <div id="pwHelp" className="form-text">Password must be 8 charachters and include a number</div>
                </div>

                <div className="form-floating mb-2">
                    <input type="password" className="form-control form-control-sm" placeholder="Enter a password" required name="password2" onChange={registerChange}/>
                    <label htmlFor="password2"><i className="bi bi-lock-fill"></i>Retype Password</label>
                    <div id="pwValid" className="form-text">Passwords must match</div>
                    <div id="pwInvalid" className="invalid-feedback">Your passwords do not match</div>
                </div>            
                <div className="text-center">
                <button className="btn btn-success" onClick={register}>Register</button>
                </div>
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    );
}

export default RegisterModal;