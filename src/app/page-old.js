'use client';

import { useState } from 'react';
import { 
  BellIcon, 
  ChartBarIcon, 
  CreditCardIcon,
  PlusIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  const [user] = useState({ name: "Alex" });
  const [income] = useState(9340.00);
  const [walletValue] = useState(4200);
  const [walletGrowth] = useState(23);
  const [savingsProgress] = useState({ current: 2400, target: 3000 });
  const [transactionRequests] = useState(8);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 lg:p-8 max-w-md lg:max-w-7xl mx-auto">
      {/* Header */}
      <header className="flex justify-between items-center mb-6 pt-2 lg:mb-8">
        <div>
          <h1 className="text-2xl lg:text-4xl font-bold">Hello, {user.name}</h1>
          <div className="flex items-center text-teal-400 text-sm lg:text-base mt-1">
            <BellIcon className="w-4 h-4 lg:w-5 lg:h-5 mr-1" />
            <span>{transactionRequests} new transaction requests</span>
          </div>
        </div>
        <div className="flex items-center space-x-3 lg:space-x-4">
          <BellIcon className="w-6 h-6 lg:w-7 lg:h-7 text-gray-400" />
          <Cog6ToothIcon className="w-6 h-6 lg:w-7 lg:h-7 text-gray-400" />
        </div>
      </header>

      {/* Date and Report */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
            <ChartBarIcon className="w-6 h-6 text-white" />
          </div>
          <span className="text-lg">24/10/2024</span>
        </div>
        <button className="flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full">
          <ChartBarIcon className="w-4 h-4" />
          <span>Report</span>
        </button>
      </div>

      {/* Income Card */}
      <div className="bg-gray-800 rounded-2xl p-6 mb-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-gray-400 text-sm">Income</p>
            <p className="text-3xl font-bold">{income.toLocaleString()}</p>
          </div>
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-white text-lg">$</span>
          </div>
        </div>
        
        {/* Wallet Info */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-gray-400 text-sm">Wallet value</p>
            <div className="flex items-center space-x-2">
              <span className="text-teal-400 font-semibold">${walletValue.toLocaleString()}</span>
              <span className="text-green-400 text-sm">↗ {walletGrowth}%</span>
            </div>
          </div>
        </div>

        {/* Chart Area */}
        <div className="h-20 bg-gray-700 rounded-lg mb-4 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-r from-teal-500 to-blue-500 opacity-20"></div>
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 300 80">
            <path
              d="M0,60 Q50,40 100,45 T200,35 T300,25"
              stroke="#14b8a6"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Monthly Savings Progress */}
      <div className="gradient-card rounded-2xl p-6 mb-4 relative overflow-hidden">
        <button className="absolute top-4 right-4 w-8 h-8 bg-black bg-opacity-20 rounded-full flex items-center justify-center">
          <span className="text-white text-lg">×</span>
        </button>
        
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <ChartBarIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold">Monthly Savings Progress</h3>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-2xl font-bold text-white">
              {savingsProgress.current.toLocaleString()}/{savingsProgress.target.toLocaleString()}
            </span>
            <span className="text-sm text-white opacity-80">13 Transactions</span>
          </div>
          
          <div className="w-full bg-white bg-opacity-20 rounded-full h-3 mb-2">
            <div 
              className="bg-white h-3 rounded-full" 
              style={{ width: `${(savingsProgress.current / savingsProgress.target) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Saving Goals */}
      <div className="bg-gray-800 rounded-2xl p-4 mb-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-red-400">●</span>
            <h3 className="font-semibold">Saving Goals (7)</h3>
          </div>
          <PlusIcon className="w-6 h-6 text-gray-400" />
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">🏠</span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <p className="font-medium">Rent New Apartment</p>
              <button className="text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span className="bg-gray-700 px-2 py-1 rounded text-xs">FAMILY</span>
              <span className="bg-gray-700 px-2 py-1 rounded text-xs">REGULAR</span>
              <span>Apr 4th 2025</span>
            </div>
          </div>
          <div className="w-12 h-12">
            <svg className="w-full h-full" viewBox="0 0 40 40">
              <circle
                cx="20"
                cy="20"
                r="18"
                stroke="#4B5563"
                strokeWidth="4"
                fill="none"
              />
              <circle
                cx="20"
                cy="20"
                r="18"
                stroke="#10B981"
                strokeWidth="4"
                fill="none"
                strokeDasharray="113"
                strokeDashoffset="28"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
