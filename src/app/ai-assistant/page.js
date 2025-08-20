'use client';

import { useState } from 'react';
import { 
  ChatBubbleLeftIcon,
  PaperAirplaneIcon,
  SparklesIcon,
  ChartBarIcon,
  BanknotesIcon,
  LightBulbIcon,
  ArrowTrendingUpIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import AppLayout from '@/components/AppLayout';

export default function AIAssistant() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      message: "Hello! I'm your financial AI assistant. I can help you analyze your spending, set budgets, and provide personalized financial advice.",
      timestamp: '10:30 AM',
      category: 'greeting'
    },
    {
      id: 2,
      type: 'insight',
      message: "💡 Based on your spending patterns, you spent 15% more on dining this month compared to last month.",
      timestamp: '10:31 AM',
      category: 'spending-analysis'
    },
    {
      id: 3,
      type: 'ai',
      message: "🎯 You're on track to reach your emergency fund goal 2 weeks early! Keep up the great work!",
      timestamp: '10:32 AM',
      category: 'goal-progress'
    }
  ]);

  const [inputMessage, setInputMessage] = useState('');

  const quickActions = [
    { icon: ChartBarIcon, label: 'Analyze Spending', color: 'bg-blue-500' },
    { icon: BanknotesIcon, label: 'Budget Review', color: 'bg-green-500' },
    { icon: ArrowTrendingUpIcon, label: 'Investment Tips', color: 'bg-purple-500' },
    { icon: LightBulbIcon, label: 'Save Money', color: 'bg-yellow-500' }
  ];

  const insights = [
    {
      type: 'warning',
      icon: ExclamationTriangleIcon,
      title: 'High Spending Alert',
      message: 'Your food & dining expenses are 20% above your monthly budget.',
      action: 'Set Budget Alert'
    },
    {
      type: 'success',
      icon: CheckCircleIcon,
      title: 'Savings Goal Progress',
      message: 'You\'re 80% towards your ₹3,000 emergency fund goal.',
      action: 'View Details'
    },
    {
      type: 'tip',
      icon: LightBulbIcon,
      title: 'Money Saving Tip',
      message: 'Switch to an annual subscription and save ₹500 on your streaming services.',
      action: 'Learn More'
    }
  ];

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        type: 'user',
        message: inputMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        category: 'user-query'
      };
      
      setMessages([...messages, newMessage]);
      setInputMessage('');
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          type: 'ai',
          message: "I understand your question. Let me analyze your financial data and provide you with personalized recommendations.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          category: 'response'
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  return (
    <AppLayout>
      <div className="min-h-screen bg-gray-900 text-white p-4 lg:p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <SparklesIcon className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl lg:text-3xl font-bold">AI Financial Assistant</h1>
            </div>
            <p className="text-gray-400">Get personalized insights and advice for your financial goals</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Chat Section */}
            <div className="lg:col-span-3">
              <div className="bg-gray-800 rounded-xl p-6">
                {/* Chat Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-700">
                  <div className="flex items-center space-x-3">
                    <ChatBubbleLeftIcon className="w-6 h-6 text-blue-400" />
                    <h2 className="text-xl font-semibold">Chat with AI</h2>
                  </div>
                  <span className="text-sm text-green-400 flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    Online
                  </span>
                </div>

                {/* Messages */}
                <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs lg:max-w-md p-4 rounded-xl ${
                        msg.type === 'user' 
                          ? 'bg-blue-600 text-white' 
                          : msg.type === 'insight'
                          ? 'bg-yellow-500 bg-opacity-20 border border-yellow-400 border-opacity-30 text-yellow-100'
                          : 'bg-gray-700 text-gray-100'
                      }`}>
                        <p className="text-sm">{msg.message}</p>
                        <p className="text-xs opacity-70 mt-2">{msg.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-3">Quick Actions:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickActions.map((action, index) => (
                      <button
                        key={index}
                        className={`flex items-center space-x-2 ${action.color} bg-opacity-20 border border-current border-opacity-30 px-3 py-2 rounded-lg text-sm hover:bg-opacity-30 transition-colors`}
                      >
                        <action.icon className="w-4 h-4" />
                        <span>{action.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input */}
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask me anything about your finances..."
                    className="flex-1 bg-gray-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="bg-blue-600 hover:bg-blue-700 p-3 rounded-xl transition-colors"
                  >
                    <PaperAirplaneIcon className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Insights Sidebar */}
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Smart Insights</h3>
                <div className="space-y-4">
                  {insights.map((insight, index) => (
                    <div key={index} className="bg-gray-700 p-4 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <insight.icon className={`w-5 h-5 mt-0.5 ${
                          insight.type === 'warning' ? 'text-red-400' :
                          insight.type === 'success' ? 'text-green-400' :
                          'text-yellow-400'
                        }`} />
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold mb-1">{insight.title}</h4>
                          <p className="text-xs text-gray-300 mb-2">{insight.message}</p>
                          <button className="text-xs text-blue-400 hover:text-blue-300">
                            {insight.action} →
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Features */}
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">AI Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm">
                    <ChartBarIcon className="w-4 h-4 text-blue-400" />
                    <span>Spending Analysis</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <BanknotesIcon className="w-4 h-4 text-green-400" />
                    <span>Budget Optimization</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <ArrowTrendingUpIcon className="w-4 h-4 text-purple-400" />
                    <span>Investment Advice</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <LightBulbIcon className="w-4 h-4 text-yellow-400" />
                    <span>Money Saving Tips</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
