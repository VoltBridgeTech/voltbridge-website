import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { posts } from '@/lib/posts';

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-white mb-4">Insights</h1>
        <p className="text-xl text-[#0D76FA]">Business energy guidance for UK organisations</p>
      </motion.div>

      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/insights/${post.slug}`}
            className="group rounded-2xl border border-white/10 bg-[#0D121F]/70 p-6 shadow-[0_35px_120px_-75px_rgba(0,0,0,0.75)] transition hover:-translate-y-1 hover:border-[#b100cd]/30"
          >
            <h2 className="text-2xl font-semibold text-white group-hover:text-white">{post.title}</h2>
            <p className="mt-2 text-xs uppercase tracking-[0.35em] text-white/50">{new Date(post.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p className="mt-4 text-white/75">{post.summary}</p>
            <span className="mt-4 inline-flex items-center text-sm font-medium text-[#0D76FA] group-hover:text-[#b100cd]">Read more →</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
