import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-6">
      <div className="text-center">
        <div className="text-8xl font-bold gradient-text mb-6">404</div>
        <h1 className="text-2xl font-bold text-heading mb-3">Page Not Found</h1>
        <p className="text-body text-sm mb-8 max-w-[400px] mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="btn-primary font-medium text-sm px-8 py-3.5 rounded-lg inline-block"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
