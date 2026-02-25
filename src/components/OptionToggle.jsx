import { ToggleLeft, ToggleRight } from 'lucide-react'

export default function OptionToggle({ optionSet, activeOption, onToggle, colSpan }) {
  const opts = optionSet.options

  return (
    <tr className="row-option-toggle">
      <td colSpan={colSpan}>
        <div className="option-toggle">
          <span className="option-toggle-label">{optionSet.label}</span>
          <div className="option-toggle-pills">
            {Object.entries(opts).map(([key, opt]) => {
              const isActive = activeOption === key
              return (
                <button
                  key={key}
                  className={`option-btn ${isActive ? 'option-btn-active' : ''}`}
                  onClick={(e) => { e.stopPropagation(); onToggle(optionSet.id, key) }}
                >
                  {isActive ? <ToggleRight size={14} /> : <ToggleLeft size={14} />}
                  <span>{key} — {opt.shortLabel}</span>
                </button>
              )
            })}
          </div>
        </div>
      </td>
    </tr>
  )
}
