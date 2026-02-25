import { WOLTIK_CONFIG } from '../data/woltik'

const { setup, premiumMensuel, standardMensuel, ratioPremium, ratioStandard, moisDebutVente, moisLabels } = WOLTIK_CONFIG

export function calculateScenario(scenario) {
  const rows = []
  let cumulClients = 0
  let totalSetup = 0
  let totalMRR = 0

  for (let i = moisDebutVente; i < 12; i++) {
    const nouveauxClients = i === moisDebutVente
      ? scenario.clientsInitiaux
      : scenario.croissanceMois

    cumulClients += nouveauxClients

    const setupMois = nouveauxClients * setup
    const nbPremium = Math.round(cumulClients * ratioPremium)
    const nbStandard = cumulClients - nbPremium
    const mrrPremium = nbPremium * premiumMensuel
    const mrrStandard = nbStandard * standardMensuel
    const mrrTotal = mrrPremium + mrrStandard
    const caMensuel = setupMois + mrrTotal

    totalSetup += setupMois
    totalMRR += mrrTotal

    rows.push({
      moisIndex: i,
      moisLabel: moisLabels[i],
      nouveauxClients,
      cumulClients,
      setupMois,
      nbPremium,
      nbStandard,
      mrrPremium,
      mrrStandard,
      mrrTotal,
      caMensuel,
    })
  }

  const caTotal = totalSetup + totalMRR
  const dernierMois = rows[rows.length - 1]

  return {
    rows,
    totaux: {
      caTotal,
      totalSetup,
      totalMRR,
      mrrFinal: dernierMois?.mrrTotal || 0,
      clientsFinal: dernierMois?.cumulClients || 0,
    },
  }
}

export function calculateDelegataireRevenue(delegataire) {
  const { faiseurs } = delegataire
  const nbPremium = Math.round(faiseurs * ratioPremium)
  const nbStandard = faiseurs - nbPremium

  const setupTotal = faiseurs * setup
  const mrrMensuel = nbPremium * premiumMensuel + nbStandard * standardMensuel
  const mrrAnnuel = mrrMensuel * 12
  const totalAnnee1 = setupTotal + mrrAnnuel

  return { setupTotal, mrrMensuel, mrrAnnuel, totalAnnee1 }
}
