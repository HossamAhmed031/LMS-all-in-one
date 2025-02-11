import React from 'react';
import { User, Lock, Bell, Globe, Palette, Shield } from 'lucide-react';

function Settings() {
  const settingsSections = [
    {
      icon: User,
      title: "Profile Settings",
      description: "Manage your personal information and preferences",
      fields: [
        { label: "Full Name", type: "text", value: "John Doe" },
        { label: "Email", type: "email", value: "john.doe@example.com" },
        { label: "Phone", type: "tel", value: "+1 (555) 123-4567" },
        { label: "Bio", type: "textarea", value: "Passionate educator with 5+ years of experience in web development." }
      ]
    },
    {
      icon: Lock,
      title: "Security",
      description: "Manage your account security and authentication",
      fields: [
        { label: "Current Password", type: "password", value: "" },
        { label: "New Password", type: "password", value: "" },
        { label: "Confirm Password", type: "password", value: "" }
      ]
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Configure how you want to receive notifications",
      options: [
        { label: "Email Notifications", checked: true },
        { label: "Push Notifications", checked: false },
        { label: "SMS Notifications", checked: true }
      ]
    },
    {
      icon: Globe,
      title: "Language & Region",
      description: "Set your preferred language and regional settings",
      selects: [
        {
          label: "Language",
          options: ["English", "Spanish", "French", "German"],
          value: "English"
        },
        {
          label: "Time Zone",
          options: ["UTC-8", "UTC-5", "UTC+0", "UTC+1"],
          value: "UTC-5"
        }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Settings</h1>

      <div className="space-y-6">
        {settingsSections.map((section, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-indigo-100 rounded-lg p-2">
                <section.icon className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-lg font-medium text-gray-900">{section.title}</h2>
                <p className="text-sm text-gray-500">{section.description}</p>
              </div>
            </div>

            <div className="space-y-4">
              {section.fields && section.fields.map((field, fieldIndex) => (
                <div key={fieldIndex}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      rows={4}
                      defaultValue={field.value}
                    />
                  ) : (
                    <input
                      type={field.type}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      defaultValue={field.value}
                    />
                  )}
                </div>
              ))}

              {section.options && section.options.map((option, optionIndex) => (
                <div key={optionIndex} className="flex items-center">
                  <input
                    type="checkbox"
                    defaultChecked={option.checked}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-900">
                    {option.label}
                  </label>
                </div>
              ))}

              {section.selects && section.selects.map((select, selectIndex) => (
                <div key={selectIndex}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {select.label}
                  </label>
                  <select
                    defaultValue={select.value}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    {select.options.map((option, optionIndex) => (
                      <option key={optionIndex}>{option}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Settings;