import { buildMeta } from '@/lib/seo-meta';
import { getServerLocale } from '@/lib/server-i18n';

type PrivacyContent = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  updated: string;
  introTitle: string;
  introP1: string;
  introP2: string;
  introP3: string;
  privacyByDesignTitle: string;
  privacyByDesignIntro: string;
  privacyByDesignList: string[];
  notCollectTitle: string;
  notCollectIntro: string;
  notCollectList: string[];
  notCollectOutro: string;
  adsTitle: string;
  adsIntro: string;
  adsLeadIn: string;
  adsList: string[];
  adChoicesIntro: string;
  adChoices: Array<{ label: string; url: string }>;
  adChoicesOutro: string;
  securityTitle: string;
  securityIntro: string;
  securityList: string[];
  securityOutro: string;
  analyticsTitle: string;
  analyticsIntro: string;
  analyticsLeadIn: string;
  analyticsList: string[];
  analyticsOutro: string;
  childrenTitle: string;
  childrenP1: string;
  rightsTitle: string;
  rightsIntro: string;
  rightsList: string[];
  rightsP1: string;
  rightsLeadIn: string;
  rightsActions: string[];
  updatesTitle: string;
  updatesP1: string;
  contactTitle: string;
  contactP1: string;
  contactP2: string;
  contactP3: string;
};

