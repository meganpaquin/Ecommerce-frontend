import './carosel.css'
import DataService from '../services/dataService';
import { useState, useEffect } from 'react';



const Carosel = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const loadCat = async () => {
        let service = new DataService();
        let data = await service.getCatalog();
        setProducts(data);

        let uniques = [];
        for (let i = 0; i < data.length; i++) {
            let each = data[i];
            if(!uniques.includes(each.category)){
                uniques.push(each.category);
                //does the category exist in the array already? If not then add it
            }
        }
        setCategories(uniques);
    };

    useEffect(() => {
        loadCat();
    }, []);


    return(

        <div className="carosel">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img className="d-block w-100" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/adult-craft-ideas-1643411791.jpg" alt='first slide'/>
                        </div>

                    {categories.map((d) =>
                    (
                        <div className="carousel-item" key={Math.random()}>
                        <img className="d-block w-100" src={d + 'cat'} alt={d} />
                        </div>
                    ))}

            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </a>
            </div>
        </div>
    );
}

export default Carosel;