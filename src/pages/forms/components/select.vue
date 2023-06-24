<template>
	<section>
		<Diagram class="icon" />
		<h1>Na aký zámer by ste ju chceli zmeniť?</h1>
		<div class="container">
			<select disabled>
				<option v-for="(option, index) in options" :key="index" :value="option">
					{{ option }}
				</option>
			</select>
			<button @click="navigate('/stahovanie/10')" class="continue">
				Pokračovať<ArrowRight class="icon" />
			</button>
		</div>
	</section>
</template>
<script lang="ts" setup>
import { navigate } from "vite-plugin-ssr/client/router"
import { Diagram, ArrowRight } from "@/icons"
const props = defineProps<{
	title: string
	icon: unknown
	options: string[]
}>()
</script>
<style lang="scss" scoped>
h1 {
	text-align: center;
	font-size: 4rem;
	font-weight: 900;
	margin-top: 0;
}

section {
	@apply flex flex-col justify-center items-center mt-30;
}

.icon {
	font-size: 4rem;
}

.container {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
}
.container * {
	display: inline-flex;
	margin: 10px;
}

select {
	border: 1px solid #e7e7e9;
	border-radius: 2px;
	background: rgb(251, 251, 251);
	background: linear-gradient(150deg, rgba(251, 251, 251, 1) 23%, rgba(242, 242, 242, 1) 85%);
	width: 200px;
	height: 55px;
	@apply text-blueish px-2;

	&:hover {
		cursor: not-allowed;
	}
}

.icon-container {
	display: flex;
	justify-content: center;

	.icon {
		font-size: 3rem;
	}
}

button {
	&.continue {
		font-size: 1rem !important;
		height: min-content;
		width: 200px;
		height: 55px;
	}
}
</style>
