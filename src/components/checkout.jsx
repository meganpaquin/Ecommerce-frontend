import './checkout.css'
import { useState, useContext} from 'react';
import DataService from '../services/dataService';
import StoreContext from '../store/storeContext';


const Checkout = () => {
    const [order, setOrder] = useState({});
    const user = useContext(StoreContext).user;
    const cart = useContext(StoreContext).cart;

    const checkoutChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        let copy = {...order};
        copy[name] = value;
        setOrder(copy);
    }

    const saveOrder = async () => {
        console.log('Saving your order...')
        let combinedData = order;
        combinedData["email"]=user.email;
        combinedData["fname"]=user.fname;
        combinedData["lname"]=user.lname;
        combinedData["status"]="inprogress";

        let uploadData = [];
        uploadData.push(combinedData);
        uploadData.push(cart);

        //send to server
        let instance = new DataService();
        let savedOrder = await instance.saveOrder(uploadData);
    }

    return(

        <div className="checkout">
            <button type="button" data-bs-toggle="modal" data-bs-target="#checkoutModal" className='btn btn-outline-success' data-backdrop="false">
                Checkout
            </button>

            <div className="modal fade" id="checkoutModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center">Pay</h5>

                    <div className="form-floating mb-2">
                        <input type="text" className="form-control form-control-sm" placeholder="Enter your address" required name="address" onChange={checkoutChange}/>
                        <label htmlFor="address"><i className="bi bi-envelope-fill"></i>Address</label>
                    </div>

                    <div className="form-floating mb-2">
                        <input type="text" className="form-control form-control-sm" placeholder="Enter your City" required name="city" onChange={checkoutChange}/>
                        <label htmlFor="city"><i className="bi bi-envelope-fill"></i>City</label>
                    </div>

                    <div className="form-floating mb-2">
                        <input type="text" className="form-control form-control-sm" placeholder="Enter your State" required name="state" onChange={checkoutChange}/>
                        <label htmlFor="state"><i className="bi bi-envelope-fill"></i>State</label>
                    </div>

                    <div className="form-floating mb-2">
                        <input type="text" className="form-control form-control-sm" placeholder="Enter your zip code" required name="zipcode" onChange={checkoutChange}/>
                        <label htmlFor="zipcode"><i className="bi bi-lock-fill"></i>Zipcode</label>
                    </div>

                    <div className="form-floating mb-2">
                        <input type="text" className="form-control form-control-sm" placeholder="Enter your card number" required name="card-num" onChange={checkoutChange}/>
                        <label htmlFor="card-num"><i className="bi bi-lock-fill"></i>Card Number</label>
                    </div>

                    <div className="form-floating mb-2">
                        <input type="date" className="form-control form-control-sm" placeholder="Enter your Expiration Date " required name="expiration" onChange={checkoutChange}/>
                        <label htmlFor="expiration"><i className="bi bi-lock-fill"></i>Expiration</label>
                    </div>

                    <div className="form-floating mb-2">
                        <input type="number" className="form-control form-control-sm" placeholder="Enter your CCV " required name="ccv" onChange={checkoutChange}/>
                        <label htmlFor="ccv"><i className="bi bi-lock-fill"></i>CCV</label>
                    </div>
              
                    <div className="text-center">
                    <button type="button" className='btn btn-outline-success' onClick={saveOrder}>Submit</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </div>

        </div>
    );
}

export default Checkout;