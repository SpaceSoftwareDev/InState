<template>
	<div class="layout" :class="{ hidden: !show }">
		<nav v-if="show" class="navigation">
			<a :draggable="false" class="logo"><logo class="logo" /></a>
			<div class="center" v-if="md">
				<button>
					Prihlásiť sa
					<ArrowRight class="icon" />
				</button>
				<button @click="restart">Reštartovať proces <Loop class="icon" /></button>
			</div>
		</nav>
		<main class="content" ref="content">
			<slot />
		</main>
	</div>
</template>

<script lang="ts" setup>
import { computed } from "vue"
import { ArrowRight, Loop } from "@/icons"
import logo from "./logo.svg?component"
import { usePageContext } from "./usePageContext"
import { useBreakpoints, breakpointsTailwind } from "@vueuse/core"
import { navigate } from "vite-plugin-ssr/client/router"
const breakpoints = useBreakpoints(breakpointsTailwind)

const ctx = usePageContext()
const show = computed(() => ctx.urlOriginal !== "/")
const md = breakpoints.greater("sm")

function restart() {
	navigate("/start")
}
</script>

<style lang="scss" scoped>
.layout {
	display: flex;
	flex-direction: column;
	height: 100dvh;
	width: 100%;
	overflow: hidden;
	position: relative;

	&.hidden {
		@apply bg-blueish flex flex-col items-center justify-center;

		.content {
			height: 100%;
		}
	}
}
.content {
	padding: 0 60px;
}

.navigation {
	@apply bg-none py-10 px-[60px] flex flex-row justify-between items-center;
	line-height: 1.8em;
}

.center {
	@apply flex flex-row items-center;
}

.logo {
	width: 200px;
	user-select: none;

	.logo {
		width: 100%;
		margin: 0;
	}
}

button {
	@apply px-5 py-1.2 rounded-md;
	font-size: 16px;
	margin-right: 10px;

	&:nth-of-type(even) {
		@apply border-blueish border-[0.5] border-solid bg-white text-blueish;

		.icon {
			font-size: 20px;
			@apply color-blueish;
		}
	}

	.icon {
		font-size: 20px;
		@apply color-white;
	}
}

@media screen and (max-width: 800px) {
	.content {
		overflow-y: scroll;
		padding-bottom: 1rem;
		padding: 2px;
		height: 1000px;
	}

	.navigation {
		justify-content: center;
		align-items: center;
	}
}

main {
	overflow: auto;
}
</style>
