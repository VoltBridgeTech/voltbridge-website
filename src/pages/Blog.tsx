import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { posts } from '@/lib/posts';

// Generate meta description for the blog page
const metaDescription = "Expert insights and guides on business energy management, cost savings, and sustainability strategies for UK SMEs and corporations. Stay updated with the latest energy market trends.";

// Schema.org JSON-LD for the blog
const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "VoltBridge Insights",
  "description": "Expert insights and guides on business energy management, cost savings, and sustainability strategies for UK SMEs and corporations.",
  "url": "https://www.voltbridge.co.uk/insights",
  "image": "https://www.voltbridge.co.uk/images/insights-image.jpg",
  "publisher": {
    "@type": "Organization",
    "name": "VoltBridge",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.voltbridge.co.uk/logo.png"
    }
  }
};

const Blog = () => {
  // Carousel refs and helpers
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const scrollByCards = (dir: 'left' | 'right') => {
    const el = scrollerRef.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const cardW = first?.clientWidth ?? el.clientWidth * 0.8;
    el.scrollBy({ left: (dir === 'left' ? -1 : 1) * cardW * 1.1, behavior: 'smooth' });
  };

  // Verificar si hay posts disponibles
  if (!posts || posts.length === 0) {
    console.log('No hay posts disponibles');
    return (
      <div className="min-h-screen bg-[#0D121F] flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-white mb-4">No hay artículos disponibles</h1>
          <p className="text-white/70 mb-6">Lo sentimos, actualmente no hay artículos para mostrar.</p>
          <Link 
            to="/" 
            className="inline-flex items-center text-[#0D76FA] hover:text-[#b100cd] transition-colors"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative bg-[#0B1020] overflow-hidden">
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 -left-10 h-96 w-96 rounded-full bg-[#0D76FA]/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-10 h-[28rem] w-[28rem] rounded-full bg-[#b100cd]/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),rgba(0,0,0,0)_60%)]" />
      </div>
      <Helmet>
        <title>Insights for UK Businesses | VoltBridge</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      {/* Hero */}
      <section className="relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
          <h1 className="text-5xl font-semibold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60">
              VoltBridge Insights
            </span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/70 max-w-3xl">
            Practical energy insights for UK organisations — procurement, decarbonisation and cost control.
          </p>
          <div className="mt-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-white/50">
            <span className="h-[1px] w-8 bg-gradient-to-r from-[#0D76FA] to-[#b100cd]" />
            Curated articles • Updated regularly
          </div>
        </div>
      </section>

      {/* Posts carousel */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="relative">
          {/* gradient masks */}
          <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#0B1020] to-transparent" />
          <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0B1020] to-transparent" />

          <div
            ref={scrollerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {posts.map((post) => {
              const words = post.content.join(' ').split(' ').length;
              const minutes = Math.max(2, Math.ceil(words / 200));
              return (
                <Link
                  key={post.slug}
                  to={`/insights/${post.slug}`}
                  className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[32%] group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all hover:-translate-y-1 hover:border-[#b100cd]/40 hover:bg-white/10"
                  aria-label={`Read article: ${post.title}`}
                >
                  <div className="flex items-center text-[11px] uppercase tracking-[0.25em] text-white/50">
                    <time dateTime={new Date(post.date).toISOString()}>
                      {new Date(post.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                    <span className="mx-2">•</span>
                    <span>{minutes} min read</span>
                  </div>
                  <h2 className="mt-3 text-xl md:text-2xl font-semibold text-white group-hover:text-white">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-white/75 line-clamp-3">
                    {post.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.keywords.slice(0, 3).map((k, i) => (
                      <span key={i} className="text-[11px] px-2 py-1 rounded-full bg-[#0D76FA]/15 text-[#0D76FA] border border-[#0D76FA]/20">
                        {k}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center gap-2 text-sm font-medium">
                    <span className="text-[#0D76FA] group-hover:text-[#b100cd] transition-colors">Read article</span>
                    <span className="h-px w-6 bg-gradient-to-r from-[#0D76FA] to-[#b100cd] group-hover:w-8 transition-all" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Nav buttons */}
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollByCards('left')}
            className="absolute left-1 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full border border-white/15 bg-white/10 backdrop-blur hover:bg-white/15 text-white flex items-center justify-center"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollByCards('right')}
            className="absolute right-1 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full border border-white/15 bg-white/10 backdrop-blur hover:bg-white/15 text-white flex items-center justify-center"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      
        {/* CTA */}
        <div className="mt-16 rounded-2xl p-8 text-center border border-white/10 bg-white/5 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-white mb-3">Looking to reduce your organisation’s energy costs?</h2>
          <p className="text-white/75 mb-6 max-w-2xl mx-auto">
            Whether you’re an SME or a larger organisation, our consultants can help you secure competitive commercial energy rates and implement cost-saving strategies.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-[#0D76FA] to-[#b100cd] text-white font-medium hover:opacity-95 transition shadow-[0_10px_40px_-10px_rgba(13,118,250,0.5)]"
          >
            Get a free energy quote
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Blog;
