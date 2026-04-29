export type Locale = 'it' | 'en';

export type Section = {
  heading?: string;
  paragraphs: string[];
};

export type FAQ = {
  q: string;
  a: string;
};

export type PostContent = {
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  sections: Section[];
  faq?: FAQ[];
};

export type Post = {
  slug: string;
  date: string;
  readingMin: number;
  tag: string;
  content: Record<Locale, PostContent>;
};

export const posts: Post[] = [
  {
    slug: 'perche-avere-sito-web-2026',
    date: '2026-04-25',
    readingMin: 7,
    tag: 'Web',
    content: {
      it: {
        title: 'Perché avere un sito web nel 2026 (anche nell\'era dell\'AI)',
        excerpt:
          'Con ChatGPT, Gemini e Perplexity che rispondono al posto di Google, il sito web sembra meno utile. È esattamente il contrario: ecco perché.',
        metaTitle: 'Perché avere un sito web nel 2026 | 2erre',
        metaDescription:
          'Sito web nel 2026: ancora fondamentale per essere indicizzati da Google, citati da ChatGPT e generare lead. Guida pratica per imprese italiane.',
        keywords: [
          'sito web 2026',
          'sito web aziendale',
          'importanza sito web',
          'sito web PMI',
          'presenza online',
          'realizzazione sito web Italia'
        ],
        sections: [
          {
            paragraphs: [
              'Negli ultimi due anni abbiamo sentito ripetere la stessa domanda da decine di imprenditori italiani: "Ma con ChatGPT che risponde a tutto, ho ancora bisogno di un sito web?". La risposta è sì, e in modo persino più strategico di prima. Il sito è la fonte primaria che gli LLM e i motori di ricerca usano per costruire le risposte: niente sito significa non esistere nelle risposte generate dall\'intelligenza artificiale.'
            ]
          },
          {
            heading: 'Il sito è la tua "scheda" leggibile dalle AI',
            paragraphs: [
              'ChatGPT, Gemini, Perplexity e Google AI Overviews non inventano informazioni: le pescano dal web indicizzato. Se la tua azienda non ha un sito strutturato — con servizi, casi studio, FAQ, dati di contatto — semplicemente non comparirai mai nelle loro risposte. Le directory non bastano: gli LLM premiano siti con contenuto profondo, autoritativo, aggiornato.',
              'Avere un sito ottimizzato significa essere citabile sia da Google sia dalle AI generative. Sono due canali distinti ma alimentati dalla stessa base: il tuo dominio.'
            ]
          },
          {
            heading: 'Asset di proprietà vs piattaforme in affitto',
            paragraphs: [
              'Instagram può cambiare algoritmo domani. LinkedIn può limitare la portata organica. Il sito è l\'unico canale digitale di tua proprietà: nessuna piattaforma può deciderne le regole. Per una PMI che investe a lungo termine, il sito è l\'unico investimento difendibile in marketing digitale.',
              'In più: dati, contatti raccolti, traffico organico, autorità di dominio — tutto si capitalizza nel tempo se costruito su una base che possiedi.'
            ]
          },
          {
            heading: 'Qualifica i lead 24/7 senza intervento umano',
            paragraphs: [
              'Un sito ben progettato non è una brochure online: è il primo commerciale dell\'azienda. Un visitatore che arriva alle 23:30 di domenica può leggere casi studio, capire se sei la realtà giusta per lui, prenotare una call, iscriversi alla newsletter. Tutto questo accade mentre dormi.',
              'Nei progetti che seguiamo in 2erre, dopo una rifondazione del sito vediamo regolarmente +30-60% di lead qualificati nei primi 90 giorni — non perché il traffico esplode, ma perché il sito qualifica meglio.'
            ]
          },
          {
            heading: 'Cosa rende un sito "lead-ready" nel 2026',
            paragraphs: [
              'Velocità di caricamento sotto i 2 secondi (Core Web Vitals verdi). Contenuti specifici per ogni servizio, non genericismi. Casi studio con numeri reali. FAQ strutturate (Schema.org) per essere lette dalle AI. Mobile-first vero, non responsive di facciata. Sicurezza HTTPS, conformità GDPR, gestione cookie corretta.',
              'Sono dettagli tecnici che fanno la differenza tra un sito che esiste e un sito che porta clienti.'
            ]
          },
          {
            heading: 'Quando NON ti serve un sito',
            paragraphs: [
              'Per onestà intellettuale: se vendi un solo prodotto a un mercato verticale che ti conosce per passaparola, e non vuoi crescere, puoi cavartela con una landing. Per chiunque altro — agenzia, studio professionale, software house, e-commerce, ristoratore — non avere un sito serio nel 2026 significa cedere quote di mercato a chi ce l\'ha.'
            ]
          }
        ],
        faq: [
          {
            q: 'Quanto costa un sito web professionale nel 2026?',
            a: 'Per una PMI italiana il range realistico va da 4.000€ per un sito vetrina ben fatto a 25.000€+ per progetti custom con integrazioni, CRM e ottimizzazioni avanzate. Sotto i 2.000€ è quasi sempre un template senza strategia.'
          },
          {
            q: 'Meglio WordPress o un sito custom in Next.js?',
            a: 'WordPress va bene se pubblichi articoli ogni settimana e hai un team marketing autonomo. Next.js conviene quando vuoi performance al massimo, integrazioni custom e un\'esperienza utente differenziante.'
          },
          {
            q: 'Quanto tempo serve per realizzare un sito?',
            a: 'Un sito vetrina ben pensato richiede 6-10 settimane: 1-2 di discovery, 2-3 di design, 3-4 di sviluppo e testing. I siti "fatti in 2 settimane" di solito sono template assemblati senza strategia.'
          }
        ]
      },
      en: {
        title: 'Why you still need a website in 2026 (even in the AI era)',
        excerpt:
          'With ChatGPT, Gemini and Perplexity answering instead of Google, websites seem less useful. The opposite is true — here\'s why.',
        metaTitle: 'Why you need a website in 2026 | 2erre',
        metaDescription:
          'A website in 2026 is still essential to be indexed by Google, cited by ChatGPT, and generate leads. Practical guide for businesses.',
        keywords: ['website 2026', 'business website', 'why a website', 'online presence', 'lead generation website'],
        sections: [
          {paragraphs: ['Over the last two years we\'ve heard the same question from dozens of business owners: "Do I still need a website if ChatGPT answers everything?". The answer is yes — and more strategically than before. Your website is the primary source LLMs and search engines use to build their answers. No website means not existing in AI-generated responses.']},
          {heading: 'Your website is your AI-readable profile', paragraphs: ['ChatGPT, Gemini, Perplexity and Google AI Overviews don\'t invent information: they pull from the indexed web. If your company has no structured website — services, case studies, FAQs, contact data — you simply won\'t appear in their answers. Directories aren\'t enough: LLMs reward sites with deep, authoritative, updated content.', 'An optimized site means being citable both by Google and by generative AIs.']},
          {heading: 'Owned asset vs rented platforms', paragraphs: ['Instagram can change its algorithm tomorrow. LinkedIn can throttle organic reach. Your website is the only digital channel you actually own.', 'Plus: data, captured contacts, organic traffic, domain authority — everything compounds when built on a foundation you own.']},
          {heading: 'Qualifies leads 24/7 with no human in the loop', paragraphs: ['A well-designed site isn\'t an online brochure — it\'s your first salesperson. A visitor arriving at 11:30pm on a Sunday can read case studies, judge fit, book a call, subscribe.', 'In our 2erre projects, a website rebuild typically delivers +30-60% qualified leads in the first 90 days.']},
          {heading: 'What makes a website "lead-ready" in 2026', paragraphs: ['Sub-2-second load time (green Core Web Vitals). Service-specific content. Case studies with real numbers. Structured FAQs (Schema.org) for AI consumption. True mobile-first. HTTPS, GDPR, proper cookie handling.']},
          {heading: 'When you don\'t need one', paragraphs: ['If you sell one product to a vertical market that already knows you by word of mouth and you don\'t want to grow, a landing page is enough. For anyone else, having no serious website in 2026 means handing market share to those who do.']}
        ],
        faq: [
          {q: 'How much does a professional website cost in 2026?', a: 'For an SMB, realistic range is €4k for a well-built brochure site up to €25k+ for custom projects. Below €2k is usually a template with no strategy.'},
          {q: 'WordPress or custom Next.js?', a: 'WordPress fits when you publish weekly with an autonomous marketing team. Next.js wins when you need top performance and custom integrations.'},
          {q: 'How long does it take?', a: 'A well-designed brochure site needs 6-10 weeks.'}
        ]
      }
    }
  },
  {
    slug: 'seo-geo-farsi-trovare-google-chatgpt',
    date: '2026-04-22',
    readingMin: 8,
    tag: 'SEO',
    content: {
      it: {
        title: 'SEO + GEO: come farsi trovare su Google E su ChatGPT nel 2026',
        excerpt: 'La SEO classica non basta più. La GEO (Generative Engine Optimization) è la nuova disciplina per essere citati dalle AI.',
        metaTitle: 'SEO e GEO: Google e ChatGPT | 2erre',
        metaDescription: 'Guida completa a SEO e Generative Engine Optimization (GEO): farsi indicizzare su Google e citare da ChatGPT, Perplexity e AI Overviews.',
        keywords: ['SEO 2026', 'GEO generative engine optimization', 'farsi trovare su ChatGPT', 'AI Overviews Google', 'SEO Italia'],
        sections: [
          {paragraphs: ['Fino a due anni fa "essere primo su Google" era l\'obiettivo. Oggi la metà delle ricerche informative non genera più un click: si esauriscono nelle AI Overviews di Google o nelle risposte di ChatGPT, Gemini, Perplexity. La domanda non è più "come arrivo in prima pagina", ma "come faccio a essere la fonte che le AI citano".']},
          {heading: 'Cos\'è la GEO (Generative Engine Optimization)', paragraphs: ['La GEO è l\'insieme di tecniche per ottimizzare i contenuti affinché vengano selezionati, citati e linkati dai motori generativi. Non sostituisce la SEO: la estende.', 'In pratica: contenuti che rispondono in modo diretto, dati strutturati, citazioni a fonti autorevoli, FAQ esplicite, schema markup completo, autorevolezza di dominio (E-E-A-T).']},
          {heading: 'Le 7 leve operative per la GEO', paragraphs: ['1. Risposta diretta in apertura: gli LLM premiano i contenuti che rispondono nei primi 100 caratteri.', '2. Struttura H2/H3 interrogativa.', '3. Statistiche e dati con fonte.', '4. Schema.org Article + FAQPage + Organization.', '5. Citazioni e link a fonti autorevoli.', '6. Aggiornamento periodico con data visibile.', '7. Autorevolezza off-site: menzioni, backlink, profili coerenti.']},
          {heading: 'Cosa resta della SEO classica', paragraphs: ['Tutto. Google indicizza ancora, e le AI Overviews di Google pescano da Google. Ricerca keyword, on-page, link building, performance, mobile-first, sitemap — tutto regolare.', 'La SEO da sola ti porta in SERP ma non nelle risposte AI. Servono entrambe.']},
          {heading: 'Come misurare i risultati GEO', paragraphs: ['Strumenti come Profound, Otterly, AI Search Tracker monitorano quante volte il tuo brand viene citato. La metrica nuova è "share of model".', 'Si aggiunge il traffico referral da chat.openai.com, perplexity.ai, gemini.google.com.']},
          {heading: 'Errori comuni che azzerano la GEO', paragraphs: ['Contenuti 100% AI senza verifica umana. Paywall su contenuti tecnici. Architettura JavaScript-only senza SSR. Cookie wall che bloccano il rendering. Nessun schema markup.']}
        ],
        faq: [
          {q: 'GEO sostituisce la SEO?', a: 'No. La GEO si aggiunge alla SEO. I motori generativi si nutrono di indici tradizionali per costruire le loro risposte.'},
          {q: 'Quanto tempo serve per vedere risultati GEO?', a: 'I primi segnali arrivano in 60-120 giorni se il contenuto è già autoritativo. Da zero su un dominio nuovo, 6-9 mesi.'},
          {q: 'Posso fare GEO con un sito WordPress?', a: 'Sì. È soprattutto strategia di contenuto e schema markup, applicabile su qualsiasi piattaforma.'}
        ]
      },
      en: {
        title: 'SEO + GEO: getting found on Google AND ChatGPT in 2026',
        excerpt: 'Classic SEO is no longer enough. GEO is the new discipline for AI citations.',
        metaTitle: 'SEO + GEO: Google and ChatGPT | 2erre',
        metaDescription: 'Complete guide to SEO and Generative Engine Optimization (GEO): get indexed by Google and cited by ChatGPT, Perplexity and AI Overviews.',
        keywords: ['SEO 2026', 'GEO', 'ChatGPT SEO', 'AI Overviews', 'AI search optimization'],
        sections: [
          {paragraphs: ['Two years ago "rank first on Google" was the goal. Today half of informational searches no longer produce a click: they\'re absorbed by AI Overviews and chat answers.']},
          {heading: 'What is GEO?', paragraphs: ['GEO optimizes content so it gets selected, cited and linked by generative engines. It extends SEO, doesn\'t replace it.', 'In practice: direct answers, structured data, citations, FAQs, schema markup, E-E-A-T.']},
          {heading: '7 operational levers', paragraphs: ['1. Direct answer in first 100 chars. 2. Question-shaped H2/H3. 3. Sourced statistics. 4. Article + FAQPage + Organization schema. 5. Outbound citations. 6. Periodic updates. 7. Off-site authority.']},
          {heading: 'Classic SEO still matters', paragraphs: ['Google still indexes, AI Overviews pull from Google. Keywords, on-page, link building, Core Web Vitals — all required.']},
          {heading: 'Measuring GEO', paragraphs: ['Profound, Otterly, AI Search Tracker. New metric: "share of model". Plus referral traffic from chat.openai.com, perplexity.ai, gemini.google.com.']},
          {heading: 'GEO killers', paragraphs: ['Pure AI content. Paywalls. JS-only without SSR. Cookie walls. No schema.']}
        ],
        faq: [
          {q: 'Does GEO replace SEO?', a: 'No, it sits on top.'},
          {q: 'How long to results?', a: '60-120 days for first signals; 6-9 months from scratch.'},
          {q: 'Works on WordPress?', a: 'Yes — it\'s mainly content strategy and schema.'}
        ]
      }
    }
  },
  {
    slug: 'farsi-citare-da-chatgpt-perplexity',
    date: '2026-04-18',
    readingMin: 6,
    tag: 'GEO',
    content: {
      it: {
        title: 'Come farsi citare da ChatGPT, Perplexity e Google AI Overviews',
        excerpt: 'Le regole concrete per diventare la fonte che le AI generative scelgono quando rispondono.',
        metaTitle: 'Farsi citare da ChatGPT e Perplexity | 2erre',
        metaDescription: 'Tecniche pratiche per essere citati da ChatGPT, Perplexity, Gemini e Google AI Overviews. Strategia GEO per imprese.',
        keywords: ['citazioni ChatGPT', 'Perplexity SEO', 'AI Overviews', 'GEO Italia', 'farsi trovare AI'],
        sections: [
          {paragraphs: ['Le AI generative non scelgono fonti a caso. Selezionano contenuti che rispettano pattern molto specifici. Quelli che funzionano davvero, non i consigli generici.']},
          {heading: '1. Risposta secca nei primi due paragrafi', paragraphs: ['Gli LLM hanno una context window limitata per ogni fonte. Apri sempre con definizione chiara + 2-3 punti chiave.']},
          {heading: '2. Liste, tabelle, dati: cibo per LLM', paragraphs: ['I motori generativi parsificano meglio strutture esplicite che paragrafi narrativi. Tabelle, liste numerate, statistiche con fonte sono più "estraibili".']},
          {heading: '3. Schema markup, sempre', paragraphs: ['Article, FAQPage, HowTo, Organization, Product, BreadcrumbList. Invisibile all\'utente, primo segnale che gli LLM leggono.']},
          {heading: '4. Citazioni in uscita', paragraphs: ['Linkare a fonti autorevoli aumenta la fiducia algoritmica. Le AI imitano le AI.']},
          {heading: '5. Frequenza e freschezza', paragraphs: ['Aggiorna gli articoli chiave ogni 6-9 mesi, modifica la data visibile, aggiungi sezioni.']},
          {heading: '6. Brand mention off-site', paragraphs: ['Forum specializzati, podcast, articoli di terzi: gli LLM costruiscono il tuo knowledge graph anche da queste menzioni.']}
        ],
        faq: [
          {q: 'Posso pagare per essere citato?', a: 'No. Al momento OpenAI, Anthropic e Google non offrono inserzioni pagate nelle risposte.'},
          {q: 'Quanto pesa il dominio rispetto al singolo articolo?', a: 'Molto. Un articolo medio su un dominio autoritativo viene citato più di un articolo eccellente su un dominio nuovo.'}
        ]
      },
      en: {
        title: 'How to get cited by ChatGPT, Perplexity and Google AI Overviews',
        excerpt: 'Concrete rules for becoming the source AIs pick.',
        metaTitle: 'Get cited by ChatGPT and Perplexity | 2erre',
        metaDescription: 'Practical techniques to be cited by ChatGPT, Perplexity, Gemini and Google AI Overviews.',
        keywords: ['ChatGPT citations', 'Perplexity SEO', 'AI Overviews', 'GEO'],
        sections: [
          {paragraphs: ['Generative AIs follow specific patterns. Here are the ones that work.']},
          {heading: '1. Direct answer in two paragraphs', paragraphs: ['Limited context window per source. Open with definition + 2-3 key points.']},
          {heading: '2. Lists, tables, data', paragraphs: ['Explicit structures parse better than prose.']},
          {heading: '3. Schema markup, always', paragraphs: ['Article, FAQPage, HowTo, Organization, Product, BreadcrumbList.']},
          {heading: '4. Outbound citations', paragraphs: ['Linking authoritative sources increases algorithmic trust.']},
          {heading: '5. Frequency and freshness', paragraphs: ['Update every 6-9 months, refresh date.']},
          {heading: '6. Off-site brand mentions', paragraphs: ['Forums, podcasts, third-party articles feed your knowledge graph.']}
        ],
        faq: [
          {q: 'Can I pay to be cited?', a: 'No. Citations are algorithmic.'},
          {q: 'Domain vs article?', a: 'Domain matters a lot — average article on authoritative domain beats excellent article on new domain.'}
        ]
      }
    }
  },
  {
    slug: 'automatizzare-processi-aziendali-ai',
    date: '2026-04-15',
    readingMin: 7,
    tag: 'AI',
    content: {
      it: {
        title: 'Automatizzare i processi aziendali con AI: da dove partire davvero',
        excerpt: 'La maggior parte dei progetti AI fallisce per scelta sbagliata del primo use case. Ecco il framework che usiamo in 2erre.',
        metaTitle: 'Automatizzare processi con AI | 2erre',
        metaDescription: 'Come scegliere il primo processo da automatizzare con AI: framework, esempi reali e ROI realistico per PMI italiane.',
        keywords: ['automazione processi AI', 'AI per imprese', 'workflow automation', 'agenti AI azienda', 'digitalizzazione PMI'],
        sections: [
          {paragraphs: ['Il 70% dei progetti AI in azienda non arriva mai in produzione. Non per limiti tecnologici: per scelta sbagliata del primo processo.']},
          {heading: 'Il framework "Volume × Ripetitività × Tolleranza errore"', paragraphs: ['Un buon candidato ha alto volume, alta ripetitività, tolleranza all\'errore non zero. Manca anche solo una delle tre? Processo sbagliato.', 'Funzionano: classificazione email, estrazione dati da fatture, bozze di contratti standard, ricerca info in manuali interni, sintesi di call commerciali.', 'Falliscono: decisioni mediche critiche, calcolo paghe (zero tolleranza errore), processi una-tantum strategici.']},
          {heading: 'I 5 use case con miglior ROI per PMI', paragraphs: ['1. Customer service triage: -40-60% lead time.', '2. Knowledge base interna con RAG: -50% tempo ricerca info.', '3. Estrazione dati da documenti.', '4. Lead scoring e qualificazione.', '5. Generazione contenuti operativi: descrizioni prodotto, bozze proposte, summary riunioni.']},
          {heading: 'Make, n8n, Zapier o codice custom?', paragraphs: ['Per il 70% degli use case PMI, no-code/low-code basta. Codice custom solo per integrazioni proprietarie complesse, volumi >50k esecuzioni/mese, requisiti security/compliance specifici.']},
          {heading: 'Errori da evitare nei primi 6 mesi', paragraphs: ['Automatizzare un processo che neanche gli umani capiscono. Saltare lo "shadow mode". Scegliere il modello in base alla moda. Sottovalutare il costo di osservabilità.']},
          {heading: 'KPI da misurare dal giorno uno', paragraphs: ['Tempo medio per richiesta. Costo per esecuzione. Tasso di intervento umano. Soddisfazione utente. ROI mensile.']}
        ],
        faq: [
          {q: 'Quanto costa automatizzare un processo?', a: 'Per una PMI: 8-25k€ di setup + 200-1.500€/mese. ROI tipico in 4-9 mesi.'},
          {q: 'Devo cambiare i miei sistemi?', a: 'Quasi mai. Le automazioni AI moderne si innestano sui gestionali esistenti via API.'}
        ]
      },
      en: {
        title: 'Automating business processes with AI: where to actually start',
        excerpt: 'Most AI projects fail because of the wrong first use case.',
        metaTitle: 'Automating business processes with AI | 2erre',
        metaDescription: 'How to choose the first process to automate with AI: framework, examples, ROI for SMBs.',
        keywords: ['AI process automation', 'AI for SMB', 'workflow automation', 'AI agents'],
        sections: [
          {paragraphs: ['70% of corporate AI projects never reach production — wrong first-process selection.']},
          {heading: 'Volume × Repetition × Error tolerance', paragraphs: ['Good candidates: high volume, high repetition, non-zero error tolerance.', 'Works: customer triage, invoice extraction, contract drafts, internal manual search.', 'Fails: critical medical decisions, payroll, strategic one-offs.']},
          {heading: '5 highest-ROI use cases', paragraphs: ['1. Customer service triage. 2. Internal RAG KB. 3. Document extraction. 4. Lead scoring. 5. Operational content generation.']},
          {heading: 'Make, n8n, Zapier or custom?', paragraphs: ['No-code covers 70%. Custom only for proprietary integrations, scale, specific compliance.']},
          {heading: 'Mistakes in first 6 months', paragraphs: ['Automating processes humans don\'t understand. Skipping shadow mode. Picking models by hype. Underestimating observability.']},
          {heading: 'KPIs from day one', paragraphs: ['Time per request, cost per execution, human intervention rate, satisfaction, monthly ROI.']}
        ],
        faq: [
          {q: 'Cost?', a: 'SMB: €8-25k setup + €200-1,500/month. ROI 4-9 months.'},
          {q: 'Replace existing systems?', a: 'Almost never. Modern AI sits on top via API.'}
        ]
      }
    }
  },
  {
    slug: 'agenti-ai-pmi-italiane',
    date: '2026-04-10',
    readingMin: 6,
    tag: 'AI',
    content: {
      it: {
        title: 'Agenti AI per PMI italiane: dove iniziare davvero',
        excerpt: 'Senza hype: i 3 use case di agenti AI che ripagano l\'investimento in una PMI italiana nei primi 6 mesi.',
        metaTitle: 'Agenti AI per PMI italiane | 2erre',
        metaDescription: 'Agenti AI per PMI: 3 use case con ROI provato in 6 mesi. Esempi reali, costi, tempi di setup.',
        keywords: ['agenti AI', 'PMI italiane AI', 'AI agents', 'automazione AI', 'RAG aziendale'],
        sections: [
          {paragraphs: ['Tre casi d\'uso hanno ROI misurabile quasi sempre nelle PMI italiane.']},
          {heading: '1. Knowledge base interna con RAG', paragraphs: ['Manuali, procedure, policy HR: un agente RAG taglia del 40-60% il tempo speso a cercare informazioni. Setup 2-3 settimane. 6-12k€ + 200-500€/mese.']},
          {heading: '2. Classificazione e smistamento email/ticket', paragraphs: ['Categorizzazione richieste con accuracy >90%. Impatto diretto sul lead time del customer service.']},
          {heading: '3. Automazione di report ricorrenti', paragraphs: ['LLM + Make/n8n. Una volta costruito, scala a costo marginale zero.']},
          {heading: 'Il consiglio pragmatico', paragraphs: ['Pilota 6-8 settimane su uno dei tre, KPI chiari. Mai partire da progetti a 12 mesi: il primo successo deve arrivare in trimestre.']}
        ],
        faq: [
          {q: 'Cosa serve per iniziare?', a: 'Processo definito, dati accessibili, budget pilota 8-15k€, persona referente.'},
          {q: 'I dati sono al sicuro?', a: 'Con architetture corrette (RAG su infrastruttura europea, no-training) sì.'}
        ]
      },
      en: {
        title: 'AI agents for Italian SMBs: where to actually start',
        excerpt: 'No hype: 3 AI agent use cases that pay back within 6 months.',
        metaTitle: 'AI agents for SMBs | 2erre',
        metaDescription: 'AI agents for SMBs: 3 use cases with proven ROI in 6 months.',
        keywords: ['AI agents', 'AI for SMB', 'RAG enterprise'],
        sections: [
          {paragraphs: ['Three cases show measurable ROI almost every time.']},
          {heading: '1. Internal RAG KB', paragraphs: ['Cuts info-search time by 40-60%. Setup 2-3 weeks. €6-12k + €200-500/month.']},
          {heading: '2. Email/ticket classification', paragraphs: ['>90% accuracy. Direct impact on CS lead time.']},
          {heading: '3. Recurring report automation', paragraphs: ['LLM + Make/n8n. Marginal cost zero at scale.']},
          {heading: 'Pragmatic advice', paragraphs: ['6-8 week pilot, clear KPIs.']}
        ],
        faq: [
          {q: 'What to start?', a: 'Defined process, accessible data, €8-15k pilot, internal lead.'},
          {q: 'Data safe?', a: 'With EU-hosted RAG and no-training clauses, yes.'}
        ]
      }
    }
  },
  {
    slug: 'gdpr-ai-privacy-aziende',
    date: '2026-04-08',
    readingMin: 8,
    tag: 'Privacy',
    content: {
      it: {
        title: 'GDPR e AI: come usare l\'intelligenza artificiale senza violare la privacy',
        excerpt: 'Tra GDPR, AI Act europeo e dati dei clienti, le aziende italiane navigano nel buio. La mappa pratica.',
        metaTitle: 'GDPR e AI: privacy aziende | 2erre',
        metaDescription: 'GDPR e AI: come usare ChatGPT, Copilot e modelli AI senza violare la privacy. DPIA, basi giuridiche, fornitori.',
        keywords: ['GDPR AI', 'AI Act', 'privacy aziendale', 'ChatGPT GDPR', 'protezione dati AI'],
        sections: [
          {paragraphs: ['Il 60% delle aziende italiane usa già ChatGPT in modo informale, senza valutazioni privacy. È una bomba a orologeria.']},
          {heading: 'I 3 livelli di rischio privacy con l\'AI', paragraphs: ['Livello 1 — Tool pubblici (ChatGPT free, Gemini consumer): rischio alto, dati possibilmente usati per training.', 'Livello 2 — Versioni enterprise (ChatGPT Enterprise, Copilot M365, Claude for Work): rischio medio, no-training e residenza UE.', 'Livello 3 — Self-hosted o API con clausole sicure su infrastruttura UE: rischio basso.']},
          {heading: 'DPIA: quando è obbligatoria', paragraphs: ['Quando l\'AI tratta categorie particolari, prende decisioni con effetti significativi (HR, credito), monitora sistematicamente, o usa nuove tecnologie su larga scala.']},
          {heading: 'Basi giuridiche valide', paragraphs: ['Legittimo interesse con bilanciamento documentato, esecuzione di un contratto, consenso esplicito. Mai assumere "consenso generico".']},
          {heading: 'AI Act: cosa cambia da agosto 2026', paragraphs: ['4 livelli di rischio. La maggior parte degli usi cade in "rischio limitato" con obblighi di trasparenza.']},
          {heading: 'Checklist pratica', paragraphs: ['1. Mappa quali tool AI usano i tuoi dipendenti. 2. Adotta una policy interna AI. 3. Scegli fornitori con DPA + no-training + UE. 4. DPIA prima del go-live. 5. Forma le persone.']}
        ],
        faq: [
          {q: 'Posso usare ChatGPT con dati di clienti?', a: 'Solo Enterprise/Team con DPA firmato e no-training. Mai versione free.'},
          {q: 'Devo dichiarare ai clienti che uso AI?', a: 'Sì in molti casi. L\'AI Act richiede trasparenza.'}
        ]
      },
      en: {
        title: 'GDPR and AI: using AI without breaching privacy',
        excerpt: 'GDPR, EU AI Act and customer data: SMBs are flying blind.',
        metaTitle: 'GDPR and AI | 2erre',
        metaDescription: 'GDPR and AI: how to use ChatGPT and Copilot without breaching privacy. DPIA, legal bases.',
        keywords: ['GDPR AI', 'AI Act', 'business privacy'],
        sections: [
          {paragraphs: ['60% of Italian companies use ChatGPT informally with no privacy assessment.']},
          {heading: '3 risk levels', paragraphs: ['L1 consumer tools: high. L2 enterprise: medium with no-training. L3 self-hosted/EU: low.']},
          {heading: 'DPIA: when mandatory', paragraphs: ['Special categories, significant decisions, systematic monitoring, new tech at scale.']},
          {heading: 'Valid legal bases', paragraphs: ['Legitimate interest, contract performance, explicit consent.']},
          {heading: 'AI Act from Aug 2026', paragraphs: ['4 risk levels. Most uses are limited risk with transparency duties.']},
          {heading: 'Checklist', paragraphs: ['Inventory, policy, vendors with DPA + no-training + EU, DPIA before go-live, train people.']}
        ],
        faq: [
          {q: 'ChatGPT with customer data?', a: 'Enterprise/Team with DPA only.'},
          {q: 'Disclose AI to customers?', a: 'Often yes — AI Act transparency.'}
        ]
      }
    }
  },
  {
    slug: 'digitalizzazione-pmi-italia-2026',
    date: '2026-04-05',
    readingMin: 7,
    tag: 'Digital',
    content: {
      it: {
        title: 'Digitalizzazione delle PMI italiane nel 2026: roadmap concreta',
        excerpt: 'Non parliamo di trasformazione digitale astratta. I 6 passi che fanno la differenza in un\'azienda da 10-200 persone.',
        metaTitle: 'Digitalizzazione PMI 2026 | 2erre',
        metaDescription: 'Digitalizzazione PMI italiane 2026: roadmap pratica in 6 passi, costi reali, errori da evitare.',
        keywords: ['digitalizzazione PMI', 'trasformazione digitale', 'PMI 2026', 'PNRR digitale'],
        sections: [
          {paragraphs: ['Per noi digitalizzazione significa una cosa sola: ridurre il numero di Excel, post-it e telefonate necessari per far funzionare l\'azienda.']},
          {heading: 'Step 1 — Audit dei processi reali', paragraphs: ['I processi documentati raramente coincidono con quelli reali. 2-3 settimane di osservazione e interviste.']},
          {heading: 'Step 2 — Single source of truth', paragraphs: ['Prima di automatizzare, consolida. CRM unico, gestionale unico, storage condiviso.']},
          {heading: 'Step 3 — Sito web che converte', paragraphs: ['Il sito è il primo punto di contatto. Investi qui prima del marketing aggressivo.']},
          {heading: 'Step 4 — Automazioni mirate', paragraphs: ['Make/n8n + integrazioni gestionali. Ogni automazione con caso d\'uso preciso.']},
          {heading: 'Step 5 — AI dove ha senso', paragraphs: ['Solo dopo aver consolidato dati e processi. AI su processi rotti è AI rotta.']},
          {heading: 'Step 6 — Cultura e formazione', paragraphs: ['Il 50% del successo è qui. Formazione continua, non workshop una tantum.']}
        ],
        faq: [
          {q: 'Quanto dura un percorso completo?', a: 'PMI 30-100 persone: 12-18 mesi per la prima ondata.'},
          {q: 'Bandi PNRR ancora attivi?', a: 'Alcuni filoni nel 2026 (voucher digitalizzazione, transizione 5.0). Verifica con consulente.'}
        ]
      },
      en: {
        title: 'SMB digitalization in 2026: concrete roadmap',
        excerpt: 'The 6 steps that move the needle in a 10-200 person company.',
        metaTitle: 'SMB digitalization 2026 | 2erre',
        metaDescription: 'SMB digitalization 2026: practical 6-step roadmap, real costs, mistakes to avoid.',
        keywords: ['SMB digitalization', 'digital transformation'],
        sections: [
          {paragraphs: ['Digitalization means: reducing Excels, post-its and phone calls needed to run the company.']},
          {heading: 'Step 1 — Real process audit', paragraphs: ['Documented processes rarely match reality.']},
          {heading: 'Step 2 — Single source of truth', paragraphs: ['Consolidate before automating.']},
          {heading: 'Step 3 — Website that converts', paragraphs: ['First touchpoint. Invest here first.']},
          {heading: 'Step 4 — Targeted automations', paragraphs: ['Make/n8n + ERP integrations.']},
          {heading: 'Step 5 — AI where it fits', paragraphs: ['Only after consolidation. AI on broken processes is broken AI.']},
          {heading: 'Step 6 — Culture and training', paragraphs: ['50% of success. Continuous training.']}
        ],
        faq: [{q: 'How long?', a: '12-18 months for first wave in a 30-100 person SMB.'}]
      }
    }
  },
  {
    slug: 'local-seo-google-business-profile-2026',
    date: '2026-04-02',
    readingMin: 6,
    tag: 'SEO',
    content: {
      it: {
        title: 'Local SEO 2026: Google Business Profile e oltre',
        excerpt: 'Per ristoranti, studi professionali e attività locali, dominare la ricerca geo-localizzata vale più di mille campagne.',
        metaTitle: 'Local SEO 2026 | 2erre',
        metaDescription: 'Local SEO 2026: ottimizzare Google Business Profile, recensioni, citazioni e farsi trovare nelle ricerche "vicino a me".',
        keywords: ['local SEO', 'Google Business Profile', 'SEO locale', 'vicino a me'],
        sections: [
          {paragraphs: ['Il 46% delle ricerche su Google ha intento locale. Per chi vende servizi sul territorio, presidiare la SERP locale vale più di qualsiasi altra forma di marketing.']},
          {heading: 'Google Business Profile: i campi che pochi compilano', paragraphs: ['Servizi specifici, attributi, foto categorizzate, prodotti con prezzo, post settimanali, FAQ. I profili completi convertono 7x.']},
          {heading: 'Recensioni: la moneta della local SEO', paragraphs: ['Sotto 25 recensioni recenti sei invisibile. Sopra 100 con media >4.4, vinci la SERP.']},
          {heading: 'Citazioni NAP coerenti', paragraphs: ['Nome, Indirizzo, Telefono identici su Google, sito, directory, social.']},
          {heading: 'Pagine geo-localizzate', paragraphs: ['Una landing per ogni quartiere, contenuti reali (non duplicati). "Dentista a Milano Porta Romana" funziona meglio di "Dentista a Milano".']},
          {heading: 'Local + AI', paragraphs: ['Le AI rispondono a "miglior idraulico vicino a me". Per essere citati: profilo Google ricco, recensioni, schema LocalBusiness, directory di settore.']}
        ]
      },
      en: {
        title: 'Local SEO 2026: Google Business Profile and beyond',
        excerpt: 'For local businesses, dominating geo-search beats a thousand campaigns.',
        metaTitle: 'Local SEO 2026 | 2erre',
        metaDescription: 'Local SEO 2026: optimize GBP, reviews, citations and rank for "near me".',
        keywords: ['local SEO', 'GBP', 'near me search'],
        sections: [
          {paragraphs: ['46% of searches have local intent.']},
          {heading: 'GBP fields few fill', paragraphs: ['Specific services, attributes, categorized photos, products with price. Complete profiles convert 7x.']},
          {heading: 'Reviews: the currency', paragraphs: ['Under 25 invisible. Above 100 at >4.4 you win.']},
          {heading: 'NAP citations', paragraphs: ['Identical Name, Address, Phone everywhere.']},
          {heading: 'Geo landing pages', paragraphs: ['Per-neighborhood beats generic city.']},
          {heading: 'Local + AI', paragraphs: ['Rich GBP, reviews, LocalBusiness schema, vertical directories.']}
        ]
      }
    }
  },
  {
    slug: 'core-web-vitals-2026',
    date: '2026-03-30',
    readingMin: 5,
    tag: 'Web',
    content: {
      it: {
        title: 'Core Web Vitals 2026: perché contano davvero per la SEO',
        excerpt: 'LCP, INP, CLS: tre metriche che possono raddoppiare o dimezzare il tuo traffico organico.',
        metaTitle: 'Core Web Vitals 2026 | 2erre',
        metaDescription: 'Core Web Vitals 2026: come ottimizzare LCP, INP, CLS per scalare su Google e migliorare conversioni.',
        keywords: ['Core Web Vitals', 'LCP', 'INP', 'CLS', 'performance SEO'],
        sections: [
          {paragraphs: ['Google usa i Core Web Vitals come fattore di ranking dal 2021. Nel 2026 il peso è cresciuto.']},
          {heading: 'Le 3 metriche che contano', paragraphs: ['LCP — target <2.5s.', 'INP — target <200ms (ha sostituito FID nel 2024).', 'CLS — target <0.1.']},
          {heading: 'Come ottimizzarli', paragraphs: ['Immagini WebP/AVIF con dimensioni esplicite. Font con font-display:swap. JS pesante con import dinamico. CSS critico inline. CDN. SSR (Next.js, Astro).']},
          {heading: 'Misurare correttamente', paragraphs: ['PageSpeed Insights dà la fotografia, ma il dato vero è il field data da Chrome User Experience Report.']}
        ]
      },
      en: {
        title: 'Core Web Vitals 2026',
        excerpt: 'LCP, INP, CLS: three metrics that can double or halve your organic traffic.',
        metaTitle: 'Core Web Vitals 2026 | 2erre',
        metaDescription: 'Optimize LCP, INP, CLS to rank on Google and improve conversions.',
        keywords: ['Core Web Vitals', 'LCP', 'INP', 'CLS'],
        sections: [
          {paragraphs: ['Ranking factor since 2021, weight grown in 2026.']},
          {heading: '3 metrics', paragraphs: ['LCP <2.5s. INP <200ms (replaced FID 2024). CLS <0.1.']},
          {heading: 'How to optimize', paragraphs: ['WebP/AVIF with sizes. font-display:swap. Dynamic imports. Inline critical CSS. CDN. SSR.']},
          {heading: 'Measure correctly', paragraphs: ['Field data from Chrome UX Report is the real signal.']}
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
        title: 'Next.js o WordPress nel 2026? La risposta non è scontata',
        excerpt: 'Il dibattito "modern stack vs CMS tradizionale" è più sfumato di quanto sembri.',
        metaTitle: 'Next.js vs WordPress 2026 | 2erre',
        metaDescription: 'Next.js o WordPress nel 2026? Confronto pratico: performance, SEO, costi, manutenzione.',
        keywords: ['Next.js vs WordPress', 'CMS 2026', 'WordPress', 'Next.js'],
        sections: [
          {paragraphs: ['WordPress muove ancora oltre il 40% del web. Next.js è il framework preferito dagli sviluppatori moderni.']},
          {heading: 'Quando vince WordPress', paragraphs: ['Cliente pubblica 3+ volte/settimana, team marketing autonomo, ecosistema plugin enorme. Ancora la scelta corretta per blog editoriale o sito istituzionale "classico".']},
          {heading: 'Quando vince Next.js', paragraphs: ['UX su misura, animazioni fluide, app, integrazioni custom, performance al top, manutenzione lato dev.']},
          {heading: 'Il pattern ibrido che funziona', paragraphs: ['Next.js + headless CMS (Sanity, Payload, Strapi). Best of both worlds.']},
          {heading: 'La domanda giusta', paragraphs: ['Non "qual è meglio". È: chi pubblica, con che frequenza, quanto è custom l\'esperienza?']}
        ]
      },
      en: {
        title: 'Next.js or WordPress in 2026?',
        excerpt: 'The "modern stack vs traditional CMS" debate is more nuanced than it looks.',
        metaTitle: 'Next.js vs WordPress 2026 | 2erre',
        metaDescription: 'Next.js or WordPress in 2026? Practical comparison.',
        keywords: ['Next.js vs WordPress', 'CMS 2026'],
        sections: [
          {paragraphs: ['WordPress: 40%+ of web. Next.js: dev favorite. Both right.']},
          {heading: 'When WordPress wins', paragraphs: ['Frequent publishing, autonomous marketing, plugin ecosystem.']},
          {heading: 'When Next.js wins', paragraphs: ['Tailored UX, animations, apps, custom integrations, top performance.']},
          {heading: 'Hybrid pattern', paragraphs: ['Next.js + headless CMS.']},
          {heading: 'Right question', paragraphs: ['Who publishes, how often, how custom?']}
        ]
      }
    }
  },
  {
    slug: 'chatbot-aziendale-rag',
    date: '2026-03-18',
    readingMin: 7,
    tag: 'AI',
    content: {
      it: {
        title: 'Chatbot aziendali con RAG: la guida pratica 2026',
        excerpt: 'I chatbot pre-AI fallivano per limiti tecnici. Quelli con RAG funzionano davvero — se costruiti bene.',
        metaTitle: 'Chatbot aziendali RAG 2026 | 2erre',
        metaDescription: 'Chatbot aziendali con RAG: come costruirli, costi, vendor, errori comuni.',
        keywords: ['chatbot aziendale', 'RAG', 'AI chatbot', 'knowledge base AI'],
        sections: [
          {paragraphs: ['Per anni i chatbot aziendali sono stati frustranti. Con il RAG è cambiato tutto. Ma il 60% dei progetti RAG fallisce per errori evitabili.']},
          {heading: 'Cos\'è il RAG', paragraphs: ['Invece di affidarsi solo alla conoscenza del modello, il RAG recupera documenti rilevanti dalla tua KB e li dà come contesto. Risposte specifiche, aggiornate, citabili.']},
          {heading: '3 use case con ROI provato', paragraphs: ['Customer service L1 (deflection 30-50%). Knowledge base interna (-50% tempo ricerca). Pre-sales lead qualifier.']},
          {heading: 'Architettura tipica', paragraphs: ['Vector DB (Supabase pgvector, Pinecone, Weaviate) + embedder + retriever con re-ranking + LLM (GPT-4.1, Claude Sonnet, Gemini Pro) + frontend chat + observability.']},
          {heading: 'Errori che uccidono i progetti', paragraphs: ['Documenti sporchi (PDF scansionati). Chunking ingenuo. Niente re-ranking. Nessuna valutazione automatica.']},
          {heading: 'Costi reali nel 2026', paragraphs: ['Setup 12-30k€. Mensili 300-1500€. ROI 4-7 mesi se 500+ ticket/mese.']}
        ],
        faq: [
          {q: 'Custom GPT al posto di un RAG vero?', a: 'Per use case interni piccoli sì. Per customer service esterno no.'},
          {q: 'Sostituisce il customer service umano?', a: 'No, lo augmenta. Risolve il 30-50% delle richieste ripetitive.'}
        ]
      },
      en: {
        title: 'Enterprise chatbots with RAG: 2026 guide',
        excerpt: 'RAG chatbots actually work — if built well.',
        metaTitle: 'Enterprise RAG chatbots 2026 | 2erre',
        metaDescription: 'How to build enterprise RAG chatbots: costs, vendors, mistakes.',
        keywords: ['enterprise chatbot', 'RAG', 'AI chatbot'],
        sections: [
          {paragraphs: ['60% of RAG projects fail on avoidable mistakes.']},
          {heading: 'What is RAG', paragraphs: ['Retrieves relevant docs from your KB, feeds as context. Domain-specific, current, citable.']},
          {heading: '3 ROI-proven cases', paragraphs: ['L1 CS (30-50% deflection), internal KB, pre-sales qualifier.']},
          {heading: 'Architecture', paragraphs: ['Vector DB + embedder + retriever with re-ranking + LLM + frontend + observability.']},
          {heading: 'Project killers', paragraphs: ['Dirty docs, naive chunking, no re-ranking, no eval.']},
          {heading: '2026 costs', paragraphs: ['€12-30k setup. €300-1500/month. ROI 4-7 months at 500+ tickets/month.']}
        ]
      }
    }
  },
  {
    slug: 'n8n-make-zapier-confronto',
    date: '2026-03-15',
    readingMin: 6,
    tag: 'Automation',
    content: {
      it: {
        title: 'n8n vs Make vs Zapier: quale scegliere nel 2026',
        excerpt: 'Tre strumenti, tre filosofie. La scelta sbagliata costa caro.',
        metaTitle: 'n8n vs Make vs Zapier 2026 | 2erre',
        metaDescription: 'Confronto pratico n8n, Make, Zapier: prezzi, funzioni, AI, casi d\'uso.',
        keywords: ['n8n vs Make', 'Zapier alternativa', 'workflow automation', 'no-code'],
        sections: [
          {paragraphs: ['Negli ultimi 3 anni abbiamo realizzato oltre 200 automazioni con questi tre tool. Ognuno ha una propria forza.']},
          {heading: 'Zapier: semplicità prima di tutto', paragraphs: ['Pro: 6.000+ integrazioni, UX semplice, ottimo per non tecnici. Contro: caro su volumi alti, logica complessa scomoda.']},
          {heading: 'Make (ex Integromat): il cavallo di battaglia', paragraphs: ['Pro: visualizzazione a flusso eccellente, prezzi aggressivi, ottimo per logica complessa con iteratori e router. Moduli AI nativi.']},
          {heading: 'n8n: la scelta dei team tecnici', paragraphs: ['Pro: open source, self-hostabile, illimitato in self-host, code nodes potenti. Default nostro per progetti seri.']},
          {heading: 'Quale scegliere?', paragraphs: ['Marketing piccolo, flussi semplici → Zapier. Operativo medio-complesso su SaaS → Make. Tecnico con privacy/volumi → n8n.', 'In 2erre il default è n8n self-hosted su infrastruttura UE.']},
          {heading: 'AI dentro le automazioni', paragraphs: ['Tutti supportano OpenAI/Anthropic. n8n il più flessibile per RAG. Make ha l\'interfaccia AI più immediata. Zapier ha "AI by Zapier".']}
        ]
      },
      en: {
        title: 'n8n vs Make vs Zapier: which to pick in 2026',
        excerpt: 'Three tools, three philosophies.',
        metaTitle: 'n8n vs Make vs Zapier | 2erre',
        metaDescription: 'Practical comparison: pricing, features, AI integrations.',
        keywords: ['n8n vs Make', 'Zapier alternative', 'no-code'],
        sections: [
          {paragraphs: ['200+ automations over 3 years across the three.']},
          {heading: 'Zapier', paragraphs: ['Pros: 6,000+ integrations, easy UX. Cons: expensive at scale.']},
          {heading: 'Make', paragraphs: ['Pros: great flow viz, aggressive pricing, complex logic. Native AI.']},
          {heading: 'n8n', paragraphs: ['Open source, self-hostable, unlimited self-host. Our default.']},
          {heading: 'Which?', paragraphs: ['Small marketing → Zapier. Mid-complex SaaS → Make. Tech/privacy/scale → n8n.']},
          {heading: 'AI in automations', paragraphs: ['All support OpenAI/Anthropic. n8n best for RAG. Make smoothest UI.']}
        ]
      }
    }
  },
  {
    slug: 'email-marketing-automation-ai',
    date: '2026-03-12',
    readingMin: 6,
    tag: 'Marketing',
    content: {
      it: {
        title: 'Email marketing automation con AI: oltre il "Ciao [Nome]"',
        excerpt: 'L\'email è ancora il canale con miglior ROI. Con l\'AI giusta, può triplicare i risultati.',
        metaTitle: 'Email marketing con AI | 2erre',
        metaDescription: 'Email marketing AI: personalizzazione, segmentazione comportamentale, generazione copy.',
        keywords: ['email marketing AI', 'automazione email', 'email marketing 2026'],
        sections: [
          {paragraphs: ['Per ogni euro speso in email B2B, ROI medio 38€. Con AI ben usata sale a 60€+.']},
          {heading: 'Personalizzazione che non sia teatrino', paragraphs: ['"Ciao [Nome]" è morto da 10 anni. Personalizzazione vera oggi: contenuto adattato a settore, comportamento, momento del ciclo di vita. AI generativa scrive 1000 varianti contestuali a costo zero.']},
          {heading: 'Segmentazione comportamentale automatica', paragraphs: ['Klaviyo, Brevo, ActiveCampaign + AI: cluster automatici per RFM, engagement, intent.']},
          {heading: 'Generazione copy con AI', paragraphs: ['Subject line A/B, varianti del corpo, riadattamenti tonali. La revisione umana resta essenziale per coerenza brand.']},
          {heading: 'Send time optimization', paragraphs: ['AI predice il momento ottimale per ogni destinatario. +15-25% open rate.']},
          {heading: 'Errori che ammazzano la deliverability', paragraphs: ['Liste comprate. Engagement basso ignorato. DKIM/DMARC non configurati. Reply-to su domini gratuiti.']}
        ]
      },
      en: {
        title: 'AI email marketing: beyond "Hi [First Name]"',
        excerpt: 'Email still has the highest ROI. AI triples it.',
        metaTitle: 'AI email marketing | 2erre',
        metaDescription: 'AI email marketing: real personalization, segmentation, copy generation.',
        keywords: ['AI email marketing', 'email automation'],
        sections: [
          {paragraphs: ['Every €1 in B2B email returns €38. With AI: €60+.']},
          {heading: 'Real personalization', paragraphs: ['Adapted to industry, behavior, lifecycle moment. 1000 variants at marginal zero.']},
          {heading: 'Behavioral segmentation', paragraphs: ['Klaviyo/Brevo/ActiveCampaign + AI: automatic clusters.']},
          {heading: 'AI copy generation', paragraphs: ['Subject lines, body variants, tonal adaptations. Human review essential.']},
          {heading: 'Send time optimization', paragraphs: ['+15-25% open rate per-recipient.']},
          {heading: 'Deliverability killers', paragraphs: ['Bought lists, ignored engagement, missing DKIM/DMARC.']}
        ]
      }
    }
  },
  {
    slug: 'cybersecurity-pmi-checklist-2026',
    date: '2026-03-08',
    readingMin: 7,
    tag: 'Security',
    content: {
      it: {
        title: 'Cybersecurity per PMI: la checklist concreta del 2026',
        excerpt: 'L\'87% dei ransomware in Italia colpisce PMI, spesso per errori banali.',
        metaTitle: 'Cybersecurity PMI 2026 | 2erre',
        metaDescription: 'Cybersecurity PMI 2026: checklist pratica, NIS2, errori comuni, costi reali.',
        keywords: ['cybersecurity PMI', 'NIS2', 'ransomware', 'protezione dati'],
        sections: [
          {paragraphs: ['Migliaia di PMI italiane perdono operatività per attacchi prevenibili. NIS2 ora obbliga a fare sul serio.']},
          {heading: 'Identità e accessi', paragraphs: ['MFA su tutto. Account amministrativi separati. SSO se >20 dipendenti. Disabilitazione ex-dipendenti in 24h.']},
          {heading: 'Backup degni di questo nome', paragraphs: ['Regola 3-2-1-1-0: 3 copie, 2 supporti, 1 offsite, 1 immutabile, 0 errori al test. Test trimestrale.']},
          {heading: 'Endpoint e rete', paragraphs: ['EDR moderno (CrowdStrike, SentinelOne, Defender for Business). Patch management automatico. Segmentazione di rete.']},
          {heading: 'Persone', paragraphs: ['Phishing simulato 4 volte/anno. Formazione obbligatoria. Procedura "ho cliccato un link sospetto".']},
          {heading: 'NIS2: cosa richiede in pratica', paragraphs: ['Risk assessment formale, incident reporting in 24/72h, board accountability, supply chain security. Sanzioni fino al 2% del fatturato globale.']},
          {heading: 'Costi realistici', paragraphs: ['PMI 30-100 persone: 8-25k€/anno per le basi. Singolo ransomware: 200-800k€. La matematica è chiara.']}
        ]
      },
      en: {
        title: 'SMB cybersecurity 2026 checklist',
        excerpt: '87% of Italian ransomware hits SMBs via trivial errors.',
        metaTitle: 'SMB cybersecurity 2026 | 2erre',
        metaDescription: 'SMB cybersecurity 2026: practical checklist, NIS2, common mistakes.',
        keywords: ['SMB cybersecurity', 'NIS2', 'ransomware'],
        sections: [
          {paragraphs: ['NIS2 now mandates seriousness.']},
          {heading: 'Identity & access', paragraphs: ['MFA. Separate admin accounts. SSO at 20+. 24h ex-employee disable.']},
          {heading: 'Real backups', paragraphs: ['3-2-1-1-0. Quarterly restore test.']},
          {heading: 'Endpoint & network', paragraphs: ['Modern EDR. Auto patching. Segmentation.']},
          {heading: 'People', paragraphs: ['Phishing simulations 4x/year.']},
          {heading: 'NIS2', paragraphs: ['Risk assessment, 24/72h reporting, board accountability. Fines up to 2% revenue.']},
          {heading: 'Costs', paragraphs: ['€8-25k/year basics. Single ransomware: €200-800k.']}
        ]
      }
    }
  },
  {
    slug: 'cookie-banner-conformita-2026',
    date: '2026-03-04',
    readingMin: 5,
    tag: 'Privacy',
    content: {
      it: {
        title: 'Cookie banner conformi nel 2026: cosa è davvero cambiato',
        excerpt: 'Il Garante italiano ha sanzionato decine di aziende per cookie banner non conformi.',
        metaTitle: 'Cookie banner conformi 2026 | 2erre',
        metaDescription: 'Cookie banner 2026: cosa serve per essere conformi a GDPR, ePrivacy e linee guida del Garante.',
        keywords: ['cookie banner', 'GDPR cookie', 'consenso cookie', 'ePrivacy'],
        sections: [
          {paragraphs: ['Le linee guida del Garante sono chiare dal 2021, eppure 7 siti italiani su 10 sono ancora non conformi. Nel 2025 oltre 80 sanzioni a PMI e grandi aziende.']},
          {heading: 'I 5 requisiti irrinunciabili', paragraphs: ['1. "Accetta" e "Rifiuta tutto" allo stesso livello visivo.', '2. Granularità per categoria.', '3. Niente cookie non-tecnici prima del consenso. Nemmeno Google Analytics.', '4. Revoca facile come darlo.', '5. Cookie e privacy policy linkate, leggibili, aggiornate.']},
          {heading: 'Strumenti che funzionano', paragraphs: ['Cookiebot, Iubenda, OneTrust, CookieFirst — se configurati bene. I banner fai-da-te quasi sempre falliscono.']},
          {heading: 'Errori comuni', paragraphs: ['Consenso "implicito" allo scroll. Pre-flag attivati. Banner che si chiude da solo. Lingua diversa dal sito.']},
          {heading: 'Sanzioni recenti', paragraphs: ['Da 5.000€ a 6.000.000€. Mediana 35.000€. Più il danno reputazionale.']}
        ]
      },
      en: {
        title: 'Compliant cookie banners in 2026',
        excerpt: 'Italian Garante fined dozens for non-compliant banners.',
        metaTitle: 'Compliant cookie banners 2026 | 2erre',
        metaDescription: 'Cookie banners 2026: GDPR/ePrivacy requirements.',
        keywords: ['cookie banner', 'GDPR cookie', 'ePrivacy'],
        sections: [
          {paragraphs: ['7 of 10 Italian sites still non-compliant.']},
          {heading: '5 requirements', paragraphs: ['1. Accept/Reject same visual level. 2. Per-category granularity. 3. No non-technical cookies before consent. 4. Easy revocation. 5. Linked policies.']},
          {heading: 'Tools', paragraphs: ['Cookiebot, Iubenda, OneTrust, CookieFirst — if configured.']},
          {heading: 'Common mistakes', paragraphs: ['Implicit scroll consent. Pre-flagged categories. Auto-closing banners.']},
          {heading: 'Fines', paragraphs: ['€5k–€6M. Median €35k.']}
        ]
      }
    }
  },
  {
    slug: 'content-marketing-ai-italiano',
    date: '2026-02-28',
    readingMin: 6,
    tag: 'Marketing',
    content: {
      it: {
        title: 'Content marketing con AI in italiano: cosa funziona, cosa no',
        excerpt: 'Generare 100 articoli al mese con AI sembra geniale. È spesso il modo più rapido per distruggere la tua SEO.',
        metaTitle: 'Content marketing con AI in italiano | 2erre',
        metaDescription: 'Content marketing AI italiano: vantaggi, limiti, rischi SEO, workflow ibridi.',
        keywords: ['content marketing AI', 'AI italiano', 'SEO AI content'],
        sections: [
          {paragraphs: ['Nel 2025 Google ha aggiornato E-E-A-T per dichiarare guerra al "scaled content abuse". Ma l\'AI usata bene è un acceleratore enorme.']},
          {heading: 'L\'italiano è ancora il punto debole', paragraphs: ['I modelli sono migliorati, ma l\'italiano resta secondo. Refusi sintattici, scelte lessicali corporate-translate. Sempre revisione umana madrelingua.']},
          {heading: 'Workflow ibridi che funzionano', paragraphs: ['1. Brief umano dettagliato. 2. AI per ricerca e struttura. 3. Drafting AI con voice del brand. 4. Revisione umana sostanziale. 5. Validazione SEO + GEO. Risultato: 3-5x velocità.']},
          {heading: 'Cosa fa la differenza nel 2026', paragraphs: ['Esperienza diretta vissuta. Punti di vista forti. Visualizzazioni custom. Aggiornamento costante. Schema markup pulito.']},
          {heading: 'Errori che vediamo ripetersi', paragraphs: ['50 articoli/mese di AI puro su dominio nuovo (penalizzazione garantita). Riscrivere senza valore aggiunto. Ignorare search intent.']}
        ]
      },
      en: {
        title: 'AI content marketing in Italian: what works',
        excerpt: 'Pumping 100 articles/month with AI often destroys SEO.',
        metaTitle: 'AI content marketing | 2erre',
        metaDescription: 'AI content in Italian: pros, limits, SEO risks.',
        keywords: ['AI content marketing', 'Italian AI'],
        sections: [
          {paragraphs: ['Google declared war on "scaled content abuse" in 2025. AI used well is a huge accelerator.']},
          {heading: 'Italian still weak', paragraphs: ['Always native human review.']},
          {heading: 'Hybrid workflows', paragraphs: ['Brief → AI research → AI draft → human edit → SEO+GEO validation. 3-5x speed.']},
          {heading: 'What differentiates', paragraphs: ['Direct experience, strong opinions, custom visuals, updates, schema.']},
          {heading: 'Recurring mistakes', paragraphs: ['50 pure-AI articles/month. Rewrites without value. Ignored intent.']}
        ]
      }
    }
  },
  {
    slug: 'roadmap-mvp-6-settimane',
    date: '2026-02-25',
    readingMin: 5,
    tag: 'Product',
    content: {
      it: {
        title: 'Come mandiamo un MVP in produzione in 6 settimane',
        excerpt: 'La roadmap concreta con cui lanciamo prodotti minimi con i nostri clienti. Settimana per settimana.',
        metaTitle: 'MVP in 6 settimane | 2erre',
        metaDescription: 'Roadmap MVP 6 settimane: discovery, design, sviluppo, beta, launch.',
        keywords: ['MVP roadmap', 'MVP 6 settimane', 'lancio prodotto', 'startup MVP'],
        sections: [
          {paragraphs: ['Lanciamo MVP in 6 settimane non perché siamo veloci, ma perché siamo rigorosi sullo scope.']},
          {heading: 'Settimana 1 — Discovery', paragraphs: ['Workshop di 2 giorni, 3-5 job-to-be-done, escludere feature non critiche.']},
          {heading: 'Settimane 2-3 — Design + Foundations', paragraphs: ['Prototipo Figma + stack (default Next.js + Supabase). CI/CD, repo, staging.']},
          {heading: 'Settimane 4-5 — Sviluppo del core', paragraphs: ['Solo must-have. Daily standup di 15 minuti.']},
          {heading: 'Settimana 6 — Beta + launch', paragraphs: ['20-30 utenti reali, fix blocker, rilascio. Launch day sempre di mercoledì.']},
          {heading: 'Cosa funziona, cosa no', paragraphs: ['Funziona: scope rigoroso, comunicazione frequente, zero meeting inutili.', 'Non funziona: "un\'ultima feature" prima del launch.']}
        ]
      },
      en: {
        title: 'How we ship an MVP in 6 weeks',
        excerpt: 'The concrete roadmap we use with clients.',
        metaTitle: 'MVP in 6 weeks | 2erre',
        metaDescription: 'MVP roadmap: discovery, design, development, beta, launch.',
        keywords: ['MVP roadmap', '6-week MVP'],
        sections: [
          {paragraphs: ['Strict scope, not raw speed.']},
          {heading: 'Week 1 — Discovery', paragraphs: ['2-day workshop, 3-5 jobs-to-be-done.']},
          {heading: 'Weeks 2-3 — Design + Foundations', paragraphs: ['Figma prototype + stack. CI/CD.']},
          {heading: 'Weeks 4-5 — Core build', paragraphs: ['Must-have only. 15-min daily.']},
          {heading: 'Week 6 — Beta + launch', paragraphs: ['20-30 users, fix blockers, ship Wednesday.']},
          {heading: 'What works', paragraphs: ['Strict scope, frequent comms. Not: squeezing one more feature.']}
        ]
      }
    }
  },
  {
    slug: 'dashboard-bi-pmi-meno-meglio',
    date: '2026-02-20',
    readingMin: 5,
    tag: 'Data',
    content: {
      it: {
        title: 'Dashboard BI per PMI: meno è meglio',
        excerpt: 'La maggior parte delle dashboard aziendali viene aperta una volta e mai più.',
        metaTitle: 'Dashboard BI PMI | 2erre',
        metaDescription: 'Dashboard BI efficaci per PMI: design, strumenti (Metabase, Looker), metriche.',
        keywords: ['dashboard BI', 'business intelligence PMI', 'Metabase', 'Looker Studio'],
        sections: [
          {paragraphs: ['Le dashboard "che mostrano tutto" non vengono mai usate. Quelle quotidiane hanno 5-7 numeri, soglie chiare, azione associata.']},
          {heading: 'Una decisione, un numero', paragraphs: ['Ogni metrica deve rispondere a una decisione. Se la risposta è "niente", non va in dashboard.']},
          {heading: 'Strumenti', paragraphs: ['Metabase open source — default per PMI. Looker Studio gratis con Google. Power BI con Microsoft. Tableau solo con analytics dedicati.']},
          {heading: '5 metriche sottovalutate', paragraphs: ['Tempo risposta lead. Conversione per fonte. CAC vs LTV. Net Revenue Retention. Tempo medio delivery.']},
          {heading: 'AI nelle dashboard', paragraphs: ['Riassunti narrativi automatici, anomaly detection, ipotesi. Acceleratori, non sostituti del giudizio.']}
        ]
      },
      en: {
        title: 'BI dashboards for SMBs: less is more',
        excerpt: 'Most corporate dashboards are opened once and never again.',
        metaTitle: 'BI dashboards for SMBs | 2erre',
        metaDescription: 'Effective BI: design, tools, metrics.',
        keywords: ['BI dashboard', 'Metabase'],
        sections: [
          {paragraphs: ['"Show everything" dashboards never get used.']},
          {heading: 'One decision, one number', paragraphs: ['If "so what?" has no answer, drop it.']},
          {heading: 'Tools', paragraphs: ['Metabase, Looker Studio, Power BI.']},
          {heading: '5 underrated metrics', paragraphs: ['Lead response time. Conversion by source. CAC vs LTV. NRR. Delivery time.']},
          {heading: 'AI in dashboards', paragraphs: ['Auto narratives, anomaly detection. Accelerators, not replacements.']}
        ]
      }
    }
  },
  {
    slug: 'crm-personalizzato-vs-saas',
    date: '2026-02-15',
    readingMin: 6,
    tag: 'Software',
    content: {
      it: {
        title: 'CRM custom o SaaS? La decisione che cambia tutto',
        excerpt: 'HubSpot, Salesforce, Pipedrive vs un CRM su misura. Costi nascosti e benefici reali.',
        metaTitle: 'CRM custom vs SaaS | 2erre',
        metaDescription: 'CRM custom o SaaS: confronto costi reali, time-to-value, AI nel 2026.',
        keywords: ['CRM custom', 'CRM SaaS', 'HubSpot', 'Pipedrive', 'Salesforce'],
        sections: [
          {paragraphs: ['Tre quarti delle PMI usano un CRM SaaS. Va bene. Ma per chi ha processi peculiari, un CRM custom è strategico.']},
          {heading: 'Quando vince il SaaS', paragraphs: ['Processi standard, team sales >5, integrazioni native marketing, "live in 2 settimane". HubSpot e Pipedrive coprono il 90%.']},
          {heading: 'Quando vince il custom', paragraphs: ['Processi atipici (project-based selling, vendite consultive lunghe). Integrazioni proprietarie profonde. Volumi che rompono il pricing per-seat. Esigenze AI specifiche.']},
          {heading: 'Costi reali a 3 anni', paragraphs: ['SaaS: 30-100€/utente/mese × 20 × 36 mesi = 21-72k€. + integrazioni 10-30k€.', 'Custom: 40-120k€ setup + 6-15k€/anno = 58-165k€ in 3 anni. Per <10 utenti, SaaS quasi sempre vince.']},
          {heading: 'Pattern ibrido', paragraphs: ['CRM SaaS come core + microservizi custom per le 2-3 logiche peculiari + AI mirata.']}
        ]
      },
      en: {
        title: 'Custom CRM or SaaS?',
        excerpt: 'HubSpot, Salesforce, Pipedrive vs custom. Real costs and benefits.',
        metaTitle: 'Custom CRM vs SaaS | 2erre',
        metaDescription: 'Custom CRM or SaaS in 2026: real cost comparison, TTV, AI.',
        keywords: ['custom CRM', 'SaaS CRM', 'HubSpot', 'Pipedrive'],
        sections: [
          {paragraphs: ['Three quarters of SMBs use SaaS. For peculiar processes, custom is strategic.']},
          {heading: 'SaaS wins', paragraphs: ['Standard sales, 5+ reps, native integrations.']},
          {heading: 'Custom wins', paragraphs: ['Atypical processes, proprietary integrations, scale, specific AI.']},
          {heading: '3-year cost', paragraphs: ['SaaS €21-72k. Custom €58-165k. <10 users: SaaS wins.']},
          {heading: 'Hybrid pattern', paragraphs: ['SaaS core + custom microservices + targeted AI.']}
        ]
      }
    }
  },
  {
    slug: 'schema-markup-segreto-seo',
    date: '2026-02-10',
    readingMin: 5,
    tag: 'SEO',
    content: {
      it: {
        title: 'Schema markup: il segreto SEO sottovalutato (cruciale per le AI)',
        excerpt: 'Lo Schema.org è la lingua che Google e gli LLM parlano per capire i contenuti.',
        metaTitle: 'Schema markup SEO + AI | 2erre',
        metaDescription: 'Schema markup 2026: tipi, esempi, impatto su SEO e citazioni AI.',
        keywords: ['schema markup', 'Schema.org', 'structured data', 'JSON-LD'],
        sections: [
          {paragraphs: ['Senza schema, sei un libro chiuso per Google e per gli LLM.']},
          {heading: 'Tipi indispensabili', paragraphs: ['Article — per ogni post. Organization e LocalBusiness — home/contatti. FAQPage — pagine con Q&A. BreadcrumbList — navigazione. Product, Review — e-commerce. HowTo — tutorial. Service — pagina servizio.']},
          {heading: 'JSON-LD vs microdata', paragraphs: ['JSON-LD è il formato consigliato da Google nel 2026. Più pulito, più mantenibile, separato dall\'HTML.']},
          {heading: 'Impatto reale', paragraphs: ['Rich results in SERP: +15-30% CTR. Citazioni AI: dato strutturato è la prima cosa che gli LLM leggono. Knowledge panel: serve schema Organization completo.']},
          {heading: 'Come testare', paragraphs: ['Rich Results Test di Google e Schema.org Validator. Sempre prima di pushare in produzione.']}
        ]
      },
      en: {
        title: 'Schema markup: the underrated SEO secret',
        excerpt: 'Schema.org is the language Google and LLMs speak.',
        metaTitle: 'Schema markup | 2erre',
        metaDescription: 'Schema markup 2026: types, examples, SEO and AI impact.',
        keywords: ['schema markup', 'Schema.org', 'JSON-LD'],
        sections: [
          {paragraphs: ['Without schema, you\'re a closed book.']},
          {heading: 'Essential types', paragraphs: ['Article, Organization, LocalBusiness, FAQPage, BreadcrumbList, Product, Review, HowTo, Service.']},
          {heading: 'JSON-LD vs microdata', paragraphs: ['JSON-LD is Google\'s recommended format.']},
          {heading: 'Real impact', paragraphs: ['+15-30% CTR. AI citations rely on it first.']},
          {heading: 'Testing', paragraphs: ['Rich Results Test, Schema.org Validator.']}
        ]
      }
    }
  },
  {
    slug: 'accessibilita-web-wcag-business',
    date: '2026-02-05',
    readingMin: 6,
    tag: 'Web',
    content: {
      it: {
        title: 'Accessibilità web (WCAG): non è solo etica, è business',
        excerpt: 'Da giugno 2025 il European Accessibility Act è obbligatorio. Eppure il 95% dei siti italiani non è conforme.',
        metaTitle: 'Accessibilità WCAG 2026 | 2erre',
        metaDescription: 'Accessibilità web e WCAG 2.2: cosa impone l\'EAA, costi, sanzioni, benefici SEO.',
        keywords: ['accessibilità web', 'WCAG 2.2', 'European Accessibility Act', 'a11y'],
        sections: [
          {paragraphs: ['EAA in vigore da giugno 2025. Riguarda e-commerce, banche, trasporti, telecomunicazioni e molti servizi B2C.']},
          {heading: 'WCAG 2.2: i criteri AA', paragraphs: ['Contrasto ≥4.5:1. Navigazione tastiera. ARIA dove serve. Form con label e errori comprensibili. Alt text. Sottotitoli video. Niente lampeggi >3/sec.']},
          {heading: 'I bonus SEO', paragraphs: ['HTML semantico, gerarchia heading, alt text — tutto ciò che serve per l\'accessibilità è anche SEO. Non è coincidenza.']},
          {heading: 'Tool di audit', paragraphs: ['axe DevTools, Lighthouse, WAVE — gratuiti. Audit serio richiede screen reader (NVDA, VoiceOver).']},
          {heading: 'Costo della conformità', paragraphs: ['Sito esistente: 5-30k€. Sito nuovo: surplus zero se considerata da subito. Refactor pesante: 8-15% del progetto.']}
        ]
      },
      en: {
        title: 'Web accessibility (WCAG): not just ethics',
        excerpt: 'EAA mandatory since June 2025. 95% of Italian sites still non-compliant.',
        metaTitle: 'WCAG 2026 | 2erre',
        metaDescription: 'WCAG 2.2 in 2026: requirements, costs, fines, SEO benefits.',
        keywords: ['web accessibility', 'WCAG 2.2', 'EAA', 'a11y'],
        sections: [
          {paragraphs: ['EAA in force since June 2025.']},
          {heading: 'WCAG 2.2 AA', paragraphs: ['Contrast ≥4.5:1. Keyboard nav. ARIA labels. Accessible forms. Alt text. Captions.']},
          {heading: 'SEO bonus', paragraphs: ['Same things drive accessibility and SEO.']},
          {heading: 'Audit tools', paragraphs: ['axe, Lighthouse, WAVE + manual screen reader.']},
          {heading: 'Cost', paragraphs: ['Existing: €5-30k. New: zero overhead. Refactor: 8-15%.']}
        ]
      }
    }
  },
  {
    slug: 'ai-act-europeo-imprese-italiane',
    date: '2026-01-30',
    readingMin: 7,
    tag: 'Privacy',
    content: {
      it: {
        title: 'AI Act europeo: cosa devono sapere le imprese italiane',
        excerpt: 'Il regolamento AI europeo entra a pieno regime ad agosto 2026. Le imprese impreparate saranno le prime a pagare.',
        metaTitle: 'AI Act 2026 imprese italiane | 2erre',
        metaDescription: 'AI Act 2026: classificazioni di rischio, obblighi pratici, sanzioni e roadmap di compliance.',
        keywords: ['AI Act', 'regolamento AI europeo', 'compliance AI', 'AI Act Italia'],
        sections: [
          {paragraphs: ['L\'AI Act è il primo regolamento al mondo a disciplinare in modo organico l\'AI. Si applica anche a chi è fuori UE se opera nel mercato europeo.']},
          {heading: 'Le 4 categorie di rischio', paragraphs: ['Inaccettabile (vietate): social scoring, manipolazione subliminale, riconoscimento emotivo sul lavoro.', 'Alto rischio: HR, credito, assicurazioni, biometria, infrastrutture critiche, istruzione. Obblighi pesanti.', 'Limitato: chatbot, deepfake, sistemi che interagiscono con utenti. Trasparenza.', 'Minimo: tutto il resto. Nessun obbligo aggiuntivo.']},
          {heading: 'Cosa cambia ad agosto 2026', paragraphs: ['Sistemi alto rischio: registro UE, documentazione tecnica, gestione del rischio, supervisione umana, robustezza testata. Sanzioni fino a 35M€ o 7% del fatturato globale.']},
          {heading: 'Cosa fare oggi', paragraphs: ['1. Inventario AI. 2. Classificazione di rischio. 3. Gap analysis sui sistemi alto rischio. 4. AI Officer (o estensione del DPO). 5. Aggiornamento contratti fornitori.']},
          {heading: 'Errori comuni', paragraphs: ['"Non mi riguarda perché non sviluppo AI": se la usi e la commercializzi al cliente finale, ti riguarda. Confondere GDPR e AI Act.']}
        ],
        faq: [
          {q: 'Le PMI sono esentate?', a: 'No, ma alcune disposizioni hanno modalità semplificate per micro e piccole imprese.'},
          {q: 'Usare ChatGPT è soggetto all\'AI Act?', a: 'L\'uso individuale no. L\'integrazione in un prodotto venduto sì.'}
        ]
      },
      en: {
        title: 'EU AI Act: what Italian businesses need to know',
        excerpt: 'EU AI Act enters full force August 2026.',
        metaTitle: 'EU AI Act 2026 | 2erre',
        metaDescription: 'AI Act 2026: risk classes, obligations, fines, compliance.',
        keywords: ['AI Act', 'EU AI regulation', 'AI compliance'],
        sections: [
          {paragraphs: ['First comprehensive AI regulation. Applies even outside EU if operating in EU market.']},
          {heading: '4 risk categories', paragraphs: ['Unacceptable (banned). High risk (HR, credit, biometrics). Limited (chatbots, deepfakes). Minimal (most uses).']},
          {heading: 'Aug 2026 changes', paragraphs: ['High risk: EU registry, tech docs, risk management, oversight. Fines up to €35M or 7% revenue.']},
          {heading: 'Action plan', paragraphs: ['Inventory, risk classification, gap analysis, AI Officer, vendor contracts.']},
          {heading: 'Common mistakes', paragraphs: ['"Doesn\'t affect me": if you use and sell, it does. Confusing GDPR and AI Act.']}
        ],
        faq: [
          {q: 'Are SMBs exempt?', a: 'No, simplified provisions for micro/small.'},
          {q: 'ChatGPT and AI Act?', a: 'Individual use no. Product integration yes.'}
        ]
      }
    }
  },
  {
    slug: 'lead-generation-2026-strategie',
    date: '2026-01-25',
    readingMin: 6,
    tag: 'Marketing',
    content: {
      it: {
        title: 'Lead generation B2B nel 2026: cosa funziona davvero',
        excerpt: 'Cold email morente, LinkedIn saturo, SEO più difficile. Eppure i lead di qualità non sono mai stati così disponibili.',
        metaTitle: 'Lead generation B2B 2026 | 2erre',
        metaDescription: 'Lead generation B2B 2026: canali, AI nel funnel, content GEO-driven.',
        keywords: ['lead generation B2B', 'B2B marketing', 'inbound marketing', 'AI lead gen'],
        sections: [
          {paragraphs: ['Negli ultimi 24 mesi i playbook tradizionali si sono rotti. Cold email open <18%, LinkedIn DM saturati. Eppure i clienti compatibili sono più che mai online.']},
          {heading: 'Il funnel "AI-aware"', paragraphs: ['Top: contenuti GEO-ottimizzati per ChatGPT/Perplexity. Mid: case study verticali. Bottom: lead magnet ad alto valore (audit, calculator, mini-corso) che qualificano davvero.']},
          {heading: 'Canali in crescita nel 2026', paragraphs: ['Podcast B2B verticali. Newsletter di settore. Community Slack/Discord. Eventi piccoli (50-100 persone) > eventi grandi.']},
          {heading: 'AI nel funnel', paragraphs: ['Lead scoring automatico. Outreach personalizzato 1:1 (non template). Risposta in <2 minuti via AI con escalation umana. Riassunti automatici call.']},
          {heading: 'Cosa NON funziona più', paragraphs: ['Liste comprate. Cold call massivi. Webinar generalisti. LinkedIn ads untargeted. Contenuti AI-spam.']},
          {heading: 'Metriche da monitorare', paragraphs: ['Lead-to-MQL. MQL-to-SQL. Tempo di risposta al primo lead (sotto i 5 minuti raddoppia la conversione). CAC per canale. LTV/CAC.']}
        ]
      },
      en: {
        title: 'B2B lead generation in 2026',
        excerpt: 'Cold email dying, LinkedIn saturated. Yet quality leads more available than ever.',
        metaTitle: 'B2B lead generation 2026 | 2erre',
        metaDescription: 'B2B lead generation 2026: channels, AI in funnel, GEO content.',
        keywords: ['B2B lead generation', 'B2B marketing', 'inbound', 'AI lead gen'],
        sections: [
          {paragraphs: ['Traditional playbooks broke.']},
          {heading: 'AI-aware funnel', paragraphs: ['ToFu: GEO content. Mid: vertical case studies. Bottom: high-value lead magnets.']},
          {heading: 'Channels growing', paragraphs: ['Vertical podcasts, industry newsletters, Slack/Discord, small events.']},
          {heading: 'AI in funnel', paragraphs: ['Lead scoring + enrichment. 1:1 outreach. <2-min AI replies with escalation.']},
          {heading: 'What no longer works', paragraphs: ['Bought lists, mass cold calls, generic webinars, untargeted ads, AI-spam.']},
          {heading: 'Metrics', paragraphs: ['Lead-to-MQL, MQL-to-SQL, first-response time, CAC, LTV/CAC.']}
        ]
      }
    }
  }
];

export function getPosts(locale: Locale) {
  return posts
    .map((p) => ({...p.content[locale], slug: p.slug, date: p.date, readingMin: p.readingMin, tag: p.tag}))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string, locale: Locale) {
  const p = posts.find((x) => x.slug === slug);
  if (!p) return null;
  return {...p.content[locale], slug: p.slug, date: p.date, readingMin: p.readingMin, tag: p.tag};
}
