'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BottomNavigation from '@/components/BottomNavigation';
import {
  HomeIcon,
  ChartBarIcon,
  CreditCardIcon,
  Cog6ToothIcon,
  ChatBubbleBottomCenterTextIcon,
  TrophyIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  UserCircleIcon,
  BellIcon
} from '@heroicons/react/24/outline';

export default function AppLayout({ children }) {
  const pathname = usePathname();
  
  const navItems = [
    { href: '/', icon: HomeIcon, label: 'Dashboard' },
    { href: '/expenses', icon: CurrencyDollarIcon, label: 'Expenses' },
    { href: '/budget', icon: CalendarIcon, label: 'Budget' },
    { href: '/analytics', icon: ChartBarIcon, label: 'Analytics' },
    { href: '/goals', icon: TrophyIcon, label: 'Goals' },
    { href: '/ai-assistant', icon: ChatBubbleBottomCenterTextIcon, label: 'AI Assistant' },
    { href: '/bill-split', icon: CreditCardIcon, label: 'Bill Splitting' },
    { href: '/reminders', icon: BellIcon, label: 'Reminders' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Desktop Sidebar - Hidden on mobile */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <div className="flex flex-shrink-0 items-center px-4 mb-8">
              <h1 className="text-xl font-bold text-white">FinanceFlow</h1>
            </div>
            <nav className="mt-4 flex-1 space-y-1 px-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    <Icon className={`mr-3 h-6 w-6 ${isActive ? 'text-teal-400' : 'text-gray-400 group-hover:text-gray-300'}`} />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            
            {/* User Profile at Bottom */}
            <div className="flex flex-shrink-0 p-4 border-t border-gray-700">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-3">
                  <UserCircleIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Alex</p>
                  <p className="text-xs text-gray-400">Student Plan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        <main className="flex-1 pb-16 lg:pb-0">
          {children}
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
}
