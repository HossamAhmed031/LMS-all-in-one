import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Users, MessageSquare, BarChart3, CreditCard, LifeBuoy, Settings, X, Layers } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

function Sidebar({ isOpen, setIsOpen, currentPage, setCurrentPage }: SidebarProps) {
  const navigate = useNavigate();
  
  const mainMenuItems = [
    { icon: BookOpen, text: 'Dashboard', path: '/dashboard' },
    { icon: BookOpen, text: 'Courses', path: '/courses' },
    { icon: Users, text: 'Teachers', path: '/teachers' },
    { icon: MessageSquare, text: 'Messages', path: '/messages' },
    { icon: BarChart3, text: 'Analysis', path: '/analysis' },
    { icon: CreditCard, text: 'Payments', path: '/payments' },
  ];

  const bottomMenuItems = [
    { icon: LifeBuoy, text: 'Support', path: '/support' },
    { icon: Settings, text: 'Settings', path: '/settings' },
  ];

  const MenuButton = ({ item, className = '' }) => (
    <button
      onClick={() => {
        setCurrentPage(item.text);
        navigate(item.path);
        if (window.innerWidth < 1024) {
          setIsOpen(false);
        }
      }}
      className={`w-full flex items-center px-6 py-3.5 rounded-lg transition-all duration-200 ${
        currentPage === item.text
          ? 'bg-indigo-600 text-white'
          : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
      } ${className}`}
    >
      <item.icon className={`h-5 w-5 mr-3 ${currentPage === item.text ? 'text-white' : 'text-gray-400'}`} />
      <span className="font-medium">{item.text}</span>
    </button>
  );

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      <div
        className={`${
          isOpen ? 'translate-x-0 w-72' : '-translate-x-full w-0 lg:w-0'
        } transform fixed lg:relative z-40 bg-gray-900 h-screen transition-all duration-300 ease-in-out flex flex-col overflow-hidden`}
      >
        <div className="flex items-center justify-between p-4 min-w-[288px]">
          <div className="flex items-center space-x-3">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Layers className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-white">LMS AIO</h1>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-800 lg:hidden text-gray-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-between py-6 min-w-[288px]">
          <nav className="px-3 space-y-1">
            {mainMenuItems.map((item, index) => (
              <MenuButton key={index} item={item} />
            ))}
          </nav>

          <nav className="px-3 space-y-1">
            {bottomMenuItems.map((item, index) => (
              <MenuButton key={index} item={item} />
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

export default Sidebar;