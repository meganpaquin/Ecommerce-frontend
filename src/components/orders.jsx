import "./orders.css"
import { useEffect, useState } from "react";

const Orders = (props) => {

    return(
        <div className="orders container">
            <div className="order-data">
                <div className="order-number">
                    <h5>Order # {Math.round(Math.random()*1000000, 1)}</h5>
                </div>

                <div className='order-titles'>
                    { props.data.order_data[1].map((d) =>
                    (
                        <div key={Math.random()} className="title-qty">
                            <li className="title">{d.title}</li>
                            <li className="qty">QTY: {d.quantity}</li>
                        </div>
                    ))}   
                </div>
            
                <div className="order-status">
                    <span>{props.data.order_data[0].status}</span>
                </div>

                <div className="buttons">
                    <button className='btn btn-success'>✅</button>
                    <button className='btn btn-danger'>🗑️</button>
                </div>
            </div>
        </div>
    );
}

export default Orders;