<template>
	<button
		class="menu"
		aria-controls="primary-navigation"
		:aria-expanded="open"
		@click="open = !open">
		<svg
			stroke="var(--button-color)"
			fill="none"
			class="hamburger"
			viewBox="-10 -10 120 120"
			width="250">
			<path
				class="line"
				stroke-width="10"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70" />
		</svg>
	</button>

	<button class="chevron red" :aria-expanded="open" @click="open = !open">
		<svg stroke="var(--button-color)" fill="none" viewBox="-10 -10 120 120" width="250">
			<path
				class="line"
				stroke-width="10"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="m 10 40 l 40 20 l 40 -20 l -80 20 l 40 -20 l 40 20" />
		</svg>
	</button>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const open = ref(false)
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
