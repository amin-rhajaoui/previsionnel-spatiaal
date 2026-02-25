// Scénarios d'options pour les associés
// Extensible : ajouter des entrées pour Manon/Jordan plus tard

export const OPTION_SETS = [
  {
    id: 'amin_contrat',
    label: 'Contrat Amin',
    associe: 'Amin',
    targetCategories: ['remuneration', 'vehicule'],
    defaultOption: 'A',
    options: {
      A: {
        shortLabel: 'Temps plein',
        overrides: { salaire_amin: 1802, charges_sociales_amin: 810 },
        injectedLines: [],
        netMensuel: 1406,
        netLabel: 'SMIC dirigeant temps plein',
      },
      B: {
        shortLabel: '30h + Clio 6',
        overrides: { salaire_amin: 1540, charges_sociales_amin: 693 },
        injectedLines: [
          {
            targetCategory: 'vehicule',
            lines: [
              { id: 'leasing_clio6', nom: 'Leasing Clio 6 hybride (Amin)', montantMensuel: 300 },
              { id: 'carburant_clio6', nom: 'Carburant Clio 6 (Amin)', montantMensuel: 100 },
              { id: 'assurance_clio6', nom: 'Assurance Clio 6 (Amin)', montantMensuel: 50 },
            ],
          },
        ],
        netMensuel: 1201,
        netLabel: 'Dirigeant 30h + Clio 6',
      },
    },
  },
]
