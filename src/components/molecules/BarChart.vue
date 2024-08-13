<script setup lang="ts">
import { onMounted } from "vue"
import Chart from "chart.js/auto"

interface Props {
  label: string
  data: { label: string; value: number }[]
  id: string
}
const { label, data, id } = defineProps<Props>()
const barColors = []

// Establecemos los colores en función de data.value
for (let i = 0; i < data.length; i++) {
  if (data[i].value >= 0) {
    barColors.push("#27fb6bff")
  }
  if (data[i].value < 0) {
    barColors.push("#da2c38ff")
  }
}

onMounted(() => {
  new Chart(document.getElementById(id), {
    type: "bar",
    data: {
      labels: data.map((row) => row.label),
      datasets: [
        {
          label: label,
          data: data.map((row) => row.value),
          backgroundColor: barColors,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: true,
          position: "bottom",
          labels: {
            boxWidth: 20,
            useBorderRadius: true,
            borderRadius: 4,
          },
        },
      },
      borderRadius: {
        topLeft: 8,
        topRight: 8,
        bottomLeft: 8,
        bottomRight: 8,
      },
    },
  })
})
</script>
<template>
  <div>
    <strong>{{ label }}</strong>
    <canvas :id="`${id}`"></canvas>
  </div>
</template>
<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 440px;
  overflow: auto;
  gap: var(--gap);
  padding: var(--padding);
  border-radius: var(--rounded);
  background-color: var(--gray-ultra-light);
}
/* Media query para dispositivos móviles */
@media (max-width: 767px) {
  div {
    width: 328px;
  }
}
</style>