const CONTENT_BY_LOCALE: Record<string, PrivacyContent> = {
  en: {
    metaTitle: 'Privacy Policy - GPTCLEANUP AI Data Protection',
    metaDescription: 'Privacy details for GPTCLEANUP AI tools.',
    title: 'Privacy Policy',
    updated: 'Last Updated: July 7, 2023',
    introTitle: '1. Introduction',
    introP1:
      'Welcome to GPT CLEAN UP ("we," "our," or "us"). Your privacy is extremely important to us. GPT CLEAN UP was built with a privacy-first foundation, meaning your text remains fully under your control at all times.',
    introP2: 'Our philosophy is simple: Your words belong to you we do not collect, store, or analyze them.',
    introP3: 'This Privacy Policy explains how we handle information when you use our website and tools.',
    privacyByDesignTitle: '2. Privacy by Design (Local Processing)',
    privacyByDesignIntro: 'GPT CLEAN UP uses client-side processing, which means:',
    privacyByDesignList: [
      'All text cleaning and formatting operations occur directly in your browser.',
      'Your text never leaves your device.',
      'We do not send your input to any server.',
      'We do not store, log, or collect the content you paste into our tools.',
      'Your writing stays private at every step.',
    ],
    notCollectTitle: '3. Information We Do Not Collect',
    notCollectIntro: 'To be completely clear, GPT CLEAN UP does NOT collect:',
    notCollectList: [
      'text you paste into our tools',
      'uploaded documents',
      'personal messages',
      'drafts or writing samples',
      'user-generated content',
      'personal data such as name, address, phone number',
      'browsing content',
      'cookies related to your text input',
    ],
    notCollectOutro: 'We do not sell or share user text with anyone.',
    adsTitle: '4. Advertising & Cookies',
    adsIntro: 'GPT CLEAN UP is a free platform supported in part by third-party advertising networks such as Google AdSense.',
    adsLeadIn: 'This means:',
    adsList: [
      'Third-party vendors may use cookies or device identifiers to serve relevant ads.',
      'Google and its partners may use cookies (including the DoubleClick cookie) to deliver personalized or non-personalized ads.',
      'Cookies may track basic visit information (e.g., pages viewed) for ad delivery only.',
    ],
    adChoicesIntro: 'Your Choices: You can opt out of personalized advertising via:',
    adChoices: [
      { label: 'Google Ads Settings:', url: 'https://www.google.com/settings/ads' },
      { label: 'Network Advertising Initiative opt-out page:', url: 'https://www.networkadvertising.org/choices' },
    ],
    adChoicesOutro: 'Disabling cookies will not affect your ability to use GPT CLEAN UP tools.',
    securityTitle: '5. Data Security',
    securityIntro: 'We take privacy and security seriously:',
    securityList: [
      'All text processing happens locally on your device.',
      'Your input is never transmitted to our servers.',
      'Advertisements do not have access to your tool usage or text entries.',
      'We deliberately separate ads from tool functionality.',
    ],
    securityOutro:
      'Although no online system is 100% secure, our design ensures minimum exposure by keeping your content offline.',
    analyticsTitle: '6. Analytics',
    analyticsIntro:
      'To understand general site usage, we may use privacy-focused analytics that collect non-personal, high-level data (e.g., number of visitors, popular pages).',
    analyticsLeadIn: 'These analytics:',
    analyticsList: ['do not track individual users', 'do not store text inputs', 'do not collect personal data'],
    analyticsOutro: 'We use analytics only to improve the website experience.',
    childrenTitle: "7. Children's Privacy",
    childrenP1: 'GPT CLEAN UP is not designed for children under 13. We do not knowingly collect any information from children.',
    rightsTitle: '8. Your Rights & Controls',
    rightsIntro: 'Because we do not collect personal data from your tool usage, there is:',
    rightsList: ['nothing for us to access', 'nothing to modify', 'nothing to delete'],
    rightsP1: 'You maintain full ownership and control of your text at all times.',
    rightsLeadIn: 'You may still:',
    rightsActions: ['disable cookies in your browser', 'opt out of personalized ads', 'adjust privacy settings at any time'],
    updatesTitle: '9. Updates to This Privacy Policy',
    updatesP1:
      'We may revise this policy as we add tools, features, or advertising partners. Any updates will be reflected in the "Last Updated" date at the top of this page.',
    contactTitle: '10. Contact Us',
    contactP1: 'If you have any questions about this Privacy Policy, contact us at:',
    contactP2: 'support@gptcleanuptools.com',
    contactP3: 'We are happy to help with any privacy-related concerns.',
  },
  es: {
    metaTitle: 'Política de privacidad | GPTCLEANUP AI',
    metaDescription: 'Detalles de privacidad para las herramientas de GPT CLEAN UP.',
    title: 'Política de privacidad',
    updated: 'Última actualización: 7 de julio de 2023',
    introTitle: '1. Introducción',
    introP1:
      'Bienvenido a GPT CLEAN UP ("nosotros", "nuestro" o "nos"). Tu privacidad es extremadamente importante para nosotros. GPT CLEAN UP se construyó con una base de privacidad primero, lo que significa que tu texto permanece totalmente bajo tu control en todo momento.',
    introP2: 'Nuestra filosofía es simple: tus palabras te pertenecen; no las recopilamos, almacenamos ni analizamos.',
    introP3: 'Esta Política de privacidad explica cómo manejamos la información cuando usas nuestro sitio web y herramientas.',
    privacyByDesignTitle: '2. Privacidad por diseño (procesamiento local)',
    privacyByDesignIntro: 'GPT CLEAN UP utiliza procesamiento del lado del cliente, lo que significa:',
    privacyByDesignList: [
      'Todas las operaciones de limpieza y formato ocurren directamente en tu navegador.',
      'Tu texto nunca sale de tu dispositivo.',
      'No enviamos tu entrada a ningún servidor.',
      'No almacenamos, registramos ni recopilamos el contenido que pegas en nuestras herramientas.',
      'Tu escritura se mantiene privada en cada paso.',
    ],
    notCollectTitle: '3. Información que no recopilamos',
    notCollectIntro: 'Para ser totalmente claros, GPT CLEAN UP NO recopila:',
    notCollectList: [
      'texto que pegas en nuestras herramientas',
      'documentos cargados',
      'mensajes personales',
      'borradores o muestras de escritura',
      'contenido generado por usuarios',
      'datos personales como nombre, dirección o teléfono',
      'contenido de navegación',
      'cookies relacionadas con tu entrada de texto',
    ],
    notCollectOutro: 'No vendemos ni compartimos el texto de los usuarios con nadie.',
    adsTitle: '4. Publicidad y cookies',
    adsIntro: 'GPT CLEAN UP es una plataforma gratuita respaldada en parte por redes publicitarias de terceros como Google AdSense.',
    adsLeadIn: 'Esto significa:',
    adsList: [
      'Proveedores terceros pueden usar cookies o identificadores de dispositivo para servir anuncios relevantes.',
      'Google y sus socios pueden usar cookies (incluida la cookie DoubleClick) para mostrar anuncios personalizados o no personalizados.',
      'Las cookies pueden rastrear información básica de visita (por ejemplo, páginas vistas) solo para la entrega de anuncios.',
    ],
    adChoicesIntro: 'Tus opciones: puedes optar por no recibir publicidad personalizada a través de:',
    adChoices: [
      { label: 'Configuración de anuncios de Google:', url: 'https://www.google.com/settings/ads' },
      { label: 'Página de exclusión de Network Advertising Initiative:', url: 'https://www.networkadvertising.org/choices' },
    ],
    adChoicesOutro: 'Deshabilitar las cookies no afectará tu capacidad de usar las herramientas de GPT CLEAN UP.',
    securityTitle: '5. Seguridad de datos',
    securityIntro: 'Nos tomamos en serio la privacidad y la seguridad:',
    securityList: [
      'Todo el procesamiento de texto ocurre localmente en tu dispositivo.',
      'Tu entrada nunca se transmite a nuestros servidores.',
      'Los anuncios no tienen acceso a tu uso de herramientas ni a tus textos.',
      'Separamos deliberadamente los anuncios de la funcionalidad de las herramientas.',
    ],
    securityOutro:
      'Aunque ningún sistema en línea es 100% seguro, nuestro diseño garantiza una exposición mínima al mantener tu contenido fuera de línea.',
    analyticsTitle: '6. Analíticas',
    analyticsIntro:
      'Para entender el uso general del sitio, podemos usar analíticas enfocadas en privacidad que recopilan datos no personales de alto nivel (por ejemplo, número de visitantes, páginas populares).',
    analyticsLeadIn: 'Estas analíticas:',
    analyticsList: ['no rastrean usuarios individuales', 'no almacenan entradas de texto', 'no recopilan datos personales'],
    analyticsOutro: 'Usamos analíticas solo para mejorar la experiencia del sitio web.',
    childrenTitle: '7. Privacidad de menores',
    childrenP1: 'GPT CLEAN UP no está diseñado para niños menores de 13 años. No recopilamos información de niños a sabiendas.',
    rightsTitle: '8. Tus derechos y controles',
    rightsIntro: 'Como no recopilamos datos personales de tu uso de herramientas, no hay:',
    rightsList: ['nada a lo que podamos acceder', 'nada que modificar', 'nada que eliminar'],
    rightsP1: 'Mantienes plena propiedad y control de tu texto en todo momento.',
    rightsLeadIn: 'Aun así puedes:',
    rightsActions: ['deshabilitar cookies en tu navegador', 'optar por no recibir anuncios personalizados', 'ajustar la configuración de privacidad en cualquier momento'],
    updatesTitle: '9. Actualizaciones de esta política de privacidad',
    updatesP1:
      'Podemos revisar esta política a medida que añadimos herramientas, funciones o socios publicitarios. Cualquier actualización se reflejará en la fecha de "Última actualización" en la parte superior de esta página.',
    contactTitle: '10. Contacto',
    contactP1: 'Si tienes preguntas sobre esta Política de privacidad, contáctanos en:',
    contactP2: 'support@gptcleanuptools.com',
    contactP3: 'Estamos encantados de ayudar con cualquier duda relacionada con la privacidad.',
  },
};

