import { useState } from "react";
import { FaEye, FaTrash, FaTimes } from "react-icons/fa";

// Mobile Order Card Component
const MobileOrderCard = ({ order, onView, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-lg font-semibold">Order #{order.order_id}</h3>
          <p className="text-sm text-gray-500">
            {new Date(order.order_date).toLocaleDateString()}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onView(order)}
            className="text-main-green hover:text-green-700 p-2"
            title="View Order Details"
          >
            <FaEye />
          </button>
          <button
            onClick={() => onDelete(order.order_id)}
            className="text-red-600 hover:text-red-900 p-2"
            title="Delete Order"
          >
            <FaTrash />
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {/* Customer Info */}
        <div>
          <p className="text-sm font-medium text-gray-900">{order.customer.full_name}</p>
          <p className="text-sm text-gray-500">{order.customer.email}</p>
        </div>

        {/* Order Details */}
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <p className="text-gray-500">Total Amount</p>
            <p className="font-medium">${order.total_amount.toFixed(2)}</p>
            {order.discount_amount_applied > 0 && (
              <p className="text-xs text-green-600">
                -${order.discount_amount_applied.toFixed(2)} discount
              </p>
            )}
          </div>
          <div>
            <p className="text-gray-500">Items</p>
            <p className="font-medium">{order.items.length} products</p>
          </div>
        </div>

        {/* Status Badges */}
        <div className="flex flex-wrap gap-2">
          <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
              order.order_status === "delivered"
                ? "bg-green-100 text-green-800"
                : order.order_status === "on the way"
                ? "bg-blue-100 text-blue-800"
                : order.order_status === "canceled"
                ? "bg-red-100 text-red-800"
                : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {order.order_status.charAt(0).toUpperCase() + order.order_status.slice(1)}
          </span>
          <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
              order.payment_status === "paid"
                ? "bg-green-100 text-green-800"
                : order.payment_status === "failed"
                ? "bg-red-100 text-red-800"
                : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {order.payment_status.charAt(0).toUpperCase() + order.payment_status.slice(1)}
          </span>
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
            {order.payment_method}
          </span>
        </div>
      </div>
    </div>
  );
};

