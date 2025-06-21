import { useState } from "react";
import { FaEye, FaTrash, FaTimes } from "react-icons/fa";

// Mobile Customer Card Component
const MobileCustomerCard = ({ customer, onView, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-lg font-semibold">{customer.full_name}</h3>
          <p className="text-sm text-gray-500">{customer.email}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onView(customer)}
            className="text-main-green hover:text-green-700 p-2"
            title="View Customer Details"
          >
            <FaEye />
          </button>
          <button
            onClick={() => onDelete(customer.user_id)}
            className="text-red-600 hover:text-red-900 p-2"
            title="Delete Customer"
          >
            <FaTrash />
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {/* Contact Info */}
        <div>
          <p className="text-sm text-gray-500">Phone</p>
          <p className="text-sm font-medium">{customer.phone_number || "Not provided"}</p>
        </div>

        {/* Location Info */}
        <div>
          <p className="text-sm text-gray-500">Location</p>
          <p className="text-sm font-medium">
            {customer.city && customer.country
              ? `${customer.city}, ${customer.country}`
              : "Not provided"}
          </p>
        </div>

        {/* Status Badge */}
        <div>
          <span
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
              customer.status === "active"
                ? "bg-green-100 text-green-800"
                : customer.status === "banned"
                ? "bg-red-100 text-red-800"
                : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
          </span>
        </div>

        {/* Account Info */}
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <p className="text-gray-500">Member Since</p>
            <p className="font-medium">
              {new Date(customer.created_at).toLocaleDateString()}
            </p>
          </div>
          <div>
            <p className="text-gray-500">Last Login</p>
            <p className="font-medium">
              {customer.last_login
                ? new Date(customer.last_login).toLocaleDateString()
                : "Never"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Customers = () => {
  // Test data based on the database schema
  const testCustomers = [
    {
      user_id: 1,
      username: "johndoe",
      email: "john@example.com",
      first_name: "John",
      last_name: "Doe",
      full_name: "John Doe",
      phone_number: "+1234567890",
      address: "123 Main St",
      city: "New York",
      state: "NY",
      country: "USA",
      postal_code: "10001",
      created_at: "2024-01-15T10:00:00Z",
      updated_at: "2024-03-15T10:00:00Z",
      role_id: 1,
      status: "active",
      last_login: "2024-03-18T15:30:00Z",
      orders_count: 5,
      total_spent: 2499.95
    },
    {
      user_id: 2,
      username: "janesmith",
      email: "jane@example.com",
      first_name: "Jane",
      last_name: "Smith",
      full_name: "Jane Smith",
      phone_number: "+1987654321",
      address: "456 Oak Ave",
      city: "Los Angeles",
      state: "CA",
      country: "USA",
      postal_code: "90001",
      created_at: "2024-02-01T14:30:00Z",
      updated_at: "2024-03-14T09:15:00Z",
      role_id: 1,
      status: "active",
      last_login: "2024-03-17T11:20:00Z",
      orders_count: 3,
      total_spent: 899.97
    }
  ];

  const [customers] = useState(testCustomers);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  // Filter customers based on search and filters
  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.phone_number?.includes(searchQuery);

    const matchesStatus = statusFilter === "all" || customer.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleViewCustomer = (customer) => {
    setSelectedCustomer(customer);
  };

  const handleCloseModal = () => {
    setSelectedCustomer(null);
  };

  const handleDeleteCustomer = (customerId) => {
    console.log("Delete customer:", customerId);
  };

  return (
    <div className="w-full h-full flex flex-col p-4 md:p-6 lg:p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Customers</h1>
      </div>

      {/* Enhanced Filters Section */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search customers..."
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
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="banned">Banned</option>
          </select>
        </div>
        <div className="mt-4 flex items-center justify-between border-t pt-4">
          <p className="text-sm text-gray-700">
            Showing {filteredCustomers.length} of {customers.length} customers
          </p>
          {filteredCustomers.length === 0 && (
            <div className="text-sm text-gray-500 italic">
              No customers match your filters
            </div>
          )}
        </div>
      </div>

      {/* Customers Display - Desktop Table / Mobile Cards */}
      <div className="bg-white rounded-lg shadow-sm">
        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto lg:max-h-[calc(100vh-200px)] lg:overflow-y-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 sticky top-0 z-10">
              <tr>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                  Customer
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                  Contact
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                  Location
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                  Status
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                  Orders
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                  Total Spent
                </th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCustomers.map((customer) => (
                <tr key={customer.user_id}>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {customer.full_name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {customer.email}
                    </div>
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {customer.phone_number || "Not provided"}
                    </div>
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {customer.city && customer.country
                        ? `${customer.city}, ${customer.country}`
                        : "Not provided"}
                    </div>
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        customer.status === "active"
                          ? "bg-green-100 text-green-800"
                          : customer.status === "banned"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {customer.status.charAt(0).toUpperCase() +
                        customer.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {customer.orders_count} orders
                    </div>
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      ${customer.total_spent.toFixed(2)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-md font-medium">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleViewCustomer(customer)}
                        className="text-main-green hover:text-green-700"
                        title="View Customer Details"
                      >
                        <FaEye />
                      </button>
                      <button
                        onClick={() => handleDeleteCustomer(customer.user_id)}
                        className="text-red-600 hover:text-red-900"
                        title="Delete Customer"
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
          {filteredCustomers.map((customer) => (
            <MobileCustomerCard
              key={customer.user_id}
              customer={customer}
              onView={handleViewCustomer}
              onDelete={handleDeleteCustomer}
            />
          ))}
        </div>
      </div>

      {/* Customer Details Modal */}
      {selectedCustomer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Customer Details</h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes />
              </button>
            </div>

            {/* Personal Information */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Full Name</p>
                  <p className="font-medium">{selectedCustomer.full_name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium">{selectedCustomer.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium">
                    {selectedCustomer.phone_number || "Not provided"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Username</p>
                  <p className="font-medium">{selectedCustomer.username}</p>
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Address Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Address</p>
                  <p className="font-medium">
                    {selectedCustomer.address || "Not provided"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">City</p>
                  <p className="font-medium">
                    {selectedCustomer.city || "Not provided"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">State</p>
                  <p className="font-medium">
                    {selectedCustomer.state || "Not provided"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Postal Code</p>
                  <p className="font-medium">
                    {selectedCustomer.postal_code || "Not provided"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Country</p>
                  <p className="font-medium">
                    {selectedCustomer.country || "Not provided"}
                  </p>
                </div>
              </div>
            </div>

            {/* Account Information */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Account Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Status</p>
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      selectedCustomer.status === "active"
                        ? "bg-green-100 text-green-800"
                        : selectedCustomer.status === "banned"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {selectedCustomer.status.charAt(0).toUpperCase() +
                      selectedCustomer.status.slice(1)}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Member Since</p>
                  <p className="font-medium">
                    {new Date(selectedCustomer.created_at).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Last Login</p>
                  <p className="font-medium">
                    {selectedCustomer.last_login
                      ? new Date(selectedCustomer.last_login).toLocaleDateString()
                      : "Never"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Last Updated</p>
                  <p className="font-medium">
                    {new Date(selectedCustomer.updated_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Order Statistics */}
            <div className="border-t pt-4">
              <h3 className="text-lg font-semibold mb-2">Order Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Total Orders</p>
                  <p className="text-lg font-medium">{selectedCustomer.orders_count}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Spent</p>
                  <p className="text-lg font-medium">
                    ${selectedCustomer.total_spent.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customers;