

const Orders = (props) => {
    const handleData = () => {
        console.log(props);
    }

    return(
        <div className="orders" onClick={handleData}>
            <h5>Here is an order</h5>
        </div>
    );
}

export default Orders;