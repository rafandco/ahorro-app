<script setup lang="ts">
import { onMounted } from "vue"
import Chart from "chart.js/auto"

interface Props {
  label: string
  data: { label: string; value: number }[]
  id: string
}
const { label, data, id } = defineProps<Props>()
const barColors: string[] = []

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
  new Chart(id, {
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
      elements: {
        bar: {
          borderRadius: {
            topLeft: 8,
            topRight: 8,
            bottomLeft: 8,
            bottomRight: 8,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
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
