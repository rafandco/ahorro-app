<script setup lang="ts">
import FormButton from "../atoms/FormButton.astro"

interface Props {
  action: string
  method: string
}

const { action, method } = defineProps<Props>()

async function submit(e: Event) {
  e.preventDefault()
  const formData = new FormData(e.currentTarget as HTMLFormElement)
  const response = await fetch(action, {
    method: method,
    body: formData,
  })
  // Si el servidor responde con una redirección, el navegador la seguirá automáticamente.
  if (response.redirected) {
    window.location.href = response.url
  } else {
    const data = await response.json()
    responseMessage.value = data.message
  }
}
</script>
<template>
  <form @submit="submit">
    <slot />
  </form>
</template>

<style scoped>
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--gap-large);
}

p {
  font-size: 12px;
  font-weight: 600;
  color: var(--white);
  padding: var(--padding);
  background-color: var(--black-bean);
  border-radius: var(--rounded-small);
}
</style>
