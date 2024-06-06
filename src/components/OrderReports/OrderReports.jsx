import { useState } from "react";
import "./OrderReports.scss";
import filterPhoto from "../../assets/Filter.png";
import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import avatar4 from "../../assets/avatar4.png";
import avatar5 from "../../assets/avatar5.png";


const OrderReports = () => {
  const orders = [
    {
      customerName: "Eren Jaegar",
      customerAvatar: avatar1,
      menu: "Spicy seasoned seafood noodles ",
      totalPayment: 125,
      status: "Completed",
    },
    {
      customerName: "Reiner Braunn",
      customerAvatar: avatar2,
      menu: "Salted Pasta with mushroom sauce",
      totalPayment: 145,
      status: "Preparing",
    },
    {
      customerName: "Levi Ackerman",
      customerAvatar: avatar3,
      menu: "Beef dumpling in hot and sour soup",
      totalPayment: 105,
      status: "Pending",
    },
    {
      customerName: "Historia Reiss",
      customerAvatar: avatar4,
      menu: "Hot spicy fried rice with omelet",
      totalPayment: 45,
      status: "Completed",
    },
    {
      customerName: "Hanji Zoe",
      customerAvatar: avatar5,
      menu: "Sichuan hot pot mixed seafood",
      totalPayment: 245,
      status: "Completed",
    },
  ];

  const [sortedOrders, setSortedOrders] = useState(orders);

  const statusClass = (status) => {
    return status.toLowerCase().replace(" ", "");
  };

  const handleFilterChange = (e) => {
    const filter = e.target.value;
    const statusPriority = { Completed: 1, Preparing: 2, Pending: 3 };
    let sortedOrders;

    switch (filter) {
      case "highest":
        sortedOrders = [...orders].sort(
          (a, b) => b.totalPayment - a.totalPayment
        );
        break;
      case "lowest":
        sortedOrders = [...orders].sort(
          (a, b) => a.totalPayment - b.totalPayment
        );
        break;
      case "status":
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
        <h1 className="order-report-title">Order Report</h1>
        <div className="filter-order-btn-for-order-report">
          <img
            className="filter-order-btn-img-for-order-report"
            src={filterPhoto}
            alt="filter-icon"
          />
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
            <th className="order-report-order-report-title">Customer</th>
            <th className="order-report-order-report-title">Menu</th>
            <th className="order-report-order-report-title">Total Payment</th>
            <th className="order-report-order-report-title">Status</th>
          </tr>
        </thead>
        <tbody className="order-table-body">
          {sortedOrders.map((order) => (
            <tr className="order-body-tr" key={order.customerName}>
              <td className="order-report-table-data">
                <div className="customer-info-order-report">
                  <img src={order.customerAvatar} alt={order.customerName} />
                  {order.customerName}
                </div>
              </td>
              <td className="order-report-table-data">{order.menu}</td>
              <td className="order-report-table-data">${order.totalPayment}</td>
              <td className="order-report-table-data">
                <div className={`order-status ${statusClass(order.status)}`}>
                  <span className="order-status-opacitylow">
                    {order.status}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderReports;
