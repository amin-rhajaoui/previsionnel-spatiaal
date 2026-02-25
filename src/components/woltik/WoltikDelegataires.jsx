import { Building2, Users, TrendingUp } from 'lucide-react'
import { DELEGATAIRES } from '../../data/woltik'
import { calculateDelegataireRevenue } from '../../utils/woltikCalculations'

const formatEur = (n) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n)

export default function WoltikDelegataires() {
  const enriched = DELEGATAIRES
    .map(d => ({ ...d, revenue: calculateDelegataireRevenue(d) }))
    .sort((a, b) => b.revenue.totalAnnee1 - a.revenue.totalAnnee1)

  const totalFaiseurs = DELEGATAIRES.reduce((s, d) => s + d.faiseurs, 0)
  const totalCA = enriched.reduce((s, d) => s + d.revenue.totalAnnee1, 0)

  return (
    <section className="wk-delegataires">
      <h2 className="wk-section-title">Marché délégataires CEE</h2>

      <div className="wk-deleg-intro">
        <p>
          Le marché des CEE fonctionne via un modèle <strong>délégataire → faiseurs</strong>. Chaque délégataire (obligé ou mandataire) travaille avec un réseau de faiseurs de travaux qui réalisent les chantiers. Lorsqu'un délégataire impose un outil à ses faiseurs, <strong>tout le réseau convertit</strong>.
        </p>
        <p>
          Un partenariat stratégique avec un seul délégataire peut générer l'adoption de dizaines voire centaines de licences Woltik simultanément.
        </p>
      </div>

      <div className="wk-deleg-stats">
        <div className="wk-deleg-stat">
          <div className="wk-deleg-stat-icon" style={{ background: 'rgba(99,102,241,0.12)', color: '#6366f1' }}>
            <Building2 size={18} />
          </div>
          <div>
            <span className="wk-deleg-stat-value">21</span>
            <span className="wk-deleg-stat-label">Délégataires</span>
          </div>
        </div>
        <div className="wk-deleg-stat">
          <div className="wk-deleg-stat-icon" style={{ background: 'rgba(16,185,129,0.12)', color: '#10b981' }}>
            <Users size={18} />
          </div>
          <div>
            <span className="wk-deleg-stat-value">~{totalFaiseurs}</span>
            <span className="wk-deleg-stat-label">Faiseurs estimés</span>
          </div>
        </div>
        <div className="wk-deleg-stat">
          <div className="wk-deleg-stat-icon" style={{ background: 'rgba(245,158,11,0.12)', color: '#f59e0b' }}>
            <TrendingUp size={18} />
          </div>
          <div>
            <span className="wk-deleg-stat-value">{formatEur(totalCA)}</span>
            <span className="wk-deleg-stat-label">CA potentiel année 1</span>
          </div>
        </div>
      </div>

      <div className="wk-table-wrap">
        <table className="wk-table wk-table-deleg">
          <thead>
            <tr>
              <th>#</th>
              <th>Nom</th>
              <th>Secteur</th>
              <th>Faiseurs</th>
              <th>Outils actuels</th>
              <th>CA potentiel an 1</th>
            </tr>
          </thead>
          <tbody>
            {enriched.map((d, i) => (
              <tr key={d.id}>
                <td className="wk-td-rank">{i + 1}</td>
                <td className="wk-td-name">{d.nom}</td>
                <td className="wk-td-sector">{d.secteur}</td>
                <td className="wk-td-highlight">{d.faiseurs}</td>
                <td className="wk-td-tools">{d.outilsActuels}</td>
                <td className="wk-td-total">{formatEur(d.revenue.totalAnnee1)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="wk-table-totals">
              <td colSpan={3}>Total</td>
              <td className="wk-td-highlight">{totalFaiseurs}</td>
              <td />
              <td className="wk-td-grand">{formatEur(totalCA)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  )
}
