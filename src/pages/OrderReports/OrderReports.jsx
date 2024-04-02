import { useState } from "react";
import "./OrderReports.scss";
import filterPhoto from "../../assets/Filter.png";

const OrderReports = ({ orders }) => {

    const statusClass = (status) => {
        return status.toLowerCase().replace(" ", "");
    };


    return (
        <div className="order-report-container">
            <div className="order-report-header">
                <h1>Order Report</h1>
                <button className="filter-order-btn"><img src={filterPhoto} alt="filter-photo" /> Filter Order</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Menu</th>
                        <th>Total Payment</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <td>
                                <div className="customer-info">
                                    <img src={order.customerAvatar} alt={order.customerName} />
                                    {order.customerName}
                                </div>
                            </td>
                            <td>{order.menu}</td>
                            <td>${order.totalPayment}</td>
                            <td>
                                <div className={`status ${statusClass(order.status)}`}>
                                    <span className="status-opacitylow">{order.status}</span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default OrderReports;
