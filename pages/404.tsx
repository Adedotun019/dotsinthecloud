import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Custom404() {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = '/';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl mb-6">Oops! Page not found</h2>
      <p className="text-lg mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="space-y-4">
        <Link href="/" className="inline-block bg-brand hover:bg-brand-dark text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200">
          Go Home
        </Link>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Redirecting to home page in {countdown} seconds...
        </p>
      </div>
    </div>
  );
}
