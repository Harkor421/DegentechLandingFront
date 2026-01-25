import Link from 'next/link';

const projectData = {
  'smart-factory-dashboard': {
    title: 'Smart Factory Dashboard',
    description: 'Real-time production analytics & OEE tracking with predictive maintenance insights.',
  },
  '3d-robotics-housing': {
    title: '3D Robotics Housing',
    description: 'Industrial-grade robotic arm casings optimized for FDM printing with custom tooling.',
  },
  'trading-platform': {
    title: 'Trading Platform',
    description: 'Low-latency multi-exchange integration with real-time risk analytics.',
  },
};

export function generateStaticParams() {
  return Object.keys(projectData).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const project = projectData[params.slug];
  if (!project) return { title: 'Project Not Found' };
  return {
    title: project.title,
    description: project.description,
  };
}

export default function ProjectPage({ params }) {
  const project = projectData[params.slug];

  if (!project) {
    return (
      <div className="min-h-screen bg-primary flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-heading mb-4">Project Not Found</h1>
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
          Case Study — Coming Soon
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-heading tracking-[-0.02em] mb-4">
          {project.title}
        </h1>
        <p className="text-body text-sm leading-relaxed mb-8">
          {project.description} Full case study with technical deep-dive coming soon.
        </p>
        <Link href="/" className="btn-primary font-medium text-sm px-8 py-3.5 rounded-lg inline-block">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
