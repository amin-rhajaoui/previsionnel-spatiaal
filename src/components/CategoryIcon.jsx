import {
  Building2, Car, Shield, MonitorSmartphone, Cloud,
  Megaphone, FileText, Train, GraduationCap, Wallet,
  Package, Cpu, Zap,
  Smartphone, ScanLine, ShieldCheck, RefreshCw, Crown, Settings
} from 'lucide-react'

const iconMap = {
  Building2, Car, Shield, MonitorSmartphone, Cloud,
  Megaphone, FileText, Train, GraduationCap, Wallet,
  Package, Cpu, Zap,
  Smartphone, ScanLine, ShieldCheck, RefreshCw, Crown, Settings
}

export default function CategoryIcon({ name, size = 16, color }) {
  const Icon = iconMap[name]
  if (!Icon) return null
  return <Icon size={size} color={color} strokeWidth={2} />
}
