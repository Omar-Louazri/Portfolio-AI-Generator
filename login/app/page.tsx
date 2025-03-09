// app/page.tsx
import Link from 'next/link';
import Navbar from '@/components/navbar'; // Import the Navbar component
export default function Home() {
  return (
    <>
    
    <Navbar />
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to MyApp</h1>
      <p className="text-lg mb-8">This is the home page of the application.</p>
      <Link href="/dashboard" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
        Go to Dashboard
      </Link>
    </div>
    </>
  );
}