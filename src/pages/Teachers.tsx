import React from 'react';
import { Mail, Phone, MapPin, Award } from 'lucide-react';

function Teachers() {
  const teachers = [
    {
      id: 1,
      name: "Alex Johnson",
      subject: "Web Development",
      email: "alex.j@skillzone.edu",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      rating: 4.8,
      students: 89,
      courses: 6,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 2,
      name: "Emily Chen",
      subject: "UI/UX Design",
      email: "emily.c@skillzone.edu",
      phone: "+1 (555) 234-5678",
      location: "New York, NY",
      rating: 4.9,
      students: 76,
      courses: 4,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 3,
      name: "Michael Smith",
      subject: "Data Science",
      email: "michael.s@skillzone.edu",
      phone: "+1 (555) 345-6789",
      location: "Boston, MA",
      rating: 4.7,
      students: 65,
      courses: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 4,
      name: "Sarah Wilson",
      subject: "Digital Marketing",
      email: "sarah.w@skillzone.edu",
      phone: "+1 (555) 456-7890",
      location: "Austin, TX",
      rating: 4.6,
      students: 54,
      courses: 3,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Teachers</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          Add New Teacher
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start space-x-4">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-16 h-16 rounded-full"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-900">{teacher.name}</h2>
                <p className="text-indigo-600 font-medium">{teacher.subject}</p>
                
                <div className="mt-4 space-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    {teacher.email}
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    {teacher.phone}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {teacher.location}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-semibold text-indigo-600">{teacher.rating}</p>
                  <p className="text-sm text-gray-500">Rating</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-indigo-600">{teacher.students}</p>
                  <p className="text-sm text-gray-500">Students</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-indigo-600">{teacher.courses}</p>
                  <p className="text-sm text-gray-500">Courses</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teachers;