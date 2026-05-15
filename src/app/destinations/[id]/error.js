"use client";

import { useEffect } from "react";
import Link from "next/link";

const ErrorPage = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-emerald-50 px-4">
      <div className="text-center max-w-md">

        {/* Icon */}
        <div className="text-6xl mb-4">⚠️</div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-red-500">
          Something Went Wrong
        </h1>

        {/* Message */}
        <p className="text-gray-600 mt-3">
          An unexpected error occurred. Please try again.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">

          <button
            onClick={() => reset()}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-full transition"
          >
            Go Home
          </Link>

        </div>
      </div>
    </section>
  );
};

export default ErrorPage;