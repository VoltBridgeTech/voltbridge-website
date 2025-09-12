import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | VoltBridge',
  description: 'Stay updated with the latest news and insights about sustainable energy solutions.',
};

// This would typically come from a CMS
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Renewable Energy in 2023',
    excerpt: 'Exploring the latest trends and innovations in renewable energy that are shaping our future.',
    date: '2023-06-15',
    author: 'Jane Smith',
    category: 'Renewable Energy',
    readTime: '5 min read',
    image: '/images/blog/renewable-future.jpg',
  },
  {
    id: 2,
    title: 'How Solar Panels Can Reduce Your Energy Bills',
    excerpt: 'A comprehensive guide on how switching to solar energy can lead to significant savings on your energy bills.',
    date: '2023-05-22',
    author: 'John Doe',
    category: 'Solar Energy',
    readTime: '4 min read',
    image: '/images/blog/solar-panels.jpg',
  },
  {
    id: 3,
    title: 'The Benefits of Smart Home Energy Management',
    excerpt: 'Discover how smart home technology can help you monitor and reduce your energy consumption.',
    date: '2023-04-10',
    author: 'Alex Johnson',
    category: 'Smart Home',
    readTime: '6 min read',
    image: '/images/blog/smart-home.jpg',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-vb-navy to-vb-dark-1">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:pt-40 lg:pb-28 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">VoltBridge</span>
              <span className="block text-vb-electric-1">Blog</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Insights, news, and updates about sustainable energy solutions
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="py-16 bg-vb-dark-2/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
            <main className="lg:col-span-2">
              <div className="space-y-12">
                {blogPosts.map((post) => (
                  <article key={post.id} className="group">
                    <div className="bg-vb-dark-2/50 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-vb-electric-1/20 hover:shadow-lg">
                      <div className="md:flex">
                        <div className="md:flex-shrink-0 md:w-48 h-48 bg-vb-dark-3 relative overflow-hidden">
                          <div className="absolute inset-0 bg-vb-electric-1/10 flex items-center justify-center text-vb-electric-1">
                            <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        </div>
                        <div className="p-8">
                          <div className="uppercase tracking-wide text-sm text-vb-electric-1 font-semibold">
                            {post.category}
                          </div>
                          <Link href={`/blog/${post.id}`} className="block mt-1">
                            <h3 className="text-xl font-semibold text-white group-hover:text-vb-electric-1 transition-colors duration-200">
                              {post.title}
                            </h3>
                          </Link>
                          <p className="mt-3 text-gray-300">
                            {post.excerpt}
                          </p>
                          <div className="mt-4 flex items-center">
                            <div className="flex-shrink-0">
                              <span className="sr-only">{post.author}</span>
                              <div className="h-10 w-10 rounded-full bg-vb-dark-3 flex items-center justify-center text-vb-electric-1 font-bold">
                                {post.author.split(' ').map(n => n[0]).join('')}
                              </div>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium text-white">
                                {post.author}
                              </p>
                              <div className="flex space-x-1 text-sm text-gray-400">
                                <time dateTime={post.date}>
                                  {new Date(post.date).toLocaleDateString('en-GB', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric'
                                  })}
                                </time>
                                <span aria-hidden="true">&middot;</span>
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <nav className="mt-12 flex justify-between" aria-label="Pagination">
                <button
                  disabled
                  className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-400 bg-vb-dark-2/50 border border-vb-dark-3 rounded-md cursor-not-allowed"
                >
                  Previous
                </button>
                <button
                  className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-vb-electric-1/10 border border-vb-electric-1/30 rounded-md hover:bg-vb-electric-1/20 transition-colors"
                >
                  Next
                </button>
              </nav>
            </main>

            <aside className="lg:col-span-1">
              <div className="bg-vb-dark-2/50 rounded-2xl p-6">
                <h2 className="text-lg font-medium text-white mb-6">Categories</h2>
                <ul className="space-y-3">
                  {['Renewable Energy', 'Solar Energy', 'Wind Power', 'Smart Home', 'Energy Saving Tips'].map((category) => (
                    <li key={category}>
                      <a
                        href="#"
                        className="flex items-center justify-between text-gray-300 hover:text-vb-electric-1 transition-colors"
                      >
                        <span>{category}</span>
                        <span className="text-xs bg-vb-electric-1/10 text-vb-electric-1 px-2 py-1 rounded-full">
                          {Math.floor(Math.random() * 10) + 1}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <h2 className="text-lg font-medium text-white mb-4">Subscribe to our newsletter</h2>
                  <p className="text-sm text-gray-300 mb-4">
                    Get the latest news and updates delivered to your inbox.
                  </p>
                  <form className="space-y-3">
                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="block w-full rounded-md border-vb-dark-3 bg-vb-dark-1/50 text-white placeholder-gray-400 focus:ring-vb-electric-1/50 focus:border-vb-electric-1/30"
                        placeholder="Enter your email"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-vb-navy bg-vb-electric-1 hover:bg-vb-electric-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-vb-electric-1/50 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
