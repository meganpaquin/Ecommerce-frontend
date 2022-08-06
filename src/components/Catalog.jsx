import './Catalog.css';
import Product from './Product';
import { useEffect } from 'react';
    //works like window.onload
import DataService from '../services/dataService';
import { useState } from 'react';

const Catalog = () => {
    const [products, setProducts] = useState([]);

    const loadData = () => {
        let service = new DataService();
        let data = service.getCatalog();
        setProducts(data);
    };

    useEffect(() => {
        loadData();
    }, []);

    return(
        <div className='catalog'>
            { products.map((d) => 
            (<Product key={d._id} data={d}></Product>))}
        </div>
    )
}

export default Catalog;