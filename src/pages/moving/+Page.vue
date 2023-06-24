<template>
	<Select :title="'Lol'" :icon="Upload" :options="['lol', 'kokot']"/>
</template>

<script lang="ts" setup>
import { Upload } from "../../icons"

import Select from "../forms/components/select.vue"
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
