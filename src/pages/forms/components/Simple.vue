<template>
	<section>
		<component v-if="icon" :is="icon" class="icon" />
		<h1>{{ title }}</h1>
		<p>{{ description }}</p>
		<div class="answers">
			<button @click="click(0)">
				{{ answers[0].text }}
				<Icon icon="material-symbols:done" class="icon" />
			</button>
			<button class="white" @click="click(1)">
				{{ answers[1].text }}
				<Icon icon="material-symbols:close" class="icon" />
			</button>
		</div>
	</section>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue"
const props = defineProps<{
	icon?: unknown
	title: string
	description: string
	answers: unknown[]
}>()

const emit = defineEmits(['submit'])

function click(answer) {
	emit('submit', answer)
}
</script>
<style lang="scss" scoped>
section {
	@apply flex flex-col items-center justify-center mt-20 text-center;
}

button {
	font-size: 1rem !important;
	&.white {
		border: 1px solid;
	}

	.icon {
		font-size: 20px;
		margin-right: 0;
		margin-left: 5px;
	}
}

.icon {
	font-size: 4rem;
}
h1,
p {
	margin: 0;
}
p {
	@apply mt-2 color-dark;
	font-size: 1rem;
}
.answers {
	@apply flex mt-12 justify-center;

	button:nth-of-type(even) {
		margin-left: 15px;
	}
}
h1 {
	font-size: 4rem;
	font-weight: 900;
}

@media screen and (max-width: 800px) {
	button {
		font-size: 8px !important;
		padding: 8px 12px;
	}
}
</style>
