import React from 'react';
import { DollarSign, Download, Filter } from 'lucide-react';

function Payments() {
  const transactions = [
    {
      id: 1,
      student: "John Doe",
      course: "Web Development Bootcamp",
      amount: 499.99,
      status: "Completed",
      date: "2024-03-15",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 2,
      student: "Jane Smith",
      course: "UI/UX Design Fundamentals",
      amount: 299.99,
      status: "Pending",
      date: "2024-03-14",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 3,
      student: "Mike Johnson",
      course: "Python for Data Science",
      amount: 399.99,
      status: "Completed",
      date: "2024-03-13",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 4,
      student: "Sarah Wilson",
      course: "Digital Marketing Essentials",
      amount: 199.99,
      status: "Failed",
      date: "2024-03-12",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Payments</h1>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="grid grid-cols-4 gap-4 p-4 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-500">
          <div>Student</div>
          <div>Course</div>
          <div>Amount</div>
          <div>Status</div>
        </div>

        <div className="divide-y divide-gray-200">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="grid grid-cols-4 gap-4 p-4 items-center">
              <div className="flex items-center space-x-3">
                <img
                  src={transaction.image}
                  alt={transaction.student}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium text-gray-900">{transaction.student}</p>
                  <p className="text-xs text-gray-500">{transaction.date}</p>
                </div>
              </div>
              
              <div className="text-sm text-gray-900">{transaction.course}</div>
              
              <div className="flex items-center text-sm font-medium text-gray-900">
                <DollarSign className="w-4 h-4 mr-1 text-gray-400" />
                {transaction.amount.toFixed(2)}
              </div>
              
              <div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  transaction.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  transaction.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {transaction.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Payments;