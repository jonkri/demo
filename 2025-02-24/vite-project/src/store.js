import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  actions: {
    increment(n) {
      this.value = this.value + n;
    },
  },
  state: () => ({ name: "JSU24", value: 0 }),
});
