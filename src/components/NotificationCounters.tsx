import { useState } from 'react';
import Link from 'next/link';

export default function NotificationCounters() {
  const [orderCount, setOrderCount] = useState(0);
  const [unreadMessages, setUnreadMessages] = useState(0);

  return (
    <div className="flex items-center space-x-4">
      <button
        type="button"
        className="relative p-1 text-gray-400 hover:text-gray-500 focus:outline-none"
        onClick={() => setUnreadMessages(0)}
      >
        <span className="sr-only">View notifications</span>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        {unreadMessages > 0 && (
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400"></span>
        )}
      </button>
      <Link
        href="/dashboard/orders"
        className="relative p-1 text-gray-400 hover:text-gray-500 focus:outline-none"
        onClick={() => setOrderCount(0)}
      >
        <span className="sr-only">View orders</span>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        {orderCount > 0 && (
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400"></span>
        )}
      </Link>
    </div>
  );
} 