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
        let response = await axios.post(this.serverURL + "/api/products/", prod);
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

    async saveOrder(order){

        let payload = {
            "order_data": order
        }

        await axios({
            url: "http://127.0.0.1:5000/api/order" ,
            method: 'post',
            data: payload
        })
        .then(function (response) {
            // your action after success
            console.log(response);
        })
        .catch(function (error) {
           // your action on error success
            console.log(error);
        });
    }

    async getDeals(){
        let response = await axios.get(this.serverURL + "/api/catalog/deals");
        return response.data;
    }

    async getOrders(){
        let response = await axios.get(this.serverURL + "/api/order");
        return response.data;
    }
}

export default DataService;
