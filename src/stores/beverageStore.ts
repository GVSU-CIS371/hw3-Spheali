import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import { collection, QuerySnapshot, QueryDocumentSnapshot, getDocs } from "firebase/firestore";
import db from "../firebase.ts";
import { BaseBeverageType, CreamerType, SyrupType, BeverageType } from "../types/beverage.ts"

let bases: BaseBeverageType[]
let creamers: CreamerType[]
let syrups: SyrupType[]
let userBev: BeverageType[]
let currentBev: BeverageType

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],
    bases: bases,
    currentBase: bases[0],
    creamers: creamers,
    currentCream: creamers[0],
    syrups: syrups,
    currentSyrup: syrups[0],
    userBev: userBev,
    bevName: "",
    currentBev: currentBev
  }),

  actions: {
    init() {
      getDocs(collection(db, 'bases')).then((qs: QuerySnapshot) => {
        qs.forEach((qd: QueryDocumentSnapshot) => {
          const data = qd.data() as BaseBeverageType;
          this.bases.push(data)
        })
      })
      this.currentBase = this.bases[0]
      getDocs(collection(db, 'creamers')).then((qs: QuerySnapshot) => {
        qs.forEach((qd: QueryDocumentSnapshot) => {
          const data = qd.data() as CreamerType;
          this.creamers.push(data)
        })
      })
      this.currentCream = this.creamers[0]
      getDocs(collection(db, 'syrups')).then((qs: QuerySnapshot) => {
        qs.forEach((qd: QueryDocumentSnapshot) => {
          const data = qd.data() as SyrupType;
          this.syrups.push(data)
        })
      })
      this.currentSyrup = this.syrups[0]
    },
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
