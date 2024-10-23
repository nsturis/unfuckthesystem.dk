import { defineStore } from 'pinia'
import type { Periode, Actor } from '~/types/actors'
import type { Sagstype } from '~/types/sag'

export const useMetaStore = defineStore('meta', {
  state: () => ({
    perioder: [] as Periode[],
    currentPeriode: null as Periode | null,
    actors: {} as Record<number, Record<string, Actor[]>>,
    sagstyper: [] as Sagstype[],
    currentSagstype: null as Sagstype | null,
  }),
  actions: {
    setPerioder(perioder: Periode[]) {
      this.perioder = perioder
    },
    setCurrentPeriode(periode: Periode | null) {
      this.currentPeriode = periode
    },
    setActors(periodeId: number, actors: Record<string, Actor[]>) {
      this.actors[periodeId] = actors
    },
    setSagstyper(sagstyper: Sagstype[]) {
      this.sagstyper = sagstyper
    },
    setCurrentSagstype(sagstype: Sagstype | null) {
      this.currentSagstype = sagstype
    },
  },
})