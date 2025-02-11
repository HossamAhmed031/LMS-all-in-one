import React from 'react';
import { Clock, Users, Star } from 'lucide-react';

function Courses() {
  const courses = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      description: "Learn full-stack web development from scratch",
      instructor: "Alex Johnson",
      duration: "12 weeks",
      students: 89,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "UI/UX Design Fundamentals",
      description: "Master the principles of modern UI/UX design",
      instructor: "Emily Chen",
      duration: "8 weeks",
      students: 76,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Python for Data Science",
      description: "Learn Python programming for data analysis",
      instructor: "Michael Smith",
      duration: "10 weeks",
      students: 65,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "Digital Marketing Essentials",
      description: "Master modern digital marketing strategies",
      instructor: "Sarah Wilson",
      duration: "6 weeks",
      students: 54,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Courses</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          Add New Course
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <img 
              src={course.image} 
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{course.description}</p>
              
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt={course.instructor}
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span>{course.instructor}</span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  {course.duration}
                </div>
                <div className="flex items-center text-gray-500">
                  <Users className="w-4 h-4 mr-1" />
                  {course.students} students
                </div>
                <div className="flex items-center text-yellow-500">
                  <Star className="w-4 h-4 mr-1" />
                  {course.rating}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;