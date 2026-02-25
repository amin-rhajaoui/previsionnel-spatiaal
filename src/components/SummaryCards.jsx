import { TrendingUp, TrendingDown, Users } from 'lucide-react'
import { OPTION_SETS } from '../data/options'

export default function SummaryCards({ totalGeneral, totalHorsRemun, data, formatMontant, activeOptions, toggleOption }) {
  const totalRemun = totalGeneral - totalHorsRemun

  // Get Amin net from active option
  const aminOptionSet = OPTION_SETS.find(os => os.id === 'amin_contrat')
  const aminActiveKey = activeOptions?.['amin_contrat'] || 'A'
  const aminOption = aminOptionSet?.options[aminActiveKey]
  const netAmin = aminOption?.netMensuel ?? Math.round((data['salaire_amin']?.[0] || 0) * 0.78)
  const netAminLabel = aminOption?.netLabel ?? 'SMIC dirigeant temps plein'

  const netManon = Math.round((data['salaire_manon']?.[0] || 0) * 0.78)
  const netJordan = Math.round((data['salaire_jordan']?.[0] || 0) * 0.78)

  return (
    <div className="cards-grid">
      <div className="summary-card card-gradient-purple">
        <div className="card-icon-wrap">
          <TrendingUp size={20} />
        </div>
        <div className="card-content">
          <span className="card-label">Total charges annuelles</span>
          <span className="card-amount">{formatMontant(totalGeneral)}</span>
          <span className="card-detail">{formatMontant(Math.round(totalGeneral / 12))} / mois</span>
        </div>
      </div>

      <div className="summary-card card-gradient-green">
        <div className="card-icon-wrap">
          <TrendingDown size={20} />
        </div>
        <div className="card-content">
          <span className="card-label">Hors rémunérations</span>
          <span className="card-amount">{formatMontant(totalHorsRemun)}</span>
          <span className="card-detail">{formatMontant(Math.round(totalHorsRemun / 12))} / mois</span>
        </div>
      </div>

      <div className="summary-card card-gradient-orange">
        <div className="card-icon-wrap">
          <Users size={20} />
        </div>
        <div className="card-content">
          <span className="card-label">Coût rémunérations</span>
          <span className="card-amount">{formatMontant(totalRemun)}</span>
          <span className="card-detail">{formatMontant(Math.round(totalRemun / 12))} / mois (brut + charges)</span>
        </div>
      </div>

      <div className="summary-card card-net card-net-amin">
        <div className="card-avatar">A</div>
        <div className="card-content">
          <span className="card-label">
            Net — Amin
            <span className="card-option-badge">Option {aminActiveKey}</span>
          </span>
          <span className="card-amount">{formatMontant(netAmin)}<small>/mois</small></span>
          <span className="card-detail">{netAminLabel}</span>
          {aminOptionSet && (
            <div className="card-toggle">
              {Object.entries(aminOptionSet.options).map(([key, opt]) => (
                <button
                  key={key}
                  className={`card-toggle-btn ${aminActiveKey === key ? 'card-toggle-btn-active' : ''}`}
                  onClick={() => toggleOption(aminOptionSet.id, key)}
                >
                  {key}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="summary-card card-net card-net-manon">
        <div className="card-avatar">M</div>
        <div className="card-content">
          <span className="card-label">Net — Manon</span>
          <span className="card-amount">{formatMontant(netManon)}<small>/mois</small></span>
          <span className="card-detail">Dirigeante mi-temps</span>
        </div>
      </div>

      <div className="summary-card card-net card-net-jordan">
        <div className="card-avatar">J</div>
        <div className="card-content">
          <span className="card-label">Net — Jordan</span>
          <span className="card-amount">
            {netJordan > 0 ? <>{formatMontant(netJordan)}<small>/mois</small></> : '—'}
          </span>
          <span className="card-detail">{netJordan > 0 ? 'Dirigeant' : 'À définir'}</span>
        </div>
      </div>
    </div>
  )
}
