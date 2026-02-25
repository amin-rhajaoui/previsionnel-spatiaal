import { useState, useRef, useEffect } from 'react'
import { Copy } from 'lucide-react'

export default function ApplyAllButton({ onApply, currentValue }) {
  const [open, setOpen] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [open])

  if (open) {
    return (
      <input
        ref={inputRef}
        type="number"
        className="apply-input"
        defaultValue={currentValue || ''}
        placeholder="€/mois"
        onBlur={(e) => {
          const v = parseFloat(e.target.value)
          if (!isNaN(v) && v >= 0) onApply(v)
          setOpen(false)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            const v = parseFloat(e.target.value)
            if (!isNaN(v) && v >= 0) onApply(v)
            setOpen(false)
          }
          if (e.key === 'Escape') setOpen(false)
        }}
      />
    )
  }

  return (
    <button
      className="btn-apply"
      onClick={(e) => { e.stopPropagation(); setOpen(true) }}
      title="Appliquer un montant à tous les mois"
    >
      <Copy size={12} />
    </button>
  )
}
