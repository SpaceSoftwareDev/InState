<template>

	<div v-for="(Question, index) in Questions" :key="Question.">
		<Select v-if="Question.type == 'select' && activeQuestion == Question.id" :title="'Lol'" :icon="Upload" :options="['lol', 'kokot']" />
		<Simple v-if="Question.type == 'simple' && activeQuestion == Question.id" :title="'test'" :answers="Question.answers" :icon="Upload" @submit="next"/>
	</div>


</template>

<script lang="ts" setup>
import { Upload } from "@/icons"

import { ref } from "vue"
import { getCurrentInstance } from 'vue'

import Select from "@/pages/forms/components/select.vue"
import Simple from "@/pages/forms/components/simple.vue"

const instance = getCurrentInstance();

const activeQuestion = ref(0)
const Questions = [
	{
		id: 0,
		type: "simple",
		icon: "mdi:account-group",
		title: "Začnime",
		description: "Začnime tým, že si vyberieme, čo chceme robiť.",
		answers: [
			{
				text: "Chcem si vybrať",
				next: 1,
			},
			{
				text: "Neviem si vybrať",
				next: 2,
			},
		],
	},
	{
		id: 1,
		type: "simple",
		icon: "mdi:account-group",
		title: "Začnfrefime",
		description: "Začnime týfrfm, že si vyberieme, čo chceme robiť.",
		answers: [
			{
				text: "Chcem si vybrať",
				next: 1,
			},
			{
				text: "Neviem si vybrať",
				next: 2,
			},
		],
	},
]

function next(answer) {
	let question = Questions[activeQuestion.value]
	activeQuestion.value = question.answers[0].next
	console.log(question.answers[answer].next)
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

.chevron {
	--button-color: #525259ad;
	overflow: hidden;

	.line {
		transition: 1s;
		stroke-dasharray: 90 300;
	}

	&[aria-expanded="true"] {
		.line {
			stroke-dashoffset: -172;
		}
	}
}

.menu {
	--button-color: #525259ad;
	overflow: hidden;

	.hamburger {
		transition: translate 1s, rotate 1s;
	}

	.line {
		transition: 1s;
		stroke-dasharray: 60 31 60 300;
	}

	&[aria-expanded="true"] {
		.hamburger {
			translate: 10px -10px;
			rotate: 0.125turn;
		}

		.line {
			stroke-dasharray: 60 105 60 300;
			stroke-dashoffset: -90;
		}
	}
}
</style>
