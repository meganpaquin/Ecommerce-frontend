import './catalog.css';
import Product from './Product';
import { useEffect } from 'react';
    //works like window.onload
import DataService from '../services/dataService';
import { useState } from 'react';
import Categories from './categories';

let i;

const Catalog = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const loadData = async () => {
        let service = new DataService();
        let data = await service.getCatalog();
        setProducts(data);

        let uniques = [];
        for (i = 0; i < data.length; i++) {
            let each = data[i];
            if(!uniques.includes(each.category)){
                uniques.push(each.category);
                //does the category exist in the array already? If not then add it
            }
        }
        setCategories(uniques);
    };

    useEffect(() => {
        loadData();
    }, []);

    const filterData = async (cat) => {
        let service = new DataService();
        let data = await service.getCategories(cat);
        setProducts(data);
    }

    const showDeals = async () => {
        let service = new DataService();
        let data = await service.getDeals();
        setProducts(data);
    }

    return(
        <div className='catalog'>
            
            <div className="top">
            <div className='filter'>
                <a href="#" onClick={loadData}>All</a>
                <a href="#" onClick={showDeals}>Deals</a>
                {categories.map((d) =>
                (
                    <Categories key={d} data={d} onClick={filterData}></Categories>
                ))}
            </div>

            <div className='inventory container'>
                { products.map((d) => 
                (<Product key={d._id} data={d}></Product>))}
            </div>
            </div>

            <div className="Bottom">
            <div>
                
            </div>
            </div>
        </div>
    )
}

export default Catalog;