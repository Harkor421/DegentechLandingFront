import Link from 'next/link';

const serviceData = {
  'custom-software': {
    title: 'Custom Software Development',
    description: 'SaaS platforms, APIs & internal tools built for scale and reliability.',
  },
  '3d-manufacturing': {
    title: '3D Manufacturing',
    description: 'Rapid prototyping & production-grade parts with industrial precision.',
  },
  'iot-integration': {
    title: 'IoT Integration',
    description: 'Bridging hardware and software with connected device ecosystems.',
  },
  'product-strategy': {
    title: 'Product Strategy',
    description: 'From concept to launch — roadmaps, architecture, and go-to-market.',
  },
};

export function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const service = serviceData[params.slug];
  if (!service) return { title: 'Service Not Found' };
  return {
    title: service.title,
    description: service.description,
  };
}

export default function ServicePage({ params }) {
  const service = serviceData[params.slug];

  if (!service) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-heading mb-4">Service Not Found</h1>
          <Link href="/" className="btn-primary font-medium text-sm px-8 py-3.5 rounded-lg inline-block">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-6">
      <div className="text-center max-w-[500px]">
        <span className="text-accent text-xs font-mono uppercase tracking-widest mb-3 block">
          Coming Soon
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-heading tracking-[-0.02em] mb-4">
          {service.title}
        </h1>
        <p className="text-body text-sm leading-relaxed mb-8">
          {service.description} Full case studies and detailed information coming soon.
        </p>
        <Link href="/" className="btn-primary font-medium text-sm px-8 py-3.5 rounded-lg inline-block">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
