import './loginModal.css'
import { useState, useContext } from 'react';
import DataService from '../services/dataService';
import StoreContext from '../store/storeContext';



const LoginModal = () => {

    const [userLogin, setuserLogin] = useState({});
    const [failure, setFailure] = useState(false);
    const [loggedin, setLoggedin] = useState(false);
    const user = useContext(StoreContext).user
    const helloUser = useContext(StoreContext).helloUser;


    const loginChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        let copy = {...userLogin};
        copy[name] = value;
        setuserLogin(copy);
    }

    const verifyuser = async () => {
        console.log("Checking Credentials...");
        let copy = {...userLogin};
        let inputEmail = copy["login-email"];
        let inputPass = copy["login-password"];

        if(!inputEmail && !inputPass){
            console.error("Must input an email and password")
            setFailure(true);
        }else{
            let service = new DataService();
            let serverData = await service.getUser(inputEmail);
            let serverPass = serverData["password1"];

             if(inputPass === serverPass){
            console.log("Congrats You are Logged In!")
            }else{
            console.error("Passwords Do Not Match");
            setFailure(true);
            }

            helloUser(serverData);

            if ( !user ){
                setLoggedin(false);
            }else{
                setLoggedin(true);
            }
        }
    }



    return (

        <div className="login-modal">
            {loggedin ? <button className='btn btn-outline-success' id="userNameBtn">{user.fname}</button> : <button type="button" data-bs-toggle="modal" data-bs-target="#myModal" className='btn btn-outline-success' data-backdrop="false">Login</button>}

         
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="card">
                <div className="card-body">
                        <h5 className="card-title text-center">Login</h5>

                        {failure ? <section className='alert alert-danger'>Password or Email is invalid</section>: null}

                        <div className="form-floating mb-2">
                            <input type="email" className="form-control form-control-sm" placeholder="Enter your email" required name="login-email" onChange={loginChange}/>
                            <label htmlFor="login-email"><i className="bi bi-envelope-fill"></i>Email</label>
                        </div>

                        <div className="form-floating mb-2">
                            <input type="password" className="form-control form-control-sm" placeholder="Enter your password" required name="login-password" onChange={loginChange}/>
                            <label htmlFor="login-password"><i className="bi bi-lock-fill"></i>Password</label>
                        </div>

                
                        <div className="text-center">
                        <button type="button" data-bs-toggle="modal" data-bs-target="#registerModal" className='btn btn-outline-success' data-backdrop="false">Register</button>
                        <button type="button" className='btn btn-outline-success' onClick={verifyuser}>Login</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default LoginModal