import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Menu, X, Bell, ChevronLeft, Moon, Sun, LogOut } from 'lucide-react';
import { useDarkMode } from './context/DarkModeContext';
import { useAuth } from './context/AuthContext';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Teachers from './pages/Teachers';
import Messages from './pages/Messages';
import Analysis from './pages/Analysis';
import Payments from './pages/Payments';
import Support from './pages/Support';
import Settings from './pages/Settings';

function RequireAuth({ children }: { children: JSX.Element }) {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState('Dashboard');
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { isLoggedIn, login, register, logout } = useAuth();

  const handleForgotPassword = (email: string) => {
    console.log('Forgot password:', email);
    alert('Password reset link has been sent to your email');
  };

  const AuthenticatedApp = () => (
    <div className={`flex h-screen ${darkMode ? 'dark' : ''}`}>
      <Sidebar 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <div className="flex-1 flex flex-col overflow-hidden relative dark:bg-gray-900">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-1.5 rounded-r-full shadow-md border border-l-0 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group z-50"
        >
          <ChevronLeft
            size={20}
            className={`text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
              !isSidebarOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 lg:hidden"
              >
                {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">{currentPage}</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {darkMode ? (
                  <Sun size={20} className="text-gray-600 dark:text-gray-400" />
                ) : (
                  <Moon size={20} className="text-gray-600" />
                )}
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 relative">
                <Bell size={20} className="text-gray-600 dark:text-gray-400" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button
                onClick={logout}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                title="Logout"
              >
                <LogOut size={20} className="text-gray-600 dark:text-gray-400" />
              </button>
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="w-8 h-8 rounded-full ring-2 ring-white dark:ring-gray-800"
              />
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-6 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/analysis" element={<Analysis />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/support" element={<Support />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={
            isLoggedIn ? 
              <Navigate to="/dashboard" replace /> : 
              <Login onLogin={login} />
          } 
        />
        <Route 
          path="/register" 
          element={
            isLoggedIn ? 
              <Navigate to="/dashboard" replace /> : 
              <Register onRegister={register} />
          } 
        />
        <Route 
          path="/forgot-password" 
          element={
            isLoggedIn ? 
              <Navigate to="/dashboard" replace /> : 
              <ForgotPassword onSubmit={handleForgotPassword} />
          } 
        />
        <Route 
          path="/*" 
          element={
            <RequireAuth>
              <AuthenticatedApp />
            </RequireAuth>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App