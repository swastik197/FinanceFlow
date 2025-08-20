'use client';

import { useState } from 'react';
import { 
  BellIcon, 
  ChartBarIcon, 
  CreditCardIcon,
  PlusIcon,
  Cog6ToothIcon,
  UserCircleIcon,
  CalendarIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  const [user] = useState({ name: "Alex" });
  const [income] = useState(9340.00);
  const [walletValue] = useState(4200);
  const [walletGrowth] = useState(23);
  const [savingsProgress] = useState({ current: 2400, target: 3000 });
  const [transactionRequests] = useState(8);
  
  // Get current date
  const currentDate = new Date().toLocaleDateString('en-GB'); // DD/MM/YYYY format

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Desktop Sidebar - Hidden on mobile */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <div className="flex flex-shrink-0 items-center px-4">
              <h1 className="text-xl font-bold text-white">FinanceFlow</h1>
            </div>
            <nav className="mt-8 flex-1 space-y-1 px-2">
              <a href="#" className="bg-gray-900 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <ChartBarIcon className="text-gray-300 mr-3 h-6 w-6" />
                Dashboard
              </a>
              <a href="/expenses" className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <CreditCardIcon className="text-gray-400 mr-3 h-6 w-6" />
                Expenses
              </a>
              <a href="/budget" className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <CalendarIcon className="text-gray-400 mr-3 h-6 w-6" />
                Budget
              </a>
              <a href="/analytics" className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <ArrowTrendingUpIcon className="text-gray-400 mr-3 h-6 w-6" />
                Analytics
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        <main className="flex-1">
          <div className="p-4 lg:p-8">
            {/* Header */}
            <header className="flex justify-between items-center mb-6 lg:mb-8">
              <div>
                <h1 className="text-2xl lg:text-4xl font-bold">Hello, {user.name}</h1>
                <div className="flex items-center text-teal-400 text-sm lg:text-base mt-1">
                  <BellIcon className="w-4 h-4 lg:w-5 lg:h-5 mr-1" />
                  <span>{transactionRequests} new transaction requests</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 lg:space-x-4">
                <button className="lg:flex lg:items-center lg:space-x-2 lg:bg-gray-800 lg:px-4 lg:py-2 lg:rounded-full hover:bg-gray-700 transition-colors">
                  <BellIcon className="w-6 h-6 lg:w-5 lg:h-5 text-gray-400" />
                  <span className="hidden lg:block">Notifications</span>
                </button>
                <button className="lg:flex lg:items-center lg:space-x-2 lg:bg-gray-800 lg:px-4 lg:py-2 lg:rounded-full hover:bg-gray-700 transition-colors">
                  <Cog6ToothIcon className="w-6 h-6 lg:w-5 lg:h-5 text-gray-400" />
                  <span className="hidden lg:block">Settings</span>
                </button>
              </div>
            </header>

            {/* Date and Report */}
            <div className="flex justify-between items-center mb-6 lg:mb-8">
              <div className="flex items-center space-x-3 lg:space-x-4">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-teal-500 rounded-full flex items-center justify-center">
                  <ChartBarIcon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <span className="text-lg lg:text-2xl font-medium">{currentDate}</span>
              </div>
              <button className="flex items-center space-x-2 bg-gray-800 px-4 py-2 lg:px-6 lg:py-3 rounded-full hover:bg-gray-700 transition-colors">
                <ChartBarIcon className="w-4 h-4 lg:w-5 lg:h-5" />
                <span className="lg:text-lg">Generate Report</span>
              </button>
            </div>

            {/* Main Grid Layout */}
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 space-y-6 lg:space-y-0">
              
              {/* Left Column - Main Cards */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Income and Wallet Card */}
                <div className="bg-gray-800 rounded-2xl p-6 lg:p-8">
                  <div className="lg:grid lg:grid-cols-2 lg:gap-8 space-y-6 lg:space-y-0">
                    
                    {/* Income Section */}
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-gray-400 text-sm lg:text-base">Monthly Income</p>
                          <p className="text-3xl lg:text-4xl font-bold">₹{income.toLocaleString()}</p>
                        </div>
                        <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-lg lg:text-xl">₹</span>
                        </div>
                      </div>
                      
                      {/* Wallet Info */}
                      <div className="space-y-2">
                        <p className="text-gray-400 text-sm lg:text-base">Current Wallet</p>
                        <div className="flex items-center space-x-3">
                          <span className="text-teal-400 font-semibold text-xl lg:text-2xl">₹{walletValue.toLocaleString()}</span>
                          <span className="flex items-center text-green-400 text-sm lg:text-base bg-green-400 bg-opacity-20 px-2 py-1 rounded-full">
                            ↗ {walletGrowth}%
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Chart Section */}
                    <div>
                      <div className="h-32 lg:h-40 bg-gray-700 rounded-xl relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-full h-12 lg:h-16 bg-gradient-to-r from-teal-500 to-blue-500 opacity-20"></div>
                        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 300 120">
                          <defs>
                            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" style={{stopColor:'#14b8a6', stopOpacity:0.3}} />
                              <stop offset="100%" style={{stopColor:'#14b8a6', stopOpacity:0}} />
                            </linearGradient>
                          </defs>
                          <path
                            d="M0,80 Q50,60 100,65 T200,45 T300,35"
                            stroke="#14b8a6"
                            strokeWidth="3"
                            fill="none"
                          />
                          <path
                            d="M0,80 Q50,60 100,65 T200,45 T300,35 L300,120 L0,120 Z"
                            fill="url(#chartGradient)"
                          />
                        </svg>
                        <div className="absolute top-4 left-4 text-xs lg:text-sm text-gray-400">
                          <p>7-day trend</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Monthly Savings Progress */}
                <div className="gradient-card rounded-2xl p-6 lg:p-8 relative overflow-hidden">
                  <button className="absolute top-4 right-4 lg:top-6 lg:right-6 w-8 h-8 lg:w-10 lg:h-10 bg-black bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                    <span className="text-white text-lg lg:text-xl">×</span>
                  </button>
                  
                  <div className="flex items-center space-x-3 lg:space-x-4 mb-6">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <ChartBarIcon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg lg:text-xl">Monthly Savings Progress</h3>
                      <p className="text-white opacity-70 text-sm lg:text-base">Track your monthly goal</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl lg:text-4xl font-bold text-white">
                        ₹{savingsProgress.current.toLocaleString()}
                      </span>
                      <span className="text-lg lg:text-xl text-white opacity-80">
                        / ₹{savingsProgress.target.toLocaleString()}
                      </span>
                    </div>
                    
                    <div className="w-full bg-white bg-opacity-20 rounded-full h-3 lg:h-4 mb-3">
                      <div 
                        className="bg-white h-3 lg:h-4 rounded-full transition-all duration-700 ease-out" 
                        style={{ width: `${(savingsProgress.current / savingsProgress.target) * 100}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex justify-between text-sm lg:text-base text-white opacity-80">
                      <span>13 Transactions this month</span>
                      <span>{Math.round((savingsProgress.current / savingsProgress.target) * 100)}% Complete</span>
                    </div>
                  </div>
                </div>

                {/* Desktop-only: Additional Features Grid */}
                <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6">
                  
                  {/* Quick Stats */}
                  <div className="bg-gray-800 rounded-2xl p-6">
                    <h3 className="font-semibold text-lg mb-4">This Month</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Total Expenses</span>
                        <span className="font-semibold text-red-400">₹1,240</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Budget Remaining</span>
                        <span className="font-semibold text-green-400">₹760</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Savings Rate</span>
                        <span className="font-semibold text-blue-400">32%</span>
                      </div>
                    </div>
                  </div>

                  {/* Upcoming Bills */}
                  <div className="bg-gray-800 rounded-2xl p-6">
                    <h3 className="font-semibold text-lg mb-4">Upcoming Bills</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">📱</span>
                          </div>
                          <div>
                            <p className="font-medium">Phone Bill</p>
                            <p className="text-sm text-gray-400">Due in 3 days</p>
                          </div>
                        </div>
                        <span className="font-semibold">₹45</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">⚡</span>
                          </div>
                          <div>
                            <p className="font-medium">Electricity</p>
                            <p className="text-sm text-gray-400">Due in 1 week</p>
                          </div>
                        </div>
                        <span className="font-semibold">₹87</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="lg:col-span-3 space-y-6">
                
                {/* Saving Goals */}
                <div className="bg-gray-800 rounded-2xl p-4 lg:p-6">
                  <div className="flex justify-between items-center mb-4 lg:mb-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-red-400 text-lg">●</span>
                      <h3 className="font-semibold lg:text-lg">Saving Goals (7)</h3>
                    </div>
                    <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
                      <PlusIcon className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 hover:text-white" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer">
                      <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-lg">🏠</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <p className="font-medium lg:text-lg truncate">Rent New Apartment</p>
                          <button className="text-gray-400 hover:text-white transition-colors ml-2">
                            <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </button>
                        </div>
                        <div className="flex items-center space-x-2 text-xs lg:text-sm text-gray-400 mt-1">
                          <span className="bg-gray-600 px-2 py-1 rounded">FAMILY</span>
                          <span className="bg-gray-600 px-2 py-1 rounded">REGULAR</span>
                          <span>Apr 4th 2025</span>
                        </div>
                        <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                          <div className="bg-green-400 h-2 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer">
                      <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-lg">🎓</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <p className="font-medium lg:text-lg truncate">Course Certification</p>
                        </div>
                        <div className="flex items-center space-x-2 text-xs lg:text-sm text-gray-400 mt-1">
                          <span className="bg-gray-600 px-2 py-1 rounded">EDUCATION</span>
                          <span>Jun 15th 2025</span>
                        </div>
                        <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                          <div className="bg-purple-400 h-2 rounded-full" style={{ width: '40%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-gray-800 rounded-2xl p-4 lg:p-6">
                  <h3 className="font-semibold lg:text-lg mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full flex items-center space-x-3 p-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all">
                      <PlusIcon className="w-5 h-5 text-white" />
                      <span className="font-medium">Add Expense</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                      <ChartBarIcon className="w-5 h-5 text-blue-400" />
                      <span>Set Budget</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                      <CreditCardIcon className="w-5 h-5 text-purple-400" />
                      <span>Split Bill</span>
                    </button>
                    <button className="w-full flex items-center space-x-3 p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                      <UserCircleIcon className="w-5 h-5 text-green-400" />
                      <span>AI Assistant</span>
                    </button>
                  </div>
                </div>

                {/* Recent Activity - Desktop only */}
                <div className="hidden lg:block bg-gray-800 rounded-2xl p-6">
                  <h3 className="font-semibold text-lg mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">🍕</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">Food & Dining</p>
                        <p className="text-xs text-gray-400">2 hours ago</p>
                      </div>
                      <span className="text-red-400 font-medium text-sm">-₹24.50</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">💰</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">Freelance Work</p>
                        <p className="text-xs text-gray-400">1 day ago</p>
                      </div>
                      <span className="text-green-400 font-medium text-sm">+₹150.00</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">🚗</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">Transportation</p>
                        <p className="text-xs text-gray-400">2 days ago</p>
                      </div>
                      <span className="text-red-400 font-medium text-sm">-₹12.75</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
