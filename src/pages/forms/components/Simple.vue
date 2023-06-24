<template>
	<section>
		<component v-if="icon" :is="icon" class="show-icon" />
		<h1>{{ title }}</h1>
		<p>{{ description }}</p>
		<div class="answers">
			<button @click="click(answers[0].next)">
				{{ answers[0]?.text }}
				<Check class="icon" />
			</button>
			<button class="white" @click="click(answers[1].next)">
				{{ answers[1]?.text }}
				<Cross class="icon" />
			</button>
		</div>
	</section>
</template>

<script lang="ts" setup>
import { Check, Cross } from "#root/icons"
const props = defineProps<{
	icon?: unknown
	title: string
	description?: string
	answers: { text: string; next: number | string }[]
}>()

const emit = defineEmits(["submit"])

function click(answer: number | string) {
	emit("submit", answer)
}
</script>
<style lang="scss" scoped>
section {
	@apply flex flex-col items-center justify-center mt-20 py-2 text-center w-full;
}

button {
	font-size: 1rem !important;
	height: min-content;
	&.white {
		border: 1px solid;
	}

	.icon {
		font-size: 20px;
		margin-right: 0;
		margin-left: 8px;
	}

	&:hover {
		scale: 1.02;
	}
}

.icon {
	font-size: 4rem;
}
h1,
p {
	margin: 0;
	max-width: 800px;
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

.show-icon {
	font-size: 50px;
	scale: 2;
	margin-bottom: 10px;
}

@media screen and (max-width: 800px) {
	button {
		font-size: 8px !important;
		padding: 8px 12px;
	}
}
</style>