const Order = () => {
  // Test data based on the database schema
  const testOrders = [
    {
      order_id: 1,
      user_id: 1,
      order_date: "2024-03-15T10:00:00Z",
      total_amount: 1149.98,
      shipping_address: "123 Main St",
      shipping_city: "New York",
      shipping_state: "NY",
      shipping_postal_code: "10001",
      shipping_country: "USA",
      order_status: "delivered",
      payment_method: "credit_card",
      payment_status: "paid",
      stripe_transaction_id: "txn_123456",
      shipped_at: "2024-03-16T10:00:00Z",
      delivered_at: "2024-03-18T10:00:00Z",
      discount_amount_applied: 50.0,
      customer: {
        full_name: "John Doe",
        email: "john@example.com",
        phone_number: "+1234567890",
      },
      items: [
        {
          product_id: 1,
          name: "Apple Watch Ultra 2",
          quantity: 1,
          price_per_unit: 799.99,
          line_item_total: 799.99,
        },
        {
          product_id: 4,
          name: "Gaming Headset Pro",
          quantity: 2,
          price_per_unit: 174.995,
          line_item_total: 349.99,
        },
      ],
    },
    {
      order_id: 2,
      user_id: 2,
      order_date: "2024-03-14T15:30:00Z",
      total_amount: 499.99,
      shipping_address: "456 Oak Ave",
      shipping_city: "Los Angeles",
      shipping_state: "CA",
      shipping_postal_code: "90001",
      shipping_country: "USA",
      order_status: "on the way",
      payment_method: "paypal",
      payment_status: "paid",
      stripe_transaction_id: "txn_789012",
      shipped_at: "2024-03-15T15:30:00Z",
      customer: {
        full_name: "Jane Smith",
        email: "jane@example.com",
        phone_number: "+1987654321",
      },
      items: [
        {
          product_id: 2,
          name: "Xbox Series X",
          quantity: 1,
          price_per_unit: 499.99,
          line_item_total: 499.99,
        },
      ],
    },
  ];

  const [orders] = useState(testOrders);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Filter orders based on search and filters
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.customer.full_name
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      order.customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.order_id.toString().includes(searchQuery);

    const matchesStatus =
      statusFilter === "all" || order.order_status === statusFilter;

    const matchesDate =
      (!dateRange.start ||
        new Date(order.order_date) >= new Date(dateRange.start)) &&
      (!dateRange.end || new Date(order.order_date) <= new Date(dateRange.end));

    return matchesSearch && matchesStatus && matchesDate;
  });

  // Get unique statuses for filter dropdown
  const orderStatuses = [...new Set(orders.map((order) => order.order_status))];

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  const handleDeleteOrder = (orderId) => {
    console.log("Delete order:", orderId);
  };

  return (
    <div className="w-full h-full flex flex-col p-4 md:p-6 lg:p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Orders</h1>
      </div>

      {/* Enhanced Filters Section */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search orders..."
            className="border rounded-lg px-4 py-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Status Filter */}
          <select
            className="border rounded-lg px-4 py-2"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Status</option>
            {orderStatuses.map((status) => (
              <option key={status} value={status}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>

          {/* Date Range Filter */}
          <div className="flex gap-2">
            <input
              type="date"
              className="border rounded-lg px-4 py-2 w-1/2"
              value={dateRange.start}
              onChange={(e) =>
                setDateRange({ ...dateRange, start: e.target.value })
              }
            />
            <input
              type="date"
              className="border rounded-lg px-4 py-2 w-1/2"
              value={dateRange.end}
              onChange={(e) =>
                setDateRange({ ...dateRange, end: e.target.value })
              }
            />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between border-t pt-4">
          <p className="text-sm text-gray-700">
            Showing {filteredOrders.length} of {orders.length} orders
          </p>
          {filteredOrders.length === 0 && (
            <div className="text-sm text-gray-500 italic">
              No orders match your filters
            </div>
          )}
        </div>
      </div>

      {/* Orders Display - Desktop Table / Mobile Cards */}
      <div className="bg-white rounded-lg shadow-sm">
        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto lg:max-h-[calc(100vh-200px)] lg:overflow-y-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 sticky top-0 z-10">
              <tr>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                  Order ID
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                  Customer
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                  Date
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                  Total
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                  Status
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                  Payment
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.order_id}>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      #{order.order_id}
                    </div>
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {order.customer.full_name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {order.customer.email}
                    </div>
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {new Date(order.order_date).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      ${order.total_amount.toFixed(2)}
                    </div>
                    {order.discount_amount_applied > 0 && (
                      <div className="text-xs text-green-600">
                        -${order.discount_amount_applied.toFixed(2)} discount
                      </div>
                    )}
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        order.order_status === "delivered"
                          ? "bg-green-100 text-green-800"
                          : order.order_status === "on the way"
                          ? "bg-blue-100 text-blue-800"
                          : order.order_status === "canceled"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {order.order_status.charAt(0).toUpperCase() +
                        order.order_status.slice(1)}
                    </span>
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <div className="flex flex-col gap-1">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          order.payment_status === "paid"
                            ? "bg-green-100 text-green-800"
                            : order.payment_status === "failed"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {order.payment_status.charAt(0).toUpperCase() +
                          order.payment_status.slice(1)}
                      </span>
                      <span className="text-xs text-gray-500">
                        {order.payment_method}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-md font-medium">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleViewOrder(order)}
                        className="text-main-green hover:text-green-700"
                        title="View Order Details"
                      >
                        <FaEye />
                      </button>
                      <button
                        onClick={() => handleDeleteOrder(order.order_id)}
                        className="text-red-600 hover:text-red-900"
                        title="Delete Order"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards View */}
        <div className="md:hidden space-y-4 p-4">
          {filteredOrders.map((order) => (
            <MobileOrderCard
              key={order.order_id}
              order={order}
              onView={handleViewOrder}
              onDelete={handleDeleteOrder}
            />
          ))}
        </div>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                Order #{selectedOrder.order_id} Details
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes />
              </button>
            </div>

            {/* Customer Information */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Customer Information
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Name</p>
                  <p className="font-medium">
                    {selectedOrder.customer.full_name}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium">{selectedOrder.customer.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium">
                    {selectedOrder.customer.phone_number}
                  </p>
                </div>
              </div>
            </div>

            {/* Shipping Information */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Shipping Information
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Address</p>
                  <p className="font-medium">
                    {selectedOrder.shipping_address}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">City</p>
                  <p className="font-medium">{selectedOrder.shipping_city}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">State</p>
                  <p className="font-medium">{selectedOrder.shipping_state}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Postal Code</p>
                  <p className="font-medium">
                    {selectedOrder.shipping_postal_code}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Country</p>
                  <p className="font-medium">
                    {selectedOrder.shipping_country}
                  </p>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Order Items</h3>
              <div className="border rounded-lg">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">
                        Product
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">
                        Quantity
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">
                        Price
                      </th>
                      <th className="px-4 py-2 text-left text-xs font-medium text-gray-500">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {selectedOrder.items.map((item) => (
                      <tr key={item.product_id}>
                        <td className="px-4 py-2">{item.name}</td>
                        <td className="px-4 py-2">{item.quantity}</td>
                        <td className="px-4 py-2">
                          ${item.price_per_unit.toFixed(2)}
                        </td>
                        <td className="px-4 py-2">
                          ${item.line_item_total.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Order Summary */}
            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">
                  ${selectedOrder.total_amount.toFixed(2)}
                </span>
              </div>
              {selectedOrder.discount_amount_applied > 0 && (
                <div className="flex justify-between items-center mb-2 text-green-600">
                  <span>Discount</span>
                  <span>
                    -${selectedOrder.discount_amount_applied.toFixed(2)}
                  </span>
                </div>
              )}
              <div className="flex justify-between items-center font-bold text-lg">
                <span>Total</span>
                <span>
                  $
                  {(
                    selectedOrder.total_amount -
                    selectedOrder.discount_amount_applied
                  ).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Order Timeline */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Order Timeline</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm">
                    Order placed:{" "}
                    {new Date(selectedOrder.order_date).toLocaleString()}
                  </span>
                </div>
                {selectedOrder.shipped_at && (
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-sm">
                      Shipped:{" "}
                      {new Date(selectedOrder.shipped_at).toLocaleString()}
                    </span>
                  </div>
                )}
                {selectedOrder.delivered_at && (
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm">
                      Delivered:{" "}
                      {new Date(selectedOrder.delivered_at).toLocaleString()}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
