<template>
	<Simple
		title="Sťahujete sa do zahraničia?"
		description="Máte záujem sa sťahovať do zahraničia, alebo máte v pláne zostat v SR?"
		:answers="{
			yes: {
				text: 'Odsťáhovávam sa preč',
				next: 50,
				status: true
			},
			no: {
				text: 'Zostávam v SR',
				next: 3
			}
		}"
		@submit="next" />
</template>

<script lang="ts" setup>
import Simple from "#/pages/forms/components/Simple.vue"
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
