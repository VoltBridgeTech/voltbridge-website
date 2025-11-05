import { useParams, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { posts } from '@/lib/posts';

// Function to generate schema.org Article markup
const generateArticleSchema = (post: any) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": post.title,
  "description": post.summary,
  "datePublished": post.date,
  "dateModified": post.date,
  "author": {
    "@type": "Organization",
    "name": "VoltBridge",
    "url": "https://www.voltbridge.co.uk"
  },
  "publisher": {
    "@type": "Organization",
    "name": "VoltBridge",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.voltbridge.co.uk/logo.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://www.voltbridge.co.uk/insights/${post.slug}`
  }
});

// Function to generate breadcrumb schema
const generateBreadcrumbSchema = (title: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.voltbridge.co.uk/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Insights",
      "item": "https://www.voltbridge.co.uk/insights"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": title
    }
  ]
});

const InsightPost = () => {
  const { slug } = useParams();
  const location = useLocation();
  const post = posts.find((p) => p.slug === slug);
  const canonicalUrl = `https://www.voltbridge.co.uk${location.pathname}`;

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0D121F] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Article Not Found</h1>
          <p className="text-white/70 mb-6">The article you're looking for doesn't exist or may have been moved.</p>
          <Link 
            to="/insights" 
            className="inline-flex items-center text-[#0D76FA] hover:text-[#b100cd] transition-colors"
          >
            ← Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  // Generate schema markup
  const articleSchema = generateArticleSchema(post);
  const breadcrumbSchema = generateBreadcrumbSchema(post.title);
  const postDate = new Date(post.date).toISOString();

  return (
    <div className="min-h-screen bg-[#0D121F]">
      <Helmet>
        <title>{post.title} | VoltBridge Insights</title>
        <meta name="description" content={post.summary} />
        <meta name="keywords" content={post.keywords.join(', ')} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:site_name" content="VoltBridge" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.summary} />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-invert max-w-none">
          {/* Breadcrumb Navigation */}
          <nav className="mb-8 text-sm text-white/60">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/insights" className="hover:text-white transition-colors">Insights</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{post.title}</span>
          </nav>

          {/* Article Header */}
          <header className="mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center text-sm text-white/60">
                <time dateTime={postDate} className="mr-4">
                  {new Date(post.date).toLocaleDateString('en-GB', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </time>
                <span>•</span>
                <span className="ml-4">
                  {Math.ceil(post.content.join(' ').split(' ').length / 200)} min read
                </span>
              </div>
              
              {/* Keywords/Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {post.keywords.map((keyword, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#0D1A2F] text-[#0D76FA] border border-white/10"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </motion.div>
          </header>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none text-white/90">
            {post.content.map((para, idx) => {
              // Check if paragraph is a heading (starts with **)
              if (para.startsWith('**') && para.endsWith('**')) {
                const headingText = para.replace(/\*\*/g, '');
                return (
                  <h2 key={idx} className="text-2xl font-bold text-white mt-10 mb-4">
                    {headingText}
                  </h2>
                );
              }
              
              // Check if paragraph is a list item (starts with number and dot)
              if (/^\d+\.\s/.test(para)) {
                const listItems = post.content
                  .filter((p, i) => /^\d+\.\s/.test(p) && i >= idx && (i === idx || /^\d+\.\s/.test(post.content[i-1])))
                  .map(item => item.replace(/^\d+\.\s*\*\*/, '').replace(/\*\*/, ':'));
                
                if (listItems.length > 0) {
                  // Skip rendering if this isn't the first list item
                  if (idx > 0 && /^\d+\.\s/.test(post.content[idx-1])) {
                    return null;
                  }
                  
                  return (
                    <ul key={idx} className="list-decimal pl-6 space-y-3 my-6">
                      {listItems.map((item, itemIdx) => (
                        <li key={itemIdx} className="pl-2">
                          <span className="text-white/90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
              }
              
              // Regular paragraph
              return (
                <p key={idx} className="text-white/90 leading-relaxed mb-6">
                  {para}
                </p>
              );
            })}
            
            {/* Call to Action */}
            <div className="mt-16 bg-gradient-to-r from-[#0D1A2F] to-[#0D1A2F]/50 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to reduce your organisation’s energy costs?</h3>
              <p className="text-white/80 mb-6">
                Our energy consultants can help you secure competitive commercial tariffs and implement cost-saving strategies.
                Get a free, no‑obligation quote today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-[#0D76FA] to-[#b100cd] text-white font-medium hover:opacity-90 transition text-center"
                >
                  Get a free energy quote
                </Link>
                <Link 
                  to="/services" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition text-center"
                >
                  View our services
                </Link>
              </div>
            </div>
          </div>
          
          {/* Back to Insights Link */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <Link 
              to="/insights" 
              className="inline-flex items-center text-[#0D76FA] hover:text-[#b100cd] transition-colors group"
            >
              <svg 
                className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                />
              </svg>
              Back to Insights
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
};

export default InsightPost;
