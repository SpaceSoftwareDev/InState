<template>
	<Simple
		title="Chcete zmeniť všeobecného lekára pre dieťa Šimon Tkáč"
		:icon="Pulse"
		:answers="[
			{
				text: 'Áno, chcem',
				next: 'roadmap'
			},
			{
				text: 'Nie, nechcem',
				next: 'roadmap',
				status: true
			}
		]"
		@submit="next" />
</template>

<script lang="ts" setup>
import { Pulse } from "@/icons"
import Simple from "@/pages/forms/components/Simple.vue"
import { navigate } from "vite-plugin-ssr/client/router"

function next(answer: number) {
	navigate(`/stahovanie/${answer}`)
}
</script>

<style lang="scss" scoped>
button {
	border: none;
	border-radius: 5rem;
	background: transparent;
}

.mou {
	@apply bg-blueish;
}

.icon {
	@apply text-dark;
}
</style>
