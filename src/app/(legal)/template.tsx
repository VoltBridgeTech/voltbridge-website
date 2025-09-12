import { LegalPage } from './components/LegalPage';

interface LegalPageTemplateProps {
  title: string;
  description: string;
  lastUpdated: string;
  content: string;
}

export function LegalPageTemplate({
  title,
  description,
  lastUpdated,
  content
}: LegalPageTemplateProps) {
  return (
    <LegalPage
      title={title}
      content={content}
      lastUpdated={lastUpdated}
      description={description}
    />
  );
}

export const legalPageMetadata = (title: string, description: string) => ({
  title: `${title} | VoltBridge`,
  description: description
});
