import { useState, useRef, useCallback, useMemo } from 'react'
import { CATEGORIES, MOIS } from './data/expenses'
import { OPTION_SETS } from './data/options'
import useTheme from './hooks/useTheme'
import Header from './components/Header'
import SummaryCards from './components/SummaryCards'
import DashboardPoleReno from './components/DashboardPoleReno'
import MonthlyTable from './components/MonthlyTable'
import AnnualTable from './components/AnnualTable'
import WoltikPage from './components/woltik/WoltikPage'
import './App.css'

function App() {
  const { theme, toggleTheme } = useTheme()
  const [currentPage, setCurrentPage] = useState('charges')
  const [activeOptions, setActiveOptions] = useState(() => {
    const init = {}
    OPTION_SETS.forEach(os => { init[os.id] = os.defaultOption })
    return init
  })

  const [showPoleReno, setShowPoleReno] = useState(true)
  const [data, setData] = useState(() => initData())
  const [collapsedCategories, setCollapsedCategories] = useState({})
  const [showAnnuel, setShowAnnuel] = useState(false)
  const printRef = useRef(null)

  function initData() {
    const d = {}
    CATEGORIES.forEach(cat => {
      cat.lignes.forEach(ligne => {
        d[ligne.id] = Array(12).fill(0).map((_, i) => {
          if (ligne.ponctuel) {
            return i === (ligne.moisPonctuel ?? 0) ? ligne.montantMensuel : 0
          }
          if (ligne.temporaire) {
            return i >= (ligne.moisDebut ?? 0) && i <= (ligne.moisFin ?? 11) ? ligne.montantMensuel : 0
          }
          return ligne.montantMensuel
        })
      })
    })
    OPTION_SETS.forEach(os => {
      Object.values(os.options).forEach(opt => {
        opt.injectedLines.forEach(inj => {
          inj.lines.forEach(line => {
            if (!d[line.id]) {
              d[line.id] = Array(12).fill(line.montantMensuel)
            }
          })
        })
      })
    })
    return d
  }

  const toggleOption = useCallback((optionSetId, optionKey) => {
    setActiveOptions(prev => ({ ...prev, [optionSetId]: optionKey }))

    const os = OPTION_SETS.find(o => o.id === optionSetId)
    if (!os) return
    const opt = os.options[optionKey]
    if (!opt) return

    setData(prev => {
      const newData = { ...prev }
      Object.entries(opt.overrides).forEach(([id, val]) => {
        newData[id] = Array(12).fill(val)
      })
      Object.values(os.options).forEach(o => {
        o.injectedLines.forEach(inj => {
          inj.lines.forEach(line => {
            newData[line.id] = Array(12).fill(0)
          })
        })
      })
      opt.injectedLines.forEach(inj => {
        inj.lines.forEach(line => {
          newData[line.id] = Array(12).fill(line.montantMensuel)
        })
      })
      return newData
    })
  }, [])

  const togglePoleReno = useCallback(() => {
    setShowPoleReno(prev => !prev)
  }, [])

  // Build effective categories: inject option lines + filter Pôle Réno
  const effectiveCategories = useMemo(() => {
    let cats = CATEGORIES.map(cat => {
      let extraLines = []
      OPTION_SETS.forEach(os => {
        const activeKey = activeOptions[os.id]
        const opt = os.options[activeKey]
        if (!opt) return
        opt.injectedLines.forEach(inj => {
          if (inj.targetCategory === cat.id) {
            extraLines = [...extraLines, ...inj.lines.map(l => ({ ...l, injected: true }))]
          }
        })
      })
      if (extraLines.length === 0) return cat
      return { ...cat, lignes: [...cat.lignes, ...extraLines] }
    })
    if (!showPoleReno) {
      cats = cats.filter(c => c.id !== 'projet_pole_reno')
    }
    return cats
  }, [activeOptions, showPoleReno])

  const categoryOptionSets = useMemo(() => {
    const map = {}
    OPTION_SETS.forEach(os => {
      os.targetCategories.forEach(catId => {
        if (!map[catId]) map[catId] = []
        map[catId].push(os)
      })
    })
    return map
  }, [])

  // Pôle Réno stats (always computed from source data, regardless of toggle)
  const poleRenoStats = useMemo(() => {
    const cat = CATEGORIES.find(c => c.id === 'projet_pole_reno')
    if (!cat) return null
    const serveurIds = ['pr_serveurs_weasyprint', 'pr_stockage_s3', 'pr_redis_queue']
    const apiIds = ['pr_api_streetview', 'pr_api_maps', 'pr_api_geocoding', 'pr_api_ademe']

    const computeTotal = (ids) => ids.reduce((sum, id) => {
      const ligne = cat.lignes.find(l => l.id === id)
      if (!ligne) return sum
      const months = (ligne.moisFin ?? 11) - (ligne.moisDebut ?? 0) + 1
      return sum + ligne.montantMensuel * months
    }, 0)

    const totalServeurs = computeTotal(serveurIds)
    const totalAPIs = computeTotal(apiIds)
    const totalProjet = totalServeurs + totalAPIs
    const mensuelProjet = cat.lignes.reduce((s, l) => s + l.montantMensuel, 0)

    return { totalServeurs, totalAPIs, totalProjet, mensuelProjet, duree: 4 }
  }, [])

  const updateCell = useCallback((ligneId, moisIndex, value) => {
    const num = parseFloat(value) || 0
    setData(prev => {
      const newData = { ...prev }
      newData[ligneId] = [...prev[ligneId]]
      newData[ligneId][moisIndex] = num
      return newData
    })
  }, [])

  const applyToAllMonths = useCallback((ligneId, value) => {
    const num = parseFloat(value) || 0
    setData(prev => ({ ...prev, [ligneId]: Array(12).fill(num) }))
  }, [])

  const getTotalLigne = (ligneId) =>
    data[ligneId]?.reduce((s, v) => s + v, 0) || 0

  const getTotalCategorieMois = (cat, moisIndex) =>
    cat.lignes.reduce((s, l) => s + (data[l.id]?.[moisIndex] || 0), 0)

  const getTotalCategorie = (cat) =>
    cat.lignes.reduce((s, l) => s + getTotalLigne(l.id), 0)

  const getTotalGeneralMois = (moisIndex) =>
    effectiveCategories.reduce((s, c) => s + getTotalCategorieMois(c, moisIndex), 0)

  const getTotalGeneral = () =>
    effectiveCategories.reduce((s, c) => s + getTotalCategorie(c), 0)

  const getTotalHorsRemuneration = () =>
    effectiveCategories.filter(c => !c.estRemuneration).reduce((s, c) => s + getTotalCategorie(c), 0)

  const getTotalHorsRemunerationMois = (moisIndex) =>
    effectiveCategories.filter(c => !c.estRemuneration).reduce((s, c) => s + getTotalCategorieMois(c, moisIndex), 0)

  const toggleCategory = (catId) =>
    setCollapsedCategories(prev => ({ ...prev, [catId]: !prev[catId] }))

  const formatMontant = (montant) =>
    new Intl.NumberFormat('fr-FR', {
      style: 'currency', currency: 'EUR',
      minimumFractionDigits: 0, maximumFractionDigits: 0,
    }).format(montant)

  const handleExportPDF = async () => {
    const html2pdf = (await import('html2pdf.js')).default
    html2pdf().set({
      margin: [5, 5, 5, 5],
      filename: 'previsionnel-spatiaal-2026-2027.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, scrollX: 0, scrollY: 0 },
      jsPDF: { unit: 'mm', format: 'a3', orientation: 'landscape' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    }).from(printRef.current).save()
  }

  const handleExportCSV = () => {
    let csv = 'Catégorie;Poste;' + MOIS.join(';') + ';Total Annuel\n'
    effectiveCategories.forEach(cat => {
      cat.lignes.forEach(ligne => {
        const values = data[ligne.id] || Array(12).fill(0)
        csv += `${cat.nom};${ligne.nom};${values.join(';')};${values.reduce((a, b) => a + b, 0)}\n`
      })
      const catTotals = MOIS.map((_, i) => getTotalCategorieMois(cat, i))
      csv += `${cat.nom};SOUS-TOTAL;${catTotals.join(';')};${getTotalCategorie(cat)}\n`
    })
    csv += `TOTAL;;${MOIS.map((_, i) => getTotalGeneralMois(i)).join(';')};${getTotalGeneral()}\n`
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'previsionnel-spatiaal-2026-2027.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  // Total without Pôle Réno (for dashboard comparison)
  const totalSansPoleReno = useMemo(() => {
    return CATEGORIES
      .filter(c => c.id !== 'projet_pole_reno')
      .map(cat => {
        let lines = [...cat.lignes]
        OPTION_SETS.forEach(os => {
          const activeKey = activeOptions[os.id]
          const opt = os.options[activeKey]
          if (!opt) return
          opt.injectedLines.forEach(inj => {
            if (inj.targetCategory === cat.id) {
              lines = [...lines, ...inj.lines]
            }
          })
        })
        return lines.reduce((s, l) => s + (data[l.id]?.reduce((a, b) => a + b, 0) || 0), 0)
      })
      .reduce((a, b) => a + b, 0)
  }, [data, activeOptions])

  const sharedProps = {
    data, collapsedCategories, toggleCategory,
    getTotalLigne, getTotalCategorieMois, getTotalCategorie,
    getTotalGeneralMois, getTotalGeneral,
    getTotalHorsRemunerationMois, getTotalHorsRemuneration,
    formatMontant,
    categories: effectiveCategories,
    activeOptions, toggleOption, categoryOptionSets,
  }

  return (
    <div className="app">
      <Header
        showAnnuel={showAnnuel}
        setShowAnnuel={setShowAnnuel}
        onExportCSV={handleExportCSV}
        onExportPDF={handleExportPDF}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main className="main">
        {currentPage === 'charges' ? (
          <>
            <SummaryCards
              totalGeneral={getTotalGeneral()}
              totalHorsRemun={getTotalHorsRemuneration()}
              data={data}
              formatMontant={formatMontant}
              activeOptions={activeOptions}
              toggleOption={toggleOption}
            />

            <DashboardPoleReno
              showPoleReno={showPoleReno}
              togglePoleReno={togglePoleReno}
              stats={poleRenoStats}
              totalAvec={showPoleReno ? getTotalGeneral() : totalSansPoleReno + (poleRenoStats?.totalProjet || 0)}
              totalSans={totalSansPoleReno}
              formatMontant={formatMontant}
            />

            <div ref={printRef}>
              <div className="print-header">
                <h1>spatiaal — Prévisionnel Avril 2026 → Mars 2027</h1>
                <p>SAS · Associés : Manon, Jordan, Amin</p>
              </div>

              {showAnnuel ? (
                <AnnualTable {...sharedProps} />
              ) : (
                <MonthlyTable
                  {...sharedProps}
                  updateCell={updateCell}
                  applyToAllMonths={applyToAllMonths}
                />
              )}
            </div>
          </>
        ) : (
          <WoltikPage />
        )}
      </main>

      <footer className="footer">
        <p>spatiaal — Prévisionnel Avr. 2026 → Mar. 2027 — Généré le {new Date().toLocaleDateString('fr-FR')}</p>
      </footer>
    </div>
  )
}

export default App
