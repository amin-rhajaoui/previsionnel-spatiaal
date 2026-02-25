export const WOLTIK_CONFIG = {
  setup: 2490,
  premiumMensuel: 990,
  standardMensuel: 490,
  ratioPremium: 0.4,
  ratioStandard: 0.6,
  moisDebutVente: 5, // Sep 2026 = index 5 (Avr=0)
  moisLabels: ['Avr', 'Mai', 'Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc', 'Jan', 'Fév', 'Mar'],
}

export const WOLTIK_SCENARIOS = {
  pessimiste: {
    id: 'pessimiste',
    label: 'Pessimiste',
    clientsInitiaux: 3,
    croissanceMois: 1,
  },
  realiste: {
    id: 'realiste',
    label: 'Réaliste',
    clientsInitiaux: 5,
    croissanceMois: 2,
  },
  optimiste: {
    id: 'optimiste',
    label: 'Optimiste',
    clientsInitiaux: 8,
    croissanceMois: 3,
  },
}

export const DELEGATAIRES = [
  { id: 1, nom: 'Effy (Groupe Effy)', secteur: 'Généraliste', faiseurs: 120, outilsActuels: 'Outils internes + Excel', potentiel: 5 },
  { id: 2, nom: 'Hellio', secteur: 'Généraliste', faiseurs: 95, outilsActuels: 'Plateforme propriétaire', potentiel: 5 },
  { id: 3, nom: 'Sonergia', secteur: 'Généraliste', faiseurs: 60, outilsActuels: 'Excel + emails', potentiel: 4 },
  { id: 4, nom: 'Primes Énergie (Vos Travaux Éco)', secteur: 'Généraliste', faiseurs: 45, outilsActuels: 'Tableurs + portail web', potentiel: 4 },
  { id: 5, nom: 'Économie d\'Énergie (GEO PLC)', secteur: 'Généraliste', faiseurs: 50, outilsActuels: 'Système interne ancien', potentiel: 4 },
  { id: 6, nom: 'TotalEnergies (via CertiNergy)', secteur: 'Énergie', faiseurs: 40, outilsActuels: 'Plateforme corporate', potentiel: 3 },
  { id: 7, nom: 'EDF (via CPCU / Dalkia)', secteur: 'Énergie', faiseurs: 35, outilsActuels: 'SI interne groupe', potentiel: 3 },
  { id: 8, nom: 'Engie', secteur: 'Énergie', faiseurs: 30, outilsActuels: 'SAP + modules internes', potentiel: 2 },
  { id: 9, nom: 'Certinergy & Solutions', secteur: 'Courtier CEE', faiseurs: 40, outilsActuels: 'Portail faiseur basique', potentiel: 5 },
  { id: 10, nom: 'Butagaz (Ariston Group)', secteur: 'Énergie', faiseurs: 25, outilsActuels: 'Tableurs', potentiel: 4 },
  { id: 11, nom: 'Cameo Energy', secteur: 'Courtier CEE', faiseurs: 30, outilsActuels: 'Excel + portail simple', potentiel: 5 },
  { id: 12, nom: 'Axénergie', secteur: 'Réseau artisans', faiseurs: 20, outilsActuels: 'Logiciel réseau propriétaire', potentiel: 4 },
  { id: 13, nom: 'Auchan Énergies', secteur: 'Distribution', faiseurs: 15, outilsActuels: 'Outils retail adaptés', potentiel: 3 },
  { id: 14, nom: 'Leclerc Énergies', secteur: 'Distribution', faiseurs: 15, outilsActuels: 'Excel + prestataires', potentiel: 3 },
  { id: 15, nom: 'NR-PRO', secteur: 'Tertiaire / Industrie', faiseurs: 25, outilsActuels: 'CRM + modules custom', potentiel: 4 },
  { id: 16, nom: 'GreenYellow', secteur: 'Énergie verte', faiseurs: 18, outilsActuels: 'Outils digitaux modernes', potentiel: 3 },
  { id: 17, nom: 'Dyneff', secteur: 'Distribution carburant', faiseurs: 15, outilsActuels: 'Logiciel métier + Excel', potentiel: 4 },
  { id: 18, nom: 'Antargaz (UGI)', secteur: 'Énergie', faiseurs: 18, outilsActuels: 'SI groupe', potentiel: 3 },
  { id: 19, nom: 'Primagaz', secteur: 'Énergie', faiseurs: 16, outilsActuels: 'Outils groupe SHV', potentiel: 3 },
  { id: 20, nom: 'Habitat Durable Énergie', secteur: 'Rénovation habitat', faiseurs: 20, outilsActuels: 'Excel + sous-traitance', potentiel: 5 },
  { id: 21, nom: 'SOLECO / Alterna', secteur: 'Énergie locale', faiseurs: 15, outilsActuels: 'Tableurs + email', potentiel: 4 },
]

export const AVANTAGES = [
  {
    id: 'mobile',
    icon: 'Smartphone',
    titre: 'Mobile native',
    description: 'Application mobile complète pour les techniciens sur le terrain. Saisie des données en temps réel, photos géolocalisées, signature client digitale.',
    vs: 'Formulaires papier + ressaisie bureau',
  },
  {
    id: 'tracabilite',
    icon: 'ScanLine',
    titre: 'Traçabilité complète',
    description: 'Chaque étape du chantier est horodatée et géolocalisée. Historique complet pour audits PNCEE et contrôles délégataires.',
    vs: 'Fichiers Excel dispersés, pas de preuve terrain',
  },
  {
    id: 'conformite',
    icon: 'ShieldCheck',
    titre: 'Non-conformité quasi nulle',
    description: 'Contrôles automatiques en temps réel : champs obligatoires, cohérence données, photos requises. Rejet impossible si le dossier est complet.',
    vs: 'Taux de rejet 15-25% sur dossiers papier',
  },
  {
    id: 'rapidite',
    icon: 'Zap',
    titre: 'Rapidité de traitement',
    description: 'Dossier complet dès la fin du chantier. Envoi instantané au délégataire. Délai de valorisation réduit de semaines à quelques jours.',
    vs: 'Cycle de 3-6 semaines avec allers-retours',
  },
  {
    id: 'volume',
    icon: 'Users',
    titre: 'Interface pensée volume',
    description: 'Tableaux de bord faiseur, suivi multi-chantiers, alertes automatiques, gestion d\'équipe. Conçu pour gérer des centaines de dossiers/mois.',
    vs: 'Gestion artisanale limitée à 20-30 dossiers/mois',
  },
  {
    id: 'reglementaire',
    icon: 'RefreshCw',
    titre: 'Mises à jour réglementaires',
    description: 'Les fiches CEE et barèmes sont mis à jour automatiquement. Aucun risque de travailler sur une fiche obsolète ou un calcul dépassé.',
    vs: 'Veille manuelle, erreurs fréquentes sur les barèmes',
  },
]
