import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-5">
      <div className="text-center">
        <p className="text-6xl font-bold text-red-600">404</p>

        <h1 className="mt-4 text-3xl font-bold text-gray-900">
          Page Not Found
        </h1>

        <p className="mt-3 max-w-md text-gray-600">
          Sorry, the page you are looking for doesn&apos;t exist or may have
          been moved.
        </p>

        <Link
          href="/"
          className="mt-7 inline-block rounded-lg bg-red-600 px-3 py-2 font-semibold text-white transition hover:bg-red-700"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  );
}
