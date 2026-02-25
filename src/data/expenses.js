// Données du prévisionnel spatiaal - SAS
// 3 associés : Manon, Jordan, Amin
// Exercice : Avril 2026 → Mars 2027

export const MOIS = [
  'Avr 26', 'Mai 26', 'Juin 26', 'Juil 26', 'Août 26', 'Sep 26',
  'Oct 26', 'Nov 26', 'Déc 26', 'Jan 27', 'Fév 27', 'Mar 27'
];

export const MOIS_COURTS = [
  'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep',
  'Oct', 'Nov', 'Déc', 'Jan', 'Fév', 'Mar'
];

export const CATEGORIES = [
  {
    id: 'local',
    nom: 'Local & Charges',
    icon: 'Building2',
    color: '#6366f1',
    lignes: [
      { id: 'loyer', nom: 'Loyer bureau', montantMensuel: 431, description: 'Loyer mensuel du bureau' },
      { id: 'internet_tel', nom: 'Internet + 2 forfaits téléphone', montantMensuel: 100, description: 'Bouygues Telecom (fibre + 2 forfaits)' },
      { id: 'menage', nom: 'Ménage / Entretien / Eau', montantMensuel: 200, description: 'Entretien du bureau' },
    ]
  },
  {
    id: 'vehicule',
    nom: 'Véhicule de société',
    icon: 'Car',
    color: '#8b5cf6',
    lignes: [
      { id: 'leasing', nom: 'Leasing / LOA véhicule', montantMensuel: 718, description: '1 véhicule électrique - LOA HT' },
      { id: 'recharge_elec', nom: 'Recharge électrique', montantMensuel: 150, description: 'Recharge véhicule électrique' },
      { id: 'assurance_auto', nom: 'Assurance auto', montantMensuel: 70, description: 'Assurance tous risques véhicule' },
    ]
  },
  {
    id: 'assurances',
    nom: 'Assurances',
    icon: 'Shield',
    color: '#0ea5e9',
    lignes: [
      { id: 'rc_pro', nom: 'RC Professionnelle', montantMensuel: 5, description: 'Responsabilité civile professionnelle' },
      { id: 'assurance_local', nom: 'Assurance local', montantMensuel: 12, description: 'Multirisque bureau' },
      { id: 'mutuelle_manon', nom: 'Mutuelle Manon', montantMensuel: 50, description: 'Mutuelle entreprise' },
      { id: 'mutuelle_jordan', nom: 'Mutuelle Jordan', montantMensuel: 50, description: 'Mutuelle entreprise' },
      { id: 'mutuelle_amin', nom: 'Mutuelle Amin', montantMensuel: 50, description: 'Mutuelle entreprise' },
    ]
  },
  {
    id: 'outils_saas',
    nom: 'Outils & IA',
    icon: 'Cpu',
    color: '#10b981',
    lignes: [
      { id: 'google_ai_ultra', nom: 'Google AI Ultra', montantMensuel: 22, description: 'Abonnement Google AI Ultra' },
      { id: 'openai', nom: 'OpenAI (ChatGPT Plus)', montantMensuel: 20, description: 'Abonnement ChatGPT Plus' },
      { id: 'claude_max', nom: 'Anthropic Claude Max', montantMensuel: 100, description: 'Abonnement Claude Max' },
      { id: 'google_workspace', nom: 'Google Workspace (3 users)', montantMensuel: 42, description: 'Emails, Drive, Agenda — 3 utilisateurs' },
      { id: 'icloud', nom: 'iCloud+', montantMensuel: 10, description: 'Stockage iCloud+' },
      { id: 'apple_dev', nom: 'Apple Developer Program', montantMensuel: 8, description: '99 €/an → mensuel' },
    ]
  },
  {
    id: 'hebergement',
    nom: 'Hébergement & Infrastructure',
    icon: 'Cloud',
    color: '#f59e0b',
    lignes: [
      { id: 'vercel', nom: 'Vercel Pro', montantMensuel: 20, description: 'Déploiement & hosting frontend' },
      { id: 'railway', nom: 'Railway', montantMensuel: 20, description: 'Déploiement backend' },
      { id: 'hostinger', nom: 'Hostinger', montantMensuel: 15, description: 'Hébergement web' },
      { id: 'hetzner', nom: 'Hetzner', montantMensuel: 30, description: 'Serveurs dédiés' },
      { id: 'aws', nom: 'AWS', montantMensuel: 50, description: 'Services cloud Amazon' },
      { id: 's3_stockage', nom: 'S3 (stockage)', montantMensuel: 10, description: 'Stockage objet S3' },
      { id: 'supabase', nom: 'Supabase Pro', montantMensuel: 25, description: 'BaaS + base de données PostgreSQL' },
      { id: 'neon', nom: 'Neon', montantMensuel: 20, description: 'Base de données serverless PostgreSQL' },
      { id: 'domaines', nom: 'Noms de domaine', montantMensuel: 10, description: 'Domaines .fr, .com, etc.' },
    ]
  },
  {
    id: 'marketing',
    nom: 'Marketing & Communication',
    icon: 'Megaphone',
    color: '#ec4899',
    lignes: [
      { id: 'google_ads', nom: 'Google Ads', montantMensuel: 80, description: 'Publicité Google' },
      { id: 'meta_ads', nom: 'Meta Ads (Facebook/Insta)', montantMensuel: 60, description: 'Publicité Meta' },
      { id: 'linkedin_ads', nom: 'LinkedIn Ads', montantMensuel: 0, description: 'Publicité LinkedIn' },
      { id: 'outils_marketing', nom: 'Outils marketing (CRM, Mailchimp...)', montantMensuel: 30, description: "Outils d'emailing, CRM" },
      { id: 'seo', nom: 'SEO / Référencement', montantMensuel: 0, description: 'Outils SEO (Semrush, Ahrefs...)' },
      { id: 'contenu', nom: 'Création de contenu', montantMensuel: 30, description: 'Rédaction, vidéo, photo' },
      { id: 'print', nom: 'Print / Goodies', montantMensuel: 0, description: 'Cartes de visite, flyers, goodies' },
    ]
  },
  {
    id: 'administratif',
    nom: 'Frais Administratifs & Comptables',
    icon: 'FileText',
    color: '#64748b',
    lignes: [
      { id: 'expert_comptable', nom: 'Expert-comptable', montantMensuel: 80, description: 'Honoraires mensuels' },
      { id: 'frais_bancaires', nom: 'Frais bancaires', montantMensuel: 100, description: 'Compte pro + CB' },
      { id: 'juridique', nom: 'Frais juridiques', montantMensuel: 0, description: 'Avocat, conseil juridique' },
      { id: 'cfe', nom: 'CFE', montantMensuel: 750, description: 'Cotisation Foncière des Entreprises (annuel)', ponctuel: true, moisPonctuel: 8 },
      { id: 'frais_creation', nom: 'Frais de création SAS', montantMensuel: 1250, description: 'Greffe, annonce légale, statuts', ponctuel: true, moisPonctuel: 0 },
    ]
  },
  {
    id: 'deplacements',
    nom: 'Déplacements & Frais',
    icon: 'Train',
    color: '#14b8a6',
    lignes: [
      { id: 'train', nom: 'Train / Transport', montantMensuel: 400, description: 'Déplacements professionnels en train' },
      { id: 'repas', nom: "Repas d'affaires", montantMensuel: 0, description: 'Repas clients & équipe' },
      { id: 'hotel', nom: 'Hôtel / Hébergement', montantMensuel: 0, description: 'Déplacements avec nuitée' },
    ]
  },
  {
    id: 'formation',
    nom: 'Formation & Veille',
    icon: 'GraduationCap',
    color: '#a855f7',
    lignes: [
      { id: 'formations', nom: 'Formations', montantMensuel: 0, description: 'Formations professionnelles' },
      { id: 'conferences', nom: 'Conférences / Events', montantMensuel: 0, description: 'Billets conférences tech' },
      { id: 'livres', nom: 'Livres / Ressources', montantMensuel: 0, description: 'Livres techniques, abonnements' },
    ]
  },
  {
    id: 'remuneration',
    nom: 'Rémunérations Dirigeants',
    icon: 'Wallet',
    color: '#f97316',
    estRemuneration: true,
    lignes: [
      { id: 'salaire_amin', nom: 'Rémunération dirigeant Amin (SMIC)', montantMensuel: 1802, description: 'SMIC brut temps plein — Net : ~1 406 €/mois' },
      { id: 'charges_sociales_amin', nom: 'Charges sociales Amin', montantMensuel: 810, description: 'Charges patronales ~45% sur SMIC' },
      { id: 'salaire_manon', nom: 'Rémunération dirigeante Manon (mi-temps)', montantMensuel: 901, description: 'Mi-temps SMIC brut — Net : ~703 €/mois' },
      { id: 'charges_sociales_manon', nom: 'Charges sociales Manon', montantMensuel: 405, description: 'Charges patronales ~45% sur mi-temps SMIC' },
      { id: 'salaire_jordan', nom: 'Rémunération dirigeant Jordan', montantMensuel: 0, description: 'À définir — éditable' },
      { id: 'charges_sociales_jordan', nom: 'Charges sociales Jordan', montantMensuel: 0, description: 'À définir — éditable' },
    ]
  },
  {
    id: 'projet_pole_reno',
    nom: 'Projet Pôle Réno (temporaire)',
    icon: 'Zap',
    color: '#f43f5e',
    estTemporaire: true,
    lignes: [
      { id: 'pr_serveurs_weasyprint', nom: 'Serveurs dédiés Hetzner (workers WeasyPrint)', montantMensuel: 1500, description: 'Serveurs haute perf. pour génération PDF massive — ~200k fiches', temporaire: true, moisDebut: 0, moisFin: 3 },
      { id: 'pr_stockage_s3', nom: 'Stockage S3 (PDFs générés)', montantMensuel: 250, description: 'Object storage — ~200k PDFs × 600 Ko ≈ 120 Go', temporaire: true, moisDebut: 0, moisFin: 3 },
      { id: 'pr_redis_queue', nom: 'Redis + Queue (BullMQ workers)', montantMensuel: 250, description: 'Job queue — orchestration pipeline de génération', temporaire: true, moisDebut: 0, moisFin: 3 },
      { id: 'pr_api_streetview', nom: 'Google Street View Static API', montantMensuel: 325, description: '~200k requêtes × $7/1000 — photos façades bâtiments', temporaire: true, moisDebut: 0, moisFin: 3 },
      { id: 'pr_api_maps', nom: 'Google Maps Static API', montantMensuel: 100, description: '~200k requêtes × $2/1000 — cartes de situation', temporaire: true, moisDebut: 0, moisFin: 3 },
      { id: 'pr_api_geocoding', nom: 'Google Geocoding API', montantMensuel: 225, description: '~200k requêtes × $5/1000 — géolocalisation adresses', temporaire: true, moisDebut: 0, moisFin: 3 },
      { id: 'pr_api_ademe', nom: 'API Géo / ADEME / data.gouv', montantMensuel: 100, description: 'Enrichissement DPE, zones QPV, données bâtiments', temporaire: true, moisDebut: 0, moisFin: 3 },
    ]
  },
  {
    id: 'divers',
    nom: 'Divers',
    icon: 'Package',
    color: '#78716c',
    lignes: [
      { id: 'fournitures', nom: 'Fournitures de bureau', montantMensuel: 30, description: 'Papier, stylos, etc.' },
      { id: 'cafe_boissons', nom: 'Café / Boissons', montantMensuel: 20, description: 'Machine à café, boissons' },
      { id: 'imprevus', nom: 'Provision imprévus', montantMensuel: 100, description: 'Marge de sécurité' },
    ]
  },
];
