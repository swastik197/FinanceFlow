'use client';

import { useState } from 'react';
import {
  ArrowLeftIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  CalendarIcon,
  ChartBarIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

export default function AnalyticsPage() {
  const [period, setPeriod] = useState('week');
  
  const stats = {
    week: {
      totalIncome: 1240,
      totalExpenses: 890,
      netSavings: 350,
      avgDaily: 127,
      topCategory: 'Food',
      topCategoryAmount: 245,
      trend: 'up',
      trendPercent: 12
    },
    month: {
      totalIncome: 4800,
      totalExpenses: 3420,
      netSavings: 1380,
      avgDaily: 114,
      topCategory: 'Food',
      topCategoryAmount: 890,
      trend: 'up',
      trendPercent: 8
    },
    year: {
      totalIncome: 48000,
      totalExpenses: 32400,
      netSavings: 15600,
      avgDaily: 89,
      topCategory: 'Food',
      topCategoryAmount: 9800,
      trend: 'down',
      trendPercent: 3
    }
  };

  const currentStats = stats[period];

  const chartData = {
    week: [
      { day: 'Mon', income: 180, expenses: 85 },
      { day: 'Tue', income: 0, expenses: 45 },
      { day: 'Wed', income: 250, expenses: 120 },
      { day: 'Thu', income: 0, expenses: 67 },
      { day: 'Fri', income: 180, expenses: 89 },
      { day: 'Sat', income: 0, expenses: 156 },
      { day: 'Sun', income: 630, expenses: 78 }
    ],
    month: [
      { day: 'Week 1', income: 1200, expenses: 850 },
      { day: 'Week 2', income: 1100, expenses: 780 },
      { day: 'Week 3', income: 1300, expenses: 920 },
      { day: 'Week 4', income: 1200, expenses: 870 }
    ]
  };

  const categories = [
    { name: 'Food', amount: 245, percentage: 28, color: 'bg-blue-500' },
    { name: 'Transport', amount: 156, percentage: 18, color: 'bg-green-500' },
    { name: 'Shopping', amount: 134, percentage: 15, color: 'bg-purple-500' },
    { name: 'Entertainment', amount: 98, percentage: 11, color: 'bg-yellow-500' },
    { name: 'Education', amount: 87, percentage: 10, color: 'bg-red-500' },
    { name: 'Others', amount: 170, percentage: 18, color: 'bg-gray-500' }
  ];

  const insights = [
    {
      title: "Spending Pattern Alert",
      message: "You spend 40% more on weekends. Consider setting weekend budgets.",
      type: "warning"
    },
    {
      title: "Savings Opportunity",
      message: "Switch to cooking at home 2 more days per week to save $120/month.",
      type: "tip"
    },
    {
      title: "Income Growth",
      message: "Your freelance income increased by 25% this month. Great job!",
      type: "success"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <ArrowLeftIcon className="w-6 h-6" />
          <h1 className="text-xl font-bold">Financial Analytics</h1>
        </div>
        <CalendarIcon className="w-6 h-6" />
      </header>

      {/* Period Selector */}
      <div className="bg-gray-800 px-4 py-3">
        <div className="flex space-x-1">
          {['week', 'month', 'year'].map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize ${
                period === p ? 'bg-teal-500 text-white' : 'text-gray-400 bg-gray-700'
              }`}
            >
              This {p}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 rounded-xl p-4">
            <div className="flex items-center space-x-2 mb-2">
              <ArrowTrendingUpIcon className="w-5 h-5 text-green-400" />
              <span className="text-sm text-gray-400">Total Income</span>
            </div>
            <p className="text-2xl font-bold text-green-400">
              ${currentStats.totalIncome.toLocaleString()}
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-4">
            <div className="flex items-center space-x-2 mb-2">
              <ArrowTrendingDownIcon className="w-5 h-5 text-red-400" />
              <span className="text-sm text-gray-400">Total Expenses</span>
            </div>
            <p className="text-2xl font-bold text-red-400">
              ${currentStats.totalExpenses.toLocaleString()}
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-4">
            <div className="flex items-center space-x-2 mb-2">
              <CurrencyDollarIcon className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-gray-400">Net Savings</span>
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-2xl font-bold text-blue-400">
                ${currentStats.netSavings.toLocaleString()}
              </p>
              <span className={`text-sm flex items-center ${
                currentStats.trend === 'up' ? 'text-green-400' : 'text-red-400'
              }`}>
                {currentStats.trend === 'up' ? (
                  <ArrowTrendingUpIcon className="w-4 h-4 mr-1" />
                ) : (
                  <ArrowTrendingDownIcon className="w-4 h-4 mr-1" />
                )}
                {currentStats.trendPercent}%
              </span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4">
            <div className="flex items-center space-x-2 mb-2">
              <ChartBarIcon className="w-5 h-5 text-purple-400" />
              <span className="text-sm text-gray-400">Avg Daily</span>
            </div>
            <p className="text-2xl font-bold text-purple-400">
              ${currentStats.avgDaily}
            </p>
          </div>
        </div>

        {/* Income vs Expenses Chart */}
        <div className="bg-gray-800 rounded-xl p-4">
          <h3 className="text-lg font-semibold mb-4">Income vs Expenses</h3>
          <div className="space-y-3">
            {(chartData[period] || chartData.week).map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{item.day}</span>
                  <span className="text-gray-400">
                    Income: ${item.income} | Expenses: ${item.expenses}
                  </span>
                </div>
                <div className="flex space-x-1 h-6">
                  <div 
                    className="bg-green-500 rounded"
                    style={{ width: `${(item.income / 800) * 100}%` }}
                  ></div>
                  <div 
                    className="bg-red-500 rounded"
                    style={{ width: `${(item.expenses / 800) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="bg-gray-800 rounded-xl p-4">
          <h3 className="text-lg font-semibold mb-4">Expense Categories</h3>
          <div className="space-y-3">
            {categories.map((category, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded ${category.color}`}></div>
                <div className="flex-1 flex justify-between items-center">
                  <span className="font-medium">{category.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400">{category.percentage}%</span>
                    <span className="font-medium">${category.amount}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Insights */}
        <div className="bg-gray-800 rounded-xl p-4">
          <h3 className="text-lg font-semibold mb-4">AI Financial Insights</h3>
          <div className="space-y-3">
            {insights.map((insight, index) => (
              <div key={index} className={`p-3 rounded-lg border-l-4 ${
                insight.type === 'warning' ? 'bg-yellow-900/20 border-yellow-500' :
                insight.type === 'tip' ? 'bg-blue-900/20 border-blue-500' :
                'bg-green-900/20 border-green-500'
              }`}>
                <h4 className="font-medium mb-1">{insight.title}</h4>
                <p className="text-sm text-gray-300">{insight.message}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-gray-800 rounded-xl p-4">
          <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Highest Expense Day:</span>
              <span className="font-medium">Saturday</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Best Saving Day:</span>
              <span className="font-medium">Tuesday</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Top Category:</span>
              <span className="font-medium">{currentStats.topCategory}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Category Amount:</span>
              <span className="font-medium">${currentStats.topCategoryAmount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
