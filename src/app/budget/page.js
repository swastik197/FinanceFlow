'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowLeftIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  BellIcon,
  PencilIcon
} from '@heroicons/react/24/outline';

export default function BudgetPage() {
  const router = useRouter();
  const [budgets, setBudgets] = useState([
    { 
      id: 1, 
      category: 'Food', 
      allocated: 500, 
      spent: 380, 
      period: 'monthly',
      alerts: true,
      threshold: 80 
    },
    { 
      id: 2, 
      category: 'Transport', 
      allocated: 200, 
      spent: 190, 
      period: 'monthly',
      alerts: true,
      threshold: 85 
    },
    { 
      id: 3, 
      category: 'Entertainment', 
      allocated: 300, 
      spent: 120, 
      period: 'monthly',
      alerts: true,
      threshold: 75 
    },
    { 
      id: 4, 
      category: 'Shopping', 
      allocated: 400, 
      spent: 450, 
      period: 'monthly',
      alerts: true,
      threshold: 80 
    },
  ]);

  const [alerts, setAlerts] = useState([
    { id: 1, type: 'warning', message: 'Transport budget 95% used', category: 'Transport', timestamp: '2 hours ago' },
    { id: 2, type: 'danger', message: 'Shopping budget exceeded by $50', category: 'Shopping', timestamp: '1 day ago' },
    { id: 3, type: 'info', message: 'Food budget on track', category: 'Food', timestamp: '3 days ago' },
  ]);

  const [newBudget, setNewBudget] = useState({
    category: '',
    allocated: '',
    period: 'monthly',
    threshold: 80
  });

  const getUsagePercentage = (spent, allocated) => {
    return Math.min((spent / allocated) * 100, 100);
  };

  const getUsageColor = (percentage, isExceeded = false) => {
    if (isExceeded || percentage > 100) return 'text-red-400';
    if (percentage > 85) return 'text-yellow-400';
    if (percentage > 70) return 'text-orange-400';
    return 'text-green-400';
  };

  const getProgressBarColor = (percentage, isExceeded = false) => {
    if (isExceeded || percentage > 100) return 'bg-red-500';
    if (percentage > 85) return 'bg-yellow-500';
    if (percentage > 70) return 'bg-orange-500';
    return 'bg-green-500';
  };

  const totalAllocated = budgets.reduce((sum, budget) => sum + budget.allocated, 0);
  const totalSpent = budgets.reduce((sum, budget) => sum + budget.spent, 0);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button onClick={() => router.back()} className="hover:bg-gray-700 p-1 rounded-lg transition-colors">
            <ArrowLeftIcon className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Budget Management</h1>
        </div>
        <BellIcon className="w-6 h-6" />
      </header>

      <div className="p-4 space-y-6">
        {/* Budget Overview */}
        <div className="bg-gray-800 rounded-xl p-4">
          <h3 className="text-lg font-semibold mb-4">Monthly Overview</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-gray-400 text-sm">Total Allocated</p>
              <p className="text-2xl font-bold text-white">${totalAllocated.toLocaleString()}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm">Total Spent</p>
              <p className={`text-2xl font-bold ${getUsageColor(getUsagePercentage(totalSpent, totalAllocated), totalSpent > totalAllocated)}`}>
                ${totalSpent.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div 
                className={`h-3 rounded-full ${getProgressBarColor(getUsagePercentage(totalSpent, totalAllocated), totalSpent > totalAllocated)}`}
                style={{ width: `${Math.min(getUsagePercentage(totalSpent, totalAllocated), 100)}%` }}
              ></div>
            </div>
            <p className="text-center text-sm text-gray-400 mt-2">
              {getUsagePercentage(totalSpent, totalAllocated).toFixed(1)}% of budget used
            </p>
          </div>
        </div>

        {/* Real-time Alerts */}
        <div className="bg-gray-800 rounded-xl p-4">
          <h3 className="text-lg font-semibold mb-4">Real-time Alerts</h3>
          <div className="space-y-3">
            {alerts.map(alert => (
              <div key={alert.id} className={`flex items-start space-x-3 p-3 rounded-lg ${
                alert.type === 'danger' ? 'bg-red-900/20 border border-red-500/30' :
                alert.type === 'warning' ? 'bg-yellow-900/20 border border-yellow-500/30' :
                'bg-blue-900/20 border border-blue-500/30'
              }`}>
                {alert.type === 'danger' ? (
                  <ExclamationTriangleIcon className="w-5 h-5 text-red-400 mt-0.5" />
                ) : alert.type === 'warning' ? (
                  <ExclamationTriangleIcon className="w-5 h-5 text-yellow-400 mt-0.5" />
                ) : (
                  <CheckCircleIcon className="w-5 h-5 text-blue-400 mt-0.5" />
                )}
                <div className="flex-1">
                  <p className="font-medium">{alert.message}</p>
                  <p className="text-sm text-gray-400">{alert.category} • {alert.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Budget Categories */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Budget Categories</h3>
          {budgets.map(budget => {
            const percentage = getUsagePercentage(budget.spent, budget.allocated);
            const isExceeded = budget.spent > budget.allocated;
            
            return (
              <div key={budget.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold">{budget.category}</h4>
                    <p className="text-sm text-gray-400 capitalize">{budget.period}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <PencilIcon className="w-4 h-4 text-gray-400" />
                    <div className={`w-2 h-2 rounded-full ${
                      budget.alerts ? 'bg-green-400' : 'bg-gray-500'
                    }`}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Spent</span>
                    <span className={`font-medium ${getUsageColor(percentage, isExceeded)}`}>
                      ${budget.spent} / ${budget.allocated}
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getProgressBarColor(percentage, isExceeded)}`}
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className={getUsageColor(percentage, isExceeded)}>
                      {percentage.toFixed(1)}% used
                    </span>
                    {isExceeded && (
                      <span className="text-red-400">
                        Exceeded by ${(budget.spent - budget.allocated).toFixed(2)}
                      </span>
                    )}
                    <span className="text-gray-400">
                      Alert at {budget.threshold}%
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Add New Budget */}
        <div className="bg-gray-800 rounded-xl p-4">
          <h3 className="text-lg font-semibold mb-4">Add New Budget</h3>
          <div className="space-y-4">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Category"
                value={newBudget.category}
                onChange={(e) => setNewBudget({...newBudget, category: e.target.value})}
                className="flex-1 bg-gray-700 rounded-lg px-3 py-2 text-white"
              />
              <input
                type="number"
                placeholder="Amount"
                value={newBudget.allocated}
                onChange={(e) => setNewBudget({...newBudget, allocated: e.target.value})}
                className="flex-1 bg-gray-700 rounded-lg px-3 py-2 text-white"
              />
            </div>
            
            <div className="flex space-x-2">
              <select
                value={newBudget.period}
                onChange={(e) => setNewBudget({...newBudget, period: e.target.value})}
                className="flex-1 bg-gray-700 rounded-lg px-3 py-2 text-white"
              >
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
              <input
                type="number"
                placeholder="Alert %"
                value={newBudget.threshold}
                onChange={(e) => setNewBudget({...newBudget, threshold: parseInt(e.target.value)})}
                className="w-24 bg-gray-700 rounded-lg px-3 py-2 text-white"
              />
            </div>
            
            <button className="w-full bg-teal-500 text-white py-2 rounded-lg font-medium">
              Create Budget
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