export async function generateMetadata() {
  const { locale } = await getServerLocale();
  const content = CONTENT_BY_LOCALE[locale] ?? CONTENT_BY_LOCALE.en;
  return buildMeta({
    title: content.metaTitle,
    description: content.metaDescription,
    urlPath: '/privacy-policy',
  });
}

export default async function PrivacyPolicyPage() {
  const { locale } = await getServerLocale();
  const content = CONTENT_BY_LOCALE[locale] ?? CONTENT_BY_LOCALE.en;

  return (
    <article className="prose max-w-none prose-slate">
      <h1>{content.title}</h1>
      <p>{content.updated}</p>

      <h2>{content.introTitle}</h2>
      <p>{content.introP1}</p>
      <p>{content.introP2}</p>
      <p>{content.introP3}</p>

      <h2>{content.privacyByDesignTitle}</h2>
      <p>{content.privacyByDesignIntro}</p>
      <ul>
        {content.privacyByDesignList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>{content.notCollectTitle}</h2>
      <p>{content.notCollectIntro}</p>
      <ul>
        {content.notCollectList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>{content.notCollectOutro}</p>

      <h2>{content.adsTitle}</h2>
      <p>{content.adsIntro}</p>
      <p>{content.adsLeadIn}</p>
      <ul>
        {content.adsList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>{content.adChoicesIntro}</p>
      <ul>
        {content.adChoices.map((choice) => (
          <li key={choice.url}>
            {choice.label}{' '}
            <a href={choice.url} rel="noreferrer" target="_blank">
              {choice.url}
            </a>
          </li>
        ))}
      </ul>
      <p>{content.adChoicesOutro}</p>

      <h2>{content.securityTitle}</h2>
      <p>{content.securityIntro}</p>
      <ul>
        {content.securityList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>{content.securityOutro}</p>

      <h2>{content.analyticsTitle}</h2>
      <p>{content.analyticsIntro}</p>
      <p>{content.analyticsLeadIn}</p>
      <ul>
        {content.analyticsList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>{content.analyticsOutro}</p>

      <h2>{content.childrenTitle}</h2>
      <p>{content.childrenP1}</p>

      <h2>{content.rightsTitle}</h2>
      <p>{content.rightsIntro}</p>
      <ul>
        {content.rightsList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>{content.rightsP1}</p>
      <p>{content.rightsLeadIn}</p>
      <ul>
        {content.rightsActions.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>{content.updatesTitle}</h2>
      <p>{content.updatesP1}</p>

      <h2>{content.contactTitle}</h2>
      <p>{content.contactP1}</p>
      <p>
        <a href={`mailto:${content.contactP2}`}>{content.contactP2}</a>
      </p>
      <p>{content.contactP3}</p>
    </article>
  );
}
