export type Locale = 'it' | 'en';

export type PostContent = {
  title: string;
  excerpt: string;
  body: string[]; // paragraphs
};

export type Post = {
  slug: string;
  date: string;   // ISO
  readingMin: number;
  tag: string;
  content: Record<Locale, PostContent>;
};

export const posts: Post[] = [
  {
    slug: 'agenti-ai-pmi-italiane',
    date: '2026-04-10',
    readingMin: 6,
    tag: 'AI',
    content: {
      it: {
        title: 'Agenti AI per PMI italiane: dove iniziare davvero',
        excerpt:
          'Senza hype: quali sono i 3 use case di AI che ripagano l\'investimento in una PMI italiana nei primi 6 mesi.',
        body: [
          'Negli ultimi 18 mesi abbiamo visto centinaia di PMI italiane chiedersi "ma l\'AI mi serve?". La risposta onesta è: dipende. Ma tre casi d\'uso hanno un ROI misurabile quasi sempre.',
          '1. Knowledge base interna. Manuali tecnici, procedure, policy HR: un agente RAG addestrato sul tuo materiale taglia del 40-60% il tempo speso dai dipendenti a cercare informazioni. Setup: 2-3 settimane.',
          '2. Classificazione e smistamento di email/ticket. Un modello fine-tunato o un prompt ben costruito riesce a categorizzare richieste entranti con accuracy sopra il 90%. Impatto diretto sul lead time del customer service.',
          '3. Automazione di report ricorrenti. Estrarre dati, costruire narrazioni, generare slide: LLM + pipeline Make/n8n. Una volta costruito, scala a costo zero marginale.',
          'Il consiglio pragmatico: parti da un progetto pilota di 6-8 settimane su uno di questi tre, con KPI chiari. Se funziona, scala. Se no, impari qualcosa senza bruciare budget.'
        ]
      },
      en: {
        title: 'AI agents for Italian SMBs: where to actually start',
        excerpt:
          'No hype: the 3 AI use cases that pay back the investment in an Italian SMB within 6 months.',
        body: [
          'In the last 18 months we\'ve seen hundreds of Italian SMBs ask "do I really need AI?". The honest answer is: it depends. But three use cases show measurable ROI almost every time.',
          '1. Internal knowledge base. Tech manuals, procedures, HR policy: a RAG agent trained on your material cuts 40-60% of the time employees spend searching for info. Setup: 2-3 weeks.',
          '2. Email/ticket classification and routing. A fine-tuned model or a well-crafted prompt can categorize incoming requests with >90% accuracy. Direct impact on customer service lead time.',
          '3. Automation of recurring reports. Extract data, build narrative, generate slides: LLM + Make/n8n pipeline. Once built, scales at marginal cost zero.',
          'Pragmatic advice: start with a 6-8 week pilot on one of these three, with clear KPIs. If it works, scale. If not, you\'ve learned something without burning budget.'
        ]
      }
    }
  },
  {
    slug: 'next-vs-wordpress-2026',
    date: '2026-03-22',
    readingMin: 5,
    tag: 'Web',
    content: {
      it: {
        title: 'Next.js o WordPress nel 2026? La risposta non è scontata.',
        excerpt:
          'Il dibattito "modern stack vs CMS tradizionale" è più sfumato di quanto sembri. Ecco come lo guardiamo in 2erre.',
        body: [
          'WordPress muove ancora oltre il 40% del web. Next.js è il framework più usato dagli sviluppatori moderni. Chi ha ragione? Entrambi, per motivi diversi.',
          'WordPress vince quando: il cliente pubblica contenuti 3+ volte a settimana, ha un marketing team autonomo, non ha requisiti particolari di performance o custom UX, e vuole un ecosistema di plugin enorme. È ancora la scelta corretta per un blog editoriale o un sito istituzionale "classico".',
          'Next.js vince quando: serve un\'esperienza utente su misura, animazioni fluide, un\'app (non un sito), integrazioni custom con API proprietarie, o performance al top (Core Web Vitals perfetti). E quando la manutenzione viene fatta dagli sviluppatori, non dal marketing.',
          'Il pattern ibrido che stiamo vedendo sempre più spesso: Next.js come frontend + headless CMS (Sanity, Payload) per i contenuti editoriali. Ti dà il meglio dei due mondi, ma richiede un setup iniziale più pensato.',
          'Non c\'è risposta universale. C\'è la domanda giusta: chi pubblica i contenuti, con che frequenza, e quanto è custom l\'esperienza?'
        ]
      },
      en: {
        title: 'Next.js or WordPress in 2026? The answer isn\'t obvious.',
        excerpt:
          'The "modern stack vs traditional CMS" debate is more nuanced than it looks. How we frame it at 2erre.',
        body: [
          'WordPress still powers over 40% of the web. Next.js is the most used framework by modern developers. Who\'s right? Both, for different reasons.',
          'WordPress wins when: the client publishes content 3+ times a week, has an autonomous marketing team, has no special performance or custom UX requirements, and wants a huge plugin ecosystem. Still the right choice for an editorial blog or a classic corporate site.',
          'Next.js wins when: you need a tailored user experience, fluid animations, an app (not a site), custom integrations with proprietary APIs, or top performance (perfect Core Web Vitals). And when maintenance is done by developers, not marketing.',
          'The hybrid pattern we\'re seeing more and more: Next.js as frontend + headless CMS (Sanity, Payload) for editorial content. Best of both worlds, but requires a more deliberate initial setup.',
          'There\'s no universal answer. There\'s the right question: who publishes content, how often, and how custom is the experience?'
        ]
      }
    }
  },
  {
    slug: 'roadmap-mvp-6-settimane',
    date: '2026-02-28',
    readingMin: 4,
    tag: 'Product',
    content: {
      it: {
        title: 'Come mandiamo un MVP in produzione in 6 settimane',
        excerpt:
          'La roadmap concreta con cui lanciamo prodotti minimi con i nostri clienti. Settimana per settimana.',
        body: [
          'Settimana 1 — Discovery. Workshop di 2 giorni per validare il problema, definire 3-5 job-to-be-done, escludere feature non critiche. Output: brief di prodotto e design system minimo.',
          'Settimana 2-3 — Design + Foundations. Prototipo Figma interattivo + scelta stack (di default Next.js + Supabase). In parallelo setup CI/CD, repo, ambiente di staging.',
          'Settimana 4-5 — Sviluppo del core. Build solo delle funzionalità must-have. I nice-to-have vanno in backlog. Daily standup 15 minuti con il cliente.',
          'Settimana 6 — Beta chiusa + launch. Invito 20-30 utenti reali, raccogliamo feedback, sistemiamo i bug bloccanti, rilasciamo. Il giorno del launch è sempre un mercoledì.',
          'Cosa funziona: scope rigoroso, frequenza di comunicazione alta, zero meeting inutili. Cosa non funziona: provare a infilare "un\'ultima feature" prima del launch. È come un eppur-si-muove che ritarda tutto di 3 settimane. Lo abbiamo imparato sulla nostra pelle.'
        ]
      },
      en: {
        title: 'How we ship an MVP in 6 weeks',
        excerpt:
          'The concrete roadmap we use to launch minimum products with our clients. Week by week.',
        body: [
          'Week 1 — Discovery. 2-day workshop to validate the problem, define 3-5 jobs-to-be-done, exclude non-critical features. Output: product brief and minimal design system.',
          'Week 2-3 — Design + Foundations. Interactive Figma prototype + stack choice (default Next.js + Supabase). In parallel CI/CD setup, repo, staging environment.',
          'Week 4-5 — Core development. Only must-have features get built. Nice-to-haves go in the backlog. 15-min daily standup with the client.',
          'Week 6 — Closed beta + launch. We invite 20-30 real users, collect feedback, fix blockers, ship. Launch day is always a Wednesday.',
          'What works: strict scope, high communication frequency, zero useless meetings. What doesn\'t: trying to squeeze in "one last feature" before launch. It\'s a trap that delays things by 3 weeks. We\'ve learned this the hard way.'
        ]
      }
    }
  }
];

export function getPosts(locale: Locale) {
  return posts.map((p) => ({...p.content[locale], slug: p.slug, date: p.date, readingMin: p.readingMin, tag: p.tag}));
}

export function getPost(slug: string, locale: Locale) {
  const p = posts.find((x) => x.slug === slug);
  if (!p) return null;
  return {...p.content[locale], slug: p.slug, date: p.date, readingMin: p.readingMin, tag: p.tag};
}
