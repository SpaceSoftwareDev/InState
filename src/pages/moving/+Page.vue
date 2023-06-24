<template>
	<form class="mt-10" @submit.prevent="submit">
		<span class="text-lg font-bold" v-text="stepper.current.value.title" />
		<div class="flex flex-col justify-center gap-2 mt-2">
			<div>
			<div v-if="stepper.isCurrent('mou-permission')">
				<img :src="icons.ArrowRight" class="icon" />
				<span>{{ stepper.current.value.description }}</span>
				<button class="mou">Import Data from Mou</button>
			</div>
			<div v-if="stepper.isCurrent('user-information')">
				<span>First name:</span>
				<input v-model="form.firstName" class="!mt-0.5" type="text">
				<span>Last name:</span>
				<input v-model="form.lastName" class="!mt-0.5" type="text">
			</div>
		</div>

		<div v-if="!stepper.isCurrent('mou-permission')">
			<button v-if="!stepper.isLast.value" :disabled="!stepper.current.value.isValid()">
				Next
			</button>
			<button v-if="stepper.isLast.value" :disabled="!stepper.current.value.isValid()">
				Submit
			</button>
		</div>
		</div>
	</form>
</template>

<script lang="ts" setup>
import * as icons from "../../icons"
import { useStepper } from '@vueuse/core'
import { reactive } from 'vue'

const form = reactive({
	firstName: 'Jon',
	lastName: '',
	billingAddress: '',
	contractAccepted: false,
	carbonOffsetting: false,
	payment: 'credit-card' as 'paypal' | 'credit-card',
})

const stepper = useStepper({
	'mou-permission': {
		icon: icons.Upload,
		title: 'Poďme importovať dáta',
		description: 'Po kliknutí na tlačítko nižšie vám budú importované vaše osobné údaje ako napr meno, email, telefónne číslo, bydlisko zo štátnej datábazy MOU (Manažment osobných údajov)',
		isValid: () => form.firstName && form.lastName,
	},
	'user-information': {
		icon: icons.Upload,
		title: 'User information',
		description: 'Po kliknutí na tlačítko nižšie vám budú importované vaše osobné údaje ako napr meno, email, telefónne číslo, bydlisko zo štátnej datábazy MOU (Manažment osobných údajov)',
		isValid: () => form.firstName && form.lastName,
	}
})

function submit() {
if (stepper.current.value.isValid())
	stepper.goToNext()
}

function allStepsBeforeAreValid(index: number): boolean {
return !Array(index)
	.fill(null)
	.some((_, i) => !stepper.at(i)?.isValid())
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
