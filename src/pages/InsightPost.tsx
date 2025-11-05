import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { posts } from '@/lib/posts';

const InsightPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white">
        <h1 className="text-3xl font-bold mb-4">Article not found</h1>
        <p className="text-white/70 mb-6">The article you are looking for does not exist or has been moved.</p>
        <Link to="/insights" className="text-[#0D76FA] hover:text-[#b100cd]">Back to Insights</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <nav className="mb-6 text-sm text-white/60">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/insights" className="hover:text-white transition-colors">Insights</Link>
          <span className="mx-2">/</span>
          <span className="text-white">{post.title}</span>
        </nav>
        <h1 className="text-4xl font-bold text-white mb-2">{post.title}</h1>
        <p className="text-xs uppercase tracking-[0.35em] text-white/50">
          {new Date(post.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </motion.div>

      <article className="space-y-6 text-white/90">
        {post.content.map((para, idx) => (
          <p key={idx} className="leading-relaxed">{para}</p>
        ))}
      </article>

      <div className="mt-10">
        <Link to="/insights" className="text-[#0D76FA] hover:text-[#b100cd]">← Back to Insights</Link>
      </div>
    </div>
  );
};

export default InsightPost;
