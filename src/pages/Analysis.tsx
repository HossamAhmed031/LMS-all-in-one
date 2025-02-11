import React from 'react';
import { TrendingUp, TrendingDown, Users, BookOpen, DollarSign, Award } from 'lucide-react';

function Analysis() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$24,567",
      change: "+12%",
      trend: "up"
    },
    {
      title: "Active Students",
      value: "248",
      change: "+23%",
      trend: "up"
    },
    {
      title: "Course Completion",
      value: "78%",
      change: "-5%",
      trend: "down"
    },
    {
      title: "Average Rating",
      value: "4.8",
      change: "+2%",
      trend: "up"
    }
  ];

  const topCourses = [
    { name: "Web Development", students: 89, revenue: "$12,345", completion: 85 },
    { name: "UI/UX Design", students: 76, revenue: "$9,876", completion: 92 },
    { name: "Data Science", students: 65, revenue: "$8,765", completion: 78 },
    { name: "Digital Marketing", students: 54, revenue: "$6,543", completion: 88 }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Analysis</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-sm font-medium text-gray-500">{stat.title}</h2>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                stat.trend === 'up' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {stat.trend === 'up' ? (
                  <TrendingUp className="w-4 h-4 mr-1" />
                ) : (
                  <TrendingDown className="w-4 h-4 mr-1" />
                )}
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Top Performing Courses</h2>
          <div className="space-y-4">
            {topCourses.map((course, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-indigo-100 rounded-lg p-2">
                    <BookOpen className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{course.name}</h3>
                    <p className="text-xs text-gray-500">{course.students} students</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{course.revenue}</p>
                  <p className="text-xs text-gray-500">{course.completion}% completion</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Achievements</h2>
          <div className="space-y-4">
            {[
              { icon: Users, text: "Reached 1,000 total students", time: "This week" },
              { icon: Award, text: "95% positive course ratings", time: "This month" },
              { icon: DollarSign, text: "Surpassed $100k in revenue", time: "This quarter" },
              { icon: BookOpen, text: "Added 5 new courses", time: "This month" },
            ].map((achievement, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="bg-green-100 rounded-full p-2">
                  <achievement.icon className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{achievement.text}</p>
                  <p className="text-xs text-gray-500">{achievement.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analysis;