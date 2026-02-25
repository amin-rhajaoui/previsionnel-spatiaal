import { TrendingUp, Settings, RefreshCw, Users } from 'lucide-react'
import { WOLTIK_SCENARIOS } from '../../data/woltik'
import { calculateScenario } from '../../utils/woltikCalculations'

const formatEur = (n) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n)

export default function WoltikForecast({ activeScenario, setActiveScenario }) {
  const scenario = WOLTIK_SCENARIOS[activeScenario]
  const { rows, totaux } = calculateScenario(scenario)
  const maxCA = Math.max(...rows.map(r => r.caMensuel))

  return (
    <section className="wk-forecast">
      <h2 className="wk-section-title">Prévisionnel 7 mois (Sep 2026 — Mar 2027)</h2>

      {/* Scenario pills */}
      <div className="wk-scenario-pills">
        {Object.values(WOLTIK_SCENARIOS).map(s => (
          <button
            key={s.id}
            className={`wk-pill ${activeScenario === s.id ? 'wk-pill-active' : ''}`}
            onClick={() => setActiveScenario(s.id)}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Summary cards */}
      <div className="wk-forecast-cards">
        <div className="wk-fcard">
          <div className="wk-fcard-icon" style={{ background: 'rgba(99,102,241,0.12)', color: '#6366f1' }}>
            <TrendingUp size={18} />
          </div>
          <div className="wk-fcard-content">
            <span className="wk-fcard-label">CA Total</span>
            <span className="wk-fcard-value">{formatEur(totaux.caTotal)}</span>
          </div>
        </div>
        <div className="wk-fcard">
          <div className="wk-fcard-icon" style={{ background: 'rgba(168,85,247,0.12)', color: '#a855f7' }}>
            <Settings size={18} />
          </div>
          <div className="wk-fcard-content">
            <span className="wk-fcard-label">Frais setup</span>
            <span className="wk-fcard-value">{formatEur(totaux.totalSetup)}</span>
          </div>
        </div>
        <div className="wk-fcard">
          <div className="wk-fcard-icon" style={{ background: 'rgba(16,185,129,0.12)', color: '#10b981' }}>
            <RefreshCw size={18} />
          </div>
          <div className="wk-fcard-content">
            <span className="wk-fcard-label">MRR final</span>
            <span className="wk-fcard-value">{formatEur(totaux.mrrFinal)}</span>
          </div>
        </div>
        <div className="wk-fcard">
          <div className="wk-fcard-icon" style={{ background: 'rgba(245,158,11,0.12)', color: '#f59e0b' }}>
            <Users size={18} />
          </div>
          <div className="wk-fcard-content">
            <span className="wk-fcard-label">Clients final</span>
            <span className="wk-fcard-value">{totaux.clientsFinal}</span>
          </div>
        </div>
      </div>

      {/* CSS bar chart */}
      <div className="wk-chart">
        <div className="wk-chart-bars">
          {rows.map((r) => {
            const setupPct = maxCA > 0 ? (r.setupMois / maxCA) * 100 : 0
            const mrrPct = maxCA > 0 ? (r.mrrTotal / maxCA) * 100 : 0
            return (
              <div key={r.moisIndex} className="wk-chart-col">
                <div className="wk-chart-bar-wrap" title={`${r.moisLabel}: ${formatEur(r.caMensuel)}`}>
                  <div className="wk-chart-bar-stack" style={{ height: `${setupPct + mrrPct}%` }}>
                    <div className="wk-chart-bar-mrr" style={{ flex: mrrPct }} />
                    <div className="wk-chart-bar-setup" style={{ flex: setupPct }} />
                  </div>
                </div>
                <span className="wk-chart-label">{r.moisLabel}</span>
              </div>
            )
          })}
        </div>
        <div className="wk-chart-legend">
          <span className="wk-chart-legend-item"><span className="wk-legend-dot wk-legend-mrr" /> MRR</span>
          <span className="wk-chart-legend-item"><span className="wk-legend-dot wk-legend-setup" /> Setup</span>
        </div>
      </div>

      {/* Detailed table */}
      <div className="wk-table-wrap">
        <table className="wk-table">
          <thead>
            <tr>
              <th>Mois</th>
              <th>Nvx clients</th>
              <th>Total clients</th>
              <th>Setup</th>
              <th>MRR Premium</th>
              <th>MRR Standard</th>
              <th>MRR Total</th>
              <th>CA Mensuel</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.moisIndex}>
                <td className="wk-td-label">{r.moisLabel}</td>
                <td>+{r.nouveauxClients}</td>
                <td className="wk-td-highlight">{r.cumulClients}</td>
                <td>{formatEur(r.setupMois)}</td>
                <td>{formatEur(r.mrrPremium)}</td>
                <td>{formatEur(r.mrrStandard)}</td>
                <td className="wk-td-highlight">{formatEur(r.mrrTotal)}</td>
                <td className="wk-td-total">{formatEur(r.caMensuel)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="wk-table-totals">
              <td>Total</td>
              <td>{totaux.clientsFinal}</td>
              <td />
              <td>{formatEur(totaux.totalSetup)}</td>
              <td colSpan={2} />
              <td>{formatEur(totaux.totalMRR)}</td>
              <td className="wk-td-grand">{formatEur(totaux.caTotal)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  )
}
