import { useState } from 'react'
import WoltikHero from './WoltikHero'
import WoltikForecast from './WoltikForecast'
import WoltikPricing from './WoltikPricing'
import WoltikDelegataires from './WoltikDelegataires'
import WoltikAdvantages from './WoltikAdvantages'
import './WoltikPage.css'

export default function WoltikPage() {
  const [activeScenario, setActiveScenario] = useState('realiste')

  return (
    <div className="woltik-page">
      <WoltikHero />
      <WoltikForecast activeScenario={activeScenario} setActiveScenario={setActiveScenario} />
      <WoltikPricing />
      <WoltikDelegataires />
      <WoltikAdvantages />
    </div>
  )
}
