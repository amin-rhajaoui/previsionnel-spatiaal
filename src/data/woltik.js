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

// Sources : Liste officielle P6 (Ministère Écologie), sites web délégataires,
// calculcee.fr, gc2e.fr, sites corporate (Hellio, Effy, EBS, Sonergia, Drapo, etc.)
// Nb faiseurs = estimations publiques (sites web, communiqués presse, LinkedIn)
export const DELEGATAIRES = [
  { id: 1, nom: 'Hellio Solutions (ex Geo PLC)', secteur: 'Résidentiel / Tertiaire / Industrie', faiseurs: 6500, outilsActuels: 'Hellio Pro (plateforme propriétaire)', potentiel: 3 },
  { id: 2, nom: 'Effy (Chauffage + Connect + Rénov)', secteur: 'Résidentiel', faiseurs: 5000, outilsActuels: 'Effy Pro (plateforme propriétaire)', potentiel: 3 },
  { id: 3, nom: 'Drapo', secteur: 'Résidentiel / Tertiaire', faiseurs: 3500, outilsActuels: 'Plateforme propriétaire', potentiel: 4 },
  { id: 4, nom: 'Certinergy & Solutions (ENGIE)', secteur: 'Résidentiel / Tertiaire / Industrie', faiseurs: 3000, outilsActuels: 'Plateforme interne groupe ENGIE', potentiel: 3 },
  { id: 5, nom: 'Abokine / Adeena Résidentiel', secteur: 'Résidentiel / Tertiaire', faiseurs: 2000, outilsActuels: 'OdiCEE (plateforme propriétaire)', potentiel: 4 },
  { id: 6, nom: 'Sonergia', secteur: 'Résidentiel / Tertiaire / Collectivités', faiseurs: 1500, outilsActuels: 'Réseau Concerto + plateforme interne', potentiel: 4 },
  { id: 7, nom: 'EBS Énergie', secteur: 'Résidentiel / Tertiaire / Industrie / Agricole', faiseurs: 700, outilsActuels: 'Pixel CRM + espace partenaire en ligne', potentiel: 5 },
  { id: 8, nom: 'Économie d\'Énergie (La Poste)', secteur: 'Multi-sectoriel / Collectivités', faiseurs: 500, outilsActuels: 'Plateforme interne + réseau La Poste', potentiel: 3 },
  { id: 9, nom: 'Objectif EcoÉnergie', secteur: 'Résidentiel / Collectivités / Industrie', faiseurs: 400, outilsActuels: 'Plateforme interne', potentiel: 5 },
  { id: 10, nom: 'Teksial / Promée (ENGIE)', secteur: 'Résidentiel / Tertiaire / Industrie', faiseurs: 350, outilsActuels: 'Promée (plateforme grand public)', potentiel: 3 },
  { id: 11, nom: 'Loris ENR (partenaire CAPEB)', secteur: 'Résidentiel / Tertiaire', faiseurs: 300, outilsActuels: 'Plateforme interne + réseau CAPEB', potentiel: 4 },
  { id: 12, nom: 'TotalEnergies Marketing France', secteur: 'Multi-sectoriel / Carburants', faiseurs: 250, outilsActuels: 'Plateforme corporate interne', potentiel: 2 },
  { id: 13, nom: 'Capital Energy', secteur: 'Habitat / Tertiaire / Collectivités', faiseurs: 200, outilsActuels: 'Plateforme interne (ISO 9001)', potentiel: 4 },
  { id: 14, nom: 'Premium Energy', secteur: 'Multi-sectoriel', faiseurs: 180, outilsActuels: 'Premium Logic (espace pro)', potentiel: 5 },
  { id: 15, nom: 'Vos Travaux Éco', secteur: 'Résidentiel / Professionnels', faiseurs: 150, outilsActuels: 'Plateforme interne', potentiel: 5 },
  { id: 16, nom: 'Acciona Energia France (ex Eqinov)', secteur: 'Industrie / Tertiaire', faiseurs: 120, outilsActuels: 'Simulateur CEE en ligne', potentiel: 4 },
  { id: 17, nom: 'GreenYellow (Casino)', secteur: 'Industrie / Tertiaire', faiseurs: 100, outilsActuels: 'Plateforme interne B2B', potentiel: 3 },
  { id: 18, nom: 'AKEA Énergies (ex Geo Énergie)', secteur: 'Multi-sectoriel', faiseurs: 80, outilsActuels: 'Outils internes', potentiel: 4 },
  { id: 19, nom: 'ENR\'CERT', secteur: 'Multi-sectoriel', faiseurs: 60, outilsActuels: 'Non spécifié', potentiel: 4 },
  { id: 20, nom: 'ENNEO', secteur: 'Résidentiel', faiseurs: 50, outilsActuels: 'Plateforme Coup de Pouce', potentiel: 4 },
  { id: 21, nom: 'Oaan Consulting', secteur: 'Multi-sectoriel', faiseurs: 40, outilsActuels: 'Non spécifié', potentiel: 5 },
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
