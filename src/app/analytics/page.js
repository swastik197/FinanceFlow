'use client';

import { useState } from 'react';
import BottomNavigation from '@/components/BottomNavigation';
import { 
  ChartBarIcon, 
  CalendarIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  CurrencyDollarIcon,
  ArrowUpIcon,
  ArrowDownIcon
} from '@heroicons/react/24/outline';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function Analytics() {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  // Chart data for monthly trends
  const monthlyData = [
    { month: 'Jan', income: 9340, expenses: 6200, savings: 3140 },
    { month: 'Feb', income: 9340, expenses: 6800, savings: 2540 },
    { month: 'Mar', income: 9340, expenses: 5900, savings: 3440 },
    { month: 'Apr', income: 9340, expenses: 6400, savings: 2940 },
    { month: 'May', income: 9340, expenses: 5700, savings: 3640 },
    { month: 'Jun', income: 9340, expenses: 6100, savings: 3240 },
    { month: 'Jul', income: 9340, expenses: 6600, savings: 2740 },
    { month: 'Aug', income: 9340, expenses: 5800, savings: 3540 }
  ];

  // Data for expense breakdown pie chart
  const expenseData = [
    { name: 'Food & Dining', value: 2800, color: '#f59e0b' },
    { name: 'Transportation', value: 1200, color: '#3b82f6' },
    { name: 'Shopping', value: 800, color: '#8b5cf6' },
    { name: 'Entertainment', value: 600, color: '#10b981' },
    { name: 'Bills & Utilities', value: 400, color: '#ef4444' },
    { name: 'Others', value: 200, color: '#6b7280' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white pb-16 lg:pb-0">
      <div className="p-4 lg:p-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6 lg:mb-8">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold mb-2">Financial Analytics</h1>
            <p className="text-gray-400 lg:text-lg">Track your spending patterns and financial growth</p>
          </div>
          <div className="flex items-center space-x-3 mt-4 lg:mt-0">
            <select 
              className="bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm lg:text-base"
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
            <button className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded-lg transition-colors">
              Export Report
            </button>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
          <div className="bg-gray-800 p-4 lg:p-6 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <CurrencyDollarIcon className="w-8 h-8 lg:w-10 lg:h-10 text-green-400" />
              <ArrowUpIcon className="w-4 h-4 lg:w-5 lg:h-5 text-green-400" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold">₹9,340</h3>
            <p className="text-xs lg:text-sm text-gray-400">Total Income</p>
            <p className="text-xs lg:text-sm text-green-400 mt-1">+12% from last month</p>
          </div>

          <div className="bg-gray-800 p-4 lg:p-6 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <ArrowTrendingDownIcon className="w-8 h-8 lg:w-10 lg:h-10 text-red-400" />
              <ArrowDownIcon className="w-4 h-4 lg:w-5 lg:h-5 text-red-400" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold">₹5,800</h3>
            <p className="text-xs lg:text-sm text-gray-400">Total Expenses</p>
            <p className="text-xs lg:text-sm text-red-400 mt-1">+8% from last month</p>
          </div>

          <div className="bg-gray-800 p-4 lg:p-6 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <ArrowTrendingUpIcon className="w-8 h-8 lg:w-10 lg:h-10 text-blue-400" />
              <ArrowUpIcon className="w-4 h-4 lg:w-5 lg:h-5 text-blue-400" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold">₹3,540</h3>
            <p className="text-xs lg:text-sm text-gray-400">Net Savings</p>
            <p className="text-xs lg:text-sm text-blue-400 mt-1">+18% from last month</p>
          </div>

          <div className="bg-gray-800 p-4 lg:p-6 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <ChartBarIcon className="w-8 h-8 lg:w-10 lg:h-10 text-purple-400" />
              <span className="text-xs lg:text-sm text-purple-400">33%</span>
            </div>
            <h3 className="text-lg lg:text-xl font-bold">Savings Rate</h3>
            <p className="text-xs lg:text-sm text-gray-400">Of total income</p>
            <p className="text-xs lg:text-sm text-purple-400 mt-1">Above average</p>
          </div>
        </div>

        {/* Simple Charts Placeholder */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-8 space-y-6 lg:space-y-0">
          
          {/* Monthly Trends - Takes 2 columns on desktop */}
          <div className="lg:col-span-2 bg-gray-800 p-4 lg:p-6 rounded-xl">
            <h3 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-6">Monthly Trends</h3>
            <div className="h-64 lg:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis 
                    dataKey="month" 
                    stroke="#9CA3AF"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="#9CA3AF"
                    fontSize={12}
                    tickFormatter={(value) => `₹${value/1000}k`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#F9FAFB'
                    }}
                    formatter={(value) => [`₹${value.toLocaleString()}`, '']}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="income" 
                    stroke="#10B981" 
                    strokeWidth={3}
                    name="Income"
                    dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="expenses" 
                    stroke="#EF4444" 
                    strokeWidth={3}
                    name="Expenses"
                    dot={{ fill: '#EF4444', strokeWidth: 2, r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="savings" 
                    stroke="#3B82F6" 
                    strokeWidth={3}
                    name="Savings"
                    dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-400">Income</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm text-gray-400">Expenses</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-400">Savings</span>
              </div>
            </div>
          </div>

          {/* Expense Categories */}
          <div className="bg-gray-800 p-4 lg:p-6 rounded-xl">
            <h3 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-6">Expense Breakdown</h3>
            <div className="h-48 lg:h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expenseData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                    fontSize={10}
                  >
                    {expenseData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#F9FAFB'
                    }}
                    formatter={(value) => [`₹${value.toLocaleString()}`, 'Amount']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 mt-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span className="text-gray-400">Food & Dining</span>
                </div>
                <span className="font-medium">35%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-gray-400">Transportation</span>
                </div>
                <span className="font-medium">20%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span className="text-gray-400">Entertainment</span>
                </div>
                <span className="font-medium">15%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-gray-400">Shopping</span>
                </div>
                <span className="font-medium">12%</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Insights - Mobile Version */}
        <div className="lg:hidden bg-gray-800 p-4 rounded-xl mt-6">
          <h3 className="text-lg font-semibold mb-4">AI Insights</h3>
          <div className="space-y-3">
            <div className="p-3 bg-blue-500 bg-opacity-20 border border-blue-500 border-opacity-30 rounded-lg">
              <p className="text-blue-300 font-medium">🎯 Great Progress!</p>
              <p className="text-sm text-blue-200">Your savings increased by 18% this month.</p>
            </div>
            <div className="p-3 bg-yellow-500 bg-opacity-20 border border-yellow-500 border-opacity-30 rounded-lg">
              <p className="text-yellow-300 font-medium">⚠️ Spending Alert</p>
              <p className="text-sm text-yellow-200">Food expenses are above average this week.</p>
            </div>
            <div className="p-3 bg-green-500 bg-opacity-20 border border-green-500 border-opacity-30 rounded-lg">
              <p className="text-green-300 font-medium">💡 Suggestion</p>
              <p className="text-sm text-green-200">Consider setting up automatic savings of ₹200/month.</p>
            </div>
          </div>
        </div>

        {/* Insights and Recommendations - Desktop only */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 lg:mt-8">
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">AI Insights</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-500 bg-opacity-20 border border-blue-500 border-opacity-30 rounded-lg">
                <p className="text-blue-300 font-medium">🎯 Great Progress!</p>
                <p className="text-sm text-blue-200 mt-1">
                  Your savings rate increased by 5% this month. Keep up the excellent work!
                </p>
              </div>
              <div className="p-4 bg-yellow-500 bg-opacity-20 border border-yellow-500 border-opacity-30 rounded-lg">
                <p className="text-yellow-300 font-medium">⚠️ Budget Alert</p>
                <p className="text-sm text-yellow-200 mt-1">
                  Food expenses are 20% above your monthly budget. Consider meal planning.
                </p>
              </div>
              <div className="p-4 bg-green-500 bg-opacity-20 border border-green-500 border-opacity-30 rounded-lg">
                <p className="text-green-300 font-medium">💡 Tip</p>
                <p className="text-sm text-green-200 mt-1">
                  You could save ₹50/month by switching to a student discount plan.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Financial Goals</h3>
            <div className="space-y-4">
              <div className="p-4 border border-gray-600 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Emergency Fund</span>
                  <span className="text-sm text-gray-400">₹2,400 / ₹3,000</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <p className="text-xs text-gray-400 mt-1">2 months remaining</p>
              </div>
              
              <div className="p-4 border border-gray-600 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">New Laptop</span>
                  <span className="text-sm text-gray-400">₹800 / ₹1,200</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '67%' }}></div>
                </div>
                <p className="text-xs text-gray-400 mt-1">3 months remaining</p>
              </div>

              <div className="p-4 border border-gray-600 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Vacation Fund</span>
                  <span className="text-sm text-gray-400">₹300 / ₹1,500</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                </div>
                <p className="text-xs text-gray-400 mt-1">8 months remaining</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
}
