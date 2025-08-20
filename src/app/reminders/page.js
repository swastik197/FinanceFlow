'use client';

import { useState } from 'react';
import {
  ArrowLeftIcon,
  PlusIcon,
  BellIcon,
  CalendarIcon,
  CreditCardIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function RemindersPage() {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  const reminders = [
    {
      id: 1,
      type: 'bill',
      title: 'Electricity Bill',
      amount: 2500,
      dueDate: '2024-10-28',
      category: 'Utilities',
      recurring: 'monthly',
      status: 'pending',
      daysLeft: 4,
      autoPayEnabled: false
    },
    {
      id: 2,
      type: 'emi',
      title: 'Laptop EMI',
      amount: 8500,
      dueDate: '2024-10-30',
      category: 'Electronics',
      recurring: 'monthly',
      status: 'pending',
      daysLeft: 6,
      autoPayEnabled: true
    },
    {
      id: 3,
      type: 'loan',
      title: 'Education Loan',
      amount: 15000,
      dueDate: '2024-11-01',
      category: 'Education',
      recurring: 'monthly',
      status: 'pending',
      daysLeft: 8,
      autoPayEnabled: true
    },
    {
      id: 4,
      type: 'bill',
      title: 'Mobile Recharge',
      amount: 599,
      dueDate: '2024-10-26',
      category: 'Telecommunications',
      recurring: 'monthly',
      status: 'overdue',
      daysLeft: -2,
      autoPayEnabled: false
    },
    {
      id: 5,
      type: 'bill',
      title: 'Internet Bill',
      amount: 1200,
      dueDate: '2024-10-22',
      category: 'Utilities',
      recurring: 'monthly',
      status: 'paid',
      daysLeft: 0,
      autoPayEnabled: true
    }
  ];

  const [newReminder, setNewReminder] = useState({
    type: 'bill',
    title: '',
    amount: '',
    dueDate: '',
    category: '',
    recurring: 'monthly'
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'overdue': return 'text-red-400 bg-red-900/20 border-red-500';
      case 'pending': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500';
      case 'paid': return 'text-green-400 bg-green-900/20 border-green-500';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'bill': return CreditCardIcon;
      case 'emi': return CalendarIcon;
      case 'loan': return ExclamationTriangleIcon;
      default: return BellIcon;
    }
  };

  const getDaysLeftText = (daysLeft) => {
    if (daysLeft < 0) return `${Math.abs(daysLeft)} days overdue`;
    if (daysLeft === 0) return 'Due today';
    if (daysLeft === 1) return 'Due tomorrow';
    return `${daysLeft} days left`;
  };

  const filterReminders = (filter) => {
    switch (filter) {
      case 'upcoming':
        return reminders.filter(r => r.status === 'pending' && r.daysLeft >= 0);
      case 'overdue':
        return reminders.filter(r => r.status === 'overdue');
      case 'paid':
        return reminders.filter(r => r.status === 'paid');
      default:
        return reminders;
    }
  };

  const totalUpcoming = reminders.filter(r => r.status === 'pending' && r.daysLeft >= 0).reduce((sum, r) => sum + r.amount, 0);
  const totalOverdue = reminders.filter(r => r.status === 'overdue').reduce((sum, r) => sum + r.amount, 0);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <ArrowLeftIcon className="w-6 h-6" />
          <h1 className="text-xl font-bold">Payment Reminders</h1>
        </div>
        <PlusIcon className="w-6 h-6" />
      </header>

      {/* Summary Cards */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4">
            <div className="flex items-center space-x-2 mb-2">
              <ClockIcon className="w-5 h-5 text-white" />
              <span className="text-sm text-white/80">Upcoming</span>
            </div>
            <p className="text-2xl font-bold text-white">₹{totalUpcoming.toLocaleString()}</p>
            <p className="text-sm text-white/60">
              {reminders.filter(r => r.status === 'pending' && r.daysLeft >= 0).length} payments
            </p>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-xl p-4">
            <div className="flex items-center space-x-2 mb-2">
              <ExclamationTriangleIcon className="w-5 h-5 text-white" />
              <span className="text-sm text-white/80">Overdue</span>
            </div>
            <p className="text-2xl font-bold text-white">₹{totalOverdue.toLocaleString()}</p>
            <p className="text-sm text-white/60">
              {reminders.filter(r => r.status === 'overdue').length} payments
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-6 bg-gray-800 rounded-lg p-1">
          {['upcoming', 'overdue', 'paid'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-3 rounded-md text-sm font-medium capitalize transition-colors ${
                activeTab === tab 
                  ? 'bg-teal-500 text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Reminders List */}
        <div className="space-y-4">
          {filterReminders(activeTab).map(reminder => {
            const IconComponent = getTypeIcon(reminder.type);
            
            return (
              <div key={reminder.id} className={`bg-gray-800 rounded-xl p-4 border-l-4 ${getStatusColor(reminder.status)}`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-gray-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{reminder.title}</h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-400 mt-1">
                        <span className="bg-gray-700 px-2 py-1 rounded text-xs uppercase">
                          {reminder.type}
                        </span>
                        <span className="capitalize">{reminder.category}</span>
                        <span>•</span>
                        <span className="capitalize">{reminder.recurring}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">₹{reminder.amount.toLocaleString()}</p>
                    <p className={`text-sm ${
                      reminder.status === 'overdue' ? 'text-red-400' :
                      reminder.daysLeft <= 3 ? 'text-yellow-400' : 'text-gray-400'
                    }`}>
                      {getDaysLeftText(reminder.daysLeft)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <CalendarIcon className="w-4 h-4" />
                    <span>Due: {new Date(reminder.dueDate).toLocaleDateString()}</span>
                    {reminder.autoPayEnabled && (
                      <>
                        <span>•</span>
                        <span className="text-green-400">Auto-pay ON</span>
                      </>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    {reminder.status === 'pending' && (
                      <>
                        <button className="bg-gray-700 text-white px-3 py-1 rounded text-sm">
                          Snooze
                        </button>
                        <button className="bg-teal-500 text-white px-3 py-1 rounded text-sm">
                          Pay Now
                        </button>
                      </>
                    )}
                    {reminder.status === 'overdue' && (
                      <button className="bg-red-500 text-white px-3 py-1 rounded text-sm">
                        Pay Urgently
                      </button>
                    )}
                    {reminder.status === 'paid' && (
                      <div className="flex items-center space-x-1 text-green-400">
                        <CheckCircleIcon className="w-4 h-4" />
                        <span className="text-sm">Paid</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Add New Reminder */}
        <div className="mt-8 bg-gray-800 rounded-xl p-4">
          <h3 className="text-lg font-semibold mb-4">Add New Reminder</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <select
                value={newReminder.type}
                onChange={(e) => setNewReminder({...newReminder, type: e.target.value})}
                className="bg-gray-700 text-white px-3 py-2 rounded-lg"
              >
                <option value="bill">Bill</option>
                <option value="emi">EMI</option>
                <option value="loan">Loan</option>
              </select>
              <input
                type="text"
                placeholder="Title"
                value={newReminder.title}
                onChange={(e) => setNewReminder({...newReminder, title: e.target.value})}
                className="bg-gray-700 text-white px-3 py-2 rounded-lg"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <input
                type="number"
                placeholder="Amount"
                value={newReminder.amount}
                onChange={(e) => setNewReminder({...newReminder, amount: e.target.value})}
                className="bg-gray-700 text-white px-3 py-2 rounded-lg"
              />
              <input
                type="date"
                value={newReminder.dueDate}
                onChange={(e) => setNewReminder({...newReminder, dueDate: e.target.value})}
                className="bg-gray-700 text-white px-3 py-2 rounded-lg"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Category"
                value={newReminder.category}
                onChange={(e) => setNewReminder({...newReminder, category: e.target.value})}
                className="bg-gray-700 text-white px-3 py-2 rounded-lg"
              />
              <select
                value={newReminder.recurring}
                onChange={(e) => setNewReminder({...newReminder, recurring: e.target.value})}
                className="bg-gray-700 text-white px-3 py-2 rounded-lg"
              >
                <option value="monthly">Monthly</option>
                <option value="weekly">Weekly</option>
                <option value="yearly">Yearly</option>
                <option value="one-time">One-time</option>
              </select>
            </div>
            
            <button className="w-full bg-teal-500 text-white py-2 rounded-lg font-medium">
              Add Reminder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
