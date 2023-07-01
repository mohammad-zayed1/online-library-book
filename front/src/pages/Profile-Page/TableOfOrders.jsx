
import { useState, useEffect , useContext } from "react";
import axios from "axios";
import { CartContext } from "../../App";

export const TableOfOrders = () => {
    const {orders} = useContext(CartContext);
//   const [orders, setOrders] = useState([]);
//   useEffect(() => {
//     axios
//       .get(`http://localhost:6600/allorders/${props.userId}`)
//       .then((response) => {
//         setOrders(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

  console.log('orders' , orders)
  const tableRows = orders.map((order) => {
    return (
      <tr key={order._id} className="border-b ">
        <th
          scope="row"
          className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap "
        >
          {order.customerName}
        </th>
        <td className="px-4 py-3">{order.quantity}</td>
        <td className="px-4 py-3">{order.total}</td>
        <td className="px-4 py-3">{order.address}</td>
        <td className="px-4 py-3">{order.phone}</td>
        <td className="px-4 py-3">{order.orderDate}</td>
      </tr>
    );
  });
  return (
    <section className="mt-5 w-4/5">
      <div className="">
        {/* Start coding here */}
        <h1 className="text-[30px] font-bold py-3">Orders</h1>
        <div className="bg-white  relative shadow-md sm:rounded-2xl overflow-scroll max-h-[300px]">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 table-zebra ">
              <thead className="text-xs text-white uppercase bg-[#529b03]">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Toatl Price
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Shipping Address
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Phone Number
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Date
                  </th>

                 
                </tr>
              </thead>
              <tbody>
                {tableRows.length === 0 ? (
                  <div className="p-3 text-lg">There are no Orders Yet</div>
                ) : (
                  tableRows
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
