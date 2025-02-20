<script setup>
import { vBTooltip } from "bootstrap-vue-next";
</script>

<template>
  <BButton title="Hallå där!" variant="primary" v-b-tooltip.bottom>
    Håll muspekaren över knappen
  </BButton>
</template>
