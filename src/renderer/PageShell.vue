<template>
	<div class="layout" :class="{ hidden: !show }">
		<nav v-if="show" class="navigation">
			<a href="/" :draggable="false" class="logo">
				<img :src="logo" :draggable="false" />
			</a>
			<div class="center">
				<button>
					Prihlásiť sa
					<Icon icon="material-symbols:arrow-right-alt-rounded" class="icon" />
				</button>
				<button>
					Reštartovať proces <Icon icon="material-symbols:repeat-rounded" class="icon" />
				</button>
			</div>
		</nav>
		<main class="content" ref="content">
			<slot />
		</main>
	</div>
</template>

<script lang="ts" setup>
import { computed } from "vue"
import { Icon } from "@iconify/vue"
import Link from "./Link.vue"
import logo from "./logo.svg"
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
	padding: 0 80px;
}

.navigation {
	@apply bg-none py-10 px-[80px] flex flex-row justify-between items-center;
	line-height: 1.8em;
}

.center {
	@apply flex flex-row items-center;
}

.logo {
	width: 200px;
	margin-left: 5px;
	margin-right: 10px;
	user-select: none;

	img {
		width: 100%;
	}
}

button {
	@apply px-3 py-1.8 rounded-md;
	font-size: 12px;
	margin-right: 10px;

	&:nth-of-type(even) {
		@apply border-blueish border-1 border-solid bg-white text-blueish;
	}

	.icon {
		font-size: 20px;
	}
}
</style>
