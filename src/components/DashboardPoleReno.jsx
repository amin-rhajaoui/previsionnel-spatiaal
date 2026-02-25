import { Zap, Server, Globe, TrendingUp, TrendingDown } from 'lucide-react'

export default function DashboardPoleReno({ showPoleReno, togglePoleReno, stats, totalAvec, totalSans, formatMontant }) {
  if (!stats) return null

  const diff = totalAvec - totalSans
  const mensuelSans = Math.round(totalSans / 12)
  const mensuelAvec = Math.round(totalAvec / 12)

  return (
    <div className="dashboard-pr">
      {/* Header row: title + toggle */}
      <div className="dashboard-pr-header">
        <div className="dashboard-pr-title">
          <div className="dashboard-pr-icon">
            <Zap size={18} />
          </div>
          <div>
            <h3>Projet Pôle Réno</h3>
            <p>Génération massive ~200k fiches PDF — Avr. à Juil. 2026</p>
          </div>
        </div>
        <button
          className={`dashboard-pr-toggle ${showPoleReno ? 'dashboard-pr-toggle-on' : ''}`}
          onClick={togglePoleReno}
        >
          <span className="dashboard-pr-toggle-dot" />
          <span>{showPoleReno ? 'Inclus' : 'Exclu'}</span>
        </button>
      </div>

      {/* Metrics row */}
      <div className="dashboard-pr-metrics">
        <div className="dashboard-pr-metric dashboard-pr-metric-total">
          <div className="dashboard-pr-metric-icon" style={{ background: 'rgba(244, 63, 94, 0.12)', color: '#f43f5e' }}>
            <Zap size={16} />
          </div>
          <div className="dashboard-pr-metric-content">
            <span className="dashboard-pr-metric-label">Coût total projet</span>
            <span className="dashboard-pr-metric-value">{formatMontant(stats.totalProjet)}</span>
            <span className="dashboard-pr-metric-detail">{stats.duree} mois — {formatMontant(stats.mensuelProjet)}/mois</span>
          </div>
        </div>

        <div className="dashboard-pr-metric">
          <div className="dashboard-pr-metric-icon" style={{ background: 'rgba(99, 102, 241, 0.12)', color: '#6366f1' }}>
            <Server size={16} />
          </div>
          <div className="dashboard-pr-metric-content">
            <span className="dashboard-pr-metric-label">Serveurs</span>
            <span className="dashboard-pr-metric-value">{formatMontant(stats.totalServeurs)}</span>
            <span className="dashboard-pr-metric-detail">Hetzner + S3 + Redis</span>
          </div>
        </div>

        <div className="dashboard-pr-metric">
          <div className="dashboard-pr-metric-icon" style={{ background: 'rgba(16, 185, 129, 0.12)', color: '#10b981' }}>
            <Globe size={16} />
          </div>
          <div className="dashboard-pr-metric-content">
            <span className="dashboard-pr-metric-label">APIs</span>
            <span className="dashboard-pr-metric-value">{formatMontant(stats.totalAPIs)}</span>
            <span className="dashboard-pr-metric-detail">Street View + Maps + Geocoding</span>
          </div>
        </div>

        <div className="dashboard-pr-metric">
          <div className="dashboard-pr-metric-icon" style={{ background: 'rgba(245, 158, 11, 0.12)', color: '#f59e0b' }}>
            <TrendingUp size={16} />
          </div>
          <div className="dashboard-pr-metric-content">
            <span className="dashboard-pr-metric-label">Impact mensuel (Avr–Juil)</span>
            <span className="dashboard-pr-metric-value">+{formatMontant(stats.mensuelProjet)}</span>
            <span className="dashboard-pr-metric-detail">sur 4 mois puis 0 €</span>
          </div>
        </div>
      </div>

      {/* Comparison bar */}
      <div className="dashboard-pr-comparison">
        <div className="dashboard-pr-comp-row">
          <div className="dashboard-pr-comp-label">
            <TrendingDown size={14} />
            <span>Sans projet</span>
          </div>
          <div className="dashboard-pr-comp-bar-wrap">
            <div
              className="dashboard-pr-comp-bar dashboard-pr-comp-bar-sans"
              style={{ width: `${totalAvec > 0 ? (totalSans / totalAvec) * 100 : 100}%` }}
            />
          </div>
          <div className="dashboard-pr-comp-values">
            <span className="dashboard-pr-comp-annual">{formatMontant(totalSans)}<small>/an</small></span>
            <span className="dashboard-pr-comp-monthly">{formatMontant(mensuelSans)}<small>/mois moy.</small></span>
          </div>
        </div>
        <div className="dashboard-pr-comp-row">
          <div className="dashboard-pr-comp-label">
            <TrendingUp size={14} />
            <span>Avec projet</span>
          </div>
          <div className="dashboard-pr-comp-bar-wrap">
            <div
              className="dashboard-pr-comp-bar dashboard-pr-comp-bar-avec"
              style={{ width: '100%' }}
            />
          </div>
          <div className="dashboard-pr-comp-values">
            <span className="dashboard-pr-comp-annual">{formatMontant(totalAvec)}<small>/an</small></span>
            <span className="dashboard-pr-comp-monthly">{formatMontant(mensuelAvec)}<small>/mois moy.</small></span>
          </div>
        </div>
        <div className="dashboard-pr-comp-diff">
          <span>Surcoût projet : <strong>+{formatMontant(diff)}</strong> sur l'exercice</span>
        </div>
      </div>
    </div>
  )
}
