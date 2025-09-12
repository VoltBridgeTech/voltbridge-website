import { motion } from 'framer-motion';

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-white mb-4">Our Blog</h1>
        <p className="text-xl text-vb-electric-2">Latest news and insights from VoltBridge</p>
      </motion.div>
      
      <div className="prose prose-invert max-w-4xl mx-auto">
        <p className="text-lg">
          [Blog content will be displayed here]
        </p>
      </div>
    </div>
  );
};

export default Blog;
