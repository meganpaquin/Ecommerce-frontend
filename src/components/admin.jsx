import './admin.css';
import { useState } from 'react';

const Admin = () => {

    const [product, setProduct] = useState({});
    const [discount, setDiscount] = useState({});

    const textChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;


        let copy = { ...product };
        copy[name] = value;
        setProduct(copy);
    }

    const saveProduct = () => {
        console.log('Saving Product');
        console.log(product);
    }

    const codeChange = (e) => {
        let value = e.target.value;
        let name= e.target.name;

        let copy = {...discount}
        copy[name] = value;
        setDiscount(copy);
    }

    const codeSave = () => {
        console.log('Saving Discounts');
        console.log(discount);

    }
return (
    <div className='admin'>
        <h1>Store Administration</h1>

        <div className = 'parent'>
            <section className = 'product'>
                <h3>Register Products</h3>


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
                    <label className="form-label col-sm-2">Image</label>
                    <input className="form-control" type="file" id='file' name='image' onChange={textChange} />
                </div>
                

                <button className='btn btn-success' onClick={saveProduct}>Submit</button>

            </section>

            <section className = 'product'>
            <h3>Register Discounts</h3>

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

                <button className='btn btn-success' onClick={codeSave}>Submit</button>
            </section>
        </div>
    </div>
);

}

export default Admin;