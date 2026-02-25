import { FileDown, FileSpreadsheet, BarChart3, CalendarRange, Rocket } from 'lucide-react'

export default function Header({ showAnnuel, setShowAnnuel, onExportCSV, onExportPDF }) {
  return (
    <header className="header">
      <div className="header-left">
        <div className="header-brand">
          <div className="brand-icon">
            <Rocket size={22} />
          </div>
          <div>
            <h1 className="brand-name">spatiaal</h1>
            <div className="brand-badge">SAS</div>
          </div>
        </div>
        <div className="header-info">
          <h2 className="header-title">Prévisionnel Année 1</h2>
          <p className="header-period">Avril 2026 → Mars 2027</p>
          <p className="header-team">Manon · Jordan · Amin</p>
        </div>
      </div>
      <div className="header-actions">
        <button
          className={`btn-toggle ${!showAnnuel ? 'active' : ''}`}
          onClick={() => setShowAnnuel(false)}
        >
          <CalendarRange size={15} />
          Mensuel
        </button>
        <button
          className={`btn-toggle ${showAnnuel ? 'active' : ''}`}
          onClick={() => setShowAnnuel(true)}
        >
          <BarChart3 size={15} />
          Annuel
        </button>
        <div className="header-divider" />
        <button className="btn-export" onClick={onExportCSV}>
          <FileSpreadsheet size={15} />
          CSV
        </button>
        <button className="btn-export btn-export-primary" onClick={onExportPDF}>
          <FileDown size={15} />
          PDF
        </button>
      </div>
    </header>
  )
}
