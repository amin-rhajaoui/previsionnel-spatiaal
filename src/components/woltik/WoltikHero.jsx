import { Rocket, Settings, CreditCard, Crown } from 'lucide-react'
import { WOLTIK_CONFIG } from '../../data/woltik'

const formatEur = (n) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n)

export default function WoltikHero() {
  return (
    <section className="wk-hero">
      <div className="wk-hero-header">
        <div className="wk-hero-icon">
          <Rocket size={24} />
        </div>
        <div>
          <h1 className="wk-hero-title">Prévisionnel Chiffre d'Affaires — Woltik</h1>
          <p className="wk-hero-subtitle">Logiciel SaaS de gestion des dossiers CEE pour les faiseurs de travaux</p>
        </div>
      </div>

      <p className="wk-hero-desc">
        Woltik est une solution mobile-first permettant aux faiseurs CEE de créer, suivre et soumettre leurs dossiers de certificats d'économies d'énergie en temps réel. Le marché CEE représente plus de 700 faiseurs actifs travaillant avec 21 délégataires majeurs.
      </p>

      <div className="wk-hero-metrics">
        <div className="wk-hero-metric">
          <div className="wk-hero-metric-icon" style={{ background: 'rgba(99,102,241,0.12)', color: '#6366f1' }}>
            <Settings size={18} />
          </div>
          <div>
            <span className="wk-hero-metric-label">Setup</span>
            <span className="wk-hero-metric-value">{formatEur(WOLTIK_CONFIG.setup)}</span>
            <span className="wk-hero-metric-detail">unique / client</span>
          </div>
        </div>
        <div className="wk-hero-metric">
          <div className="wk-hero-metric-icon" style={{ background: 'rgba(168,85,247,0.12)', color: '#a855f7' }}>
            <Crown size={18} />
          </div>
          <div>
            <span className="wk-hero-metric-label">Premium</span>
            <span className="wk-hero-metric-value">{formatEur(WOLTIK_CONFIG.premiumMensuel)}<small>/mois</small></span>
            <span className="wk-hero-metric-detail">40 % des clients</span>
          </div>
        </div>
        <div className="wk-hero-metric">
          <div className="wk-hero-metric-icon" style={{ background: 'rgba(16,185,129,0.12)', color: '#10b981' }}>
            <CreditCard size={18} />
          </div>
          <div>
            <span className="wk-hero-metric-label">Standard</span>
            <span className="wk-hero-metric-value">{formatEur(WOLTIK_CONFIG.standardMensuel)}<small>/mois</small></span>
            <span className="wk-hero-metric-detail">60 % des clients</span>
          </div>
        </div>
      </div>
    </section>
  )
}
