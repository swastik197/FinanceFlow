'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  ChartBarIcon,
  CreditCardIcon,
  Cog6ToothIcon,
  ChatBubbleBottomCenterTextIcon,
  TrophyIcon,
  CurrencyDollarIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

export default function BottomNavigation() {
  const pathname = usePathname();
  
  const navItems = [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/analytics', icon: ChartBarIcon, label: 'Analytics' },
    { href: '/expenses', icon: CurrencyDollarIcon, label: 'Expenses' },
    { href: '/goals', icon: TrophyIcon, label: 'Goals' },
    { href: '/chat', icon: ChatBubbleBottomCenterTextIcon, label: 'AI Chat' },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 z-50">
      <div className="max-w-md mx-auto px-2 py-2">
        <div className="flex justify-around">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-colors ${
                  isActive 
                    ? 'text-teal-400 bg-gray-700' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
