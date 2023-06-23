<template>
	<div @click="click" class="link" :class="{ active: isActive }">
		<a>
			<slot />
		</a>
	</div>
</template>

<style lang="scss" scoped>
.link {
	@apply flex items-center justify-center;
	padding: 20px 10px;
	transition: all 500ms ease;
	cursor: pointer;

	a {
		color: rgba(255, 255, 245, 0.86);
		transition: all 500ms ease;
	}

	&:hover a {
		color: rgba(52, 211, 153, 1);
	}

	&.active {
		@apply border-emerald;
		border-bottom-width: 1px;
		border-bottom-style: solid;
	}
}
</style>

<script lang="ts" setup>
import { useAttrs, computed } from "vue"
import { usePageContext } from "./usePageContext"
import { navigate } from "vite-plugin-ssr/client/router"

const pageContext = usePageContext()
const { href } = useAttrs()
const isActive = computed(() => {
	const { urlPathname } = pageContext
	return href === "/" ? urlPathname === href : urlPathname.startsWith(href as string)
})

const click = async () => {
	await navigate(href as string)
}
</script>
