// app/dashboard/page.tsx
'use client';

import { useAuth } from '../../hooks/useAuth';

export default function DashboardPage() {
  const { user } = useAuth();

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-4">Welcome, {user}!</p>
    </div>
  );
}