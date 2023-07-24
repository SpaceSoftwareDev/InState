<template>
	<section>
		<component v-if="icon" :is="icon" class="show-icon" />
		<h1 v-html="title"></h1>
		<p>{{ description }}</p>
		<div class="answers">
			<button @click="click(answers.yes?.next)" :disabled="answers.yes?.status">
				{{ answers.yes?.text }}
				<Check class="icon" />
			</button>
			<button class="white" @click="click(answers.no?.next)" :disabled="answers.no?.status">
				{{ answers.no?.text }}
				<Cross class="icon" />
			</button>
		</div>
	</section>
</template>

<script lang="ts" setup>
import { Check, Cross } from "#root/icons"
type Answer = {
	text: string
	next: number | string
	status?: true
}
const props = defineProps<{
	icon?: unknown
	title: string
	description?: string
	answers: { yes: Answer, no: Answer }
}>()

const emit = defineEmits(["submit"])

function click(answer: number | string | undefined) {
	if (answer === undefined) return
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

	&:disabled {
		cursor: not-allowed;
		background-color: gray;
		color: white;
		border: none;
		.icon {
			color: white;
		}
	}
}

.icon {
	font-size: 4rem;
}
h1,
p {
	margin: 0;
	max-width: 1000px;
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
	scale: 1.5;
	margin-bottom: 20px;
}

@media screen and (max-width: 800px) {
	button {
		font-size: 15px !important;
		padding: 12px 12px;
		font-weight: 500;
	}
	.show-icon {
		scale: 1;
		margin-bottom: 0;
	}

	h1,
	p {
		max-width: 90vw;
	}
}
</style>
