import { Settings, Package, Crown } from 'lucide-react'
import { WOLTIK_CONFIG } from '../../data/woltik'

const formatEur = (n) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n)

const tiers = [
  {
    id: 'setup',
    icon: Settings,
    title: 'Setup',
    price: WOLTIK_CONFIG.setup,
    period: 'unique',
    features: [
      'Configuration compte faiseur',
      'Import des données existantes',
      'Formation équipe terrain',
      'Paramétrage fiches CEE',
      'Intégration délégataire',
    ],
  },
  {
    id: 'standard',
    icon: Package,
    title: 'Standard',
    price: WOLTIK_CONFIG.standardMensuel,
    period: '/mois',
    features: [
      'Application mobile terrain',
      'Création dossiers CEE',
      'Photos géolocalisées',
      'Suivi statut dossiers',
      'Export PDF / CSV',
    ],
  },
  {
    id: 'premium',
    icon: Crown,
    title: 'Premium',
    price: WOLTIK_CONFIG.premiumMensuel,
    period: '/mois',
    recommended: true,
    features: [
      'Tout Standard inclus',
      'Tableaux de bord avancés',
      'Multi-équipes & permissions',
      'API délégataire temps réel',
      'Support prioritaire',
      'Alertes non-conformité',
    ],
  },
]

export default function WoltikPricing() {
  return (
    <section className="wk-pricing">
      <h2 className="wk-section-title">Grille tarifaire</h2>
      <div className="wk-pricing-grid">
        {tiers.map(t => {
          const Icon = t.icon
          return (
            <div key={t.id} className={`wk-price-card ${t.recommended ? 'wk-price-card-rec' : ''}`}>
              {t.recommended && <span className="wk-price-badge">Recommandé</span>}
              <div className="wk-price-icon" style={t.recommended ? { background: 'rgba(168,85,247,0.12)', color: '#a855f7' } : {}}>
                <Icon size={22} />
              </div>
              <h3 className="wk-price-title">{t.title}</h3>
              <div className="wk-price-amount">
                {formatEur(t.price)}
                <small>{t.period}</small>
              </div>
              <ul className="wk-price-features">
                {t.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
