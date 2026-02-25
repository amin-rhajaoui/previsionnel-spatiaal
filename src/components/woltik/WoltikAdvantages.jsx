import { Smartphone, ScanLine, ShieldCheck, Zap, Users, RefreshCw } from 'lucide-react'
import { AVANTAGES } from '../../data/woltik'

const iconMap = { Smartphone, ScanLine, ShieldCheck, Zap, Users, RefreshCw }

export default function WoltikAdvantages() {
  return (
    <section className="wk-advantages">
      <h2 className="wk-section-title">Avantages concurrentiels</h2>
      <div className="wk-adv-grid">
        {AVANTAGES.map(a => {
          const Icon = iconMap[a.icon]
          return (
            <div key={a.id} className="wk-adv-card">
              <div className="wk-adv-icon">
                {Icon && <Icon size={20} />}
              </div>
              <h3 className="wk-adv-title">{a.titre}</h3>
              <p className="wk-adv-desc">{a.description}</p>
              <div className="wk-adv-vs">
                <span className="wk-adv-vs-label">vs</span>
                <span className="wk-adv-vs-text">{a.vs}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
