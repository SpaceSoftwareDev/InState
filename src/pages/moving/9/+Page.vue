<template>
	<Select
		title="Na aký zámer by ste ju chceli zmeniť?"
		:icon="School"
		:options="['Gymnázium', 'Bilingválne', 'Elektrotechnické', 'Hospodárske', 'Remeselnícke']"
		@submit="next" />
</template>

<script lang="ts" setup>
import { School } from "@/icons"
import Select from "@/pages/forms/components/select.vue"
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
