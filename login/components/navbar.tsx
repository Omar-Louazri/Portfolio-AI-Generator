// components/navbar.tsx
"use client";

import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold">
          MyApp
        </Link>
        <div className="space-x-4">
          {user ? (
            <>
              <Link href="/dashboard" className="text-white hover:text-gray-300">
                Dashboard
              </Link>
              <button onClick={logout} className="text-white hover:text-gray-300">
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="text-white hover:text-gray-300">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}