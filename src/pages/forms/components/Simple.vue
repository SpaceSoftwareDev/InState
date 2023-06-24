<template>
	<section>
		<component :is="icon" class="icon" />
		<h1>{{ title }}</h1>
		<p>{{ description }}</p>
		<div class="answers">
			<button class="" @click="">
				{{ answer1 }}
				<Icon icon="material-symbols:done" class="" />
			</button>
			<button class="white" @click="">
				{{ answer2 }}
				<Icon icon="material-symbols:close" class="" />
			</button>
		</div>
	</section>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue"
const props = defineProps<{
	icon: unknown
	title: string
	description: string
	answer1: string
	answer2: string
}>()
</script>
<style lang="scss" scoped>
section {
	@apply flex flex-col items-center justify-center mt-20 text-center;
}
button.white {
	@apply bg-white text-blueish border-blueish;
	border: 1px solid;
	border-radius: 8px;
	font-size: 1em;
}
.icon {
	font-size: 4rem;
}
h1,
p {
	margin: 0;
}
p {
	color: rgba(0, 0, 0, 0.8);
	font-size: 1rem;
}
.answers {
	@apply flex mt-10 justify-between w-85;
}
h1 {
	font-size: 4rem;
	font-weight: 900;
}
</style>
