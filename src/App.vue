<template>
  <div>
    <Beverage :isIced="bevStore.currentTemp === 'Cold'" :base="bevStore.currentBase" :cream="bevStore.currentCream" :syrup="bevStore.currentSyrup" />
    <ul>
      <li>
        <template v-for="temp in bevStore.temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="bevStore.currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
    </ul>
    <ul>
      <li>
        <template v-for="base in bevStore.bases" :key="base">
          <label>
            <input
              type="radio"
              name="base"
              :id="base.id"
              :value="base"
              v-model="bevStore.currentBase"
            />
            {{ base.name }}
          </label>
        </template>
      </li>
    </ul>
    <ul>
      <li>
        <template v-for="cream in bevStore.creamers" :key="cream">
          <label>
            <input
              type="radio"
              name="cream"
              :id="cream.id"
              :value="cream"
              v-model="bevStore.currentCream"
            />
            {{ cream.name }}
          </label>
        </template>
      </li>
    </ul>
    <ul>
      <li>
        <template v-for="syrup in bevStore.syrups" :key="syrup">
          <label>
            <input
              type="radio"
              name="syrup"
              :id="syrup.id"
              :value="syrup"
              v-model="bevStore.currentSyrup"
            />
            {{ syrup.name }}
          </label>
        </template>
      </li>
    </ul>
  </div>
  <div id="make_bev">
    <input v-model="bevStore.bevName" type="text" placeholder="Enter Name" ></input>
    <button @click="bevStore.makeBeverage(); bevStore.currentBev = bevStore.userBev[bevStore.userBev.length-1]; bevStore.bevName = ''">Make Beverage</button>
  </div>
  <div id="beverage_container">
    <ul>
      <li>
        <template v-for="bev in bevStore.userBev" :key="bev">
          <label>
            <input
              type="radio"
              name="bev"
              :id="bev.id"
              :value="bev"
              v-model="bevStore.currentBev"
              v-on:click="bevStore.showBeverage()"
            />
            {{ bev.name }}
          </label>
        </template>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";
import { onMounted } from "vue";

const bevStore = useBeverageStore();
onMounted(async () => {
  bevStore.init()
})
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>