import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us | VoltBridge',
  description: 'Learn about VoltBridge and our mission to provide sustainable energy solutions.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-vb-navy to-vb-dark-1">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:pt-40 lg:pb-28 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">About</span>
              <span className="block text-vb-electric-1">VoltBridge</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Powering a sustainable future with innovative energy solutions
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-vb-dark-2/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-vb-electric-1 font-semibold tracking-wide uppercase">Our Story</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              A New Standard in Energy
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
              Founded with a vision to transform the energy sector, VoltBridge is committed to providing sustainable and affordable energy solutions.
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/about-hero.jpg"
                  alt="VoltBridge Team"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-lg text-gray-300">
                  To make sustainable energy accessible to everyone while maintaining the highest standards of service and reliability.
                </p>
                
                <h3 className="text-2xl font-bold text-white mt-8 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-300">
                  A world powered by clean, renewable energy where everyone has access to affordable and sustainable power solutions.
                </p>
                
                <h3 className="text-2xl font-bold text-white mt-8 mb-4">Our Values</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li><strong>Sustainability:</strong> Committed to reducing carbon footprint</li>
                  <li><strong>Innovation:</strong> Constantly seeking better solutions</li>
                  <li><strong>Integrity:</strong> Transparent and honest in all our dealings</li>
                  <li><strong>Customer Focus:</strong> Putting our customers at the heart of everything we do</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-vb-dark-1/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-xl text-gray-300">
              The passionate people behind VoltBridge
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: 'John Doe',
                role: 'CEO & Founder',
                bio: 'Energy industry veteran with 15+ years of experience in sustainable energy solutions.',
                image: '/images/team/john-doe.jpg',
              },
              {
                name: 'Jane Smith',
                role: 'CTO',
                bio: 'Technology expert specializing in smart grid solutions and renewable energy integration.',
                image: '/images/team/jane-smith.jpg',
              },
              {
                name: 'Alex Johnson',
                role: 'Head of Operations',
                bio: 'Operations specialist ensuring smooth delivery of our services to customers.',
                image: '/images/team/alex-johnson.jpg',
              },
            ].map((member) => (
              <div key={member.name} className="pt-6">
                <div className="flow-root bg-vb-dark-2/50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div className="relative h-40 w-40 mx-auto overflow-hidden rounded-full border-4 border-vb-electric-1/30">
                      <div className="absolute inset-0 bg-vb-dark-3 flex items-center justify-center text-4xl text-vb-electric-1 font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-white text-center">
                      {member.name}
                    </h3>
                    <p className="text-vb-electric-1 text-center">{member.role}</p>
                    <p className="mt-2 text-base text-gray-300 text-center">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-vb-electric-1 to-vb-electric-2">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-vb-navy sm:text-4xl">
            <span className="block">Ready to switch to sustainable energy?</span>
            <span className="block text-vb-dark-1">Get your free quote today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-vb-navy bg-white hover:bg-gray-50"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
