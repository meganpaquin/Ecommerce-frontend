import axios from 'axios'

class DataService{
    serverURL = "http://127.0.0.1:5000" 
    async getCatalog(){
        //call the server
        let response = await axios.get( this.serverURL + "/api/catalog");

        return response.data;
        //return catalog;
    }

    async saveProduct(prod){
        let response = await axios.post(this.serverURL + "/api/catalog", prod);
        return response.data;
    }

    async saveCoupon(cp){
        let response = await axios.post(this.serverURL +  "/api/coupon", cp);
        return response.data
    }

    async getCoupon(){
        let response = await axios.get(this.serverURL + "/api/coupon");
        return response.data;
    }

    async saveUser(user){
        let response = await axios.post(this.serverURL +  "/api/user", user);
        return response.data
    }

    async getUser(email){
        let response = await axios.get(this.serverURL +  "/api/user/" + email);
        return response.data
    }

    async getCategories(category){
        let response = await axios.get(this.serverURL + "/api/products/" + category);
        return response.data;
    }
}

export default DataService;
