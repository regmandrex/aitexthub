import BlogCard from '../../components/BlogCard';
import AdSenseSlot from '../../components/ads/AdSenseSlot';
import { buildMeta } from '@/lib/seo-meta';
import { getServerLocale } from '@/lib/server-i18n';
import { createServerT } from '@/lib/server-t';

const postsByLocale: Record<string, Array<{ slug: string; title: string; description: string; date: string }>> = {
  en: [
    {
      slug: 'how-to-make-chatgpt-text-look-human-cleaning-and-rewriting-tips',
      title: 'How to Make ChatGPT Text Look Human (Cleaning vs Rewriting)',
      description: 'What actually works: clean invisible Unicode first, then apply light rewriting for flow without harming SEO or meaning.',
      date: 'Jan 2026',
    },
    {
      slug: 'clean-ai-text-before-publishing',
      title: 'Clean AI Text Before Publishing (Pre-Publish Checklist)',
      description: 'A complete pre-publish checklist for SEO, performance, and trust when publishing AI-assisted content across platforms.',
      date: 'Jan 2026',
    },
    {
      slug: 'why-ai-watermarks-matter-and-how-to-clean-chatgpt-text-safely',
      title: 'Why AI Watermarks Matter (and How to Clean Safely)',
      description: 'What "AI watermarks" really mean, which risks are real, and how to clean ChatGPT text safely without rewriting or hurting SEO.',
      date: 'Jan 2026',
    },
    {
      slug: 'how-to-clean-chatgpt-text-for-emails-and-newsletters',
      title: 'How to Clean ChatGPT Text for Emails and Newsletters',
      description: 'A safe email workflow to remove invisible Unicode, stabilize formatting across clients, and protect deliverability and trust.',
      date: 'Jan 2026',
    },
    {
      slug: 'developers-guide-clean-chatgpt-text-before-using-in-code-or-docs',
      title: "Developer's Guide: Clean ChatGPT Text for Code and Docs",
      description: 'Prevent invisible Unicode from breaking Markdown, configs, linters, and CI with a safe developer workflow.',
      date: 'Jan 2026',
    },
    {
      slug: 'remove-hidden-ai-watermarks-guide',
      title: 'Remove Hidden AI Watermarks (Practical Guide)',
      description: 'What to remove vs ignore, how to clean real hidden Unicode artifacts safely, and how to publish without rewriting.',
      date: 'Jan 2026',
    },
    {
      slug: 'future-of-ai-text-cleaning',
      title: 'Future of AI Text Cleaning',
      description: "What's next for SEO-safe AI publishing: Unicode normalization, performance-aware cleaning, and content QA pipelines.",
      date: 'Jan 2026',
    },
    {
      slug: 'gpt-cleanup-vs-manual-editing',
      title: 'GPT Cleanup vs Manual Editing',
      description: 'What each does well, what each misses, and the best order for SEO, Core Web Vitals, and scalable publishing in 2026.',
      date: 'Jan 2026',
    },
    {
      slug: 'common-mistakes-when-cleaning-chatgpt-text-and-fixes',
      title: 'Common Mistakes When Cleaning ChatGPT Text (And Fixes)',
      description: 'The most common cleanup mistakes and the SEO-safe, performance-focused fixes that prevent broken layouts and regressions.',
      date: 'Jan 2026',
    },
    {
      slug: 'detecting-and-removing-hidden-ai-watermarks-in-text',
      title: 'Detecting and Removing Hidden AI Watermarks in Text',
      description: "What's real vs misinformation, how to detect invisible Unicode artifacts, and how to clean safely without rewriting.",
      date: 'Jan 2026',
    },
    {
      slug: 'best-tools-to-clean-chatgpt-text-before-publishing',
      title: 'Best Tools to Clean ChatGPT Text Before Publishing',
      description: 'What to look for in real AI text cleaners, how common tool categories compare, and how to choose for SEO and performance.',
      date: 'Jan 2026',
    },
    {
      slug: 'ultimate-workflow-detect-clean-and-format-chatgpt-text',
      title: 'Ultimate Workflow: Detect, Clean, and Format ChatGPT Text',
      description: 'A 5-stage workflow to detect hidden issues, clean text correctly, format natively, and publish stable, SEO-safe AI content.',
      date: 'Jan 2026',
    },
    {
      slug: 'ai-content-cleaning-vs-traditional-text-sanitization-for-seo',
      title: 'AI Content Cleaning vs Traditional Text Sanitization for SEO',
      description: 'Why sanitization alone is not enough for AI content, and what to clean in 2026 for performance, UX, and rankings.',
      date: 'Jan 2026',
    },
    {
      slug: 'advanced-dom-optimization-for-ai-generated-content',
      title: 'Advanced DOM Optimization for AI-Generated Content',
      description: 'Reduce DOM bloat from AI text, improve speed, stabilize layouts, and protect Core Web Vitals at scale.',
      date: 'Jan 2026',
    },
    {
      slug: 'optimizing-ai-generated-text-for-web-performance',
      title: 'Optimizing AI-Generated Text for Web Performance',
      description: 'How AI text affects speed, stability, and SEO, plus a repeatable workflow to optimize LCP/CLS/INP at scale.',
      date: 'Jan 2026',
    },
    {
      slug: 'the-science-of-invisible-spaces-in-ai-text',
      title: 'The Science of Invisible Spaces in AI Text',
      description: 'Why invisible Unicode spaces exist, how they break websites, and how to remove them safely for SEO and performance.',
      date: 'Jan 2026',
    },
    {
      slug: 'invisible-markup-impacts-core-web-vitals',
      title: 'How Invisible Markup Impacts Core Web Vitals',
      description: 'Why hidden Unicode and dirty text can hurt LCP/CLS/INP, and how to detect and fix invisible markup permanently.',
      date: 'Jan 2026',
    },
    {
      slug: 'chatgpt-text-to-wordpress-cleanest-copy-paste-workflow',
      title: 'ChatGPT Text to WordPress: Clean Copy-Paste Workflow',
      description: 'The safest workflow to paste ChatGPT text into WordPress without broken blocks, spacing issues, or SEO/performance hits.',
      date: 'Jan 2026',
    },
    {
      slug: 'fix-chatgpt-formatting',
      title: 'Fix ChatGPT Formatting: Headings, Lists, Spacing & Layout',
      description: 'Why formatting breaks after copy-paste and how to fix headings, lists, spacing, and layout issues reliably.',
      date: 'Jan 2026',
    },
    {
      slug: 'how-to-remove-chatgpt-watermarks-and-hidden-characters',
      title: 'How to Remove ChatGPT Watermarks and Hidden Characters',
      description: 'A technical guide to detect hidden Unicode, remove artifacts, and publish clean, reliable ChatGPT text.',
      date: 'Jan 2026',
    },
    {
      slug: 'comprehensive-guide-to-cleaning-ai-text-before-publishing',
      title: 'Comprehensive Guide to Cleaning AI Text Before Publishing',
      description: 'A complete workflow to sanitize AI text, fix structure, and publish clean, SEO-safe content in 2026.',
      date: 'Jan 2026',
    },
    {
      slug: 'how-to-clean-chatgpt-text',
      title: 'How to Clean ChatGPT Text (Publishing, SEO & Performance)',
      description: 'Step-by-step cleanup for invisible characters, whitespace, structure, and SEO-safe publishing.',
      date: 'Jan 2026',
    },
    {
      slug: 'why-chatgpt-text-looks-messy-and-how-to-fix-it',
      title: 'Why ChatGPT Text Looks Messy (and How to Fix It Permanently)',
      description: 'Why spacing, lists, and headings break after copy-paste, and the clean workflow that fixes it for good.',
      date: 'Jan 2026',
    },
    {
      slug: 'chatgpt-formatting-fixer-for-word-and-docs',
      title: 'ChatGPT Formatting Fixer for Word and Docs',
      description: 'Why ChatGPT formatting breaks in documents and the clean workflow to keep spacing, headings, bullets, and PDF export stable.',
      date: 'Jan 2026',
    },
  ],
  es: [
    {
      slug: 'how-to-make-chatgpt-text-look-human-cleaning-and-rewriting-tips',
      title: 'Cómo hacer que el texto de ChatGPT suene humano (limpieza vs reescritura)',
      description:
        'Lo que sí funciona: limpia primero el Unicode invisible y luego aplica una reescritura ligera para el flujo sin dañar el SEO ni el significado.',
      date: 'Ene 2026',
    },
    {
      slug: 'clean-ai-text-before-publishing',
      title: 'Limpia texto de IA antes de publicar (lista previa)',
      description:
        'Lista completa previa a publicar para SEO, rendimiento y confianza al publicar contenido con IA en distintas plataformas.',
      date: 'Ene 2026',
    },
    {
      slug: 'why-ai-watermarks-matter-and-how-to-clean-chatgpt-text-safely',
      title: 'Por qué importan las marcas de agua de IA (y cómo limpiar con seguridad)',
      description:
        'Qué significan realmente las "marcas de agua" de IA, qué riesgos son reales y cómo limpiar texto de ChatGPT sin reescribir ni afectar el SEO.',
      date: 'Ene 2026',
    },
    {
      slug: 'how-to-clean-chatgpt-text-for-emails-and-newsletters',
      title: 'Cómo limpiar texto de ChatGPT para correos y newsletters',
      description:
        'Flujo seguro para emails: elimina Unicode invisible, estabiliza el formato en clientes y protege entregabilidad y confianza.',
      date: 'Ene 2026',
    },
    {
      slug: 'developers-guide-clean-chatgpt-text-before-using-in-code-or-docs',
      title: 'Guía para desarrolladores: limpiar texto de ChatGPT para código y docs',
      description:
        'Evita que el Unicode invisible rompa Markdown, configs, linters y CI con un flujo seguro.',
      date: 'Ene 2026',
    },
    {
      slug: 'remove-hidden-ai-watermarks-guide',
      title: 'Eliminar marcas de agua de IA ocultas (guía práctica)',
      description:
        'Qué eliminar vs ignorar, cómo limpiar artefactos Unicode ocultos reales con seguridad y publicar sin reescribir.',
      date: 'Ene 2026',
    },
    {
      slug: 'future-of-ai-text-cleaning',
      title: 'El futuro de la limpieza de texto de IA',
      description:
        'Lo que viene para publicar IA con SEO seguro: normalización Unicode, limpieza orientada al rendimiento y flujos de QA.',
      date: 'Ene 2026',
    },
    {
      slug: 'gpt-cleanup-vs-manual-editing',
      title: 'GPT Cleanup vs edición manual',
      description:
        'Lo que cada uno hace bien, lo que le falta y el mejor orden para SEO, Core Web Vitals y publicación escalable en 2026.',
      date: 'Ene 2026',
    },
    {
      slug: 'common-mistakes-when-cleaning-chatgpt-text-and-fixes',
      title: 'Errores comunes al limpiar texto de ChatGPT (y cómo corregirlos)',
      description:
        'Los errores más comunes de limpieza y correcciones seguras para SEO y rendimiento que evitan layouts rotos y regresiones.',
      date: 'Ene 2026',
    },
    {
      slug: 'detecting-and-removing-hidden-ai-watermarks-in-text',
      title: 'Detectar y eliminar marcas de agua de IA ocultas en texto',
      description:
        'Qué es real vs desinformación, cómo detectar artefactos Unicode invisibles y limpiar con seguridad sin reescribir.',
      date: 'Ene 2026',
    },
    {
      slug: 'best-tools-to-clean-chatgpt-text-before-publishing',
      title: 'Mejores herramientas para limpiar texto de ChatGPT antes de publicar',
      description:
        'Qué buscar en limpiadores de texto de IA reales, cómo se comparan las categorías y cómo elegir por SEO y rendimiento.',
      date: 'Ene 2026',
    },
    {
      slug: 'ultimate-workflow-detect-clean-and-format-chatgpt-text',
      title: 'Flujo definitivo: detectar, limpiar y formatear texto de ChatGPT',
      description:
        'Flujo de 5 etapas para detectar problemas ocultos, limpiar bien, formatear de forma nativa y publicar contenido IA estable y SEO-safe.',
      date: 'Ene 2026',
    },
    {
      slug: 'ai-content-cleaning-vs-traditional-text-sanitization-for-seo',
      title: 'Limpieza de contenido de IA vs sanitización tradicional para SEO',
      description:
        'Por qué la sanitización sola no basta para contenido de IA y qué limpiar en 2026 para rendimiento, UX y rankings.',
      date: 'Ene 2026',
    },
    {
      slug: 'advanced-dom-optimization-for-ai-generated-content',
      title: 'Optimización avanzada del DOM para contenido generado por IA',
      description:
        'Reduce el bloat del DOM por texto IA, mejora la velocidad, estabiliza layouts y protege Core Web Vitals a escala.',
      date: 'Ene 2026',
    },
    {
      slug: 'optimizing-ai-generated-text-for-web-performance',
      title: 'Optimizar texto generado por IA para rendimiento web',
      description:
        'Cómo el texto IA afecta velocidad, estabilidad y SEO, y un flujo repetible para optimizar LCP/CLS/INP a escala.',
      date: 'Ene 2026',
    },
    {
      slug: 'the-science-of-invisible-spaces-in-ai-text',
      title: 'La ciencia de los espacios invisibles en texto de IA',
      description:
        'Por qué existen espacios Unicode invisibles, cómo rompen sitios y cómo eliminarlos con seguridad para SEO y rendimiento.',
      date: 'Ene 2026',
    },
    {
      slug: 'invisible-markup-impacts-core-web-vitals',
      title: 'Cómo el marcado invisible afecta Core Web Vitals',
      description:
        'Por qué el Unicode oculto y el texto sucio dañan LCP/CLS/INP y cómo detectar y corregir el marcado invisible de forma permanente.',
      date: 'Ene 2026',
    },
    {
      slug: 'chatgpt-text-to-wordpress-cleanest-copy-paste-workflow',
      title: 'Texto de ChatGPT a WordPress: flujo de copia y pega limpio',
      description:
        'El flujo más seguro para pegar texto de ChatGPT en WordPress sin bloques rotos, problemas de espaciado ni golpes a SEO/rendimiento.',
      date: 'Ene 2026',
    },
    {
      slug: 'fix-chatgpt-formatting',
      title: 'Arreglar formato de ChatGPT: encabezados, listas, espaciado y layout',
      description:
        'Por qué se rompe el formato al copiar/pegar y cómo corregir encabezados, listas, espaciado y layout de forma fiable.',
      date: 'Ene 2026',
    },
    {
      slug: 'how-to-remove-chatgpt-watermarks-and-hidden-characters',
      title: 'Cómo eliminar marcas de agua de ChatGPT y caracteres ocultos',
      description:
        'Guía técnica para detectar Unicode oculto, eliminar artefactos y publicar texto de ChatGPT limpio y fiable.',
      date: 'Ene 2026',
    },
    {
      slug: 'comprehensive-guide-to-cleaning-ai-text-before-publishing',
      title: 'Guía completa para limpiar texto de IA antes de publicar',
      description:
        'Flujo completo para sanear texto de IA, corregir estructura y publicar contenido limpio y SEO-safe en 2026.',
      date: 'Ene 2026',
    },
    {
      slug: 'how-to-clean-chatgpt-text',
      title: 'Cómo limpiar texto de ChatGPT (publicación, SEO y rendimiento)',
      description:
        'Limpieza paso a paso de caracteres invisibles, espacios, estructura y publicación SEO-safe.',
      date: 'Ene 2026',
    },
    {
      slug: 'why-chatgpt-text-looks-messy-and-how-to-fix-it',
      title: 'Por qué el texto de ChatGPT se ve desordenado (y cómo arreglarlo para siempre)',
      description:
        'Por qué se rompen espaciado, listas y encabezados al copiar/pegar y el flujo limpio que lo arregla definitivamente.',
      date: 'Ene 2026',
    },
    {
      slug: 'chatgpt-formatting-fixer-for-word-and-docs',
      title: 'Arreglador de formato de ChatGPT para Word y Docs',
      description:
        'Por qué el formato de ChatGPT se rompe en documentos y el flujo limpio para mantener espaciado, encabezados, viñetas y exportación PDF estable.',
      date: 'Ene 2026',
    },
  ],
};

export async function generateMetadata() {
  const { locale } = await getServerLocale();
  const t = await createServerT(locale);
  return buildMeta({
    title: t('BlogPage.seoTitle'),
    description: t('BlogPage.seoDescription'),
    urlPath: '/blog',
    locale,
  });
}

export default async function BlogIndexPage() {
  const { locale } = await getServerLocale();
  const posts = postsByLocale[locale] ?? postsByLocale.en;
  return (
    <div className="space-y-6">
      <div className="ad-slot">
        <AdSenseSlot className="w-full" />
      </div>
      <div className="grid gap-4">
        {posts.map((post) => (
          <BlogCard key={post.slug} href={`/blog/${post.slug}`} title={post.title} description={post.description} date={post.date} />
        ))}
      </div>
    </div>
  );
}

