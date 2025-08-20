'use client';

import { useState } from 'react';
import {
  ArrowLeftIcon,
  PaperAirplaneIcon,
  MicrophoneIcon,
  LightBulbIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      message: "Hi! I'm your AI Financial Assistant. I can help you with budgeting, saving strategies, debt management, and financial decisions. How can I help you today?",
      timestamp: new Date(Date.now() - 300000),
      suggestions: [
        "Help me save money",
        "Create a budget plan",
        "Debt advice",
        "Investment tips"
      ]
    }
  ]);
  
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickResponses = [
    { icon: CurrencyDollarIcon, text: "Budget help", color: "bg-green-500" },
    { icon: LightBulbIcon, text: "Saving tips", color: "bg-blue-500" },
    { icon: ExclamationTriangleIcon, text: "Debt advice", color: "bg-red-500" },
    { icon: CheckCircleIcon, text: "Investment guidance", color: "bg-purple-500" }
  ];

  const generateBotResponse = (userMessage) => {
    const responses = {
      'budget': {
        message: "I'd be happy to help you create a budget! Based on your income of $9,340, here's what I recommend:\n\n💰 50% for needs (rent, groceries, utilities)\n💡 30% for wants (entertainment, dining out)\n💰 20% for savings and debt payment\n\nWould you like me to break this down further for your specific situation?",
        suggestions: ["Yes, break it down", "How can I save more?", "What if I overspend?"]
      },
      'save': {
        message: "Here are some proven money-saving strategies:\n\n🍳 Cook at home (save $200-400/month)\n🚌 Use public transport or bike\n📱 Review subscription services\n🛍️ Wait 24 hours before non-essential purchases\n💡 Use the 50/30/20 rule\n\nWhich area would you like to focus on first?",
        suggestions: ["Food expenses", "Transportation", "Subscriptions", "Shopping habits"]
      },
      'debt': {
        message: "Let's tackle your debt strategically:\n\n📋 List all debts with interest rates\n🎯 Use either debt snowball (smallest first) or avalanche (highest interest first)\n💳 Consider debt consolidation if beneficial\n📞 Contact creditors for payment plans\n\nDo you have high-interest debt that's urgent?",
        suggestions: ["Yes, credit cards", "Student loans", "Create debt plan", "Consolidation options"]
      },
      'investment': {
        message: "Great thinking about investments! As a student, consider:\n\n📈 Start with emergency fund (3-6 months expenses)\n🏦 High-yield savings account\n📊 Low-cost index funds\n💰 Roth IRA for tax advantages\n📚 Invest in yourself (education, skills)\n\nWhat's your risk tolerance and timeline?",
        suggestions: ["Conservative approach", "Moderate risk", "Long-term growth", "Emergency fund first"]
      },
      'default': {
        message: "I understand you're looking for financial guidance. Could you be more specific about what you'd like help with? I can assist with:\n\n• Creating and managing budgets\n• Saving money strategies\n• Debt management and payoff plans\n• Investment basics for students\n• Emergency fund planning\n• Side hustle ideas",
        suggestions: ["Budget planning", "Saving strategies", "Debt help", "Investment basics"]
      }
    };

    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('budget') || lowerMessage.includes('plan')) {
      return responses.budget;
    } else if (lowerMessage.includes('save') || lowerMessage.includes('saving')) {
      return responses.save;
    } else if (lowerMessage.includes('debt') || lowerMessage.includes('loan')) {
      return responses.debt;
    } else if (lowerMessage.includes('invest') || lowerMessage.includes('investment')) {
      return responses.investment;
    } else {
      return responses.default;
    }
  };

  const handleSendMessage = (message = inputMessage) => {
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      message: message.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = generateBotResponse(message);
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        message: botResponse.message,
        timestamp: new Date(),
        suggestions: botResponse.suggestions
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 p-4 flex items-center space-x-3">
        <ArrowLeftIcon className="w-6 h-6" />
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">AI</span>
          </div>
          <div>
            <h1 className="text-lg font-bold">Financial Assistant</h1>
            <p className="text-sm text-green-400">Online • Ready to help</p>
          </div>
        </div>
      </header>

      {/* Quick Responses */}
      <div className="p-4 bg-gray-800 border-b border-gray-700">
        <div className="flex space-x-2 overflow-x-auto">
          {quickResponses.map((response, index) => (
            <button
              key={index}
              onClick={() => handleSendMessage(response.text)}
              className={`flex items-center space-x-2 ${response.color} text-white px-3 py-2 rounded-full text-sm whitespace-nowrap`}
            >
              <response.icon className="w-4 h-4" />
              <span>{response.text}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map(message => (
          <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
              message.type === 'user' 
                ? 'bg-teal-500 text-white' 
                : 'bg-gray-700 text-white'
            }`}>
              <p className="whitespace-pre-line">{message.message}</p>
              <p className={`text-xs mt-1 ${
                message.type === 'user' ? 'text-teal-100' : 'text-gray-400'
              }`}>
                {formatTime(message.timestamp)}
              </p>
              
              {/* Suggestions */}
              {message.suggestions && (
                <div className="mt-3 space-y-2">
                  {message.suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(suggestion)}
                      className="block w-full text-left bg-gray-600 hover:bg-gray-500 px-3 py-2 rounded text-sm transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-700 px-4 py-2 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 bg-gray-800 border-t border-gray-700">
        <div className="flex space-x-2">
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me about budgeting, saving, or debt..."
              className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg pr-12 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
              <MicrophoneIcon className="w-5 h-5" />
            </button>
          </div>
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputMessage.trim()}
            className="bg-teal-500 text-white p-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-teal-600 transition-colors"
          >
            <PaperAirplaneIcon className="w-5 h-5" />
          </button>
        </div>
        
        <div className="mt-2 text-xs text-gray-400 text-center">
          AI Assistant can help with budgeting, saving, debt management, and investment basics
        </div>
      </div>
    </div>
  );
}
