'use client';

import { useState } from 'react';
import {
  ArrowLeftIcon,
  TrophyIcon,
  FireIcon,
  StarIcon,
  GiftIcon,
  PlusIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function GoalsPage() {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: 'Rent New Apartment',
      target: 5000,
      current: 3750,
      deadline: '2025-04-04',
      category: 'Housing',
      priority: 'high',
      streak: 15,
      achievements: ['First 1K', 'Halfway Hero'],
      xp: 750
    },
    {
      id: 2,
      title: 'Emergency Fund',
      target: 3000,
      current: 1800,
      deadline: '2025-06-30',
      category: 'Safety',
      priority: 'medium',
      streak: 8,
      achievements: ['Consistent Saver'],
      xp: 450
    },
    {
      id: 3,
      title: 'Laptop Upgrade',
      target: 1500,
      current: 450,
      deadline: '2025-03-15',
      category: 'Education',
      priority: 'low',
      streak: 5,
      achievements: [],
      xp: 150
    }
  ]);

  const [userLevel, setUserLevel] = useState(12);
  const [totalXP, setTotalXP] = useState(2850);
  const [currentLevelXP, setCurrentLevelXP] = useState(250);
  const [nextLevelXP, setNextLevelXP] = useState(500);

  const achievements = [
    { id: 1, title: 'First Goal', description: 'Create your first savings goal', earned: true, xp: 50 },
    { id: 2, title: 'Streak Master', description: 'Save for 30 days straight', earned: true, xp: 200 },
    { id: 3, title: 'Goal Crusher', description: 'Complete 3 goals', earned: false, xp: 300 },
    { id: 4, title: 'Millionaire Mindset', description: 'Save $10,000 total', earned: false, xp: 500 },
  ];

  const challenges = [
    { id: 1, title: 'No-Spend Weekend', description: 'Don\'t spend money this weekend', reward: 100, active: true },
    { id: 2, title: 'Cook at Home', description: 'Cook meals at home for 5 days', reward: 150, active: true },
    { id: 3, title: 'Side Hustle Boost', description: 'Earn extra $200 this week', reward: 200, active: false },
  ];

  const getProgressPercentage = (current, target) => {
    return Math.min((current / target) * 100, 100);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'border-red-500 bg-red-900/20';
      case 'medium': return 'border-yellow-500 bg-yellow-900/20';
      case 'low': return 'border-green-500 bg-green-900/20';
      default: return 'border-gray-500 bg-gray-900/20';
    }
  };

  const getDaysRemaining = (deadline) => {
    const today = new Date();
    const targetDate = new Date(deadline);
    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <ArrowLeftIcon className="w-6 h-6" />
          <h1 className="text-xl font-bold">Savings Goals</h1>
        </div>
        <PlusIcon className="w-6 h-6" />
      </header>

      <div className="p-4 space-y-6">
        {/* User Progress */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <TrophyIcon className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Level {userLevel} Saver</h3>
                <p className="text-sm opacity-80">{totalXP.toLocaleString()} Total XP</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-80">Next Level</p>
              <p className="font-bold">{currentLevelXP}/{nextLevelXP} XP</p>
            </div>
          </div>
          
          <div className="w-full bg-white/20 rounded-full h-3">
            <div 
              className="bg-white h-3 rounded-full"
              style={{ width: `${(currentLevelXP / nextLevelXP) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Active Challenges */}
        <div className="bg-gray-800 rounded-xl p-4">
          <div className="flex items-center space-x-2 mb-4">
            <FireIcon className="w-5 h-5 text-orange-400" />
            <h3 className="text-lg font-semibold">Active Challenges</h3>
          </div>
          
          <div className="space-y-3">
            {challenges.filter(c => c.active).map(challenge => (
              <div key={challenge.id} className="bg-gray-700 rounded-lg p-3">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-medium">{challenge.title}</h4>
                    <p className="text-sm text-gray-400">{challenge.description}</p>
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <StarIcon className="w-4 h-4" />
                    <span className="text-sm font-medium">{challenge.reward} XP</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Savings Goals */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Your Goals</h3>
          {goals.map(goal => {
            const percentage = getProgressPercentage(goal.current, goal.target);
            const daysLeft = getDaysRemaining(goal.deadline);
            
            return (
              <div key={goal.id} className={`rounded-xl p-4 border-l-4 ${getPriorityColor(goal.priority)}`}>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">{goal.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mt-1">
                      <span className="bg-gray-700 px-2 py-1 rounded text-xs uppercase">
                        {goal.category}
                      </span>
                      <span>{daysLeft > 0 ? `${daysLeft} days left` : 'Overdue'}</span>
                      <div className="flex items-center space-x-1">
                        <FireIcon className="w-4 h-4 text-orange-400" />
                        <span>{goal.streak} day streak</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">${goal.current.toLocaleString()}</p>
                    <p className="text-sm text-gray-400">of ${goal.target.toLocaleString()}</p>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center mt-2 text-sm">
                    <span className="text-green-400">{percentage.toFixed(1)}% complete</span>
                    <span className="text-gray-400">
                      ${(goal.target - goal.current).toLocaleString()} remaining
                    </span>
                  </div>
                </div>

                {/* Achievements for this goal */}
                {goal.achievements.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {goal.achievements.map((achievement, index) => (
                      <span key={index} className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full text-xs flex items-center space-x-1">
                        <TrophyIcon className="w-3 h-3" />
                        <span>{achievement}</span>
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-1 text-purple-400">
                    <StarIcon className="w-4 h-4" />
                    <span className="text-sm">{goal.xp} XP earned</span>
                  </div>
                  <button className="bg-teal-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    Add Money
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievements */}
        <div className="bg-gray-800 rounded-xl p-4">
          <div className="flex items-center space-x-2 mb-4">
            <TrophyIcon className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-semibold">Achievements</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {achievements.map(achievement => (
              <div key={achievement.id} className={`p-3 rounded-lg border ${
                achievement.earned 
                  ? 'bg-yellow-900/20 border-yellow-500/30' 
                  : 'bg-gray-700 border-gray-600'
              }`}>
                <div className="flex items-center space-x-2 mb-2">
                  {achievement.earned ? (
                    <CheckCircleIcon className="w-5 h-5 text-yellow-400" />
                  ) : (
                    <div className="w-5 h-5 border-2 border-gray-600 rounded-full"></div>
                  )}
                  <span className={`text-sm font-medium ${
                    achievement.earned ? 'text-yellow-400' : 'text-gray-400'
                  }`}>
                    {achievement.title}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mb-2">{achievement.description}</p>
                <div className="flex items-center space-x-1">
                  <StarIcon className="w-3 h-3 text-purple-400" />
                  <span className="text-xs text-purple-400">{achievement.xp} XP</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rewards Store */}
        <div className="bg-gray-800 rounded-xl p-4">
          <div className="flex items-center space-x-2 mb-4">
            <GiftIcon className="w-5 h-5 text-pink-400" />
            <h3 className="text-lg font-semibold">Rewards Store</h3>
          </div>
          
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-gray-700 rounded-lg p-3 flex justify-between items-center">
              <div>
                <h4 className="font-medium">Coffee Treat</h4>
                <p className="text-sm text-gray-400">Reward yourself with a coffee</p>
              </div>
              <div className="text-right">
                <p className="text-yellow-400 font-medium">100 XP</p>
                <button className="bg-pink-500 text-white px-3 py-1 rounded text-xs mt-1">
                  Redeem
                </button>
              </div>
            </div>
            
            <div className="bg-gray-700 rounded-lg p-3 flex justify-between items-center">
              <div>
                <h4 className="font-medium">Movie Night</h4>
                <p className="text-sm text-gray-400">Enjoy a movie guilt-free</p>
              </div>
              <div className="text-right">
                <p className="text-yellow-400 font-medium">300 XP</p>
                <button className="bg-gray-600 text-gray-400 px-3 py-1 rounded text-xs mt-1">
                  Locked
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
