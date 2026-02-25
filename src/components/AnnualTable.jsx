import { ChevronDown, ChevronRight } from 'lucide-react'
import CategoryIcon from './CategoryIcon'
import OptionToggle from './OptionToggle'

export default function AnnualTable({
  categories,
  collapsedCategories,
  toggleCategory,
  getTotalLigne,
  getTotalCategorie,
  getTotalGeneral,
  formatMontant,
  activeOptions,
  toggleOption,
  categoryOptionSets,
}) {
  const total = getTotalGeneral()

  return (
    <div className="table-wrapper">
      <table className="prev-table annual-table">
        <thead>
          <tr>
            <th className="col-label">Catégorie</th>
            <th className="col-poste">Poste de dépense</th>
            <th className="col-avg">Mensuel moy.</th>
            <th className="col-total">Total annuel</th>
            <th className="col-pct">%</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(cat => {
            const collapsed = collapsedCategories[cat.id]
            const catTotal = getTotalCategorie(cat)
            const pct = total > 0 ? ((catTotal / total) * 100).toFixed(1) : '0.0'

            return (
              <AnnualCategoryBlock
                key={cat.id}
                cat={cat}
                collapsed={collapsed}
                toggleCategory={toggleCategory}
                getTotalLigne={getTotalLigne}
                catTotal={catTotal}
                total={total}
                pct={pct}
                formatMontant={formatMontant}
                activeOptions={activeOptions}
                toggleOption={toggleOption}
                categoryOptionSets={categoryOptionSets}
              />
            )
          })}

          <tr className="row-grand-total">
            <td colSpan={2}>TOTAL GÉNÉRAL</td>
            <td>{formatMontant(Math.round(total / 12))}</td>
            <td>{formatMontant(total)}</td>
            <td>100%</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function AnnualCategoryBlock({
  cat, collapsed, toggleCategory, getTotalLigne,
  catTotal, total, pct, formatMontant,
  activeOptions, toggleOption, categoryOptionSets
}) {
  const optionSetsForCat = categoryOptionSets[cat.id] || []

  return (
    <>
      <tr className={`row-category ${cat.estRemuneration ? 'row-category-remun' : ''}`} onClick={() => toggleCategory(cat.id)}>
        <td colSpan={2} className="cat-label">
          <span className="cat-chevron">
            {collapsed ? <ChevronRight size={14} /> : <ChevronDown size={14} />}
          </span>
          <span className="cat-icon-wrap" style={{ background: cat.color + '18', color: cat.color }}>
            <CategoryIcon name={cat.icon} size={14} color={cat.color} />
          </span>
          <span className="cat-name">{cat.nom}</span>
        </td>
        <td className="cat-subtotal">{formatMontant(Math.round(catTotal / 12))}</td>
        <td className="cat-total">{formatMontant(catTotal)}</td>
        <td className="cat-pct">{pct}%</td>
      </tr>

      {!collapsed && optionSetsForCat.map(os => (
        <OptionToggle
          key={os.id}
          optionSet={os}
          activeOption={activeOptions[os.id]}
          onToggle={toggleOption}
          colSpan={5}
        />
      ))}

      {!collapsed && cat.lignes.map(ligne => {
        const ligneTotal = getTotalLigne(ligne.id)
        const lignePct = total > 0 ? ((ligneTotal / total) * 100).toFixed(1) : '0.0'
        return (
          <tr key={ligne.id} className={`row-item ${cat.estRemuneration ? 'row-item-remun' : ''} ${ligne.injected ? 'row-item-injected' : ''} ${ligne.temporaire ? 'row-item-temporaire' : ''}`}>
            <td></td>
            <td className="item-label">
              {ligne.nom}
              {ligne.injected && <span className="tag-option">option</span>}
              {ligne.temporaire && <span className="tag-temporaire">Avr–Juil</span>}
            </td>
            <td className="item-avg">{formatMontant(Math.round(ligneTotal / 12))}</td>
            <td className="item-total">{formatMontant(ligneTotal)}</td>
            <td className="item-pct">{lignePct}%</td>
          </tr>
        )
      })}
    </>
  )
}
