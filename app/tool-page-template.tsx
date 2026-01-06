import ToolPage, { generateMetadata as baseGenerateMetadata } from './[slug]/page';

export const makeToolPage = (slug: string) => {
  const ToolPageTemplate = () => <ToolPage params={{ slug }} />;
  ToolPageTemplate.displayName = `ToolPageTemplate(${slug || 'home'})`;
  return ToolPageTemplate;
};

export const makeGenerateMetadata = (slug: string) => () => baseGenerateMetadata({ params: { slug } });
