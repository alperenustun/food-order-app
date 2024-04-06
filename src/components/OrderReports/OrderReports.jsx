import { useState } from "react";
import "./OrderReports.scss";
import filterPhoto from "../../assets/Filter.png";

const OrderReports = ({ orders }) => {

    const [sortedOrders, setSortedOrders] = useState(orders);

    const statusClass = (status) => {
        return status.toLowerCase().replace(" ", "");
    };

    const handleFilterChange = (e) => {
        const filter = e.target.value;

        let sortedOrders;
        switch (filter) {
            case "highest":
                sortedOrders = [...orders].sort((a, b) => b.totalPayment - a.totalPayment);
                break;
            case "lowest":
                sortedOrders = [...orders].sort((a, b) => a.totalPayment - b.totalPayment);
                break;
            case "status":
                const statusPriority = { Completed: 1, Preparing: 2, Pending: 3 };
                sortedOrders = [...orders].sort((a, b) => {
                    return statusPriority[a.status] - statusPriority[b.status];
                });
                break;
            default:
                sortedOrders = [...orders];
        }

        setSortedOrders(sortedOrders);
    };

    return (
        <div className="order-report-container">
            <div className="order-report-header">
                <h1 className="order-report-h1">Order Report</h1>
                <div className="filter-order-btn">
                    <img className="filter-order-btn-img" src={filterPhoto} alt="filter-icon" />
                    <select onChange={handleFilterChange} className="filter-order-select">
                        <option value="">Filter Orders</option>
                        <option value="highest">Highest Payment</option>
                        <option value="lowest">Lowest Payment</option>
                        <option value="status">Status</option>
                    </select>
                </div>
            </div>
            <table className="order-reports-table">
                <thead className="border-line-order-report">
                    <tr>
                        <th className="order-report-th">Customer</th>
                        <th className="order-report-th">Menu</th>
                        <th className="order-report-th">Total Payment</th>
                        <th className="order-report-th">Status</th>
                    </tr>
                </thead>
                <tbody className="order-tbody">
                    {sortedOrders.map((order, index) => (
                        <tr className="order-body-tr" key={index}>
                            <td className="order-report-td">
                                <div className="customer-info">
                                    <img src={order.customerAvatar} alt={order.customerName} />
                                    {order.customerName}
                                </div>
                            </td>
                            <td className="order-report-td">{order.menu}</td>
                            <td className="order-report-td">${order.totalPayment}</td>
                            <td className="order-report-td">
                                <div className={`order-status ${statusClass(order.status)}`}>
                                    <span className="order-status-opacitylow">{order.status}</span>
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
