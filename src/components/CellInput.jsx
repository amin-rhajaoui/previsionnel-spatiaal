import { useState, useRef, useEffect } from 'react'

export default function CellInput({ value, onChange, isRemuneration, formatMontant }) {
  const [editing, setEditing] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [editing])

  if (editing) {
    return (
      <input
        ref={inputRef}
        type="number"
        className="cell-input"
        defaultValue={value || ''}
        onBlur={(e) => {
          onChange(parseFloat(e.target.value) || 0)
          setEditing(false)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onChange(parseFloat(e.target.value) || 0)
            setEditing(false)
          }
          if (e.key === 'Escape') setEditing(false)
        }}
      />
    )
  }

  const isEmpty = value === 0

  return (
    <div
      className={`cell-display ${isEmpty ? 'cell-empty' : 'cell-filled'} ${isRemuneration && isEmpty ? 'cell-remun-empty' : ''}`}
      onClick={() => setEditing(true)}
    >
      {isEmpty ? (isRemuneration ? '—' : '0') : formatMontant(value)}
    </div>
  )
}
