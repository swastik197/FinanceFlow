'use client';

import { useState } from 'react';
import {
  ArrowLeftIcon,
  PlusIcon,
  UserGroupIcon,
  QrCodeIcon,
  CreditCardIcon,
  ShareIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function SplitPage() {
  const [activeTab, setActiveTab] = useState('split');
  const [splitAmount, setSplitAmount] = useState('');
  const [splitDescription, setSplitDescription] = useState('');
  const [selectedFriends, setSelectedFriends] = useState([]);
  
  const friends = [
    { id: 1, name: 'Sarah Chen', phone: '+91 98765 43210', avatar: '👩‍💼' },
    { id: 2, name: 'Mike Johnson', phone: '+91 87654 32109', avatar: '👨‍💻' },
    { id: 3, name: 'Priya Sharma', phone: '+91 76543 21098', avatar: '👩‍🎓' },
    { id: 4, name: 'Alex Kumar', phone: '+91 65432 10987', avatar: '👨‍🎓' },
    { id: 5, name: 'Lisa Wong', phone: '+91 54321 09876', avatar: '👩‍🔬' },
  ];

  const splitHistory = [
    {
      id: 1,
      description: 'Dinner at Pizza Palace',
      totalAmount: 1200,
      participants: 4,
      yourShare: 300,
      status: 'completed',
      date: '2024-10-23',
      settledBy: ['Sarah Chen', 'Mike Johnson'],
      pending: ['Priya Sharma']
    },
    {
      id: 2,
      description: 'Movie tickets',
      totalAmount: 800,
      participants: 3,
      yourShare: 267,
      status: 'pending',
      date: '2024-10-22',
      settledBy: [],
      pending: ['Alex Kumar', 'Lisa Wong']
    },
    {
      id: 3,
      description: 'Uber ride to airport',
      totalAmount: 450,
      participants: 2,
      yourShare: 225,
      status: 'completed',
      date: '2024-10-20',
      settledBy: ['Sarah Chen'],
      pending: []
    }
  ];

  const toggleFriend = (friendId) => {
    setSelectedFriends(prev => 
      prev.includes(friendId) 
        ? prev.filter(id => id !== friendId)
        : [...prev, friendId]
    );
  };

  const calculateSplit = () => {
    const total = parseFloat(splitAmount) || 0;
    const participants = selectedFriends.length + 1; // +1 for user
    return participants > 0 ? (total / participants).toFixed(2) : 0;
  };

  const createSplit = () => {
    if (splitAmount && splitDescription && selectedFriends.length > 0) {
      // Logic to create UPI payment request
      alert(`Split created! Each person pays ₹${calculateSplit()}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <ArrowLeftIcon className="w-6 h-6" />
          <h1 className="text-xl font-bold">UPI Bill Split</h1>
        </div>
        <QrCodeIcon className="w-6 h-6" />
      </header>

      {/* Tab Navigation */}
      <div className="bg-gray-800 px-4 py-2">
        <div className="flex space-x-1">
          <button
            onClick={() => setActiveTab('split')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeTab === 'split' ? 'bg-teal-500 text-white' : 'text-gray-400'
            }`}
          >
            New Split
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeTab === 'history' ? 'bg-teal-500 text-white' : 'text-gray-400'
            }`}
          >
            History
          </button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {activeTab === 'split' && (
          <>
            {/* Amount and Description */}
            <div className="bg-gray-800 rounded-xl p-4">
              <h3 className="text-lg font-semibold mb-4">Bill Details</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Total Amount (₹)</label>
                  <input
                    type="number"
                    value={splitAmount}
                    onChange={(e) => setSplitAmount(e.target.value)}
                    placeholder="Enter total bill amount"
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg text-xl font-bold focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Description</label>
                  <input
                    type="text"
                    value={splitDescription}
                    onChange={(e) => setSplitDescription(e.target.value)}
                    placeholder="What's this bill for?"
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
            </div>

            {/* Select Friends */}
            <div className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Split With</h3>
                <button className="flex items-center space-x-2 text-teal-400">
                  <PlusIcon className="w-5 h-5" />
                  <span className="text-sm">Add Friend</span>
                </button>
              </div>
              
              <div className="space-y-3">
                {friends.map(friend => (
                  <div
                    key={friend.id}
                    onClick={() => toggleFriend(friend.id)}
                    className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedFriends.includes(friend.id) 
                        ? 'bg-teal-500/20 border border-teal-500' 
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-lg">
                      {friend.avatar}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{friend.name}</h4>
                      <p className="text-sm text-gray-400">{friend.phone}</p>
                    </div>
                    {selectedFriends.includes(friend.id) && (
                      <CheckCircleIcon className="w-6 h-6 text-teal-400" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Split Summary */}
            {splitAmount && selectedFriends.length > 0 && (
              <div className="bg-gray-800 rounded-xl p-4">
                <h3 className="text-lg font-semibold mb-4">Split Summary</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Total Amount:</span>
                    <span className="text-xl font-bold">₹{splitAmount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Participants:</span>
                    <span className="font-medium">{selectedFriends.length + 1} people</span>
                  </div>
                  <div className="flex justify-between items-center text-lg">
                    <span className="text-gray-400">Each person pays:</span>
                    <span className="font-bold text-teal-400">₹{calculateSplit()}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-700">
                  <h4 className="font-medium mb-2">Payment breakdown:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>You</span>
                      <span className="text-teal-400">₹{calculateSplit()}</span>
                    </div>
                    {selectedFriends.map(friendId => {
                      const friend = friends.find(f => f.id === friendId);
                      return (
                        <div key={friendId} className="flex justify-between">
                          <span>{friend?.name}</span>
                          <span className="text-teal-400">₹{calculateSplit()}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Create Split Button */}
            <button
              onClick={createSplit}
              disabled={!splitAmount || !splitDescription || selectedFriends.length === 0}
              className="w-full bg-teal-500 text-white py-4 rounded-xl font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              <CreditCardIcon className="w-6 h-6" />
              <span>Send UPI Payment Requests</span>
            </button>
          </>
        )}

        {activeTab === 'history' && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Split History</h3>
            
            {splitHistory.map(split => (
              <div key={split.id} className="bg-gray-800 rounded-xl p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold">{split.description}</h4>
                    <p className="text-sm text-gray-400">{split.date} • {split.participants} people</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">₹{split.yourShare}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      split.status === 'completed' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {split.status}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Total Amount:</span>
                    <span>₹{split.totalAmount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Your Share:</span>
                    <span>₹{split.yourShare}</span>
                  </div>
                </div>

                {split.settledBy.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-gray-700">
                    <p className="text-sm text-gray-400 mb-1">Settled by:</p>
                    <div className="flex flex-wrap gap-1">
                      {split.settledBy.map((person, index) => (
                        <span key={index} className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">
                          {person}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {split.pending.length > 0 && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-400 mb-1">Pending:</p>
                    <div className="flex flex-wrap gap-1">
                      {split.pending.map((person, index) => (
                        <span key={index} className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs">
                          {person}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-4 flex space-x-2">
                  <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg text-sm flex items-center justify-center space-x-1">
                    <ShareIcon className="w-4 h-4" />
                    <span>Remind</span>
                  </button>
                  <button className="flex-1 bg-teal-500 text-white py-2 rounded-lg text-sm">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
