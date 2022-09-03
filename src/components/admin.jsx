import './admin.css';
import { useState, useEffect } from 'react';
import DataService from '../services/dataService';

const Admin = () => {

    const [product, setProduct] = useState({});
    const [discount, setDiscount] = useState({});
    const [showSuccess, setShowSuccess] = useState(false);
    const [successCP, setSuccessCP] = useState(false);

    const textChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;


        let copy = { ...product };
        copy[name] = value;
        setProduct(copy);
    }

    const saveProduct = async () => {
        console.log('Saving Product...');
        console.log(product);

        //send to server
        let fixedProduct = {...product};
        fixedProduct.price = parseFloat(fixedProduct.price)

        let instance = new DataService();
        let savedProd = await instance.saveProduct(fixedProduct);

        if(savedProd && savedProd._id){
            setShowSuccess(true);
            setTimeout(() => {setShowSuccess(false)}, 4000 ); //miliseconds
        }

    }

    const saveCoupon = async () => {
        console.log("Saving Coupon Code...");
        console.log(discount);

        //send to server
        let copy = {...discount};
        copy.discount = parseFloat(copy.discount);

        let instance = new DataService();
        let savedCP = await instance.saveCoupon(copy);

        if(savedCP && savedCP._id){
            setSuccessCP(true);
            setTimeout(() => {setSuccessCP(false)}, 4000 );
        }

    }

    const codeChange = (e) => {
        let value = e.target.value;
        let name= e.target.name;

        let copy = {...discount}
        copy[name] = value;
        setDiscount(copy);
    }

    const loadCoupons = async () => {
        let service = new DataService();
        let allCoupons = await service.getCoupon();
        console.log(allCoupons);
    }

    useEffect(() => {
        loadCoupons();
    }, [])

return (
    <div className='admin'>
        <h1>Store Administration</h1>

        <div className = 'parent'>
            <section className = 'product'>
                <h3>Register Products</h3>

                {showSuccess ? <section className='alert alert-success'>Product Saved</section> : null}

                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name='title' onChange={textChange}  />
                     </div>
                </div>

                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Category</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name='category' onChange={textChange}  />
                     </div>
                </div>

                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Price</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" name='price' onChange={textChange}  />
                     </div>
                </div>

                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Image</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name='image' onChange={textChange}  />
                     </div>
                </div>                

                <button className='btn btn-success' onClick={saveProduct}>Submit</button>

            </section>

            <section className = 'product discount'>
            <h3>Register Discounts</h3>

                {successCP ? <section className='alert alert-success'>Coupon Saved</section> : null}

                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Code</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name='code' onChange={codeChange}  />
                     </div>
                </div>

                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Discount</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" name='discount' onChange={codeChange}  />
                     </div>
                </div>

                <button className='btn btn-success' onClick={saveCoupon}>Submit</button>
            </section>
        </div>
    </div>
);

}

export default Admin;