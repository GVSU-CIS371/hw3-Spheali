import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";
import { BaseBeverageType, CreamerType, SyrupType, BeverageType } from "../types/beverage.ts"

interface BeverageState {
  temps: string[],
  currentTemp: string,
  bases: BaseBeverageType[],
  currentBase: BaseBeverageType,
  creamers: CreamerType[],
  currentCream: CreamerType,
  syrups: SyrupType[],
  currentSyrup: SyrupType,
  userBev: BeverageType[],
  bevName: string,
  currentBev: BeverageType
}

export const useBeverageStore = defineStore("BeverageStore", {
  state: (): BeverageState => ({
    temps: tempretures,
    currentTemp: tempretures[0],
    bases: bases,
    currentBase: bases[0],
    creamers: creamers,
    currentCream: creamers[0],
    syrups: syrups,
    currentSyrup: syrups[0],
    userBev: [],
    bevName: "",
    currentBev: { id: '-1',
      name: "Default",
      temp: tempretures[0],
      base: bases[0],
      syrup: syrups[0],
      creamer: creamers[0] 
    }
  }),

  actions: {
    makeBeverage() {
      if(this.userBev === null) {
        this.userBev = [{
          id: '0',
          name: this.bevName,
          temp: this.currentTemp,
          base: this.currentBase,
          syrup: this.currentSyrup,
          creamer: this.currentCream
        }]
      }
      else {
        this.userBev.push({
          id: this.userBev.length.toString(),
          name: this.bevName,
          temp: this.currentTemp,
          base: this.currentBase,
          syrup: this.currentSyrup,
          creamer: this.currentCream
        })
      }
    },
    showBeverage() {
      this.currentTemp = this.currentBev.temp;
      this.currentBase = this.currentBev.base;
      this.currentCream = this.currentBev.creamer;
      this.currentSyrup = this.currentBev.syrup;
    },
  },
});
