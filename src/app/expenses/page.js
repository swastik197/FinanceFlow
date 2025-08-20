'use client';

import { useState } from 'react';
import {
  PlusIcon,
  ArrowLeftIcon,
  ClockIcon,
  TagIcon,
  CameraIcon,
  MicrophoneIcon
} from '@heroicons/react/24/outline';

export default function ExpensesPage() {
  const [activeTab, setActiveTab] = useState('expenses');
  const [expenses, setExpenses] = useState([
    { id: 1, amount: 45.50, category: 'Food', description: 'Lunch at cafe', date: '2024-10-24', auto: true },
    { id: 2, amount: 12.00, category: 'Transport', description: 'Bus fare', date: '2024-10-24', auto: true },
    { id: 3, amount: 89.99, category: 'Shopping', description: 'Groceries', date: '2024-10-23', auto: false },
  ]);
  
  const [partTimeHours, setPartTimeHours] = useState([
    { id: 1, job: 'Tutoring', hours: 3, rate: 25, date: '2024-10-24', status: 'completed' },
    { id: 2, job: 'Food Delivery', hours: 5, rate: 15, date: '2024-10-24', status: 'in-progress' },
    { id: 3, job: 'Freelance Design', hours: 8, rate: 35, date: '2024-10-23', status: 'completed' },
  ]);

  const [newExpense, setNewExpense] = useState({
    amount: '',
    description: '',
    category: '',
    useAI: true
  });

  const categories = ['Food', 'Transport', 'Shopping', 'Entertainment', 'Education', 'Health', 'Other'];

  const handleAddExpense = () => {
    if (newExpense.amount && newExpense.description) {
      const expense = {
        id: Date.now(),
        amount: parseFloat(newExpense.amount),
        description: newExpense.description,
        category: newExpense.category || (newExpense.useAI ? 'AI-Categorized' : 'Other'),
        date: new Date().toISOString().split('T')[0],
        auto: newExpense.useAI
      };
      setExpenses([expense, ...expenses]);
      setNewExpense({ amount: '', description: '', category: '', useAI: true });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <ArrowLeftIcon className="w-6 h-6" />
          <h1 className="text-xl font-bold">Smart Expense Tracking</h1>
        </div>
        <PlusIcon className="w-6 h-6" />
      </header>

      {/* Tab Navigation */}
      <div className="bg-gray-800 px-4 py-2">
        <div className="flex space-x-1">
          <button
            onClick={() => setActiveTab('expenses')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeTab === 'expenses' ? 'bg-teal-500 text-white' : 'text-gray-400'
            }`}
          >
            Expenses
          </button>
          <button
            onClick={() => setActiveTab('tracker')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeTab === 'tracker' ? 'bg-teal-500 text-white' : 'text-gray-400'
            }`}
          >
            Part-Time Tracker
          </button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {activeTab === 'expenses' && (
          <>
            {/* Add Expense Form */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h3 className="text-lg font-semibold mb-4">Add New Expense</h3>
              
              <div className="space-y-4">
                <div className="flex space-x-2">
                  <input
                    type="number"
                    placeholder="Amount"
                    value={newExpense.amount}
                    onChange={(e) => setNewExpense({...newExpense, amount: e.target.value})}
                    className="flex-1 bg-gray-700 rounded-lg px-3 py-2 text-white"
                  />
                  <select
                    value={newExpense.category}
                    onChange={(e) => setNewExpense({...newExpense, category: e.target.value})}
                    className="bg-gray-700 rounded-lg px-3 py-2 text-white"
                    disabled={newExpense.useAI}
                  >
                    <option value="">Category</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                
                <input
                  type="text"
                  placeholder="Description"
                  value={newExpense.description}
                  onChange={(e) => setNewExpense({...newExpense, description: e.target.value})}
                  className="w-full bg-gray-700 rounded-lg px-3 py-2 text-white"
                />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="useAI"
                      checked={newExpense.useAI}
                      onChange={(e) => setNewExpense({...newExpense, useAI: e.target.checked})}
                      className="rounded"
                    />
                    <label htmlFor="useAI" className="text-sm text-gray-300">
                      Use AI Auto-Categorization
                    </label>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="p-2 bg-gray-700 rounded-lg">
                      <CameraIcon className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-gray-700 rounded-lg">
                      <MicrophoneIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <button
                  onClick={handleAddExpense}
                  className="w-full bg-teal-500 text-white py-2 rounded-lg font-medium"
                >
                  Add Expense
                </button>
              </div>
            </div>

            {/* Expense List */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Recent Expenses</h3>
              {expenses.map(expense => (
                <div key={expense.id} className="bg-gray-800 rounded-xl p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-medium">{expense.description}</h4>
                        {expense.auto && (
                          <span className="bg-teal-500 text-xs px-2 py-1 rounded-full">AI</span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <TagIcon className="w-4 h-4" />
                        <span>{expense.category}</span>
                        <span>•</span>
                        <span>{expense.date}</span>
                      </div>
                    </div>
                    <div className="text-xl font-bold text-red-400">
                      -₹{expense.amount.toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'tracker' && (
          <>
            {/* Part-Time Job Tracker */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h3 className="text-lg font-semibold mb-4">Today&apos;s Work</h3>
              
              <div className="space-y-3">
                {partTimeHours.map(job => (
                  <div key={job.id} className="bg-gray-700 rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">{job.job}</h4>
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <ClockIcon className="w-4 h-4" />
                          <span>{job.hours}h @ ${job.rate}/hr</span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            job.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'
                          }`}>
                            {job.status}
                          </span>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-green-400">
                        +${(job.hours * job.rate).toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-600">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Today&apos;s Total:</span>
                  <span className="text-xl font-bold text-green-400">
                    +${partTimeHours.reduce((sum, job) => sum + (job.hours * job.rate), 0).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Timer */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h3 className="text-lg font-semibold mb-4">Quick Timer</h3>
              <div className="text-center">
                <div className="text-4xl font-mono mb-4">00:00:00</div>
                <div className="flex space-x-2 justify-center">
                  <button className="bg-green-500 px-6 py-2 rounded-lg font-medium">Start</button>
                  <button className="bg-red-500 px-6 py-2 rounded-lg font-medium">Stop</button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
