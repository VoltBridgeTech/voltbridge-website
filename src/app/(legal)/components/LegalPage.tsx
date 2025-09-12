interface LegalPageProps {
  title: string;
  content: string;
  lastUpdated?: string;
  description?: string;
}

export function LegalPage({ title, content, lastUpdated = '2023-01-01', description = '' }: LegalPageProps) {
  // Set the document title
  if (typeof document !== 'undefined') {
    document.title = `${title} | VoltBridge`;
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-vb-dark-2/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-vb-electric-1/10">
        <h1 className="text-3xl font-bold text-white mb-6">{title}</h1>
        
        {lastUpdated && (
          <div className="mb-8 text-sm text-vb-electric-1/80">
            Last updated: {new Date(lastUpdated).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </div>
        )}
        
        {description && <p className="text-vb-gray-300 mb-8">{description}</p>}
        
        <div 
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        
        <div className="mt-12 pt-8 border-t border-vb-dark-3">
          <p className="text-vb-electric-1/80 text-sm">
            If you have any questions about this document, please contact us at{' '}
            <a href="mailto:legal@voltbridge.com" className="text-vb-electric-1 hover:underline">
              legal@voltbridge.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

// For Vite compatibility
export function legalPageMetadata(title: string, description: string) {
  return {
    title: `${title} | VoltBridge`,
    description: description || title
  };
}
