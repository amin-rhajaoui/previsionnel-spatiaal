import { ChevronDown, ChevronRight } from 'lucide-react'
import { MOIS_COURTS } from '../data/expenses'
import CategoryIcon from './CategoryIcon'
import CellInput from './CellInput'
import ApplyAllButton from './ApplyAllButton'
import OptionToggle from './OptionToggle'

export default function MonthlyTable({
  data,
  categories,
  collapsedCategories,
  toggleCategory,
  updateCell,
  applyToAllMonths,
  getTotalLigne,
  getTotalCategorieMois,
  getTotalCategorie,
  getTotalGeneralMois,
  getTotalGeneral,
  getTotalHorsRemunerationMois,
  getTotalHorsRemuneration,
  formatMontant,
  activeOptions,
  toggleOption,
  categoryOptionSets,
}) {
  const colCount = MOIS_COURTS.length + 3 // label + months + total + action

  return (
    <div className="table-wrapper">
      <div className="table-scroll">
        <table className="prev-table">
          <thead>
            <tr>
              <th className="col-label sticky-col">Poste de dépense</th>
              {MOIS_COURTS.map((m, i) => (
                <th key={i} className="col-month">{m}</th>
              ))}
              <th className="col-total">Total</th>
              <th className="col-action"></th>
            </tr>
          </thead>
          <tbody>
            {categories.map(cat => {
              const collapsed = collapsedCategories[cat.id]
              return (
                <CategoryBlock
                  key={cat.id}
                  cat={cat}
                  collapsed={collapsed}
                  toggleCategory={toggleCategory}
                  data={data}
                  updateCell={updateCell}
                  applyToAllMonths={applyToAllMonths}
                  getTotalLigne={getTotalLigne}
                  getTotalCategorieMois={getTotalCategorieMois}
                  getTotalCategorie={getTotalCategorie}
                  formatMontant={formatMontant}
                  activeOptions={activeOptions}
                  toggleOption={toggleOption}
                  categoryOptionSets={categoryOptionSets}
                  colCount={colCount}
                />
              )
            })}

            <tr className="row-grand-total">
              <td className="sticky-col">TOTAL GÉNÉRAL</td>
              {MOIS_COURTS.map((_, i) => (
                <td key={i}>{formatMontant(getTotalGeneralMois(i))}</td>
              ))}
              <td className="col-total-val">{formatMontant(getTotalGeneral())}</td>
              <td></td>
            </tr>

            <tr className="row-hors-remun">
              <td className="sticky-col">Total hors rémunérations</td>
              {MOIS_COURTS.map((_, i) => (
                <td key={i}>{formatMontant(getTotalHorsRemunerationMois(i))}</td>
              ))}
              <td className="col-total-val">{formatMontant(getTotalHorsRemuneration())}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

function CategoryBlock({
  cat, collapsed, toggleCategory, data, updateCell,
  applyToAllMonths, getTotalLigne, getTotalCategorieMois,
  getTotalCategorie, formatMontant, activeOptions, toggleOption,
  categoryOptionSets, colCount
}) {
  const optionSetsForCat = categoryOptionSets[cat.id] || []

  return (
    <>
      <tr className={`row-category ${cat.estRemuneration ? 'row-category-remun' : ''}`} onClick={() => toggleCategory(cat.id)}>
        <td className="sticky-col cat-label">
          <span className="cat-chevron">
            {collapsed ? <ChevronRight size={14} /> : <ChevronDown size={14} />}
          </span>
          <span className="cat-icon-wrap" style={{ background: cat.color + '18', color: cat.color }}>
            <CategoryIcon name={cat.icon} size={14} color={cat.color} />
          </span>
          <span className="cat-name">{cat.nom}</span>
        </td>
        {MOIS_COURTS.map((_, i) => (
          <td key={i} className="cat-subtotal">{formatMontant(getTotalCategorieMois(cat, i))}</td>
        ))}
        <td className="cat-total">{formatMontant(getTotalCategorie(cat))}</td>
        <td></td>
      </tr>

      {!collapsed && optionSetsForCat.map(os => (
        <OptionToggle
          key={os.id}
          optionSet={os}
          activeOption={activeOptions[os.id]}
          onToggle={toggleOption}
          colSpan={colCount}
        />
      ))}

      {!collapsed && cat.lignes.map(ligne => (
        <tr key={ligne.id} className={`row-item ${cat.estRemuneration ? 'row-item-remun' : ''} ${ligne.injected ? 'row-item-injected' : ''} ${ligne.temporaire ? 'row-item-temporaire' : ''}`}>
          <td className="sticky-col item-label">
            <span className="item-name">{ligne.nom}</span>
            {ligne.ponctuel && <span className="tag-ponctuel">ponctuel</span>}
            {ligne.injected && <span className="tag-option">option</span>}
            {ligne.temporaire && <span className="tag-temporaire">Avr–Juil</span>}
          </td>
          {MOIS_COURTS.map((_, i) => (
            <td key={i} className="cell-td">
              <CellInput
                value={data[ligne.id]?.[i] || 0}
                onChange={(v) => updateCell(ligne.id, i, v)}
                isRemuneration={cat.estRemuneration}
                formatMontant={formatMontant}
              />
            </td>
          ))}
          <td className="item-total">{formatMontant(getTotalLigne(ligne.id))}</td>
          <td className="cell-action">
            <ApplyAllButton
              currentValue={data[ligne.id]?.[0] || 0}
              onApply={(v) => applyToAllMonths(ligne.id, v)}
            />
          </td>
        </tr>
      ))}
    </>
  )
}
