import React from 'react';
import { TrendingUp, TrendingDown, Users, BookOpen, Award, Clock } from 'lucide-react';

function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-2">Active Courses</h2>
              <p className="text-3xl font-bold text-indigo-600">12</p>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              <TrendingUp className="w-4 h-4 mr-1" />
              +23%
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-2">4 new this month</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-2">Total Students</h2>
              <p className="text-3xl font-bold text-indigo-600">248</p>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              <TrendingUp className="w-4 h-4 mr-1" />
              +12%
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-2">32 new this week</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-2">Average Score</h2>
              <p className="text-3xl font-bold text-indigo-600">85%</p>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              <TrendingDown className="w-4 h-4 mr-1" />
              -2%
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-2">Based on all courses</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {[
              { icon: Users, text: "New student enrollment: Sarah Parker", time: "2 minutes ago" },
              { icon: BookOpen, text: "New course published: Advanced JavaScript", time: "1 hour ago" },
              { icon: Award, text: "Certificate issued to John Smith", time: "3 hours ago" },
              { icon: Clock, text: "Upcoming class: React Fundamentals", time: "Tomorrow, 10:00 AM" },
            ].map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="bg-indigo-100 rounded-full p-2">
                  <activity.icon className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.text}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Popular Courses</h2>
          <div className="space-y-4">
            {[
              { title: "Web Development Bootcamp", students: 89, rating: 4.8 },
              { title: "UI/UX Design Fundamentals", students: 76, rating: 4.9 },
              { title: "Python for Data Science", students: 65, rating: 4.7 },
              { title: "Digital Marketing Essentials", students: 54, rating: 4.6 },
            ].map((course, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{course.title}</h3>
                  <p className="text-xs text-gray-500">{course.students} students enrolled</p>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm font-medium ml-1">{course.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;