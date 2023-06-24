<template>
	<div class="card" @click="click" :class="{ disabled }">
		<div class="top">
			<p>{{ title }}</p>
			<component :is="icon" class="show-icon" />
		</div>
		<p class="desc">
			<slot />
		</p>

		<button>Pokračovať <ArrowRight class="icon" /></button>
	</div>
</template>

<script lang="ts" setup>
import { ArrowRight } from "@/icons"
import { navigate } from "vite-plugin-ssr/client/router"

const props = defineProps<{
	icon: unknown
	title: string
	href: string
	disabled?: boolean
}>()

function click() {
	navigate(props.href)
}
</script>

<style lang="scss" scoped>
.card {
	@apply border-solid border-2 border-[#E7E7E9] p-4 flex flex-col rounded-lg m-1 pb-1 relative;
	width: 400px;
	background: white;
	transition: all 750ms ease;
	cursor: pointer;

	&:hover {
		scale: 1.01;
		filter: drop-shadow(10px 5px 20px #0000001b);

		&.disabled {
			scale: 1;
		}
	}

	&.disabled:hover {
		cursor: not-allowed;
		&:before {
			box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
			filter: blur(10px);
		}
	}

	.top {
		@apply flex flex-row items-center justify-between;
		p {
			@apply text-[#121212] font-bold text-2xl;
			margin: 0;
		}

		.show-icon {
			@apply text-blueish;
		}
	}

	.desc {
		height: 80px;
		color: #121212c0;
	}

	button {
		@apply bg-transparent text-blueish w-full text-left text-sm m-0 p-0 justify-start;

		&:hover {
			scale: 1;
		}

		.icon {
			@apply text-blueish text-md;
		}
	}
}
</style>
