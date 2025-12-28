import ToolPage, { generateMetadata as baseGenerateMetadata } from './[slug]/page';

export const makeToolPage = (slug: string) => () => <ToolPage params={{ slug }} />;
export const makeGenerateMetadata = (slug: string) => () => baseGenerateMetadata({ params: { slug } });
