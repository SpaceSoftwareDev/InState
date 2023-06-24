<template>
	<div class="layout" :class="{ hidden: !show }">
		<nav v-if="show" class="navigation">
			<a href="/" :draggable="false" class="logo"><logo class="logo" /></a>
			<div class="center">
				<button>
					Prihlásiť sa
					<ArrowRight class="icon" />
				</button>
				<button>Reštartovať proces <Loop class="icon" /></button>
			</div>
		</nav>
		<main class="content" ref="content">
			<slot />
		</main>
	</div>
</template>

<script lang="ts" setup>
import { computed } from "vue"
import { ArrowRight, Loop } from "#root/icons"
import logo from "./logo.svg?component"
import { usePageContext } from "./usePageContext"

const ctx = usePageContext()
const show = computed(() => ctx.urlOriginal !== "/")
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
	@apply px-3 py-1.8 rounded-md;
	font-size: 12px;
	margin-right: 10px;

	&:nth-of-type(even) {
		@apply border-blueish border-1 border-solid bg-white text-blueish;

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
</style>
