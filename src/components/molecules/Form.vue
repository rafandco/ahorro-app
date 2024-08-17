<script setup lang="ts">
import { ref } from "vue"

interface Props {
  action: string
  method: string
}

const { action, method } = defineProps<Props>()

const responseMessage = ref<string>()

async function submit(e: Event) {
  e.preventDefault()
  const formData = new FormData(e.currentTarget as HTMLFormElement)
  const response = await fetch(action, {
    method: method,
    body: formData,
  })
  // Si el servidor responde con una redirección, el navegador la seguirá automáticamente.
  if (response.redirected) {
    window.location.replace(response.url)
  } else {
    const data = await response.json()
    responseMessage.value = data.message
  }
}
</script>
<template>
  <form @submit="submit">
    <p v-if="responseMessage">{{ responseMessage }}</p>
    <slot />
  </form>
</template>

<style scoped>
form {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  gap: var(--gap-large);
}

p {
  font-size: 12px;
  font-weight: 600;
  color: white;
  padding: var(--padding);
  background-color: var(--black-bean);
  border-radius: var(--rounded-small);
}
/* Media query para tablets */
@media (min-width: 768px) and (max-width: 1023px) {
  form {
    width: 75%;
  }
}

/* Media query para dispositivos móviles */
@media (max-width: 767px) {
  form {
    width: 90%;
  }
}
</style>
