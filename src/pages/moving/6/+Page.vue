<template>
	<Simple
		title="Chcete zmeniť školu pre<br/>Šimona Tkáča?"
		description=""
		:icon="School"
		:answers="[
			{
				text: 'Áno, chcem',
				next: 7
			},
			{
				text: 'Nie, nechcem',
				next: 8,
				status: true
			}
		]"
		@submit="next" />
</template>

<script lang="ts" setup>
import { School } from "@/icons"
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

	&:hover svg path {
		outline: none;
		filter: drop-shadow(0px 0px 3px var(--glow, #10b981))
			drop-shadow(0px 0px 1px var(--glow, #10b981));
	}
}

.mou {
	@apply bg-blueish;
}

.icon {
	@apply text-dark;
}
</style>
